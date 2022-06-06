import { useEffect, useState } from "react";
import lupa from "../assets/images/lupa.png";
import SearchList from "./SearchList";
import "./Styles/SearchBar.css";

function SearchBar() {
  const [radios, setRadios] = useState([]);
  const [filtro, setFiltro] = useState("");
  let aux = "";
  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3001/radios")
      .then((res) => res.json())
      .then((res) => setRadios(res))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="SearchBar">
      <div className="SearchBar_input">
        <input
          onChange={handleChange}
          className="SearchBar_input-input"
          type="text"
          placeholder="Buscar..."
        />
        <img src={lupa} alt="icono de lupa" />
        <div className="SearchBar_list">
          <SearchList
            radios={radios}
            filtro={filtro}
            filtrados={
              radios.filter((r) => {
                return r.radio.toLowerCase().includes(filtro);
              }) || aux
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
