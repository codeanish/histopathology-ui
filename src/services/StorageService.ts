import { Storage } from "aws-amplify";

const uploadFile = (workflowId: string, file: File) => {
    Storage.put(workflowId + ".jpg", file)
        .then(result => console.log(result))
        .catch(err => console.log(err));
}

const StorageService = {
    uploadFile
}

export default StorageService;