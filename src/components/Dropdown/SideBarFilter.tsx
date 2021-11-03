import { SideBarFilterStyle } from "../FilterBar/FilterBarStyle";

export interface SideBarFilterProps {
  title: string;
  selected: string;
  onClickHandle: () => void;
}

export const SideBarFilter = ({
  title,
  selected,
  onClickHandle,
}: SideBarFilterProps) => {
  return (
    <SideBarFilterStyle onClick={onClickHandle}>
      <p>{title}</p>
      {selected === "" ? <p>All</p> : <p>{selected}</p>}
    </SideBarFilterStyle>
  );
};
