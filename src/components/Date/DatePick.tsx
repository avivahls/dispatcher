import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DropdownContainer, DropdownHeader } from "../Dropdown/DropdownStyle";
import dateIcon from "../../assets/date.jpg";

const DatePick: FC = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DropdownContainer>
      <DropdownHeader>
        Date
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update: any) => {
            setDateRange(update);
          }}
          isClearable={true}
        />
        <img src={dateIcon} alt="date icon" />
      </DropdownHeader>
    </DropdownContainer>
  );
};
export default DatePick;
