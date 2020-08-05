window.onload = function() {
    console.log('file is refreshed')
    window.setTimeout(() => {
        console.log(document.getElementById('nav-1').className)
        document.getElementById('load').className = 'none'
        document.getElementById('nav-1').className = 'navbar'
    }, 3000)
}

window.addEventListener('load', () => {
    console.log('the event has been loaded')
})