import React from "react";

function ButtonKey (params){
    return (
        <div className="text-foreColorWhite">
            <button class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg 
             border-2 border-gray-500 uppercase hover:bg-foreColorWhite hover:text-backColor
             hover:border-2 border-foreColorWhite duration-300"
             >
                {params.text}
            </button>
        </div>
    )
}

export default ButtonKey