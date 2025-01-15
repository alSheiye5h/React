

function List() {
    let list = [
        {id: 1, lang: "html, css", rank: 50},
        {id: 2, lang: "js", rank: 60},
        {id: 3, lang: "python", rank: 55},
        {id: 4, lang: "rust", rank: 49},
        {id: 5, lang: "C", rank: 20},
    ];

    let listElements = list.map((e) => {
        return <li key={e.id}>{e.lang} :: {e.rank} </li>
    })

    return (
        <ul>{listElements}</ul>
    )
}

export default List