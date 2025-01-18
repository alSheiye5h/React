import { useState } from "react";

import CompoC from "./CompoC";

function CompoB() {
   
    return (
        <div className="compoX compob">
            <p>C:</p>
            <CompoC/>
        </div>
    )
}

export default CompoB