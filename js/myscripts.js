var inputDate = ''
var inputGender = ''
function getInputValue(){
    inputDate = document.getElementById("birthday").value.toString();
    // var inputGender = document.getElementsByName('gender');
    // var inputGender=''
    if(document.getElementById("male").checked){
        inputGender = document.getElementById('male').value;

    }
    else if(document.getElementById("female").checked){
        inputGender = document.getElementById('female').value;

    }
}

function genderValidation(inputGender){
    if (inputGender == ''){
        alert('Please choose your gender then submit');
    }
}

function dateValidation(inputDate){
    var dayDate = inputDate.slice(0,2);
    if(isNan(dayDate)){
        alert("Date must be a number");  
    } else if(parseInt(dayDate) <= 0 || parseInt(dayDate) > 31){
        alert("Input Invalid");
    } else {
        return dayDate;
    }
}

function monthValidation(month){
    var month = inputDate.slice(3,5);
    if (isNan(month)){
        alert("Month must be a number")
    } else if (parseInt(month) <= 0 || parseInt(month) > 12){
        alert("Invalid month");
    } else {
        return month;
    }
}

function yearValidation(year){
    var year = inputDate.slice(6,10);
    if (isNan(year)){
        alert('Year must be a number');
    } else if (year.length != 4){
        alert('Year must have four digits');
    } else {
        return year;
    }
}

// Get day of the week function
function dayofWeekFunction(dayDate, month, year){
    var CC = parseInt(year.slice(0,2));
    var YY = parseInt(year.slice(2,4));
    var MM = parseInt(month);
    var DD = parseInt(dayDate);

    var dayofWeek = ((((CC/4) - 2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7);

    return dayofWeek;
}

function givenName(dayofWeek, inputGender){
    if (inputGender == "Male"){
        var nameGiven = '';
        if(dayofWeek === 0){
            nameGiven = "Kwasi";
        } else if (dayofWeek === 1) {
            nameGiven = "Kwadwo"
        } else if (dayofWeek === 2) {
            nameGiven = "Kwabena"
        } else if (dayofWeek === 3) {
            nameGiven = "Kwaku"
        } else if (dayofWeek === 4) {
            nameGiven = "Yaw"
        } else if (dayofWeek === 5) {
            nameGiven = "Kofi"
        } else (dayofWeek === 1) {
            nameGiven = "Kwame"
        }
    } else {
        if(dayofWeek === 0){
            nameGiven = "Akosua";
        } else if (dayofWeek === 1) {
            nameGiven = "Adwoa"
        } else if (dayofWeek === 2) {
            nameGiven = "Abenaa"
        } else if (dayofWeek === 3) {
            nameGiven = "Akua"
        } else if (dayofWeek === 4) {
            nameGiven = "Yaa"
        } else if (dayofWeek === 5) {
            nameGiven = "Afua"
        } else (dayofWeek === 1) {
            nameGiven = "Ama"
        }
    }
    return alert("Your Akan name is " + nameGiven);
}

function operation1(){
    getInputValue();
    genderValidation(inputGender);
    dateValidation(inputDate);
    monthValidation(month);
    yearValidation(year);
    givenName(dayofWeek, inputGender)
}
