import React from "react";
import {Card} from "reactstrap";

const Course = ({course}) => {
    return (
        <Card><h1>{course.title}</h1>
            <p1>{course.discription}</p1>
        </Card>
                    
         
    );
};
export default Course;