/**
 * Created by armin on 04.02.16.
 */

task.factory("TaskService", function(Task, HTMLText) {

    var tasks = [];
    var taskId = 0;

    function createTask() {
        var task = new Task();
        task.html = new HTMLText();
        task.id = taskId;
        return task;
    }

    function addTask(task) {
        tasks[task.id] = task;
        taskId++;
    }

    function getTask(id) {
       // tasks[id]
    }

    return {
        tasks: tasks,
        createTask: createTask,
        addTask: addTask,
        getTask: getTask
    }

});