import React, {useState, useEffect} from "react"
// import MemesData from "../../MemesData"

export default function Meme() {   

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:""
        // PLACEHOLDER randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeData, setAllMemeData] = useState([])

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json()) 
        .then(data => setAllMemeData(data.data.memes))
    },[])

    console.log(allMemeData)


    function GetMemeImageBtn(){
        const randomMeme = Math.floor(Math.random() * allMemeData.length)
        const memeUrl = allMemeData[randomMeme].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl,
            
        }))

        }   
    
    function handleFormDataChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name]: value
            }
        ))
    }

    return (
        <main>
            <form action="">
                <div className="form-inputs">
                    <label>Top text:</label>
                    <input
                        type="text"
                        placeholder="Text here" 
                        name="topText"
                        value={meme.topText}
                        onChange={handleFormDataChange}/>
                </div>
                <div className="form-inputs">
                    <label>Bottom text:</label>
                    <input
                        type="text"
                        placeholder="Text here" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleFormDataChange}/>
                </div>
                <button type="button" onClick={GetMemeImageBtn}className="form-btn">Get a new meme image</button>
            </form>
            <div className="meme">
            {meme.randomImage && <img className="meme-img" src={meme.randomImage} alt="" />}
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
           
        </main>
    )
}
