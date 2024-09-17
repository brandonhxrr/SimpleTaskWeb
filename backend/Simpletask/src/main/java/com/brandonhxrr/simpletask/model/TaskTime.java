package com.brandonhxrr.simpletask.model;

import java.time.Duration;
import java.util.List;

public class TaskTime {

    public static long calculateTotalMinutes(List<Todo> tasks) {
        return tasks.stream()
                .filter(task -> task.getDone() && task.getCreationDate() != null && task.getDoneDate() != null)
                .mapToLong(task -> Duration.between(task.getCreationDate(), task.getDoneDate()).toMinutes())
                .sum();
    }

    public static String formatDuration(long totalMinutes) {
        long days = totalMinutes / (24 * 60);
        long hours = (totalMinutes % (24 * 60)) / 60;
        long minutes = totalMinutes % 60;
        if (days > 0) {
            return String.format("%d days %02d:%02d", days, hours, minutes);
        } else if (hours > 0) {
            return String.format("%02d:%02d", hours, minutes);
        } else {
            return String.format("%02d minutes", minutes);
        }
    }
}
