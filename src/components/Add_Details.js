import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import { database, store } from "../fire";
import firebase from "firebase";

const Add_Details = () => {
    const [userId, setuserid] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(null);


    const onFileChange = ({ target }) => {
        console.log(target);
        const file = target.files[0];
        console.log(file);
        setSelectedFile(file);
    }

    const uploadFile = (file) => {
        console.log(file.name);
        const uploadTask = store.ref().child(file.name).put(file);

        uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setUploadProgress(progress)
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
        }, function(error) {
        // Handle unsuccessful uploads
        }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);

            const db = database.ref().child("books");
            const book = {   
                name: file.name,
                url: downloadURL,
            }
            //ERROR TO SOLVE
            db.push(book, err =>
            {
                if(err)
                console.log(err);
            });
        });
});
    }
    const addCourse = (e) => {
        e.preventDefault();
        uploadFile(selectedFile);
    };
    return (
        <>
        <Link to="/">Back</Link>
        <h1 className="text-center m-3">Fill Course Details</h1>
            <Form className="text-center"  onSubmit={addCourse}>
                <FormGroup>
                    <label htmlFor="title">Course Title/Subject</label>
                    <Input className="text-center"
                        type="text"
                        placeholder="Entrer here"
                        name="userId"
                        id="userId"
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="file">Course Description</label>
                    <Input className="text-center"
                        type="file"
                        id="file"
                        onChange={onFileChange}
                    />
                </FormGroup>
                {
                uploadProgress == null ? "" :
                    uploadProgress +"% Complete"
                }
                <Container className="text-center">
                    <Button color="success" type="submit">Add Course</Button>
                </Container>
            </Form>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnHover />        
            <br />
            <br />
            <p className="text-center my-2 bg-info">Thankyou for visiting</p>
            <br />
            </>
    );
};

export default Add_Details;