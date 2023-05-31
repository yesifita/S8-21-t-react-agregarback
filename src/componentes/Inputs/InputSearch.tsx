import React from "react";
import { BsSearch } from "react-icons/bs";

export default function InputSearch() {
  const SearchIcon = (
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <BsSearch />
    </div>
  );

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar en preguntas frecuentes"
        className="h-14 pl-10 pr-6"
        style={{ width: "47rem" }}
      />
      {SearchIcon}
    </div>
  );
}
