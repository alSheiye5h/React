import imgprof from '../assets/images.jpeg'
import Button from './Button'


function Card({name, bio}) {
    return (
        <div className='card'>
            <img className="img1" src={imgprof} alt="" />
            <h1 className="username" >{name}</h1>
            <p>{bio}</p>
            <Button/>
        </div>
    )
}

export default Card