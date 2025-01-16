


function YesNoButtons() {

    let count = 1;

    let handleNo = () => {
        return count < 3 ? alert(`user refused ${count++} !`) : (alert(`moi j suis enought ${count} !`), count = 1) ;   
    }

    let handleYes = () => {
        alert("user accepted !");
    }

    return (
        <>
        <button className="yesButtons" onClick={handleYes} >Good</button>        
        <button className="NoButtons" onClick={handleNo} >Bad</button>        
        </>
    )
}

export default YesNoButtons