import propTypes from 'prop-types'

function ProfWindow({user}) {
    let {img, username, role, bio, contributions} = user
    let rendred = 
    <div className="window">
        <img src={img} alt="profileImage" className='profileImage' />
        <p className='username'>{username}</p>
        <span className='role'>{role}</span>
        <p className='bio'>{bio}</p>
        <span className='contributions'>{contributions}</span>

    </div>

    return ( rendred )
}

ProfWindow.propTypes = {
    user: {
    username: propTypes.string,
    role: propTypes.string,
    bio: propTypes.string,
    contributions: propTypes.number,    
    }
}

ProfWindow.defaultProps = {
    user: {
        username: "Guest",
        role: "member",
        bio: "no bio, yet",
        contributions: 0,   
    }
}



export default ProfWindow