import "./App.css";
import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

class App extends React.Component {
  render() {
    let date = new Date();
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer year={date.getFullYear()} />
      </div>
    );
  }
}
export default App;
