import React from 'react'
import { Link } from "react-router-dom"
import { SetTheme } from '../../store/helper';
import Connect from '../../store/config/connect';
import 'bulma/css/bulma.css'
import './nav.css'

const Nav = props => {

    const toggleTheme = () => {
        props.dispatch(SetTheme(props.theme === 'light' ? 'dark' : 'light'));
    }

    return (
        <React.Fragment>
            <div className={`${props.theme === 'light' ? '' : 'change-colour'} theme-button `}>
                <button className="button is-link " onClick={toggleTheme}>{`${props.theme === 'light' ? 'Dark Theme' : 'Light Theme'}`}</button>
            </div>
            <nav className={`navbar flex-column ${props.theme === 'light' ? '' : 'change-colour'}`} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <button
                        onClick={() => { props.setToggled(!props.isToggled); }} type="button"
                        className={`navbar-burger ${props.isToggled ? 'is-active' : ''}`} aria-label="menu" aria-expanded={props.isToggled}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>

                    <Link to="/">
                        <div className="navbar-item" href="/">
                            <img src="https://placehold.co/65x44" alt="" width="65" height="44" />
                        </div>
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    )
}

const mapStateToProps = ({ helper }, props) => {
    return {
        ...props,
        ...helper
    };
};

export default Connect(mapStateToProps)(Nav);