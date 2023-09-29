import React, {useState} from "react";

function ButtonKey (params){


    // Initialize a state variable to store the button value
  const [buttonValue, setButtonValue] = useState('');

  // Function to handle button click
  const handleButtonClick = () => {
    // Set the button value in the state
    setButtonValue('Button Value: Clicked');
    console.log(params.text);
  };

    return (
        <div className="text-foreColorWhite">
            <button class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg border-2 border-gray-500 uppercase hover:bg-foreColorWhite hover:text-backColor hover:border-2 border-foreColorWhite duration-300" onClick={handleButtonClick}>
                {params.text}
            </button>

        </div>
    )
}

export default ButtonKey