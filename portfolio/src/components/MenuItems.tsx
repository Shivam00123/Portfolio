"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { menuState } from "../../store/store";

const ListItem = ({
  title,
  selectedMenu,
  setSelectedMenu,
}: {
  title: string;
  selectedMenu: string;
  setSelectedMenu: (item: string) => void;
}) => {
  return (
    <li className="pointer-events-auto">
      <a
        className={`group flex items-center py-3 ${
          selectedMenu === title ? "active" : ""
        }`}
        href={`#${title}`}
        onClick={() => setSelectedMenu(title)}
      >
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {title}
        </span>
      </a>
    </li>
  );
};

const MenuItems = () => {
  const [selectedMenu, setSelectedMenu] = useRecoilState(menuState);
  const menuItems = [
    "about",
    "experience",
    "company projects",
    "personal projects",
  ];
  return (
    <ul className="hidden lg:flex flex-col justify-start items-start w-1/2 text-paragraph cursor-pointer ">
      {menuItems.map((el: string) => (
        <ListItem
          key={el}
          title={el}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      ))}
    </ul>
  );
};

export default MenuItems;
