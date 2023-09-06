import { Link } from "react-router-dom"
import './Error.css'

function Error() {
    return (
      <div className="content-flex container-fluid">
        <div className="code-erreur mb-5">404</div>
        <h2 className="mt-5 ">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="link">
        Retourner sur la page d’accueil
        </Link>
      </div>
    )
  }
  
  export default Error