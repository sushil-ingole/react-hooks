import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/'}>useState</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/useEffect'}>useEffect</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/useMemo'}>useMemo</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/useCallback'}>useCallback</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/useContext'}>useContext</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/useRef'}>useRef</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/memo'}>memo</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/useReducer'}>useReducer</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to={'/useImperative'}>useImperative</NavLink></li>
        </div>
    )
}

export default Navbar
