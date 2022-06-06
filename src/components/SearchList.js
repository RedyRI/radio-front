import React from "react";
import { Link } from "react-router-dom";
import "./Styles/SearchList.css";
function SearchList({ filtrados }) {
  return (
    <div className="SearchList">
      <ul>
        {filtrados.map((radio) => {
          return (
            <li key={radio.id}>
              <Link to={radio.to}>
                <img src={radio.img} alt={`logo de radio ${radio.radio}`} />
                {radio.radio}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchList;
