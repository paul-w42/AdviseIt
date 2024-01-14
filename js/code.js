let prereqs = [];

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

    /*
        classes in summer time?
            checkbox 'summer'

        number of classes per quarter?
            radios 'number', values number1, number2, and number3

        prerequisites taken?
            IT201 OR SDEV201 
            SDEV106 
            SDEV117 
            SDEV219 OR CS141 
            SDEV220 OR CS145
    */

    // take summer classes?
    const summer = document.querySelector("input#summer").value;
    const classesQuarter = document.querySelector('input[name="number"]:checked').value;

    // prerequisites taken?
    const it201 = document.querySelector('input#IT201');
    console.log("it201.checked: " + it201.checked); // true or false
    if (it201.checked) {
        const pre = {
            name: "IT201",
            taken: true
        };
        prereqs.push(pre);
        console.log("IT201 taken");
    }
    const sdev201 = document.querySelector('input#SDEV201');
    if (sdev201.checked) {
        const pre = {
            name: "SDEV201",
            taken: true
        };
        prereqs.push(pre);
        console.log("SDEV201 taken");
    }
    const sdev106 = document.querySelector('input#SDEV106');
    if (sdev106.checked) {
        const pre = {
            name: "SDEV106",
            taken: true
        };
        prereqs.push(pre);
        console.log("SDEV106 taken");
    }
    const sdev117 = document.querySelector('input#SDEV117');
    if (sdev117.checked) {
        const pre = {
            name: "SDEV117",
            taken: true
        };
        prereqs.push(pre);
    }
    const sdev219 = document.querySelector('input#SDEV219');
    if (sdev219.checked) {
        const pre = {
            name: "SDEV219",
            taken: true
        };
        prereqs.push(pre);
    }
    const cs141 = document.querySelector('input#CS141');
    if (cs141.checked) {
        const pre = {
            name: "CS141",
            taken: true
        };
        prereqs.push(pre);
    }
    const sdev220 = document.querySelector('input#SDEV220');
    if (sdev220.checked) {
        const pre = {
            name: "SDEV220",
            taken: true
        };
        prereqs.push(pre);
    }
    const cs145 = document.querySelector('input#CS145');
    if (cs145.checked) {
        const pre = {
            name: "CS145",
            taken: true
        };
        prereqs.push(pre);
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
}

function buildConfirmationContent() {
/*
    // build anchor for URL column
    let url_anchor= document.createElement("a");
    url_anchor.setAttribute('href', json.url);
    url_anchor.setAttribute('target', '_blank');
    url_anchor.textContent = json.url;
    ...
     document.getElementById(`d${id}6`).appendChild(url_anchor);
*/
    const confirmDiv = document.querySelector('#resultConfirm');
    
    let summer = document.querySelector("input#summer").value;
    const classesQuarter = document.querySelector('input[name="number"]:checked').value;

    let paragraph = document.createElement("p");
    if (summer === "on") {
        summer = "Yes";
    } else {
        summer = "No";
    }
    paragraph.textContent = `Summer Classes: ${summer} - Classes per Quarter: ${classesQuarter}`;
    confirmDiv.appendChild(paragraph);

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

/*
 * Using the submitted prerequisites and the data inside the ./data/courses.js file, determine
 * what the remaining prerequisites are that the student still must take prior to starting the 
 * software BAS program.
 */
function calculateRemainingPrereqs() {
    let requiredPrereqs = [];
    // taken prereqs listed in prereqs array
    //      array of objects w/ String 'name' and Boolean 'taken' fields
    // required prereqs are listed inside the requiredPrereqs array
    //      array with String 'course1' and String 'course2' fields.  The latter only present 
    //      if either one of the two courses  would satisify that spot requirement

    // cycle through required courses, and for each requirement determine if that is present
    // inside the taken prereqs.  If not, add to new array zc
    for (let i = 0; i < requiredPrereqs.length; i++) {
        const obj = requiredPrereqs[i];
        
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