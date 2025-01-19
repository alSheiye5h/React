import { useEffect, useRef, useState } from "react";

function Ref() {

    const [visibleButton, setVisibleButton] = useState(0);

    function choose() {
        let newChoice;
        do {
            newChoice = Math.floor(Math.random() * 4);
        } while (newChoice === visibleButton);

        setVisibleButton(newChoice); 
    }

    function hide(event) {
        event.target.style.display = "none"; 
        choose();
    }

    return (
        <div className="window" style={{ height: "400px", gap: "10px" }}>
            {Array.from({ length: 4 }, (_, index) => (
                <button
                    key={index}
                    className={`buttonRef ref${index + 1}`}
                    style={{ display: visibleButton === index ? "block" : "none" }}
                    onBlur={hide}
                >
                    Click me
                </button>
            ))}
        </div>
    );
}

export default Ref