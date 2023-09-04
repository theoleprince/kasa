import PropTypes from 'prop-types'
import './Card.css'
import { Link } from 'react-router-dom'


function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="nav-link col-md-4">
                   <div className=" card-body card-dimension  card-bg">
        
        <img
          src={logement.cover}
          alt={logement.title}
          className="img"
        />
        <div className="titre-card">
        <h6>{logement.title}</h6>
        <p>{logement.location}</p>
        </div>
      </div>
    </Link>
 
  )
}

// Card.propTypes = {
//     label: PropTypes.string,
//     title: PropTypes.string.isRequired,
//     picture: PropTypes.string
// }

export default Card
