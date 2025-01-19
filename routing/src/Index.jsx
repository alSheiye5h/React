import { Link } from 'react-router-dom'



function Index() {

    return (
        <div className="index">
            <ul>
                <Link to="/profiles" >profiles</Link>
            </ul>
        </div>
    )
}

export default Index