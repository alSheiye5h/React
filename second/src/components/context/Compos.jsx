import { useState } from "react";


import CompoA from './CompoA'
import CompoB from './CompoB'
import CompoC from './CompoC'
import CompoD from './CompoD'

function Compos() {
   
    return (
        <div className="compos">
        <CompoA>
            <CompoB>
                <CompoC>
                    <CompoD>            
                    </CompoD>
                </CompoC>
            </CompoB>
        </CompoA>
        </div>
    )
}

export default Compos