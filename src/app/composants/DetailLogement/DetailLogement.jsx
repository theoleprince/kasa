import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import './DetailLogement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function AccordionDetail({ logement }) {
  const [inputValue, handleClick] = useState(true)
  const [inputValue2, handleClick2] = useState(true)
  const ratings = [1, 2, 3, 4, 5];
  console.log(logement)
  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-md-8" align="start">
          <div className="row">
            <div className="col-md-12 color-red line-height">
                <h3>{logement.title}</h3>
                <span>{logement.location}</span>
            </div>
            <div className="col-md-12 content-chips mt-3">
                {logement.tags.map((tag) => 
                <div className="chips" key={tag}>{tag}</div>)}
            </div>
          </div>
        </div>
        <div className="col-md-4" align="end">
        <div className="row">
            <div className="col-md-12 color-red flex-right">
                <h5>{logement.host.name}</h5>
                <div className="rond"><img src={logement.host.picture} alt={logement.host.name} /></div>
            </div>
            <div className="col-md-12 mt-4" align="end">
            {ratings.map((tag) => tag > logement.rating ? (
                <FontAwesomeIcon className="color-grid font-size" key={tag} icon={faStar} />
            ) : <FontAwesomeIcon className="color-red font-size" key={tag} icon={faStar} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 row">
        <Accordion className="col-md-6" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header
              onClick={() =>
                inputValue === true ? handleClick(false) : handleClick(true)
              }
            >
              <div className="bg-color-equipement">
                <div>Description </div>
                <div>
                  {inputValue === true ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="body-item">
              {logement.description}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className="col-md-6" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header
              onClick={() =>
                inputValue2 === true ? handleClick2(false) : handleClick2(true)
              }
            >
              <div className="bg-color-equipement">
                <div>Equipements </div>
                <div>
                  {inputValue2 === true ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="body-item">
              <ul className="no-bullet">
                {logement.equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default AccordionDetail
