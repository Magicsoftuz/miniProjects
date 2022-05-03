import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Header from "./Header";

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
      <Header />
      <div className="ui segment">{router()}</div>
    </div>
  );
};

export default App;
