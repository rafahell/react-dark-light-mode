import React from 'react'
import { Link } from "react-router-dom"
import Connect from '../../store/config/connect';
import './sidebar.css'

const Sidebar = props => {

    return (
        <div className={`sidebar ${props.isToggled ? 'is-active' : ''} ${props.theme === 'light' ? '' : 'change-colour'}`} role="tablist" aria-orientation="vertical">
            <div className={`flex-column sidebar-menu `} role="tablist" aria-orientation="vertical">
                <div className="d-flex account w-100">
                    <div className="account-badge d-flex justify-content-center align-items-center">
                        <span>JS</span>
                    </div>
                    <div className="account-cta d-flex justify-content-center flex-column align-items-left">
                        <span className="username">John Smith</span>
                        <div>
                            <Link to="#">View profile</Link>
                            <span className="divider">|</span>
                            <Link to="#">Logout</Link>
                        </div>
                    </div>
                </div>
                <ul className="nav-menu">
                    <li className=" d-flex align-items-center">Menu 1</li>
                    <li className=" d-flex align-items-center">Menu 2</li>
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = ({ helper }, props) => {
    return {
        ...props,
        ...helper
    };
};

export default Connect(mapStateToProps)(Sidebar);