import { useState } from "react";


function Infos() {

    let [age, setAge] = useState(18);
    let [height, setHeight] = useState("169");
    let [email, setEmail] = useState("example@ex.com");
    let [country, setCountry] = useState("worldWide");

    function changeAge(event) {
        setAge(event.target.value)
    }

    function changeHeight(event) {
        setHeight(event.target.value)
    }

    function changeMail(event) {
        setEmail(event.target.value)
    }

    function changeCountry(event) {
        setCountry(event.target.value)
    }

    return (
    <div className="window" >
        <ul>


        </ul>
        <p>UserInfo :</p>
        <p>Age : {age}</p>
        <p>Height : {height}</p>
        <p>mail : {email}</p>
        <p>Country : {country}</p>

        <hr />
        <hr />

        <input type="text" value={age} className="userInps" onChange={changeAge} />
        <input type="text" value={height} className="userInps" onChange={changeHeight} />
        <input type="text" value={email} className="userInps" onChange={changeMail} />
        <input type="text" value={country} className="userInps" onChange={changeCountry} />
    </div>
    )
}

export default Infos