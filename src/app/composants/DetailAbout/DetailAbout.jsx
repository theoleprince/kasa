import Accordion from 'react-bootstrap/Accordion'
import './DetailAbout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function DetailAbout() {
    const abouts = [
        {
            id: 1,
            nom: 'Fiabilité',
            description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        },
        {
            id: 2,
            nom: 'Respect',
            description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },
        {
            id: 3,
            nom: 'Service',
            description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            id: 4,
            nom: 'Sécurité',
            description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
    ]
    const [openedAccordions, setOpenedAccordions] = useState([]);

    const toggleAccordion = (key) => {
      if (openedAccordions.includes(key)) {
        setOpenedAccordions(openedAccordions.filter((accordion) => accordion !== key));
      } else {
        setOpenedAccordions([...openedAccordions, key]);
      }
    };
  
    return (
      <div className="mt-5 row">
        {abouts.map((item) => (
          <div className="col-md-12" key={item.id}>
            <div
              className="bg-color-equipement accordion-button d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href={`#aboutCollapse${item.id}`}
              role="button"
              aria-expanded="false"
              aria-controls={`aboutCollapse${item.id}`}
              onClick={() => toggleAccordion(item.id)}
            >
              <div>{item.nom}</div>
              <div>
                {openedAccordions.includes(item.id) ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </div>
            </div>
            {openedAccordions.includes(item.id) ? (
              <div className="collapse show" id={`aboutCollapse${item.id}`}>
                <div className="body-item1">{item.description}</div>
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    )
  ;
  }
  
  export default DetailAbout;
