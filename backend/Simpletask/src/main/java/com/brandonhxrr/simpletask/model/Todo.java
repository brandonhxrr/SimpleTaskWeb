package com.brandonhxrr.simpletask.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;

@Builder
@Entity
@Table(name="todo")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max=120)
    @NotNull
    private String text;

    private LocalDate dueDate;

    @Builder.Default
    private Boolean done = false;

    private LocalDate doneDate;

    @NotNull
    private String priority;

    private LocalDate creationDate;

    private LocalDate lastUpdateDate;

}
