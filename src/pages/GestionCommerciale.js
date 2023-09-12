import { Link } from 'react-router-dom'

function GestionCommerciale() {
  return (
    <div>
      <h1>Gestion Commerciale</h1>
      <button>
        <Link to="/documents">Documents</Link>
      </button>
      <button>
        <Link to="/documents/detail">Détail document</Link>
      </button>
      <button>
        <Link to="/produits">Produits</Link>
      </button>
      <button>
        <Link to="/produits/detail">Détail produit</Link>
      </button>
      <button>
        <Link to="/tiers/detail">Détail tiers</Link>
      </button>
    </div>
  )
}
export default GestionCommerciale
