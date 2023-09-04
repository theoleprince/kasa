import Card from '../Card/Card'
import './Gallery.css'
function Gallery({logementList}) {
    console.log(logementList)
  return (
    <div className="content-gallery mt-3">
      <div className="row">
        {logementList.map((logementItem) => 
        <Card key={logementItem.id} logement={logementItem} />
            
        )}
      </div>
    </div>
  )
}

export default Gallery
