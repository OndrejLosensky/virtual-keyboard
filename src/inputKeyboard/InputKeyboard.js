
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
        <div className="flex flex-col justify-center items-center text-center pt-12">
            <input
                ref={inputRef}
                type="text"
                className="text-foreColorWhite outline-none text-2xl bg-backColor py-2"
                placeholder="Zde se zobrazí psaný text"
            />
            <div className="border-b-2 border-foreColorWhite w-[40%]"></div>
        </div>
    )
}

export default InputKeyboard;