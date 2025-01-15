import buttonStyle from './button.module.css'

function Button({check}) {

    let cont = {
        pointerEvent: "auto",
        backgroundColor: "rgb(29, 172, 255)" ,
    };
    let disCont = {
        pointerEvent: "none",
        backgroundColor: "rgba(29, 172, 255, 0.5)",
    };

    let continu = <button  style={cont} className={buttonStyle.button}>Continue</button>;
    let disContinu = <button  style={disCont} className={buttonStyle.button}>Continue</button>;

    return (
        check ? continu : disContinu
    )
}

export default Button