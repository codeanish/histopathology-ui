import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Workflow } from "../shared/types"


type Props = {
    workflows: Workflow[]
}

const WorkflowsTable = ({ workflows }: { workflows: Workflow[] }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {workflows.map((workflow) => (
                        <TableRow key={workflow.id}>
                            <TableCell>{workflow.id}</TableCell>
                            <TableCell>{workflow.name}</TableCell>
                            <TableCell>{workflow.user}</TableCell>
                            <TableCell>{workflow.workflowStatus}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WorkflowsTable