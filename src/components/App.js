import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const dataAccordion = [
  { savol: "Qalay", javob: "zur" },
  { savol: "Qalay", javob: "zur" },
  { savol: "Qalay", javob: "zur" },
  { savol: "Qalay", javob: "zur" },
];
const dataDropdown = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];
const fakeFunc = (a) => {
  console.log(a);
};

const router = () => {
  if (window.location.pathname == "/search") {
    return <Search />;
  } else if (window.location.pathname == "/translate") {
    return <Translate />;
  } else if (window.location.pathname == "/dropdown") {
    return <Dropdown getData={fakeFunc} data={dataDropdown} label="Dropdown" />;
  } else if (window.location.pathname == "/") {
    return <Accordion data={dataAccordion} />;
  }
};

const App = () => {
  return (
    <div className="ui container">
      <div className="ui pointing menu">
        <a href="/" className="item active">
          Accordion
        </a>
        <a href="/dropdown" className="item">
          Dropdown
        </a>
        <a href="/search" className="item">
          Search Wiki
        </a>
        <a href="/translate" className="item">
          Google Translate
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment">{router()}</div>
    </div>
  );
};

export default App;
