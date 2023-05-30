import React, { useState } from "react";
import { MdRemove } from "react-icons/md";
import { GoPlus } from "react-icons/go";

function BtnQuestion() {
  const [showText, setShowText] = useState(false);

  const handleToggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="mb-10">
      <button
        className={`bg-primaryGreen text-white w-full h-14 ${
          showText ? "rounded-b-none rounded-t-md" : "rounded-md"
        } flex justify-between items-center px-8`}
        onClick={handleToggleText}
      >
        Cómo usar el tablero de forma efectiva?
        <span className="text-xl font-bold">
          {showText ? <MdRemove /> : <GoPlus />}
        </span>
      </button>
      {showText && (
        <div className="bg-secundaryGreyLight2 p-4 rounded-b-md">
          <p>
            Por defecto, al ingresar a tu tablero de proceso por primera vez, encontrarás 4 columnas predefinidas: Invitaciones, Postulantes, Descartados y Contratados. Cuando las y los profesionales postulan a tu empleo, éstos llegan automáticamente a la columna 'Postulantes'. Ahí podrás filtrar postulantes y moverlos a diferentes fases arrastrándolos, o bien, haciendo click en su tarjeta y seleccionando la opción 'Mover a' y seleccionar la fase a la que deseas moverlos.
          </p>
        </div>
      )}
    </div>
  );
}

export default BtnQuestion;
