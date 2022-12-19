import React from "react";
import { Author } from "@/pages/groupComponentTest/author";

export const author = new Author("psj")
//new 一个Author对象 作为provider的initValue
export const GroupContext = /*#__PURE__*/React.createContext(
    { author }
);

