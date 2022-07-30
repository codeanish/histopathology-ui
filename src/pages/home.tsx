// import { Button, useAuthenticator } from "@aws-amplify/ui-react";
// import React, { useEffect } from "react";
import { TableBody } from "@aws-amplify/ui-react";
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import WorkflowsTable from "../components/WorkflowsTable";
import WorkflowService from "../services/WorkflowService";
import { Workflow } from "../shared/types";

const Home = () => {

    const [workflows, setWorkflows] = useState<Workflow[]>([])

    useEffect(() => {
        fetchWorkflows();
    }, [])

    const fetchWorkflows = () => {
        WorkflowService.getWorkflows()
            .then(response => {
                console.log(response)
                setWorkflows(response)
            })
    }

    const containerStyle = {
        padding: "2em"
    }

    return (
        <div>
            <div style={containerStyle}>
                <WorkflowsTable workflows={workflows} />
            </div>
        </div>
    )
}

export default Home;