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
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
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
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
        ]
    },
    {
        method: 'get',
        endPoint: 'task_getByStatus',
        label: 'Get Tasks By Status',
        category: 'Task',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'status',
                placeHolder: 'The Task status [ hold, success, fail ]',
                type:'select',
                options: [
                    'ongoing',
                    'hold',
                    'success',
                    'fail'
                ],
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
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                type:'text',
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
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'title',
                placeHolder: 'Title',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'description',
                placeHolder: 'Description',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'dueDate',
                placeHolder: 'Due Date',
                type:'date',
                value: '',
                disabled: false
            },
            {
                name: 'status',
                placeHolder: 'The Task status [ hold, success, fail ]',
                type:'select',
                options: [
                    'ongoing',
                    'hold',
                    'success',
                    'fail'
                ],
                value: '',
                disabled: false
            },
            {
                name: 'priority',
                placeHolder: 'Priority',
                type:'select',
                options: [
                    'low',
                    'mid',
                    'high'
                ],
                value: '',
                disabled: false
            },
            {
                name: 'accessibility',
                placeHolder: 'Accessibility (Private,Public)',
                type:'select',
                options:[
                    'private',
                    'public'
                ],
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
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'title',
                placeHolder: 'Task Id',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'description',
                placeHolder: 'Task Description',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'dueDate',
                placeHolder: 'Due Date',
                type:'date',
                value: '',
                disabled: false
            },
            {
                name: 'status',
                placeHolder: 'The Task status [ hold, success, fail ]',
                type:'select',
                options: [
                    'ongoing',
                    'hold',
                    'success',
                    'fail'
                ],
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
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task Id',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'status',
                placeHolder: 'The Task status [ hold, success, fail ]',
                type:'select',
                options: [
                    'ongoing',
                    'hold',
                    'success',
                    'fail'
                ],
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
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                type:'text',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'get',
        endPoint: 'task_getTaskNotes',
        label: 'Get Task Notes',
        category: 'Note',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                type:'text',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'post',
        endPoint: 'task_createTaskNote',
        label: 'Create Task note',
        category: 'Note',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'noteText',
                placeHolder: 'Note',
                type:'text',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'put',
        endPoint: 'task_updateTaskNote',
        label: 'Update Task Note',
        category: 'Note',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'noteId',
                placeHolder: 'Note Id',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'noteText',
                placeHolder: 'Note',
                type:'text',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'delete',
        endPoint: 'task_deleteTaskNote',
        label: 'Delete Task Note',
        category: 'Note',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'taskId',
                placeHolder: 'Task ID',
                type:'text',
                value: '',
                disabled: false
            },
            {
                name: 'noteId',
                placeHolder: 'Note Id',
                type:'text',
                value: '',
                disabled: false
            },
        ]
    },
    {
        method: 'post',
        endPoint: 'user_setUserPhoto',
        label: 'Set User Photo',
        category: 'User',
        parameters: [
            {
                name: 'userId',
                placeHolder: 'User Id',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'apiKey',
                placeHolder: 'API Key',
                type:'text',
                value: '',
                disabled: true
            },
            {
                name: 'photo',
                placeHolder: 'Photo',
                type:'file',
                value: '',
                disabled: false
            }
        ]
    }
]