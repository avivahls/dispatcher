import axios from "axios";
import { IData } from "../components/Card/CardStyle";
import { newsActions } from "./news-slice";

const URL = "https://newsapi.org/v2/";
const API_KEY = process.env.REACT_APP_API_KEY;
const pageSize = 10;

export const buildUrl = (start: boolean, filters: any, state: any) => {
  let temp = "";
  start
    ? (temp = "?country=us")
    : Object.keys(filters[state.category]).forEach((item: string) => {
        if (filters[state.category][item].length !== 0) {
          const toBeAdded = `${item}=${filters[state.category][item][0]}`;
          temp === ""
            ? (temp = `?${toBeAdded}`)
            : (temp = temp + `&${toBeAdded}`);
        }
      });
  if (state.searchValue !== "") {
    const toAdd = `q=${state.searchValue}`;
    temp !== "" ? (temp = temp + `&${toAdd}`) : (temp = `?${toAdd}`);
  }
  if (state.datesFilters[1]) {
    const toAdd = `from=${state.datesFilters[0]}&to=${state.datesFilters[1]}`;
    temp !== "" ? (temp = temp + `&${toAdd}`) : (temp = `?${toAdd}`);
  }
  return temp;
};
export const getApi = (start: boolean, pageNumber: number) => {
  return (dispatch: any, getState: any) => {
    let arWithTags: IData[] = [];
    const state = getState().news;
    const mainCategory =
      state.category === "everything" ? "everything" : "top-headlines";
    const filters = state.selectedFilters;
    const temp = buildUrl(start, filters, state);
    const sendRequest = async () => {
      const response = await axios.get<any>(
        `${URL}${mainCategory}${temp}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${pageNumber}`
      );

      if (response.status !== 200) {
        throw new Error("Could not fetch news");
      } else {
        dispatch(newsActions.changeLoading(false));
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
