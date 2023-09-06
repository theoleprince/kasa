import Banner from '../../composants/Banner/Banner'
import DetailAbout from '../../composants/DetailAbout/DetailAbout';
import Footer from '../../composants/Footer/Footer';
import banner2 from './../../../assets/banner2.png';
import './About.css'
function About() {
const title = '';
  return (
    <div className="container-fluid mt-5 main-container">
    <div className="content">
    <Banner banner={banner2} titre={title} />
    <DetailAbout />
    </div>
    <Footer />
  </div>
  )
}

export default About