import React from "react";
import { Author } from "./author";

export const author = new Author("psj")
//new 一个Author对象 作为provider的initValue
export const GroupContext = React.createContext(author);

