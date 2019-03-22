export default [
    {
        method: 'get',
        endPoint: 'user_getUserData',
        category: 'User',
        label: 'Get User Data',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
        ]
    },
    {
        method: 'get',
        endPoint: 'task_getAll',
        category: 'Task',
        label: 'Get All Tasks',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
        ]
    },
    {
        method: 'get',
        endPoint: 'task_getByStatus',
        label: 'Get Task By Status',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'status',
                placeHolder: 'The Task Status [ hold, success, fail ]',
                value: '',
                disabled: false
            }
        ]
    },
    {
        method: 'get',
        endPoint: 'task_getSingle',
        label: 'Get Single Task',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                value: '',
                disabled: false
            }
        ]
    },
    {
        method: 'post',
        endPoint: 'task_create',
        label: 'Create Task',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'title',
                placeHolder: 'Task Id',
                value: '',
                disabled: false
            },
            {
                name: 'description',
                placeHolder: 'Task Description',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'put',
        endPoint: 'task_update',
        label: 'Update Task',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                value: '',
                disabled: false
            },
            {
                name: 'title',
                placeHolder: 'Task Id',
                value: '',
                disabled: false
            },
            {
                name: 'description',
                placeHolder: 'Task Description',
                value: '',
                disabled: false
            },
            {
                name: 'dueDate',
                placeHolder: 'Due Date',
                value: '',
                disabled: false
            },
            {
                name: 'status',
                placeHolder: 'The Task status [ hold, success, fail ]',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'put',
        endPoint: 'task_changeStatus',
        label: 'Change Status',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'title',
                placeHolder: 'Title',
                value: '',
                disabled: false
            },
            {
                name: 'status',
                placeHolder: 'The Task status [ hold, success, fail ]',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'delete',
        endPoint: 'task_delete',
        label: 'Delete Task',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'get',
        endPoint: 'task_getTaskNotes',
        label: 'Get Task Notes',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'post',
        endPoint: 'task_createTaskNote',
        label: 'Create Task note',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                value: '',
                disabled: false
            },
            {
                name: 'noteText',
                placeHolder: 'Note',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'put',
        endPoint: 'task_updateTaskNote',
        label: 'Update Task Note',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                value: '',
                disabled: false
            },
            {
                name: 'noteId',
                placeHolder: 'Note Id',
                value: '',
                disabled: true
            },
            {
                name: 'noteText',
                placeHolder: 'Note',
                value: '',
                disabled: true
            },
        ]
    },
    {
        method: 'delete',
        endPoint: 'task_deleteTaskNote',
        label: 'Delete Task Note',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                value: '',
                disabled: false
            },
            {
                name: 'noteId',
                placeHolder: 'Note Id',
                value: '',
                disabled: false
            },
        ]
    }
]