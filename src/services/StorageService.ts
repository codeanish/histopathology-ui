import { Storage } from "aws-amplify";

const uploadFile = (workflowId: string, file: File): Promise<string> => {
    let key = Storage.put(workflowId + ".jpg", file)
        .then(result => {
            console.log(result)
            return result.key;
        })
        .catch(err => {
            console.log(err)
            throw new Error("Unable to upload file")
        });
    return key;
}

const StorageService = {
    uploadFile
}

export default StorageService;