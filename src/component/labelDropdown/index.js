import React, { useContext } from 'react'
import Dropdown from '../../lib/dropdown/Dropdown';
import UserContext from '../../context'

function LabelDropdown() {
    // We fetch User Info from the context API
    const { users } = useContext(UserContext);

    return (
        <div className="col-10 animated fadeDown">
            {/* start label dropdown Info */}
            <div className="col-5 col-offset-25 alert-grey">
                <h1>Welcome to Label Selected Dropdown <i className="fa fa-tags fa-fw"></i></h1>
                <p><b>1. Created custom Dropdown component which render provided list into dropdown.  </b></p>
                <p><b>2. Built generic dropdown component without any third party library.  </b></p>
                <hr />
                <p><b>Generic lib Name : </b> <b>Dropdown</b></p>
                <p><b>placeholder : </b> <b>'Select User'</b> <small className="bold">(dropdown placeholder)</small></p>
                <p><b>list : </b> <b>Need to User list</b></p>
                <p><b>multiSelect : </b> <b> true</b></p>
                <p><b>isLabel : </b> <b> true</b></p>
            </div>
            {/* end label dropdown Info */}

            <div className="col-5 col-offset-25">
                {/* start single dropdown */}
                <div className="col-10 alert-grey bold">Single User Dropdown</div>
                <div className="col-10 mb-20">
                    <Dropdown placeholder="Select User" list={users} isLabel="true" />
                </div>
                {/* end single dropdown */}

                {/* start multi dropdown */}
                <div className="col-10 alert-grey bold">Multi User Example</div>
                <div className="col-10">
                    <Dropdown placeholder="Select User" list={users} multiSelect="true" isLabel="true" />
                </div>
                {/* end multi dropdown */}

            </div>
        </div>
    )
}

export default LabelDropdown;
