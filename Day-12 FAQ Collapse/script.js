const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle =>{
    toggle.addEventListener('click',()=>{
        remove()
        toggle.parentNode.classList.add('active')
    })
})

function remove()
{
    toggles.forEach(toggle=>{
        toggle.parentNode.classList.remove('active')
    })
}