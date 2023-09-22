import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DataService from '../../../_services/Data-service'
import CarouselLogement from '../../composants/Carousel/Carousel'
import AccordionDetail from '../../composants/DetailLogement/DetailLogement'
import Footer from '../../composants/Footer/Footer'

function Logement() {
  const { id } = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData(id) {
      const fetchedData = await DataService.getDataById(id)
      setData(fetchedData)
    }

    fetchData(id)
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div className="container-fluid mt-5 main-container">
      <div className="content">
        <CarouselLogement logement={data} />
        <AccordionDetail logement={data} />
      </div>
      <Footer />
    </div>
  )
}

export default Logement
