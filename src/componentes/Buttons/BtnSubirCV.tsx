import { useState } from "react";



export default function BtnSubirCV() {

    const handleButtonClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.click();
      };

    return (
        <button 
            onClick={handleButtonClick} 
            className="bg-primaryGreen w-48 py-4 text-white rounded-xl"
        >Mejorar Curriculum
        </button>
    )
}
