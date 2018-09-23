import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
                    <a className="navbar-brand" href="#"><h1>CRYPTOLYS</h1></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><h4>HOME</h4><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><h4>ABOUT</h4></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><h4>CONTACT</h4></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;