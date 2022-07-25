// import axios from "axios"

import { API } from "aws-amplify";
import { v4 as uuid4 } from 'uuid';

const apiName = "histopathology"
const path = '/workflows';

const createWorkflow = (workflowName: string) => {
    let workflowId = uuid4()
    let params = {
        body: {
            "id": workflowId,
            "name": workflowName
        },
        headers: {}
    }
    API
        .post(apiName, path, params)
        .then(response => {
            console.log("Created workflow")
        })
        .catch(error => {
            console.log(error.response);
        })

}

const WorkflowService = {
    createWorkflow
}

export default WorkflowService