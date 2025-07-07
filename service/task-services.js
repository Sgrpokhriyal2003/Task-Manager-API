import { Task } from '../model/task-model.js'


export const createTask = async(userId, title, description) => {
    const task = new Task({userId, title, description})
    return await task.save()
}

export const getTasks = async(userId) => {
    return await Task.find({userId})
}

export const updateTaskService = async(userId, taskId, title, description) => {
    const updatedTask = await Task.findOneAndUpdate(
        {_id: taskId, userId: userId},
        {title, description, updatedAt: new Date()},
        {new: true}
    )

    return updatedTask
}

export const deleteTaskService = async(userId, taskId) => {
    const deletedTask = await Task.findOneAndDelete({_id: taskId, userId: userId})
    return deletedTask
}