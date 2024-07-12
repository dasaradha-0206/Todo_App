

let array=[]
function register(){
    let input=document.getElementById("input").value 
    array.push(input)
    let container=document.getElementById("container")
    let boxtwo=document.createElement('div')
    let checkbox=document.createElement('input')
    checkbox.type='checkbox'
    let para=document.createElement('p')
    let no=document.createElement('button')
    no.innerHTML = 'Del'
    para.innerHTML=input
    boxtwo.classList.add('boxtwo')
    checkbox.classList.add('input')
    no.classList.add('btn')
    boxtwo.appendChild(no)
    boxtwo.appendChild(checkbox)
    boxtwo.appendChild(para)
    container.appendChild(boxtwo)
    no.addEventListener('click', function() {
        boxtwo.classList.remove('boxtwo')
        checkbox.classList.remove('input')
        no.classList.remove('btn')
        boxtwo.parentNode.removeChild(boxtwo);
        
    
    });
  
}
