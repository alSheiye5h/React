import { Link } from 'react-router-dom'


function Profiles() {

    const profiles = [1, 2, 3, 4, 5];


    return (
        <div className='profiles'>
            {
                profiles.map((prf) =>
                    <Link key={prf} to={`/profiles/${prf}`} >Profile{prf}</Link>
                )
            }
        </div>
    )
}

export default Profiles