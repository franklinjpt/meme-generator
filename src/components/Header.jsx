export default function Header() {
  return(
    <header className="header">
      <div className="header__container-title">
        <img src="/assets/troll-face.svg" alt="troll-face" className="header__logo" />
        <h1 className="header__title">Meme Generator</h1>
      </div>
      <h3 className="header__subtitle">Generate your own memes!</h3>
    </header>
  )
}