package com.brandonhxrr.simpletask.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TodoRequest {
    int page = 1;
    String sortBy = "";
    String taskStatus = "";
    String taskName = "";
    Priority taskPriority = null;
}
