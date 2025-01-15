import imgprof from '../assets/images.jpeg'
import Button from './Button'


function Card(user) {
    return (
        <div className='card'>
            <img className="img1" src={imgprof} alt="" />
            <h1 className="username" >alSheiye5h</h1>
            <p>just making a card component that it, yaeni ma fama haja</p>
            <Button/>
        </div>
    )
}

export default Card