import React from "react";
import HomePage from "./pages/homePage/homePage.component";
import { Route } from "react-router-dom";
import "./App.scss";

const TopicList = () => <h1>Topic List Page</h1>;
const TopicDetail = () => <h1>Topic Detail Page</h1>;

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/topic" component={TopicList} />
      <Route path="/topic:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
