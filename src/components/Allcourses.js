import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import Course from "./Course";

const Allcourses = () => {
   
    const [courses, setCourses] = useState([
        { id: 1, title: "Programming with C++", description: "this is demo" },
        { id: 2, title: "Data Structure with C or C++", description: "this is demo too" },
        { id: 3,title: "Operating System", description: "this is demo too" },
        { id: 4, title: "Computer Architecture", description: "this is demo too" },
        { id: 5, title: "Bussiness Economics", description: "this is demo too" },
        { id: 6,title: "Statistics", description: "this is demo too" },
        { id: 7,title: "Maths", description: "this is demo too" },
        { id: 8, title: "Discrete Mathematics", description: "this is demo too" },

    ]);
    return (
        <>
        <div>
            <Link to="/">Back</Link>
        </div>
        <div className="text-center">
                <h1>All Courses</h1>
            <p>Now ,You can get notes, pdf's, last year question paper of all the semester's subjects of 'CS&IT': </p>
            {
                courses.length > 0 ?
                    courses.map((item) => <Course course={item} key={item.id} />) : "No Courses"
            }
            
        </div>
            <div className="text-center">
                <Card>
                    <CardBody>
                        <Link tag="a" to={"/seeMore/"}>see-more</Link>
                    </CardBody>
                </Card>
            </div>
            <br />
            <br />
            <br />
            <p className="text-center my-2 bg-success">Thankyou</p>
        </>   
    );
};
export default Allcourses;