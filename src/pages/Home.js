import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
            <button>
                <Link to="/login">Login</Link>
            </button>
        </div>
    )
}

export default Home