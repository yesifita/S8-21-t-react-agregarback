import { useState } from "react";
import CardJobRecommend from "../Apliccants/CardJobRecommend"

function PostulateCardJobsFilter() {
    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };


    return (
        <div className="bg-secundaryGreyLight border border-secundaryGreyLight2 rounded-xl pb-4" >
            <div className="flex">
                <button
                    onClick={() => handleButtonClick('button1')}
                    className={`bg-${activeButton === 'button1' && 'secundaryViolet'} text-${activeButton === 'button1' && 'white'} text-black w-full h-14 rounded-r-none`}
                >Recomendados para ti
                </button>
                <button
                    onClick={() => handleButtonClick('button2')}
                    className={`bg-${activeButton === 'button2' && 'secundaryViolet'} text-${activeButton === 'button2' && 'white'} text-black w-full h-14 rounded-l-none`}
                >Postulaciones recientes
                </button>
            </div>
    
            {activeButton === 'button1' && (
                <CardJobRecommend/>
            )}
    
            {activeButton === 'button2' && (
                <CardJobRecommend/>
            )}
      </div>
    )
}

export default PostulateCardJobsFilter
