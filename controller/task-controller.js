import { createTask , getTasks, updateTaskService, deleteTaskService} from "../service/task-services.js";

export const addTask = async(req, res) => {
    const {title, description} = req.body;
    try{
        const task = await createTask(req.session.userId, title, description) 
        res.status(201).json({
            success: true,
            message: "Task created successfully!",
            data: task
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "failed to create task",
            error: error.message
        })
    }
}

export const getAllTasks = async(req, res) => {
    try{
        const tasks = await getTasks(req.session.userId)
        res.status(200).json({
            success: true,
            message: "Task Fetched Successfully!",
            allTasks: tasks
        })

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "failed to get all tasks",
            error: error.message
        })
    }
}

export const updateTask = async (req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;
    try{

        const updateTask = await updateTaskService(req.session.userId, id, title, description)
        if(!updateTask){
            return res.status(404).json({
                success: false,
                message: "Task not found! or unauthorized"
            })
        }

        res.status(200).json({
            success: true,
            message: "Task Update Successfully",
            data: updateTask
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "failed to update task",
            error: error.message
        })
    }
}

export const deleteTask = async(req, res) => {
    const {id} = req.params;
    try{
        const deleteTask = await deleteTaskService(req.session.userId, id);
        if(!deleteTask){
            return res.status(404).json({
                success: false,
                message: "task not found or unauthorized"
            })
        }

        res.status(200).json({
            success: true,
            message: "task deleted successfully!"
        })
    }
    catch(error){
            res.status(500).json({
            success: false,
            message: "Failed to delete task",
            error: error.message
        });
    }
}