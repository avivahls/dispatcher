import axios from "axios";
import { IData } from "../components/Card/CardStyle";
import { newsActions } from "./news-slice";

const URL = "https://newsapi.org/v2/";
const API_KEY = "15a3d7a95cc648038f11955cbd5b5bf4";

export const getApi = () => {
  return (dispatch: any) => {
    let arWithTags: IData[] = [];
    const sendRequest = async () => {
      const response = await axios.get<any>(
        URL + "top-headlines?country=il&apiKey=" + API_KEY
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
