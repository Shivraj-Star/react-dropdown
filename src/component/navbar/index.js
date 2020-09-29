import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './index.scss';

class NavbarComponent extends Component {
    render() {
        return (
            <div className="col-10 fc-split navbar animated fadeDown">
                <span className="font-20">
                    <b className="text-white">Generic Dropdown Example</b>
                </span>
                <span>
                <b className="mr-2 "> <NavLink to="/dashboard" activeClassName="selected"> <i className="fa fa-home fa-fw"></i>Dashboard</NavLink></b>
                <b className="mr-2"> <NavLink to="/singleDropdown" activeClassName="selected"><i className="fa fa-user fa-fw"></i> Single Dropdown</NavLink></b>
                <b className="mr-2"> <NavLink to="/multiDropdown" activeClassName="selected"><i className="fa fa-users fa-fw"></i> Multi Dropdown</NavLink></b>
                <b className="mr-2"> <NavLink to="/labelDropdown" activeClassName="selected"><i className="fa fa-tags fa-fw"></i> Label Dropdown</NavLink></b>
                </span>

                <span className="bold pull-right text-white"><i className="fa fa-envelope fa-fw"></i> padwal.balwant@gmail.com</span>
                
            </div>
        )
    }
}

export default NavbarComponent;