const interval =setInterval(counterFunction, 1000)
let functionDisable = true

document.getElementById("minus").addEventListener("click", subtract)
document.getElementById("plus").addEventListener("click", add)
document.getElementById("heart").addEventListener("click", heartLog)
document.getElementById("pause").addEventListener("click", pause)
document.addEventListener("submit", comment)
let counter =0
function counterFunction(){
    if (functionDisable){
   counter += 1
    document.getElementById("counter").innerText = counter
    }
}

 

function subtract (){
   if (functionDisable){
    counter -=  1
    document.getElementById("counter").innerText = counter 
    }
}

function add (){
    if (functionDisable){
    counter +=  1
    document.getElementById("counter").innerText = counter
    }
}

const counterArray= []
function heartLog(){
    if (functionDisable){ 
    let count ={}
    let ul = document.getElementsByClassName("likes")[0]
    let li = document.createElement("li")
    counterArray.push(counter)
    counterArray.forEach(number => {
        count[number] = (count[number] || 0) + 1;})
    li.textContent = `${counter} has been liked ${count[counter]} time`
    ul.append(li)
    }
}

let pauseBool = true
function pause(){
    if (pauseBool){
        document.getElementById("pause").innerText = "resume"
        functionDisable = false
        pauseBool = false  
        return 
    }
    document.getElementById("pause").innerText = "pause"
    functionDisable = true
    pauseBool = true
}

function comment(e){
    e.preventDefault()
    if (functionDisable){ 
    let list = document.getElementById("list")
    let p = document.createElement("p")
    p.textContent = document.getElementById("comment-input").value
    list.append(p)
    }
}

