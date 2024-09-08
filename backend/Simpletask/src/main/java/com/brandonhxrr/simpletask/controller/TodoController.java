package com.brandonhxrr.simpletask.controller;

import com.brandonhxrr.simpletask.model.TaskPriorityComparator;
import com.brandonhxrr.simpletask.model.Todo;
import com.brandonhxrr.simpletask.model.TodoRequest;
import com.brandonhxrr.simpletask.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping("/todos/")
    public ResponseEntity<List<Todo>> getAllTasks(@RequestBody TodoRequest tasksRequest) {
        try {
            List<Todo> tasksList = new ArrayList<>(todoRepository.findAll());

            if (tasksList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                switch (tasksRequest.getSortBy()) {
                    case "priority" -> tasksList.sort(new TaskPriorityComparator());
                    case "priorityAsc" -> tasksList.sort(new TaskPriorityComparator().reversed());
                    case "dueDate" -> tasksList.sort(Comparator.comparing(Todo::getDueDate));
                    case "dueDateAsc" -> tasksList.sort(Comparator.comparing(Todo::getDueDate).reversed());
                    case "priority&dueDate" ->
                            tasksList.sort(new TaskPriorityComparator().thenComparing(Todo::getDueDate));
                    case "priority&dueDateAsc" ->
                            tasksList.sort(new TaskPriorityComparator().reversed().thenComparing(Todo::getDueDate));
                }

                switch (tasksRequest.getTaskStatus()) {
                    case "done" -> tasksList = tasksList.stream().filter(Todo::getDone).collect(Collectors.toList());
                    case "notDone" ->
                            tasksList = tasksList.stream().filter(task -> !task.getDone()).collect(Collectors.toList());
                }

                if (!tasksRequest.getTaskName().isEmpty()) {
                    tasksList = tasksList.stream().filter(
                            task ->
                                    task.getText().toLowerCase().contains(
                                        tasksRequest.getTaskName().toLowerCase()
                            )
                    ).collect(Collectors.toList());
                }

                if(tasksRequest.getTaskPriority() != null) {
                    tasksList = tasksList.stream().filter(
                            task ->
                                    tasksRequest.getTaskPriority().equals(
                                            task.getPriority()
                                    )
                    ).collect(Collectors.toList());
                }
            }

            if ((10 * tasksRequest.getPage()) - tasksList.size() < 10) {
                int startIndex = (tasksRequest.getPage() - 1) * 10;
                int endIndex = startIndex + 10;
                List<Todo> paginatedTaskList = tasksList.subList(startIndex, Math.min(endIndex, tasksList.size()));
                return new ResponseEntity<>(paginatedTaskList, HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.NO_CONTENT);


        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/todos/{id}/")
    public ResponseEntity<Todo> getTaskById(@PathVariable Long id) {

        Optional<Todo> task = todoRepository.findById(id);

        if (task.isPresent()) {
            return new ResponseEntity<>(task.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PostMapping("/todos/")
    public ResponseEntity<Todo> addTask(@RequestBody Todo task) {
        Todo createdTask = todoRepository.save(task);

        return new ResponseEntity<>(createdTask, HttpStatus.OK);
    }

    @PutMapping("/todos/{id}/")
    public ResponseEntity<Todo> updateTask(@PathVariable Long id, @RequestBody Todo newTaskData) {
        Optional<Todo> oldTaskData = todoRepository.findById(id);

        if (oldTaskData.isPresent()) {
            Todo updatedTask = oldTaskData.get();
            updatedTask.setText(newTaskData.getText());
            updatedTask.setDone(newTaskData.getDone());
            updatedTask.setPriority(newTaskData.getPriority());
            updatedTask.setDueDate(newTaskData.getDueDate());
            updatedTask.setLastUpdateDate(newTaskData.getLastUpdateDate());

            if (updatedTask.getDone() != newTaskData.getDone() && updatedTask.getDone()) {
                updatedTask.setDoneDate(newTaskData.getDoneDate());
            }

            todoRepository.save(updatedTask);

            return new ResponseEntity<>(updatedTask, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PostMapping("/todos/{id}/done/")
    public void markAsDone(@PathVariable Long id) {

    }

    @PutMapping("/todos/{id}/undone/")
    public void markAsUndone(@PathVariable Long id) {

    }

    @DeleteMapping("todos/{id}/delete/")
    public ResponseEntity<HttpStatus> deleteTask(@PathVariable Long id) {
        todoRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
