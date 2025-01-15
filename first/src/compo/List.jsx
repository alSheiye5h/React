

function List(props) {
    
    let items =  props.items;
    let categorie = props.categorie.length > 0 ? props.categorie : "Cartegorie" ;
    let listElements = items.map((e, index) => {
        return <li key={index}>{e.name} :=: {e.more} </li>
    })

    let style = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    }

    let divStyle = {
        marginLeft: "20px",
    }

    return (
        <div style={divStyle}>
            <h3>{categorie} :</h3>
            <ul style={style} >{listElements}</ul>
        </div>
    )
}

List.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({name: propTypes.string, more: propTypes.oneOfType([propTypes.string, propTypes.number])})), 
}

List.defaultProps = {
    categorie: "Cartegorie",
    items: [],
}

export default List