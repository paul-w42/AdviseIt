let classesTaken = [];
let classesNotTaken = [];

// wait until page loads
window.onload = async function () {
    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", processSubmit);

    console.log("onLoad() complete");
};


/*
 * Process form data from submit button click
 */
function processSubmit() {
    // take summer classes?
    const summer = document.querySelector("input#summer").checked;
    const classesQuarter = document.querySelector('input[name="number"]:checked').value;

    const boxDiv = document.getElementById('prereqs');
    const checkBoxes = boxDiv.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkBoxes.length; i++) {
        const checkBox = checkBoxes[i];
        if (checkBox.checked) {
            const pre = {
                course1: checkBox.name,
                taken: true
            };
            classesTaken.push(pre);
        }
    }


    console.log('summer value: ' + summer);
    console.log('classes per quarter: ' + classesQuarter);
    console.log('number of prereqs taken: ' + classesTaken.length);

    // hide query div
    hideQuery();

    // display confirmation
    displayConfirmationDiv();

    // build list of pre-reqs taken
    buildConfirmationContent();

    console.log('START PROCESSING REMAINING PREREQS');

    calculateRemainingPrereqs();
    buildNonSatisifedPrereqsList();
    buildSchedule();
}

function buildConfirmationContent() {
    const confirmDiv = document.querySelector('#resultConfirm');
    
    
    let summer = document.querySelector("input#summer").checked;
    console.log(summer + " is summer");
    const classesQuarter = document.querySelector('input[name="number"]:checked').value;

    let paragraph = document.getElementById("preferences");
    if (summer) {
        summer = "Yes";
    } else {
        summer = "No";
    }
    paragraph.textContent = `Summer Classes: ${summer} - Classes per Quarter: ${classesQuarter}`;

    let list = document.createElement("ul");


    for (let i = 0; i < classesTaken.length; i++) {
        const obj = classesTaken[i];
        const li = document.createElement("li");
        li.textContent = obj.course1;
        list.appendChild(li);
    }

    // add list to DIV.confirm
    confirmDiv.appendChild(list);
    
}

function buildNonSatisifedPrereqsList() {
    const prereqsDiv = document.querySelector('#takenPrereqs');
    if (classesNotTaken.length == 0) {
        const p = document.createElement('p');
        p.textContent = 'You have taken the required prerequisites';
        prereqsDiv.appendChild(p);
    } 
    else {
        // cycle through unsatisfiedPrereqs, and list 
        // const ul = document.createElement('ul');
        for (let i = 0; i < classesNotTaken.length; i++) {
            // div#prereqs
            const div = document.createElement('div');
            div.className = 'remain';
            
            div.textContent = classesNotTaken[i].course1;
            prereqsDiv.appendChild(div);
        }
        // resultPrereqsDiv.appendChild(ul);
    }
}

/*
 * Using the submitted prerequisites and the data inside the ./data/courses.js file, determine
 * what the remaining prerequisites are that the student still must take prior to starting the 
 * software BAS program.
 */
function calculateRemainingPrereqs() {
    //let unsatisifedPrereqs = [];
    // taken prereqs listed in prereqs array
    //      array of objects w/ String 'name' and Boolean 'taken' fields
    // required prereqs are listed inside the requiredPrereqs array
    //      array with String 'course1' and String 'course2' fields.  The latter only present 
    //      if either one of the two courses  would satisify that spot requirement

    // cycle through required courses, and for each requirement determine if that is present
    // inside the taken prereqs.  If not, add to new array.                    

    // console.log('requiredPrereqs.classes.length = ' + requiredPrereqs.classes.length);
    // console.log('selected prereqs.length is ' + prereqs.length);

    // for each of the required courses ... 
    for (let i = 0; i < requiredCourses.classes.length; i++) {
        const course = requiredCourses.classes[i];      // course.course1 AND POSSIBLY a course.course2
        let courseTaken = false;
        // console.log('Testing for course ' + course.course1 + ', ' + course.course2);

        // for all of the prereqs the student says they have taken, determine which of the required courses have been taken
        for (let a = 0; a < classesTaken.length; a++) {            
            if (classesTaken[a].course1 == course.course1) {
                courseTaken = true;
                break;
            } 
        }

        // if we have not taken the course
        if (!courseTaken) {
            classesNotTaken.push(requiredCourses.classes[i]);
            // console.log('          Course ' + course.course1 + ' or alternative were not taken, adding to list');
        } 
    }


}

