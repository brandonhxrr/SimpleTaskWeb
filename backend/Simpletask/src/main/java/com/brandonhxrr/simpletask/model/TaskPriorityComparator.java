package com.brandonhxrr.simpletask.model;

import java.util.Comparator;

public class TaskPriorityComparator implements Comparator<Todo> {

    @Override
    public int compare(Todo task1, Todo task2) {
        return task1.getPriority().compareTo(task2.getPriority());
    }
}
