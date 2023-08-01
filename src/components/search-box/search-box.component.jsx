import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ handleChange, placeholder, typeInput, data }) => {
  const renderSwitch = () => {
    switch (typeInput) {
      case "search":
        return (
          <input
            className="search"
            onChange={handleChange}
            type="search"
            placeholder={placeholder}
          />
        );

      case "select":
        return (
          <select
            className="search"
            name="monsters"
            id="monsters"
            onChange={handleChange}
          >
            <option value="">select one</option>
            {data.map((d) => (
              <option value={d.name}>{d.name}</option>
            ))}
          </select>
        );

      default:
        return (
          <input
            className="search"
            onChange={handleChange}
            type="search"
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <React.Fragment>
      <div>{renderSwitch()}</div>
    </React.Fragment>
  );
};
