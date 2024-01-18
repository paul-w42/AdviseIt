let prereqs = [];
//let unsatisifedPrereqs = new Map();
let unsatisifedPrereqs = [];

// wait until page loads
window.onload = async function () {
    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", processSubmit);

    console.log("onLoad() complete");
};

/*
 * This intializes a Map containing all of the required prerequisites.  The class names will be the
 * Keys inside the map, and a boolean value will indicate whether that prerequisite has been 
 * satisfied or not.
 */
// function processPrereqsMap() {
//     for (let i = 0; i < requiredPrereqs.classes.length; i++) {
//         const course = requiredPrereqs.classes[i];
//         unsatisifedPrereqs.set(course.course1, false);
//         if (course.course2) {
//             unsatisifedPrereqs.set(course.course2);
//         }
//     }
// }


/*
 * Process form data from submit button click
 */
function processSubmit() {
    // take summer classes?
    const summer = document.querySelector("input#summer").value;
    const classesQuarter = document.querySelector('input[name="number"]:checked').value;

    const boxDiv = document.getElementById('prereqs');
    const checkBoxes = boxDiv.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkBoxes.length; i++) {
        const checkBox = checkBoxes[i];
        if (checkBox.checked) {
            const pre = {
                name: checkBox.name,
                taken: true
            };
            prereqs.push(pre);
        }
    }


    console.log('summer value: ' + summer);
    console.log('classes per quarter: ' + classesQuarter);
    console.log('number of prereqs taken: ' + prereqs.length);

    // hide query div
    hideQuery();

    // display confirmation
    displayConfirmationDiv();

    // build list of pre-reqs taken
    buildConfirmationContent();

    console.log('START PROCESSING REMAINING PREREQS');

    calculateRemainingPrereqs();
    buildNonSatisifedPrereqsList();
}

function buildConfirmationContent() {
    const confirmDiv = document.querySelector('#resultConfirm');
    
    let summer = document.querySelector("input#summer").value;
    const classesQuarter = document.querySelector('input[name="number"]:checked').value;

    let paragraph = document.getElementById("preferences");
    if (summer === "on") {
        summer = "Yes";
    } else {
        summer = "No";
    }
    paragraph.textContent = `Summer Classes: ${summer} - Classes per Quarter: ${classesQuarter}`;

    let list = document.createElement("ul");


    for (let i = 0; i < prereqs.length; i++) {
        const obj = prereqs[i];
        const li = document.createElement("li");
        li.textContent = obj.name;
        list.appendChild(li);
    }

    // add list to DIV.confirm
    confirmDiv.appendChild(list);
    
}

function buildNonSatisifedPrereqsList() {
    const resultPrereqsDiv = document.querySelector('#resultPrereqs');
    if (unsatisifedPrereqs.length == 0) {
        const p = document.createElement('p');
        p.textContent = 'You have taken the required prerequisites';
        resultPrereqsDiv.appendChild(p);
    } 
    else {
        // cycle through unsatisfiedPrereqs, and list 
        const ul = document.createElement('ul');
        for (let i = 0; i < unsatisifedPrereqs.length; i++) {
            const li = document.createElement('li');

            // is a course2 present?  if so, present either course1 or course2 as options
            if (unsatisifedPrereqs[i].course2) {
                li.textContent = unsatisifedPrereqs[i].course1 + " or " + unsatisifedPrereqs[i].course2;
            }
            // no optional course2 present, present only course1 as an option
            else {
                li.textContent = unsatisifedPrereqs[i].course1;
            }

            ul.appendChild(li);
        }
        resultPrereqsDiv.appendChild(ul);
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
    for (let i = 0; i < requiredPrereqs.classes.length; i++) {
        const course = requiredPrereqs.classes[i];      // course.course1 AND POSSIBLY a course.course2
        let courseTaken = false;
        // console.log('Testing for course ' + course.course1 + ', ' + course.course2);

        // for all of the prereqs the student says they have taken, determine which of the required courses have been taken
        for (let a = 0; a < prereqs.length; a++) {            
            if ((prereqs[a].name == course.course1) || (course.course2 && course.course2 == prereqs[a].name)) {
                courseTaken = true;
                break;
            } 
        }

        // if we have not taken the course
        if (!courseTaken) {
            unsatisifedPrereqs.push(requiredPrereqs.classes[i]);
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