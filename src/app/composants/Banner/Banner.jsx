import banner from './../../../assets/banner.jpg'
import './Banner.css'
function Banner() {
  return (
    <div className="banner">
      <img
        src={banner} alt="Image de fond de la banner" className="banner-image"
      />
      <div className="banner-content">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
