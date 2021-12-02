import axios from "axios";
import { IData } from "../components/Card/CardStyle";
import { newsActions } from "./news-slice";

const URL = "https://newsapi.org/v2/";
const API_KEY = process.env.REACT_APP_API_KEY;
const pageSize = 10;

export const buildUrl = (start: boolean, filters: any, state: any) => {
  let temp = "";
  Object.keys(filters[state.category]).forEach((item: string) => {
    if (filters[state.category][item].length !== 0) {
      const toBeAdded = `${item}=${filters[state.category][item][0]}`;
      temp === "" ? (temp = `?${toBeAdded}`) : (temp = temp + `&${toBeAdded}`);
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
export const getApi = (start: boolean) => {
  return (dispatch: any, getState: any) => {
    if (start) {
      dispatch(newsActions.setIsFirst(true));
    } else {
      dispatch(newsActions.setIsFirst(false));
    }
    let arWithTags: IData[] = [];
    const state = getState().news;
    const mainCategory =
      state.category === "everything" ? "everything" : "top-headlines";
    const filters = state.selectedFilters;
    const sendRequest = async () => {
      const temp = buildUrl(start, filters, state);
      let response;
      try {
        response = await axios.get<any>(
          `${URL}${mainCategory}${temp}${
            temp === "" ? "?" : "&"
          }apiKey=${API_KEY}&pageSize=${pageSize}&page=${state.pageNumber}`
        );
        console.log(temp);
        dispatch(newsActions.changeLoading(false));
        const currentData = response?.data.articles.map((article: {}) => {
          return { ...article };
        });
        dispatch(newsActions.setTotal(response?.data.totalResults));
        if (currentData.length === 0)
          dispatch(newsActions.setMoreDataToScroll(false));
        else {
          dispatch(newsActions.setMoreDataToScroll(true));
        }
        if (state.pageNumber > 1) {
          arWithTags = [...state.data, ...currentData];
        } else {
          arWithTags = currentData;
        }

        dispatch(newsActions.setErrorMessage(""));
        dispatch(newsActions.getNews(arWithTags));
      } catch (e) {
        if (e.response.status === 400) {
          dispatch(
            newsActions.setErrorMessage(
              "Please Add Search Term To See All Articles"
            )
          );
        } else if (e.response.status === 429) {
          dispatch(
            newsActions.setErrorMessage(
              "You Finished Your Requests From NewsApi"
            )
          );
        }
        newsActions.setErrorMessage(
          "You Have Server Error, Please Change The Search"
        );
        dispatch(newsActions.changeLoading(false));
        dispatch(newsActions.setTotal(0));
        dispatch(newsActions.getNews([]));
      }
    };
    try {
      sendRequest();
    } catch (e) {
      dispatch(newsActions.changeLoading(false));
      dispatch(newsActions.getNews([]));
    }
  };
};

export const getSources = () => {
  return (dispatch: any) => {
    let sources: {}[] = [];
    const sendRequest = async () => {
      const response = await axios.get<any>(
        `${URL}top-headlines/sources?apiKey=${API_KEY}`
      );
      if (response.status !== 200) {
        throw new Error("Could not fetch news");
      }
      sources = response.data.sources.map((source: any) => {
        return { id: source.id, value: source.name };
      });
      dispatch(newsActions.getSources(sources));
    };
    try {
      sendRequest();
    } catch (e) {
      console.log("getsources ", e);
    }
  };
};
