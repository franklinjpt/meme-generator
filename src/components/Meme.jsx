import {useEffect, useState} from 'react';

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const dataJson = await res.json()
      setAllMemes(dataJson.data.memes)
    }
    getMemes()
  }, []);
  const handleChange = (event) => {
    const {value, name} = event.target
    setMeme(prevState => (
        {
          ...prevState,
          [name]: value
        }
    ))
  }

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random()*allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevState => (
        {
          ...prevState,
          randomImg: url
        }
    ))
  }

  return(
      <main className="container-meme">
        <div className="container-meme__form">
            <input
                type="text"
                className="container-meme__input"
                placeholder="Top text"
                value={meme.topText}
                name="topText"
                onChange={handleChange}
            />
            <input
                type="text"
                className="container-meme__input"
                placeholder="Bottom text"
                value={meme.bottomText}
                name="bottomText"
                onChange={handleChange}
            />
          <button className="container-meme__button" onClick={handleClick}>Get a new meme image  🖼</button>
        </div>
        <div className="meme">
          <img src={meme.randomImg} className="meme__img" alt="meme"/>
          <h2 className="meme__text top">{meme.topText}</h2>
          <h2 className="meme__text bottom">{meme.bottomText}</h2>
        </div>
      </main>
  )
}