let span=document.querySelector('span')
count=parseInt(span.innerText)

function add(){
    count=count+1
    span.innerText=count
    span.style.color="blue"
    
}
function sub(){
    count=count-1
    span.innerText=count
    span.style.color="orange"
}
function reset(){
    if (count>0){
        count=0
        span.innerText=count
        span.style.color="black"
        
    }else{
        count=0
        span.innerText=count
        span.style.color="black"
    }
}