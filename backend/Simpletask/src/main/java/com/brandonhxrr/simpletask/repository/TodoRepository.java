package com.brandonhxrr.simpletask.repository;

import com.brandonhxrr.simpletask.model.Todo;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class TodoRepository {

    private List<Todo> tasks = new ArrayList<>();

    public List<Todo> findAll() {
        return tasks;
    }

    public Todo save(Todo task) {
        if(task.getId() != null) {
            for (int i = 0; i < tasks.size(); i++) {
                Todo currentTask = tasks.get(i);
                if (currentTask.getId().equals(task.getId())) {
                    tasks.set(i, task);
                    return task;
                }
            }
        }
        task.setId((long) tasks.size() + 1);
        tasks.add(task);
        return task;
    }

    public Optional<Todo> findById(Long id) {
        return tasks.stream().filter(
                task ->
                        task.getId().equals(id)
        ).findFirst();
    }

    public void deleteById(Long id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}
