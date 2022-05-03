import React from "react";

const Header = () => {
  return (
    <div className="ui pointing menu">
      <a href="/" className="item active">
        Accordion1
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
  );
};

export default Header;
