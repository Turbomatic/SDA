document.getElementById('inputOne').addEventListener('input', function() {
    const inputOne = document.getElementById('inputOne').value;

    if (inputOne === 'a') {
        document.getElementById('dropdownDiv').style.display = 'block';
    } else {
        document.getElementById('dropdownDiv').style.display = 'none';
    }
});

function updateDropdownTwo() {
    const inputTwo = document.getElementById('inputTwo').value;
    const dropdownDivTwo = document.getElementById('dropdownDivTwo');
    
    if (inputTwo === 'b') {
        dropdownDivTwo.style.display = 'block';
    } else{
        dropdownDivTwo.style.display = 'none';
    }
}

function updateRadioOptions() {
    const inputThree = document.getElementById('inputThree').value;
    const radioDiv = document.getElementById('radioDiv');
    const yesRadio = document.getElementById('yes');
    const noRadio = document.getElementById('no');
    
    if (inputThree === 't') {
        radioDiv.style.display = 'block';
        yesRadio.checked = true;
        noRadio.diabled = true;
        yesRadio.disabled = true;

    } else if(inputThree === 'y') {
        radioDiv.style.display = 'block';
        noRadio.checked = true;
        noRadio.diabled = true;
        yesRadio.disabled = true;
    } else{
        radioDiv.style.display = 'none';
    }
}

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputOne = document.getElementById('inputOne').value;
    const inputTwo = document.getElementById('inputTwo').value;
    const inputThree = document.getElementById('inputThree').value;
    const radioSelection = document.querySelector('input[name="yesNo"]:checked') ? document.querySelector('input[name="yesNo"]:checked').value : '';

    document.getElementById('surveyResults').style.display = 'block';
    document.getElementById('resultInputOne').innerText = inputOne;
    document.getElementById('resultInputTwo').innerText = inputTwo;
    document.getElementById('resultInputThree').innerText = inputThree;
    document.getElementById('resultRadioSelection').innerText = radioSelection;
});
