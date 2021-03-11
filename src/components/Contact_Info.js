import React from "react";
import { Link } from "react-router-dom";


const ContactInfo = () => {
    return (
        <div>
            <Link to="/">Back</Link>
            <br />
            <h1 className="text-center m-3">
                Contact Info
            </h1>
            <br/>
            <p1 className="font-weight-bold">
                Contact No :
            </p1>
            <p2 className="my-2 bg-warning">
                8423281096
            </p2>
            <br />
            <br />
            <br />
            <p3 className="font-weight-bold">
                Email Id:
            </p3>
            <p4 className="my-2 bg-warning">
                satyanshu2301@gmail.com
            </p4>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="text-center my-2 bg-info">Thankyou for visiting</p>
        </div>
    );
};
export default ContactInfo;