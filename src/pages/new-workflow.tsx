import { Button, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StorageService from "../services/StorageService";
import WorkflowService from "../services/WorkflowService"

const NewWorkflow = () => {

    const [fileInput, setFileInput] = useState<File>();
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        Auth.currentUserInfo().then(response => {
            let user = response["attributes"]["email"]
            console.log(user)
            setEmail(user)
        })
    }, [])

    const navigate = useNavigate();

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (!fileList) return;
        setFileInput(fileList[0])
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (fileInput) {
            WorkflowService.createWorkflow("myCoolWorkflow", email)
                .then(response => {
                    StorageService.uploadFile(response, fileInput)
                });
            navigate("/", { replace: true })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Button variant="contained" component="label">
                    Upload File
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => handleFileInputChange(e)}
                        hidden={true} />
                </Button>
                <TextField variant="outlined" disabled value={fileInput?.name} />
                <input
                    type="submit"
                    value="Submit" />
            </form>
        </div>
    )
}

export default NewWorkflow;