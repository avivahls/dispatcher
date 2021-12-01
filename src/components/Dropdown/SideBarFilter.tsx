import { useSelector } from "react-redux";
import { NewsGlobalState } from "../../store/news-slice";
import {
  coutries,
  filtersHeaders,
  languages,
  sortBy,
} from "../../utils/layouts";
import { SideBarFilterStyle } from "../FilterBar/FilterBarStyle";

export interface SideBarFilterProps {
  title: string;
  selected: string;
  isDisable: boolean;
  onClickHandle: () => void;
}

export const SideBarFilter = ({
  title,
  selected,
  isDisable,
  onClickHandle,
}: SideBarFilterProps) => {
  const mainCategory = useSelector(
    (state: NewsGlobalState) => state.news.category
  );
  const filtersOptions = useSelector(
    (state: NewsGlobalState) => state.news.filters
  );
  const getIdOutValue = (title: string, item: any) => {
    switch (title) {
      case "sources":
        return filtersOptions[mainCategory].sources.filter(
          (data: any) => data.id === item.id
        )[0]?.value;
      case "country":
        return coutries.filter((data: any) => data.id === item)[0]?.value;
      case "language":
        return languages.filter((data: any) => data.id === item)[0]?.value;
      case "sortby":
        return sortBy.filter((data: any) => data.id === item)[0]?.value;
      default:
        return item;
    }
  };
  return (
    <SideBarFilterStyle
      selected={false}
      isDisable={isDisable}
      onClick={onClickHandle}
    >
      <p>
        {title === "Search in"
          ? title
          : filtersHeaders.filter((item) => item.id === title)[0]?.value}
      </p>
      {selected === "" ? (
        <p style={{ color: "rgba(90, 90, 137, 0.5)", paddingRight: "10px" }}>
          All
        </p>
      ) : (
        <p style={{ paddingRight: "10px" }}>
          {title === "sources" ? selected : getIdOutValue(title, selected)}
        </p>
      )}
    </SideBarFilterStyle>
  );
};
