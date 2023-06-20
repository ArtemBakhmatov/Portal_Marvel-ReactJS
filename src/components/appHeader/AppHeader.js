import {Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to='/'>
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                <li>
                    <NavLink 
                        style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                        to="/"
                    >   
                        Characters
                    </NavLink>
                </li>
                    /
                <li>
                    <NavLink 
                        end 
                        style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                        to="/comics"
                    >
                        Comics
                    </NavLink>
                </li>
                    /
                <li>
                    <Link 
                        target='_blank'
                        to="https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0"
                    >
                        API
                    </Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;