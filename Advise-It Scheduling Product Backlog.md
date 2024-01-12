
**User Story: Data Input**
- As a student,
- I want to input various data such as preferences for number of classes per quarter
- So that the tool can generate schedules that align with my requirements.
- AC
	- Accepts input from student or advisor
	- Stores information in organized way and that is programmatically accessible
	- Captures the number of classes a student wants to take per quarter

**User Story: Generate Basics Schedules for one academic year**
- As an advisor,
- I want the tool to create basic schedules for Fall, Winter, and Spring quarters in a single academic year.
- So I can generate possible plans for the upcoming year.
- AC
	- Creates schedules that do not repeat classes
	- Creates schedules that do not hallucinate classes
	- Creates schedules that have the correct number of classes in each quarter

**User Story: Inclusion of Summer Quarters**
- As an advisor,
- I want the option to include summer quarters in the schedule,
- So that students can plan their academic year comprehensively, including summer classes.
- AC
	- Data input captures whether students are interested in taking summer classes
	- Can generate schedules with or without summer quarter included
	- Adds the capability to generate schedules with summer classes without introducing hallucinations, repetitions or incorrect numbers of classes per quarter

**User Story: Schedule Generation with Prerequisites**
- As an advisor,
- I want the tool to consider prerequisite courses when generating schedules,
- So that the schedules are academically valid and students are enrolled in courses they are qualified for.
- AC
	- The tool accurately identifies and incorporates prerequisite courses for each class in the schedule.
	- Ensures that the schedule remains within the user's requirements even after accounting for prerequisite requirements.
	- System does not hallucinate or invent prerequisite classes that do not exist in the provided materials.

**User Story: Advisor Updates on Course Information**
- As an advisor,
- I want to update prerequisites and required courses,
- So that the schedule planning tool reflects the current requirements.
- **AC:**
    - Advisors can access a file or interface that allows them to update course info.
    - Changes made by instructors are immediately reflected in the system and visible to advisors in all future schedule generations.

**User Story: Multi-Year Schedule Planning**
- As an advisor,
- I want to generate schedules for multiple years,
- So that students can have a long-term academic plan and see their path to graduation.
- AC
	- The tool can generate academic schedules spanning multiple years, up to the expected duration of the student's degree program.
	- Incorporates progression rules and prerequisites for multi-year planning, ensuring each year builds appropriately on the previous one.