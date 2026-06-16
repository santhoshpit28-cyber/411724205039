console.log("A")
console.log("B")
console.log("C")
const promise =new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("HI")
   },200)
   console.log("Done")

},0)
promise.then(res=>{console.log(res)}).catch(err=>{console.log(err)})
console.log(1)
console.log(2)
function example(){
    console.log("HELLO")
}
const example1=()=>{
    const a=1;
    const b=2
    console.log(1+2);

}
setTimeout(example,3000)
setTimeout(example1,450)
