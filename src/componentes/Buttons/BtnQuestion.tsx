import { useState } from "react";
import { MdRemove } from "react-icons/md";
import { GoPlus } from "react-icons/go";

function BtnQuestion({question, answer}) {
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
        {question}
        <span className="text-xl font-bold">
          {showText ? <MdRemove /> : <GoPlus />}
        </span>
      </button>
      {showText && (
        <div className="bg-secundaryGreyLight2 p-4 rounded-b-md">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default BtnQuestion;
