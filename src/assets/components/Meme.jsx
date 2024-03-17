import React from "react"
import MemesData from "../../MemesData"

export default function Meme() {

    function handleGetMemeBtn(){
        const memesArray = MemesData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        console.log(randomMeme)
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
        </main>
    )
}