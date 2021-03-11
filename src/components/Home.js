import React, { useState } from "react";
import { Jumbotron,Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { database } from "../fire";

const Home = () => {
    const  [name , setName] = useState(null);

    const test = () => {
        const db = database.ref().child("/class");
        db.on("value", snap => {
            const v = snap.val();
            console.log(v);
            setName(v)
            console.log(typeof name);
        })
    }
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Welcome to courses:</h1>
                <p className="ml-8">
                    This website is full of courses for
                    learning different computer languages.
                </p>
                <Container>
                    <ToastContainer />
                    <Link type="button" to="/startjourney" className="button info">
                        Start Journey</Link>
                </Container>
            </Jumbotron>
            <br />
            <br />
            <p className="text-center my-2 bg-info">Thankyou</p>
        </div>
    );
};
export default Home;