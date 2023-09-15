import { Link } from 'react-router-dom'

const GestionCommerciale = () => {
  return (
    <div>
      <h1>Gestion Commerciale</h1>
      <button>
        <Link to="/documents">Documents</Link>
      </button>
      <button>
        <Link to="/documents/1">Document</Link>
      </button>
      <button>
        <Link to="/produits">Produits</Link>
      </button>
      <button>
        <Link to="/produits/1">Produit</Link>
      </button>
      <button>
        <Link to="/tiers/1">Tiers</Link>
      </button>
      <button>
        <Link to="/variant/1">Variant</Link>
      </button>
      <button>
        <Link to="/bundle/1">Bundle</Link>
      </button>
    </div>
  )
}
export default GestionCommerciale
