import React, { useState } from "react";
import "./main.css";
export default function Search({ setInput }) {
  const [film, setFilm] = useState("");
  return (
    <div className="col-12 col-lg-5 ">
      <form className=" d-flex align-items-end w-100">
        <label>
          <span className="label_text">Filmi başlığa görə axtarın::</span>
          <input
            type="text"
            name="name"
            placeholder="Məsələn, Shawshank Redemption"
            onChange={(e) => setFilm(e.target.value.trim())}
          />
        </label>
        <button
          disabled={!film}
          type="submit"
          className="search_btn"
          onClick={(e) => {
            setInput(film);
            e.preventDefault();
          }}
        >
          Axtar
        </button>
      </form>
    </div>
  );
}
