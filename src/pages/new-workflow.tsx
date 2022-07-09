import { Button } from "@mui/material";
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledFileSelectorButton from "../components/SytledFileSelectorButton";

const NewWorkflow = () => {

    const [fileInput, setFileInput] = useState<File>();
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (!fileList) return;
        setFileInput(fileList[0])
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        console.log("form submitted");
        event.preventDefault();
        const path = '/workflows'
        const options = {
            url: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {

            }
        }
        axios(options)
            .then(response => response.data)
            .then(data => {
                uploadFiles(data['workflow_id'])
            })
            .then(() => navigate('/'))
    }

    const uploadFiles = (workflowId: String) => {
        const path = `/workflows/${workflowId}/upload`;
        const formData = new FormData()
        if (!fileInput) return;
        formData.append('input_file', fileInput.name)
        const options = {
            url: path,
            method: 'POST',
            data: formData
        }
        axios(options)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>New workflow</h1>
                <Button variant="contained" component="label">
                    Upload File
                    <input
                        type="file"
                        onChange={(e) => handleFileInputChange(e)}
                        hidden={true} />
                </Button>
                <input
                    type="submit"
                    value="Submit" />
            </form>
        </div>
    )
}

export default NewWorkflow;