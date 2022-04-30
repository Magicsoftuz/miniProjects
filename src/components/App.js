import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Drowdown from "./Dropdown";

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

const App = () => {
  return <Drowdown data={dataDropdown} />;
};

export default App;
