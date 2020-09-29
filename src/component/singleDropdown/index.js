import React, { useContext } from 'react'
import Dropdown from '../../lib/dropdown/Dropdown';
import UserContext from '../../context'

function SingleDropDownComponent() {
    
    // We fetch User Info from the context API
    const { users } = useContext(UserContext);

    return (
        <div className="col-10 animated fadeDown">
            {/* start single dropdown Info */}

            <div className="col-5 col-offset-25 alert-grey">
                <h1>Welcome to Single Selected Dropdown <i className="fa fa-info-circle fa-fw"></i></h1>
                <p><b>1. Created custom Dropdown component which render provided list into dropdown.  </b></p>
                <p><b>2. Built generic dropdown component without any third party library.  </b></p>
                <hr />
                <p><b>Generic lib Name : </b> <b>Dropdown</b></p>
                <p><b>placeholder : </b> <b>'Select User'</b> <small className="bold">(dropdown placeholder)</small></p>
                <p><b>list : </b> <b>Need to User list</b></p>
            </div>
            {/* end single dropdown Info */}

            {/* start custom dropdown component */}
            <div className="col-5 col-offset-25">
                <Dropdown placeholder="Select User" list={users} />
            </div>
            {/* end custom dropdown component */}

        </div>
    )
}

export default SingleDropDownComponent;