export type Workflow = {
    id: string,
    name: string,
    user: string,
    workflowStatus: Status
}

export enum Status {
    CREATED = "CREATED",
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    COMPLETE = "COMPLETE",
    ERROR = "ERROR"
}