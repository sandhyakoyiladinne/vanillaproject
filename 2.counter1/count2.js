let count=0;
const value =document.getElementById("value")
const increment =document.getElementById("increment")
const reset =document.getElementById("reset")
const decrement =document.getElementById("decrement")

increment.addEventListener("click",function(){
    count++;
    counter()
})
decrement.addEventListener("click",function(){
    count--;
    counter()
})
reset.addEventListener("click",function(){
    count=0;
    counter()
})

function counter(){
    value.textContent =count
    if (count>0){
        value.style.color="blue"
    }
    else if (count<0){
        value.style.color="orange"
    }
    else{
        value.style.color="black"
    }
}