import { Link } from 'react-router-dom'

const GestionCommerciale = () => {
    return (
        <div>
            <h1>Gestion Commerciale</h1>
            <button>
                <Link to="/documents">Documents</Link>
            </button>
            <button>
                <Link to="/produits">Produits</Link>
            </button>
        </div>
    );
}
export default GestionCommerciale;