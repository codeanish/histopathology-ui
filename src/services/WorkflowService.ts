import { API } from "aws-amplify";
import { v4 as uuid4 } from 'uuid';
import { Workflow } from "../shared/types";

const apiName = "histopathology"
const path = '/workflows';

const createWorkflow = (workflowName: string, email: string): Promise<string> => {
    let workflowId = uuid4()
    let params = {
        body: {
            "id": workflowId,
            "name": workflowName,
            "user": email
        },
        headers: {}
    }
    const res = API
        .post(apiName, path, params)
        .then(response => {
            const workflow = response as Workflow
            return workflow.id
        })
        .catch(error => {
            console.log("Cannot create workflow")
            throw new Error(error);
        })
    return res;
}

const getWorkflows = (): Promise<Workflow[]> => {
    let params = {
        headers: {
        }
    }
    const res = API
        .get(apiName, path, params)
        .then(response => {
            const workflows: Workflow[] = response
            return workflows
        })
        .catch(error => {
            console.log("Cannot get workflows")
            throw new Error(error)
        })
    return res;
}

const WorkflowService = {
    createWorkflow,
    getWorkflows
}

export default WorkflowService