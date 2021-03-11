import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menu = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action"
                tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action"
                tag="a" to="/view-courses" action>All Courses</Link>
            <Link className="list-group-item list-group-item-action"
                tag="a" to="/Add_Details" action>Add Details</Link>
            <Link className="list-group-item list-group-item-action"
                tag="a" to="/About_Us" action>About Us</Link>
            <Link className="list-group-item list-group-item-action"
                tag="a" to="/Contact_Info" action>Contact Info</Link>
        </ListGroup>
    );
};
export default Menu;