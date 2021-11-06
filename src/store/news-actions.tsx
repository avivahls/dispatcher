import axios from "axios";
import { IData } from "../components/Card/CardStyle";
import { newsActions } from "./news-slice";

const URL = "https://newsapi.org/v2/";
const API_KEY = "15a3d7a95cc648038f11955cbd5b5bf4";
const pageSize = 10;
const page = 1;

export const buildTemp = (start: boolean, filters: any, state: any) => {
  let temp = "";
  if (!start) {
    Object.keys(filters[state.category]).forEach((item: string) => {
      if (filters[state.category][item].length !== 0) {
        if (temp === "") {
          temp = `?${item}=${filters[state.category][item][0]}`;
        } else {
          temp = temp + `&${item}=${filters[state.category][item][0]}`;
        }
      }
    });
  } else {
    temp = "?country=il";
  }
  if (state.searchValue !== "") {
    if (temp !== "") temp = temp + `&q=${state.searchValue}`;
    else temp = `?q=${state.searchValue}`;
  }
  return temp;
};
export const getApi = (start: boolean) => {
  return (dispatch: any, getState: any) => {
    let arWithTags: IData[] = [];
    const state = getState().news;
    const mainCategory =
      state.category === "everything" ? "everything" : "top-headlines";
    const filters = state.selectedFilters;
    const temp = buildTemp(start, filters, state);
    const sendRequest = async () => {
      const response = await axios.get<any>(
        `${URL}${mainCategory}${temp}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`
      );

      if (response.status !== 200) {
        throw new Error("Could not fetch news");
      }
      arWithTags = response.data.articles.map((article: {}) => {
        return { ...article, tags: ["one", "two", "three"] };
      });
      dispatch(newsActions.getNews(arWithTags));
    };
    try {
      sendRequest();
    } catch (e) {
      console.log(e);
    }
    dispatch(newsActions.getNews(arWithTags));
  };
};

export const getSources = () => {
  return (dispatch: any) => {
    let sources: string[] = [];
    const sendRequest = async () => {
      const response = await axios.get<any>(
        `${URL}top-headlines/sources?apiKey=${API_KEY}`
      );

      if (response.status !== 200) {
        throw new Error("Could not fetch news");
      }
      sources = response.data.sources.map((source: any) => {
        return source.name;
      });
      dispatch(newsActions.getSources(sources));
    };
    try {
      sendRequest();
    } catch (e) {
      console.log(e);
    }
    dispatch(newsActions.getSources(sources));
  };
};
