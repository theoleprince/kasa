import './Banner.css'
function Banner({banner, titre}) {
  return (
    <div className="banner">
      <img
        src={banner} alt="Image de fond de la banner" className="banner-image"
      />
      <div className="banner-content">
        <h1>{titre}</h1>
      </div>
    </div>
  )
}

export default Banner
