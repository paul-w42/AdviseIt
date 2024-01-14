# Notes on AdviseIt application


## Prerequisites

- Required courses for program
    - IT201 OR SDEV201
    - SDVE106
    - SDEV117
    - SDEV219 OR CS141
    - SDEV220 OR CS145
- Core Classes
    - SDEV301 -> SDEV333 -> SDEV334
    - SDEV305 -> SDEV328 -> SDEV355 -> SDEV485 -> SDEV486
    - SDEV378
- 2 of 3 electives are also required, the electives are:
    - 372  (REQUIRES 328 & 333)
    - 426  (REQUIRES 333)
    - 450  (REQUIRES 328 & 333)


## Core Classes

- SDEV301 -> SDEV333 -> SDEV334
- SDEV305 -> SDEV328 -> SDEV355 -> SDEV485 -> SDEV486
- SDEV378


In addition, 2 of 3 electives are also required, the electives are:
    - 372  (REQUIRES 328 & 333)
    - 426  (REQUIRES 333)
    - 450  (REQUIRES 328 & 333)


## Generating Schedule -> Algorithm

Can we create a list type structure for each string of dependent classes?  For example, SDEV301, 333, and 334 would be in the same list.  305, 328, 355, 485, and 486 would be in another list.  Maybe a Stack would be best, and we pop classes off of the stack as they are scheduled.

Maybe we can also have a container(list/map) for each Quarter, i.e. Fall, Winter, Spring, and Summer.  

From these containers we determine for each quarter we are calculating for what is the lowest ordered Class from each of the Dependent lists that is present in the current quarter?

We assign those classes to that particular Quarter, mark them as scheduled, and continue processing in the next quarter.



