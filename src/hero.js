import './index.css'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='flex'>
                <div className='input'>
                    <p>Top text</p>
                    <input placeholder='Shutup'></input>
                </div>
                <div className='input'>
                    <p>Bottom text</p>
                    <input placeholder='And take my money'></input>
                </div>
            </div>
            <button>Get a new meme image  🖼</button>
        </div>
    )
}