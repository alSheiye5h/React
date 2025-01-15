import imgprof from '../assets/images.jpeg'
import Button from './Button'
import propTypes from 'prop-types'



function Card({name, bio, rank, payed}) {
    return (
        <div className='card'>
            <img className="img1" src={imgprof} alt="" />
            <h1 className="username" >{name}</h1>
            <span>{rank}</span>
            <p>{bio}</p>
            <Button check={payed} />
        </div>
    )
}

Card.propTypes = {
    name: propTypes.string.isRequired,
    bio: propTypes.string.isRequired,
    rank: propTypes.number.isRequired,
    payed: propTypes.bool.isRequired,
}

export default Card