
import React, { useEffect, useRef } from "react";

const InputKeyboard = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="px-40 flex flex-col justify-center items-center text-center pt-12">
            <input
                ref={inputRef}
                type="text"
                className="text-foreColorWhite outline-none text-2xl bg-backColor"
                placeholder="Zde se zobrazí vámi napsaný text"
            />
            <div className="border-b-2 border-foreColorWhite w-[40%]"></div>
        </div>
    )
}

export default InputKeyboard;