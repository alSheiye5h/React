import propTypes from 'prop-types'

function ProfWindow({user}) {
    let {img, username, role, bio} = user
    let rendred = 
    <div className="ProfWindow">
        <img src={img} alt="profileImage" className='profileImage' />
        <p className='username'>{username}</p>
        <span className='role'>{role}</span>
        <p className='bio'>{bio}</p>
    </div>

    return ( rendred )
}

ProfWindow.propTypes = {
    user: propTypes.string,
    role: propTypes.string,
    bio: propTypes.string,
}



export default ProfWindow