export type Workflow = {
    id: string,
    name: string,
    user: string,
    status: Status
}

export enum Status {
    CREATED,
    PENDING,
    PROCESSING,
    COMPLETE,
    ERROR
}