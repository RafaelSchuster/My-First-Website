//Console log the Form Inputs

//Labels and Form Inputs
const label = document.querySelectorAll('.label');
const formInputs = document.querySelectorAll('.input');
//Radio Buttons
const radioBtn = document.querySelectorAll('.radiobtn');
//Radio Label
let radioLabel = '';
//Recipient for the Radio Button Value
let radioCheck = '';
//Recipient for the Console Sentence
let report = '';

for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener('click', () => {
        //Only assigns the radio label if there's a checked button- For the final if('') 
        radioLabel = document.querySelector('.radioLabel').innerText;
        radioCheck = radioBtn[i].value;
        return radioCheck, radioLabel;
    });
}

//Submit Button Click
submitBtn.addEventListener('click', reporting);

function reporting(e) {
    e.preventDefault();
    //Resets the report for a new submit
    report = '';
    for (let i = 0; i < label.length; i++) {
        //If input[i] is empty it'll skip both label[i] and input[i] from being included on report
        if (formInputs[i].value !== '') {
            let labels = label[i].innerText;
            report += `${labels} ${formInputs[i].value}, `;
        }
    }
    // If radio button wasn't checked, prints just report without the final comma
    if (radioLabel === '') {
        console.log(report.slice(0, -2));
        alert('Thank you for submitting!')
    }
    //If radio button was checked it'll print the radio label and value as well
    else {
        console.log(report, radioLabel, radioCheck);
        alert('Thank you for submitting!');
    }
}