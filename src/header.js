import './index.css'
import img from './images/trollface.png'

export default function Navbar() {
    return (
        <div className='container'>
            <div className='navbar'>
                <img src={img} />
                <h1>Meme Generator</h1>
            </div>
            <h5>React Course - Project 3</h5>
        </div>
    )
}