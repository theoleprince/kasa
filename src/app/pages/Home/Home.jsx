import { useEffect, useState } from "react";
import Banner from "../../composants/Banner/Banner"
import DataService from "../../../_services/Data-service";
import Gallery from "../../composants/Gallery/Gallery";


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

    return (
      <div className="container mt-5">
        <Banner />
        <Gallery logement={data} />
      </div>
    )
  }
  
  export default Home