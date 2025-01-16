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
    let [selectdVal, setSelectdVal] = useState("");
    let [radioStateVal, setState] = useState("new");

    function commentChange(event) {
        setComment(event.target.value);
    }

    let postComment = () => {
        if (comment.length <= 0)
            return alert(`post failed: no comment provided`);
        alert(`${comment} has been posted succefully`);
    }

    function changeSelectdVal(event) {
        setSelectdVal(event.target.value)
    }

    function radioState(event) {
        setState(event.target.value)
    }

    let cmntInp = {visibility: comment.length > 0 ? 'visible' : 'Hidden'};
    let cmntInp1 = {visibility: selectdVal.length > 0 ? 'visible' : 'Hidden'};
    
    let cmntShow = comment.length > 0 ? <p style={cmntInp} >Comment show : {comment}</p> : <p style={cmntInp} >dzadz</p>;

    let selectd = selectdVal.length > 0 ? <p style={cmntInp1} >Choosed : {selectdVal}</p> : <p style={cmntInp1} >dzadz</p>;

    let radioP = {
        backgroundColor: radioStateVal === "new" ? "rgb(21, 126, 237)" : "rgb(180, 208, 237)",
        padding: "2px 0px",
        width: "15%",
        textAlign: "center",
        borderRadius: "10px",
        fontWeight: "bold",
        color: radioStateVal === "new" ? "white" : "rgb(49, 49, 49)",
    }

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
            <br /><br />
            {selectd}
            <select name="" onChange={changeSelectdVal} className="selectButton">
                <option value="robust">robust</option>
                <option value="randomly">randomly</option>
                <option value="fether">fether</option>
            </select>
            <br />
            <div className="radioDiv">
                <span>
                    <label htmlFor="new">new</label>
                    <input type="radio" value="new" checked={radioStateVal === "new"} onChange={radioState}/>  
                </span>
                <span>
                    <label htmlFor="old">old</label>
                    <input type="radio" value="old" checked={radioStateVal === "old"} onChange={radioState}/>   
                </span>
            </div>
            <p style={radioP}>{radioStateVal}</p>
        </div>
    )
}

export default YesNoButtons