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
    const it201 = document.querySelector('input#IT201').value;
    const sdev201 = document.querySelector('input#SDEV201').value;
    const sdev106 = document.querySelector('input#SDEV106').value;
    const sdev117 = document.querySelector('input#SDEV117').value;
    const sdev219 = document.querySelector('input#SDEV219').value;
    const cs141 = document.querySelector('input#CS141').value;
    const sdev220 = document.querySelector('input#SDEV220').value;
    const cs145 = document.querySelector('input#CS145').value;


    console.log('summer value: ' + summer);
    console.log('classes per quarter: ' + classesQuarter);
    console.log('it201: ' + it201);
    if (it201) {
        console.log('it201 true');
    } else {
        console.log('it201 false');
    }

    // hide query div
    hideQuery();

    // display confirmation
    displayConfirmationDiv();
    buildConfirmationContent();
}

function buildConfirmationContent() {
    
}

function displayConfirmationDiv() {
    const confirmDiv = document.querySelector('confirm');
    confirmDiv.style.display = "block";
}

function hideQuery() {
    const queryDiv = document.querySelector('query');
    queryDiv.style.display = "none";
}