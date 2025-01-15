import propTypes from 'prop-types'

function Language({user}) {

    let languages = user.languages
    let langItems = languages.map((e, index) => {
        return (<li key={index}>{e.name} {"=>"} {e.more}</li>)
    }) 
    
    let rendred = 
    <div className="window">
        <h2 className="Languages">Languages :</h2>
        <ul className="ull">
            {langItems}
        </ul>
    </div>

    return (rendred)
}   


Language.propTypes = {
    user: propTypes.shape({
      languages: propTypes.arrayOf(
        propTypes.shape({
          name: propTypes.string,
          more: propTypes.number
        })
      )
    })
  };

export default Language