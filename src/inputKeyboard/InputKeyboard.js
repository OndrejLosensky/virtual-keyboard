
import React, { useEffect, useRef } from "react";

const InputKeyboard = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Reaguje na vstup z klávesnice
        const focusInput = () => {
            inputRef.current.focus();
        };

        // Reaguje při kliknutí a automaticky zaměří Input pro automatické psaní
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
                className="text-foreColorWhite font-normal w-[50%] flex justify-center text-center outline-none text-xl bg-backColor py-2"
                placeholder="toto je momentálně pro testování"
            />
            <div className="border-b-[1px] border-foreColorWhite w-[50%]"></div>
        </div>
    )
}

export default InputKeyboard;