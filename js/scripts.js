const headerToggleBtn = document.querySelector('header .toggle')
const sidebarLinks = document.querySelectorAll('.sidebar a')

// when the user clicks the toggle btn
headerToggleBtn.addEventListener('click', () => {
    toggleClassName()
})

// hides the sidebar when user clicked on sidebar links
sidebarLinks.forEach (e => {
    e.addEventListener('click', () => {
        toggleClassName()
    })
})

// Toggles the active class on sidebar
function toggleClassName() {
    let sidebar = document.querySelector('.sidebar')
    let wrapper = document.querySelector('.wrapper')
    let toggle = document.querySelector('.toggle')

    sidebar.classList.toggle('active')
    wrapper.classList.toggle('active')
    toggle.classList.toggle('active')
}

window.addEventListener('scroll', () => {
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 0)
})

// animations form Sal
sal({
    once: true,
})