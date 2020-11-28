import {  BrowserRouter } from "react-router-dom";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";


import "./css/app.css";

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Content dialogData = {props.dialogData} dialogsMessage={props.dialogsMessage} postsData={props.postsData}/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
