let userInfo = {}
let charactersCount = document.getElementsByClassName("words").item(0).textContent.trim().replaceAll(' ','').length
let inputWords = document.getElementById('input')
let wordsList = document.getElementsByClassName("words").item(0)
let scoreValueObject = document.getElementsByClassName('score-value').item(0)
scoreValueObject.textContent = wordsList.childElementCount

console.log(`You have about ${wordsList.childElementCount} words`)

function checkMatch(){
    if (inputWords.value.trim() === wordsList.firstElementChild.textContent){
        wordsList.removeChild(wordsList.firstElementChild)
        scoreValueObject.textContent = scoreValueObject.textContent * 1 - 1
        inputWords.value = ''
        if (scoreValueObject.textContent > '1'){
            wordsList.firstElementChild.classList.add("highlight")
        }
        return(true)
    }
}

function finalResult(){
    if (wordsList.textContent.trim() == ''){
        clearInterval(setInervalTimer)
        userInfo.time = elapsedSeconds
        userInfo.wpm = Math.round(((charactersCount/5) / (elapsedSeconds / 60)))
        // The Final results hovering page 
        finalResultsPage = document.getElementsByClassName("results").item(0)
        finalResultsPage.childNodes.item(1).textContent = `The user name is : ${userInfo.name}`
        finalResultsPage.childNodes.item(3).textContent = `The user time is : ${userInfo.time}s`
        finalResultsPage.childNodes.item(5).textContent = `The user words per minute ratio is : ${userInfo.wpm}`
        finalResultsPage.classList.remove("hidden")
    }
}

function checkWord(e) {
    if ((e.code == 'Space') && (scoreValueObject.textContent != '0')) {
        if (checkMatch() == true) {
            inputWords.style.backgroundColor = ""
            finalResult()
        }
        else {
            inputWords.style.backgroundColor = "red"
        }
    }
}
// Note : the 'focusout' event only works when the specified element gains foucs , then loses focus
inputWords.addEventListener("keypress",checkWord,false)

let elapsedSeconds = 0
function userCheck(){
    let overlayForm = document.getElementsByClassName("user-name").item(0)
    let usernameInput = document.getElementById("username")
    if (usernameInput.value != ''){
        userInfo.name = usernameInput.value
        overlayForm.classList.add("hidden")
        setInervalTimer = setInterval(function(){console.log(elapsedSeconds +=1)},1000)
    }
}
let singupButton = document.getElementById("sign-up")
singupButton.addEventListener("click",userCheck,false)


// function checkMatch(){
//     for (let i=0 ; i<wordsArray.length ; i++) {
//         if (inputWords.value.trim() == wordsArray[i]){
//             let newWordsBulk = wordsBulk.textContent.replace((inputWords.value),'')
//             document.getElementsByClassName('words').item(0).textContent =  newWordsBulk
//             // here there might be another way (faster one) , i assume that if there was an alternative way  , 
//             // then it would probably has something to do with the arrary object , and some sort of a remove / pop method 
//             wordsArray = newWordsBulk.split(' ')
//             inputWords.value = ''
//             return (true)
//             // break
//             // Here as you can see the return statement lies inside a condiditiona statement < for loop statement < function 
//             // and once (the vlaue was found / conditional statement evaluated to true) , the reutrn statement broke out of the loop
//             // , we didn't have to use any preceding / subsequent break statement  , by which when you use the return / break statements together 
//             // vsCode notifies you with a pop-up stating that 'Unreachable code detected'
//         }
//     }
// }


// Extra function to 'convert' a bulk of 'text' into a 'separate 'html elements' of text'

// function textBulkConverter(textBulkClassName){
//     let wordsBulk  = document.getElementsByClassName(textBulkClassName).item(0).textContent.trim()
//     let wordsArray = wordsBulk.split(' ')
//     for (let i=0 ; i < wordsArray.length ; i++) {
//         // This innerHtml method SHOULDN'T be used , but anyways k
//         document.getElementsByClassName("words").item(0).innerHTML += `\n<p class='word'>${wordsArray[i]}</p>`
//     }
// }
