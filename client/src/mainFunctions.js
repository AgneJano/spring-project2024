export const getStatusSvgUrl = (projectStatus)=> {
    let statusText = '';
    switch (projectStatus) {
        case 'in-progress':
            statusText = "./src/assets/status-bubbles/inProgress.svg";
            break;
        case 'to-do':
            statusText = "./src/assets/status-bubbles/toDo.svg";
            break;
        case 'done':
            statusText = "./src/assets/status-bubbles/done.svg";
            break;
    }
    return statusText;
}