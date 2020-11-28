import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

let dialogsData = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Дима" },
    { id: 3, name: "Оля" },
    { id: 4, name: "Коля" },
    { id: 5, name: "Юля" },
  ];
  let dialogsMessage = [
    { id: 1, message: "Yo" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Hi" },
    { id: 4, message: "Ho" },
  ];
  let PostsData = [
    { id: 1, message: "Yo", likesCount: 3, DislikesCount: 233 },
    { id: 2, message: "Hello", likesCount: 13, DislikesCount: 123 },
    { id: 3, message: "Hi", likesCount: 5, DislikesCount: 41 },
    { id: 4, message: "Ho", likesCount: 7, DislikesCount: 53 },
    { id: 4, message: "Yooo", likesCount: 6, DislikesCount: 73 },
    { id: 4, message: "HiHi", likesCount: 1, DislikesCount: 673 },
  ];
ReactDOM.render(<App dialogData = {dialogsData} dialogsMessage={dialogsMessage} postsData ={PostsData}/>, document.getElementById("root"));
