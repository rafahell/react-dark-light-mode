import React, { useState } from 'react'
import Nav from '../nav/Nav';
import Sidebar from '../sidebar/Sidebar'
import ExampleChart from '../charts/ChartOne'
import Connect from '../../store/config/connect';
import './home.css'

const Home = (props) => {
    const [isToggled, setToggled] = useState(false);

    return (
        <React.Fragment>
            <Nav isToggled={isToggled} setToggled={setToggled} />
            <div className={`${props.theme === 'light' ? '' : 'change-colour'}`} >
                <div className="wrapper">
                    <div className="container is-fluid">
                        <div className="row">
                            <Sidebar isToggled={isToggled} setToggled={setToggled} />

                            <div className="content col">
                                <h1>This month</h1>
                                <ExampleChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = ({ helper }, props) => {
    return {
        ...props,
        ...helper
    };
};

export default Connect(mapStateToProps)(Home);