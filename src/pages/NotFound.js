import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  )
}
export default NotFound
