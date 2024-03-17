import React, {useState} from "react"
import MemesData from "../../MemesData"

export default function Meme() {

    const [memeImg, setMemeImg] = useState("")


    function handleGetMemeBtn(){
        const memesArray = MemesData.data.memes
        // console.log(memesArray)
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        console.log(randomMeme)
        const memeUrl = memesArray[randomMeme].url
        console.log(memeUrl)
        setMemeImg(memeUrl)
        }

    return (
        <main>
            <form action="">
                <div className="form-inputs">
                    <label>Top text:</label>
                    <input
                        type="text"
                        placeholder="Text here" />
                </div>
                <div className="form-inputs">
                    <label>Bottom text:</label>
                    <input
                        type="text"
                        placeholder="Text here" />
                </div>
                <button type="button" onClick={handleGetMemeBtn}className="form-btn">Get a new meme image</button>
            </form>
            <img className="meme-img" src={memeImg} alt="" />
        </main>
    )
}