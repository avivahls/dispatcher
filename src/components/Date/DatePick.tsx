import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DropdownContainer, DropdownHeader } from "../Dropdown/DropdownStyle";
import dateIcon from "../../assets/date.svg";
import { SmallIcon } from "../Button/ButtonStyle";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/news-slice";
import { getApi } from "../../store/news-actions";
import moment from "moment";

export interface DatePickProps {
  isDisable: boolean;
}
const DatePick: FC<DatePickProps> = ({ isDisable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date>();
  const dispatch = useDispatch();
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    dispatch(
      newsActions.addDatesFilter({
        from: moment(new Date(start)).format("YYYY-MM-DD"),
        to: moment(new Date(end)).format("YYYY-MM-DD"),
      })
    );
    dispatch(newsActions.setPageNumber(1));
    dispatch(getApi(false));
    if (end) {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  };
  const toggling = () => {
    if (!isDisable) setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const renderDate = () => {
    return (
      <DropdownContainer
        style={{ width: "250px" }}
        isDisable={isDisable}
        isSmall={false}
      >
        <DropdownHeader isDisable={isDisable} onClick={toggling}>
          {endDate ? (
            <p style={{ fontSize: "18px", margin: "0px", padding: "2px" }}>
              {moment(new Date(startDate)).format("DD/MM/YY")}-
              {moment(new Date(endDate)).format("DD/MM/YY")}
            </p>
          ) : (
            `Date`
          )}
          <SmallIcon
            isFiltered={false}
            isSmall={false}
            src={dateIcon}
            alt="date icon"
          />
        </DropdownHeader>
        {isOpen && (
          <DatePicker
            className="datePicker"
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        )}
      </DropdownContainer>
    );
  };

  return renderDate();
};
export default DatePick;
