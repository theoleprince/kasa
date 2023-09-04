import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import DataService from "../../../_services/Data-service";
import CarouselLogement from '../../composants/Carousel/Carousel';

function Logement() {
    const { id } = useParams()
    
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData(id) {
        const fetchedData = await DataService.getDataById(id);
        setData(fetchedData);
      }
  
      fetchData(id);
    }, []);
  
    if (!data) {
      return <p>Loading...</p>;
    }

    return (
        <div className="container-fluid mt-5">
        <CarouselLogement logement={data} />
        {/* <Gallery logementList={data.data} /> */}
      </div>
    )
  }
  
  export default Logement