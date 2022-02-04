// AFTER UPDATE 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let errorEl = document.getElementById("error-el")
let count = 0


function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    if(count == 0) {
        myError = "You cannot save less than 1 person"
        errorEl.textContent = myError
        setTimeout(function(){
            myError = "" 
            errorEl.textContent = myError
        }, 5000)

    }
    else {

        let countStr = count + " -  "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    }

}




/* BEFORE UPDATE
let countEl = document.getElementById("count-el") //Getting the element "count-el" from Index.html file
let countTotal = document.getElementById("total-label") // Getting the element "total-label" from Index.html file
let count = 0 // Setting the count variable to 0

function increment() { // creating a function which when run will add +1 to the count variable and update the ID "count-el" in the Index.html file
    count = count + 1
    countEl.innerText = count
}

function save() { // creating a function which will change the count variable to 0 after it saves the "increment" function's total count
    console.log(count)
    count = 0
    countEl.innerText = count
}
*/



