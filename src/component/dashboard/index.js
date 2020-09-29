import React, { Component } from 'react'

class DashboardComponent extends Component {
    render() {
        return (
            <div className="col-12 animated fadeDown">

                {/* start multi dropdown Info */}

                <div className="col-5 col-offset-25 alert-grey">
                    <h1>Welcome to Generic React Dropdown Library <i className="fa fa-info-circle fa-fw"></i></h1>
                    <p><b>1. Created custom Dropdown component which render provided list into dropdown.  </b></p>
                    <p><b>2. Built generic dropdown component without any third party library. </b></p>
                    <p><b>3. Please check dropdown features by click tab from the navbar section. <i className="fa fa-hand-o-up"> </i>  </b></p>
                    <hr />
                    <p><b>Name <i className="fa fa-user fa-fw"></i>  : </b> <b>Balwant Padwal</b></p>
                    <p><b>Email <i className="fa fa-envelope fa-fw"></i> : </b> <b>padwal.balwant@gmail.com</b></p>
                    
                </div>
                {/* end multi dropdown Info */}

            </div>
        )
    }
}

export default DashboardComponent;