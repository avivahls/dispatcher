import React, { FC, useEffect, useState } from "react";
import {
  InputStyle,
  SearchAndRecentSmall,
  SmallSearchStyle,
} from "./SearchStyle";
import SmallScreenRecentSearch from "../RecentSearch/SmallRecentSearch";
import Back from "../../assets/back.svg";
import { SideBarIcon } from "../SideBar/SideBarStyle";
import useDebounce from "../../hooks/useDebounce";
import { newsActions } from "../../store/news-slice";
import { getApi } from "../../store/news-actions";
import { useDispatch } from "react-redux";

export interface SmallScreenProps {
  onBackClick: () => void;
}
const SmallSearch: FC<SmallScreenProps> = ({ onBackClick }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsActions.changeSearchValue(debouncedSearchTerm));
    dispatch(getApi(false));
  }, [debouncedSearchTerm, dispatch]);

  return (
    <SearchAndRecentSmall>
      <SmallSearchStyle>
        <SideBarIcon src={Back} onClick={onBackClick} />
        <InputStyle
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setSearchTerm((e.target as HTMLInputElement).value)
          }
        ></InputStyle>
      </SmallSearchStyle>
      <SmallScreenRecentSearch
        items={["dsfsdf", "asdasd", "adasd"]}
      ></SmallScreenRecentSearch>
    </SearchAndRecentSmall>
  );
};
export default SmallSearch;
