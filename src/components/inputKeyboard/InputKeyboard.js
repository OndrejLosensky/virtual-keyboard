import React, { useEffect, useRef } from "react";

const InputKeyboard = ({ inputValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const focusInput = () => {
      inputRef.current.focus();
    };

    document.addEventListener("click", focusInput);

    return () => {
      document.removeEventListener("click", focusInput);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center pt-8">
      <input
        ref={inputRef}
        type="text"
        className="text-foreColorWhite font-semibold w-[50%] placeholder:text-foreColorWhite placeholder:uppercase placeholder:font-semibold flex justify-center text-center outline-none text-xl bg-backColor py-2"
        placeholder="Stiskem začnete psát..."
        defaultValue= {inputValue}

      />
     {/*<div className="border-b-[1px] border-foreColorWhite w-[50%]"></div>*/}
    </div>
  );
};

export default InputKeyboard;