function displayConfirmationDiv() {
    const confirmDiv = document.querySelector('#processContent');
    confirmDiv.style.display = "block";
}

function hideQuery() {
    const queryDiv = document.querySelector('#query');
    queryDiv.style.display = "none";
}

function buildSchedule() {
    // get the summer classes preference
    let summer = document.querySelector("input#summer").checked;
    const scheduleDiv = document.querySelector('#schedule');

    let quarterNames = ['Fall', 'Winter', 'Spring', 'Summer'];

    let ul;

    let quarters;

    console.log(summer);

    if (summer) {
        quarters = 4;
    } else {
        quarters = 3;
    }

    console.log('classesTaken: ');
    for (let i = 0; i < classesTaken.length; i++) {
        console.log('name: ' + classesTaken[i].course1);
    }

    console.log(classesNotTaken);

    for (let quarter = 0; quarter < quarters; quarter++) {
        let currentClasses = [];

        console.log('quarter ' + quarter + ' of ' + quarters + ' quarters');
        console.log(classesNotTaken.length + " is remaining unsatisfied prereqs");
        let div = document.createElement('div');
        div.className='quarter';

        const h4 = document.createElement('h4');
        h4.textContent = quarterNames[quarter] + ' Quarter';

        div.appendChild(h4);
        ul = document.createElement('ul');

        let currentClassNumber = 0;

        // get the number of classes per quarter
        let classesPerQuarter = document.querySelector('input[name="number"]:checked').value;
        // loop while we have not reached the max number of classes per quarter
        while (currentClassNumber < classesPerQuarter) {

            // get the next class from the list of unsatisfied prereqs

            //TODO: check for required classes
            console.log(currentClassNumber);
            console.log(classesNotTaken[currentClassNumber]);

            // if we are outside of this array - not enough remaining classes to satisfy this quarter
            console.log('Classes Not Taken: ');
            for (let i = 0; i < classesNotTaken.length; i++) {
                console.log('name: ' + classesNotTaken[i].course1);
            }
            if (currentClassNumber >= (classesNotTaken.length)) {
                break;
            }

            if (classesNotTaken[currentClassNumber].requires != false) {
                // check if the prereq is in the list of classes taken
                let prereqTaken = false;
                for (let j = 0; j < classesTaken.length; j++) {
                    if (classesNotTaken[currentClassNumber].requires === classesTaken[j].course1) {
                        prereqTaken = true;
                        break;
                    }
                }
                if (!prereqTaken) {
                    // if the prereq is not taken, increment our loop parameters and continue
                    console.log("prereq not taken for " + classesNotTaken[currentClassNumber].course1 + ", continuing...");
                    currentClassNumber++;
                    classesPerQuarter++;
                    continue;
                }
            }
            console.log("class did not require a prereq, or prereq was taken");
            const course = classesNotTaken[currentClassNumber];

            // add the class to the list of classes taken for this quarter
            currentClasses.push(course);
            console.log(course);
    
            // create a new paragraph to hold the class name
            const li = document.createElement('li');
            li.textContent = course.course1;
    
            // add the paragraph to the div
            ul.appendChild(li);
            classesNotTaken.splice(currentClassNumber, 1);

            // decrementing as the splice statement above moves the next class into the current
            // index, hence we must maintain the current index value.  instead of indexing the index
            // value, we decrement classesPerQuarter
            --classesPerQuarter;
        }
        classesTaken = classesTaken.concat(currentClasses);
        console.log('classesTaken: ');
        for (let i = 0; i < classesTaken.length; i++) {
            console.log('name: ' + classesTaken[i].course1);
        }
        div.appendChild(ul);
        scheduleDiv.appendChild(div);
    }
}