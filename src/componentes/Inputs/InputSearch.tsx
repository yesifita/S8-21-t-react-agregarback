import { BsSearch } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

export default function InputSearch() {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef(null);

  const SearchIcon = (
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
      <BsSearch />
    </div>
  );

  const handleInputClick = () => {
    setExpanded(true);
  };

  const handleDocumentClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar en preguntas frecuentes"
        className={`h-14 pl-10 pr-6 bg-secundaryGreyLight rounded-xl ${
          expanded ? "w-450" : "w-10"
        }`}
        style={{ transition: "width 0.3s" }}
        onClick={handleInputClick}
      />
      {SearchIcon}
    </div>
  );
}
