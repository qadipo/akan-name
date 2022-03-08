var inputDate = ''
var inputGender = ''
function getInputValue(){
    inputDate = document.getElementById("birthday").value;
    // var inputGender = document.getElementsByName('gender');
    // var inputGender=''
    if(document.getElementById("male").checked){
        inputGender = document.getElementById('male').value;

    }
    else if(document.getElementById("female").checked){
        inputGender = document.getElementById('female').value;

    }
}

var dayofWeek = inputDate.getDay();
var ccDate = inputDate.slice()


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
    return nameGiven;
}
