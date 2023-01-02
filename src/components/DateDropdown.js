import React, { useState, useContext } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const DateDropdown = () => {
  const { date, setdate } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const dates = [
    {
      value: "date Range (any)",
    },
    {
      value: "Immediate",
    },
    {
      value: "Within 15 Days",
    },
    {
      value: "Within 30 Days",
    },
    {
      value: "After 30 Days",
    },
  ];
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{date}</div>
          <div className="text-[13px]">Choose Date</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className={"dropdown-menu"}>
        {dates.map((date, index) => {
          return (
            <Menu.Item
              onClick={() => setdate(date.value)}
              className="cursor-pointer hover:text-green-700 transition"
              as="li"
              key={index}
            >
              {date.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default DateDropdown;
