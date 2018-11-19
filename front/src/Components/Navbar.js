import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="leftColumnNavbar">
            <ul className="nav flex-column navbar-light menuNav">
                <img
                    src="http://localhost:4000/images/logoNavBar.jpg"
                    alt="Logo"
                    className="logoNavBar"/>
                <div className="containerMenu">
                    <div>
                        <li className="linkNavBar">
                            <Link className="link" to="/">Acceuil</Link>
                        </li>
                    </div>
                    <div>
                        <li className="linkNavBar">
                            <Link to="/bestiaire">Bestiaire</Link>
                        </li>
                    </div>

                    <div>
                        <li className="linkNavBar">
                            <Link to="/vegetal">Vegetal</Link>
                        </li>
                    </div>
                    <div>
                        <li className="linkNavBar">
                            <Link to="/deco">Deco</Link>
                        </li>
                    </div>

                </div>
            </ul>

        </div>

    );
}

export default NavBar;