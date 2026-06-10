console.log("Print statement")
const a=20;
const b=30;
console.log(a+b)
const str="santhosh"
console.log(str)
const arr=[1,2.4,"String",true]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr[1]=3.4
console.log(arr[1])
arr.push("santhosh")
console.log(arr)
arr.pop()
console.log(arr)

function example(){
    console.log("I am Writing Something")
}
const ptag=document.getElementById("ptag")
ptag.innerHTML="print statement"

const input=document.getElementById("input")
const output=document.getElementById("inputfield")
input.addEventListener("input",()=>{
    output.textContent=input.value  
})

const first=document.createElement("h1")
first.textContent="some text"
document.body.appendChild(first)
first.remove()
