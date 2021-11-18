import React, { FC, useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DropdownContainer, DropdownHeader } from "../Dropdown/DropdownStyle";
import dateIcon from "../../assets/date.svg";
import { SmallIcon } from "../Button/ButtonStyle";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/news-slice";
import { getApi } from "../../store/news-actions";
import moment from "moment";

const DatePick: FC = () => {
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
        from: moment(start).format("YYYY-MM-DD"),
        to: moment(end).format("YYYY-MM-DD"),
      })
    );
    if (end) {
      dispatch(getApi(false, 1));
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  };
  const toggling = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const renderDate = () => {
    return (
      <DropdownContainer>
        <DropdownHeader onClick={toggling}>
          {endDate ? (
            <p style={{ fontSize: "18px", margin: "0px", padding: "2px" }}>
              {moment(startDate).format("YY/MM/DD")}-
              {moment(endDate).format("YY/MM/DD")}
            </p>
          ) : (
            `Date`
          )}
          <SmallIcon src={dateIcon} alt="date icon" />
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
