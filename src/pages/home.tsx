// import { Button, useAuthenticator } from "@aws-amplify/ui-react";
// import React, { useEffect } from "react";
import { TableBody } from "@aws-amplify/ui-react";
import { CircularProgress, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import WorkflowsTable from "../components/WorkflowsTable";
import WorkflowService from "../services/WorkflowService";
import { Workflow } from "../shared/types";
import styles from "./home.module.scss";

const Home = () => {

    const [workflows, setWorkflows] = useState<Workflow[]>([])
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        fetchWorkflows();
    }, [])

    const fetchWorkflows = () => {
        WorkflowService.getWorkflows()
            .then(response => {
                setWorkflows(response);
                setShowLoading(false);
            })
    }

    return (
        <div className={styles.container}>
            {showLoading ? <CircularProgress color="inherit" /> : <WorkflowsTable workflows={workflows} />}
        </div>
    )
}

export default Home;