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
};


export const getTaskIcons = (status, priority) => {
    let statusIcon = '';
    let priorityIcon = '';

    switch (status) {
        case 'in-progress':
            statusIcon = "./src/assets/status-bubbles/inProgress.svg";
            break;
        case 'to-do':
            statusIcon = "./src/assets/status-bubbles/toDo.svg";
            break;
        case 'done':
            statusIcon = "./src/assets/status-bubbles/done.svg";
            break;
    }

    switch (priority) {
        case 'high':
            priorityIcon = "./src/assets/task-status-bubbles-priority/priority-high.svg";
            break;
            case 'medium':
            priorityIcon = "./src/assets/task-status-bubbles-priority/priority-medium.svg";
            break;
        case 'low':
            priorityIcon = "./src/assets/task-status-bubbles-priority/priority-low.svg";
            break;
    }

    return { statusIcon, priorityIcon };
};