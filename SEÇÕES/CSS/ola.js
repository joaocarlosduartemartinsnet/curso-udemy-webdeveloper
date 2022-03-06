document.querySelectorAll(".tag").forEach(element => {
    let tagName = element.tagName.toLowerCase();


    element.style.borderColor = 'blue';
})

if(!element.classList.contains('nolabel')) {
     let label = document.createElement('label');
     label.style.borderColor = "blue"
     label.style.fontSize = "3em"
     label.style.color = "red"
     label.innerHTML = tagName
     label.insertBefore(label, element.ChildNodes[1])
}