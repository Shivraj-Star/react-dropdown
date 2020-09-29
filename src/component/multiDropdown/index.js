import React, { useContext } from 'react'
import Dropdown from '../../lib/dropdown/Dropdown';
import UserContext from '../../context';

function MultiDropDownComponent() {
    
    // We fetch User Info from the context API
    const { users } = useContext(UserContext);

    return (
        <div className="col-10 animated fadeDown">
            {/* start multi dropdown Info */}
            
            <div className="col-5 col-offset-25 alert-grey">
                <h1>Welcome to Multi Selected Dropdown <i className="fa fa-info-circle fa-fw"></i></h1>
                <p><b>1. Created custom Dropdown component which render provided list into dropdown.  </b></p>
                <p><b>2. Built generic dropdown component without any third party library.  </b></p>
                <hr />
                <p><b>Generic lib Name : </b> <b>Dropdown</b></p>
                <p><b>placeholder : </b> <b>'Select User'</b> <small className="bold">(dropdown placeholder)</small></p>
                <p><b>list : </b> <b>Need to User list</b></p>
                <p><b>multiSelect : </b> <b> true</b></p>
            </div>
            {/* end multi dropdown Info */}


            <div className="col-5 col-offset-25">
                <div className="col-10 alert-grey bold">Dropdown 1 Example</div>
                <div className="col-10 mb-20">
                    <Dropdown placeholder="Select User" list={users} multiSelect="true" />
                </div>

                <div className="col-10 alert-grey bold">Dropdown 2 Example</div>
                <div className="col-10">
                    <Dropdown placeholder="Select User" list={users} multiSelect="true" />
                </div>
            </div>
        </div>
    )
}

export default MultiDropDownComponent;
