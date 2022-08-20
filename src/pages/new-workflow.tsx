import { Button, Card, Chip, Paper, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StorageService from "../services/StorageService";
import WorkflowService from "../services/WorkflowService"
import { Status } from "../shared/types";
import styles from "./new-workflow.module.scss"

const NewWorkflow = () => {

    const [fileInput, setFileInput] = useState<File | null>();
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
        console.log(fileList)
        if (!fileList) return;
        setFileInput(fileList[0])
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (fileInput) {
            WorkflowService.createWorkflow("myCoolWorkflow", email)
                .then(workflowId => {
                    StorageService.uploadFile(workflowId, fileInput)
                        .then(() => {
                            WorkflowService.updateWorkflowStatus(workflowId, Status.PENDING)
                        })
                    navigate("/", { replace: true })
                });

        }
    }

    const handleDelete = () => {
        setFileInput(null);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <Button variant="contained" component="label">
                    Upload File
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => handleFileInputChange(e)}
                        hidden={true} />
                </Button>
                {fileInput?.name ? <Chip label={fileInput.name} onDelete={handleDelete} /> : <></>}
                <Button variant="contained" type="submit" disabled={fileInput == null}>Submit</Button>
            </form>
        </div >
    )
}

export default NewWorkflow;