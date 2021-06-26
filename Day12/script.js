const ul = document.querySelector('.list')
const todo = document.querySelector('.ip')
const add = document.querySelector('.btn')
const del=document.querySelectorAll('#deleteBtn')

add.addEventListener('click', e => {
    let li = document.createElement('li')
    if(todo.value === ""){
        window.alert("Aise kaise!! kuch to add krna padega.")
        return
    }
    li.innerHTML=todo.value
    let img = document.createElement('img')
    img.setAttribute('src','./del.svg')
    img.setAttribute('class','deleteBtn')
    li.append(img)
    ul.appendChild(li)
    todo.value=""
    console.log(del);
    img.addEventListener("click", e => {
        ul.removeChild(li)})
})


