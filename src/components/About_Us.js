import React from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <Link to="/">Back</Link>
            <h1 className="text-center m-3">
                About Us
            </h1>
            <br />
            <br />
            <p1>
                This website is all about to provide a platform to newly admitted student or
                year-wise (or semester-wise) students to prepare their exams in the better 
                way by taking contents of this application and get some idea regarding exams
                 patterns, notes, etc. And preparing exams, concepts, assignments, projects, 
                 and competitive exams for only computer science students through contents, 
                 pdf’s of notes, study materials, last year question paper etc. These are 
                 all providing in this web-application. In this application, one can demand 
                 or asked for any content material which is not provided yet. And also one 
                 can contribute to this application by providing their notes and study 
                 materials in the pdf format.
            </p1>
            <br />
            <br />
            <p className="text-center my-2 bg-info">Thankyou</p>
        </div>
    );
};
export default AboutUs;