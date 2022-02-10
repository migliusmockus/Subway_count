// NEW UPDATE
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let errorEl = document.getElementById("error-el")
let totalEl = document.getElementById("total-el") //Here i got the id's on different elements in the index.html file so that i can associate their functions with javascript
let count = 0

function increment() { // created an increment function which adds +1 everytime you click the increment button
    count = count + 1
    countEl.innerText = count //the label count-el shows the count
}

function total(totalStr) { //this function is responsible for logging the total amount of entries by adding the previous entry with the new one.
    totalStr = parseInt(count, 0)
    totalEl.textContent = totalStr + count
    console.log(count)
} // THIS NEEDS fixing because i cant currently get the total of entries


function save() {
    if (count == 0) {
        myError = "You cannot save less than 1 person"
        errorEl.textContent = myError
        setTimeout(function() {
            myError = ""
            errorEl.textContent = myError
        }, 4000)

    } else {
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    }

}






// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let errorEl = document.getElementById("error-el")
// let count = 0


// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// function save() {
//     if(count == 0) {
//         myError = "You cannot save less than 1 person"
//         errorEl.textContent = myError
//         setTimeout(function myFunction(){
//             myError = "" 
//             errorEl.textContent = myError
//         }, 4000)

//     }
//     else {

//         let countStr = count + " - "
//         saveEl.textContent += countStr
//         countEl.textContent = 0
//         count = 0
//     }

// }

// function saveDay() {
    
// }







