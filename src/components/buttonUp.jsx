import React from "react";
import { useEffect, useState } from "react";

function BackToTopBtn () {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo ({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTopButton && (
                <button className="fixed z-20 w-12 h-12 bg-white rounded-full cursor-pointer border border-solid border-black right-5 bottom-5 md:right-10 md:bottom-10 md:w-14 md:h-14 hover:bg-[#f3f3f3] transition-all"
                onClick={scrollUp}>
                    <img className="p-3" src="../../iconUp.png" alt="Icon Up"/>
                </button>
            )}
        </>
    )
}


export default BackToTopBtn