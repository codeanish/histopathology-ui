import axios from "axios"

const getWorkflows = () => {
    let url = "http://localhost:5001//workflows"
    return axios.get(url)
}

const WorkflowService = {
    getWorkflows
}

export default WorkflowService