import React, {useState} from "react"
import MemesData from "../../MemesData"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })


    function handleGetMemeBtn(){
        const memesArray = allMemeData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        const memeUrl = memesArray[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl
        }))
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
            <img className="meme-img" src={meme.randomImage} alt="random meme image" />
        </main>
    )
}