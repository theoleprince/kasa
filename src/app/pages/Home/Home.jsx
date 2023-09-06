import { useEffect, useState } from "react";
import Banner from "../../composants/Banner/Banner"
import DataService from "../../../_services/Data-service";
import Gallery from "../../composants/Gallery/Gallery";
import Footer from "../../composants/Footer/Footer";
import banner from './../../../assets/banner.jpg';
import './Home.css';


function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await DataService.getData();
      setData(fetchedData);
    }

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  const title = 'Chez vous, partout et ailleurs'

    return (
      <div className="container-fluid mt-5 main-container">
        <div className="content">
        <Banner banner={banner} titre={title} />
        <Gallery logementList={data.data} />
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Home