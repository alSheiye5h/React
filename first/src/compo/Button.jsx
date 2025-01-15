import buttonStyle from './button.module.css'

function Button() {

    let styles = {
        padding: "1% 5%",
        color: "rgb(0, 0, 0)",
        backgroundColor: "rgb(29, 172, 255)",
        border: "0cap",
        outline: "none",
       borderRadius: "10px",
    }

    return (
        <button style={styles} className={buttonStyle.button}>Click me</button>
    )
}

export default Button