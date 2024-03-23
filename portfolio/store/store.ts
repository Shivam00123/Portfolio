import { atom } from "recoil";
import { GenericObject } from "../interfaces/types";

export const menuState = atom({
  key: "menuState",
  default: "about",
});
