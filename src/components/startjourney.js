import React from "react";
import { Link } from "react-router-dom";

const startjourney = () => {
    return (
        <div>
             <Link to="/">Back</Link>
            <h1 className="text-center my-3">
                Introduction
            </h1>
            <br />
            <br />
            <p1>
                This application is based on real time,
                which is prepared by using different languages: HTML, CSS, 
                and JavaScript. And for web framework React is used.
                This is all about preparing exams, concepts, assignments, 
                projects, and competitive exams for only computer science 
                students through contents, pdf’s of notes, study materials, 
                last year question paper etc. These are all providing in this 
                web-application. In this application, one can demand or asked 
                for any content material which is not provided yet. 
                And also one can contribute to this application by providing 
                their notes and study materials. And the best thing is that the 
                notes, pdf’s, study materials, all are contributed by the x-students
                (seniors) of the college, and this cycle goes on. Then after some 
                year, application have lots of different quality contents. 
                Which is prepared & contributed by the X-students (seniors) so the 
                content is in full of quality.       
            </p1>
             <h1 className="text-center my-3">
                How to use this website?
            </h1>
            <br />
            <br />
            <p1>Whenever the website is loaded a default page is open the right section 
            and URL will update with the moving of the page. In the home page, this page
             welcomes the user and a short intro of this website and a button link ‘start
              journey’ is given below the intro then u can enter this and then the next 
              page with URL update and this section show the full details of this website
               i.e. what is purpose of the website, how it is important to user, how to 
               use it, and the working principal of this website. And also back button 
               starting of this page which take back to home page.
            And the home of the website a side menu appear in the left side of the website
             which contains different modules which processed different purposes i.e. home,
              all courses, add-details, about us, contact info.
            In all courses section, there is a lot of courses appear which study material,
             notes are available in the below of this page a see-more link is present which 
             is take to the next page where links of pdf file of the individuals subject is 
             available which is open a new tab. There u can view or download the pdf file.
            In add-details section, one can add detail of the demand of the notes which is
             not available there yet or can contribute the notes with details to the admin
              in the database. Which is updated by the admin in the view courses section.
            In about us section, the details of the website, and admin details, thoughts,
             purposes, future plans, updates etc. all are available there.
            In contact info section, all the details to contact the website owner or admin for any purposes.
            </p1>
            <br />
            <br />
            <p className="text-center my-2 bg-success">Thankyou for visiting</p>
        </div>
    );
};
export default startjourney;