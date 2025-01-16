import { useState } from "react";



function YesNoButtons() {

    // let count = 1;

    // let [bad, setBad] = useState("Bad")

    // let handleNo = () => {
    //     return count < 3 ? alert(`user refused ${count++} !`) : (this.textContent = "enoght", count = 1) ;   
    // }

    // let handleYes = () => {
    //     alert("user accepted !");
    // }

    // let handleDoubleNo = () => {
    //     setBad("enought")
    // }

    let [goods, setGoods] = useState(0);
    let [bads, setBads] = useState(0);

    let incrementG = () => {
        setGoods(goods + 1);
    }

    let incrementB = () => {
        setBads(bads + 1);
    }


    let [comment, setComment] = useState("");

    function commentChange(event) {
        setComment(event.target.value)
    }

    let postComment = () => {
        if (comment.length <= 0)
            return alert(`post failed: no comment provided`);
        alert(`${comment} has been posted succefully`);
    }
    
    let cmntShow = comment.length > 0 ? <p className="cmntDiv">Comment show : {comment}</p> : "";

    return (
        <div className="window" style={{width: "fit-content"}}>
            <div className="rateDiv">
                <button className="yesButtons" onClick={incrementG} >Good</button>   
                <p className="counts">{goods}</p>
                <p className="counts">{bads}</p>     
                <button className="NoButtons" onClick={incrementB} >Bad</button>        
            </div>
            <br />
            <br />
            {cmntShow}
            <div className="cmntDiv">
                <input type="text" className="comment" value={comment} onChange={commentChange}/>
                <button className="commentButton" onClick={postComment}>post</button>
            </div>
            <select name="" id="">
                <option value="robust"></option>
                <option value="randomly"></option>
                <option value="fether"></option>


            </select>
        </div>
    )
}

export default YesNoButtons