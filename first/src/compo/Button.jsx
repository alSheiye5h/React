import buttonStyle from './button.module.css'

function Button({check}) {

    let styles = {
        padding: "1% 5%",
        color: "rgb(0, 0, 0)",
        border: "0cap",
        outline: "none",
       borderRadius: "10px",
       pointerEvent: check ? "auto" : "none",
       backgroundColor: check ? "rgb(29, 172, 255)" : "rgba(0, 0, 0, 0)",
    }

    return (
        <button  style={styles} className={buttonStyle.button}>Click me</button>
    )
}

export default Button