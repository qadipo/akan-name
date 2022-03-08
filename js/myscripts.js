function getInputValue(){
    var inputDate = document.getElementById("birthday").value;
    var inputGender = document.getElementById().value;
}
var dayofWeek = inputDate.getDay()

function givenName(dayofWeek){
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
}
