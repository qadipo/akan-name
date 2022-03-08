var inputDate = '';
var inputGender = '';

function getInputValueDate(){
    inputDate = document.getElementById("birthday").value.toString();
    // var inputGender = document.getElementsByName('gender');
    // var inputGender=''
   return inputDate;
}

function getInputValueGender(){
    if(document.getElementById("male").checked){
        inputGender = document.getElementById('male').value;

    }
    else if(document.getElementById("female").checked){
        inputGender = document.getElementById('female').value;

    }
    return inputGender;
}

function genderValidation(inputGender){
    if (inputGender == ''){
        alert('Please choose your gender then submit');
    }
    return inputGender;
}
function dateValidation(inputDate){
    var dayDate = parseInt(inputDate.slice(0,2));
    // if(isNaN(dayDate)){
    //     alert("Date must be a number");  
    // } 
    if(dayDate <= 0 || dayDate > 31){
        alert("Input Invalid");
    } else {
        return dayDate;
    }
}

function monthValidation(inputDate){
    var month = parseInt(inputDate.slice(3,5));
    // // if (isNaN(month)){
    // //     alert("Month must be a number")
    // } else 
    if (month <= 0 || month > 12){
        alert("Invalid month");
    } else {
        return month;
    }
}

function yearValidation(inputDate){
    var year = parseInt(inputDate.slice(6,10));
    // if (isNaN(year)){
    //     alert('Year must be a number');
    // } else 
    // if (year.length != 4){
    //     alert('Year must have four digits');
    // } else {
        return year;
    //}
}
// Get day of the week function
function dayofWeekFunction(inputDate){
    var dayDate = inputDate.slice(0,2);
    var month = inputDate.slice(3,5);
    var year = inputDate.slice(6,10);

    var CC = parseInt(year.slice(0,2));
    var YY = parseInt(year.slice(2,4));
    var MM = parseInt(month);
    var DD = parseInt(dayDate);

    var dayofWeek = ((((CC/4) - 2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7);
    dayofWeek = dayofWeek.toFixed(0)

    return dayofWeek;
}

function givenName(dayofWeek, inputGender){
    if (inputGender == "Male"){
        var nameGiven = '';
        if(dayofWeek == 0){
            nameGiven = "Kwasi";
        } else if (dayofWeek == 1) {
            nameGiven = "Kwadwo"
        } else if (dayofWeek == 2) {
            nameGiven = "Kwabena"
        } else if (dayofWeek == 3) {
            nameGiven = "Kwaku"
        } else if (dayofWeek == 4) {
            nameGiven = "Yaw"
        } else if (dayofWeek == 5) {
            nameGiven = "Kofi"
        } else if (dayofWeek == 6) {
            nameGiven = "Kwame"
        }
    } else if (inputGender == "Female") {
        if(dayofWeek == 0){
            nameGiven = "Akosua";
        } else if (dayofWeek == 1) {
            nameGiven = "Adwoa"
        } else if (dayofWeek == 2) {
            nameGiven = "Abenaa"
        } else if (dayofWeek == 3) {
            nameGiven = "Akua"
        } else if (dayofWeek == 4) {
            nameGiven = "Yaa"
        } else if (dayofWeek == 5) {
            nameGiven = "Afua"
        } else if (dayofWeek == 1) {
            nameGiven = "Ama"
        }
    }
    return nameGiven;
}

function outputDisplay(nameGiven){
    window.alert("Your Akan name is " + nameGiven);
}

function orderOperation(){
    var inputDate=getInputValueDate();
    var gender=getInputValueGender();
    genderValidation(gender);
    dateValidation(inputDate);
    monthValidation(inputDate);
    yearValidation(inputDate);
    outputDisplay(givenName(dayofWeekFunction(inputDate), gender));
}