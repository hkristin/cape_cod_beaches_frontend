document.addEventListener("DOMContentLoaded",function(){
    // call our new function in there 
    API.loadTowns()
    API.loadBeaches()
    //API.addBeaches()
    // add the form event listener to the domContentLoaded
    document.getElementById('form').addEventListener('submit', API.addBeach)
    document.getElementById('toggleTowns').addEventListener('click', toggleTowns)
    document.getElementById('toggleBeaches').addEventListener('click', toggleBeaches)
})
const toggleTowns = () => {
    document.getElementById('town-container').setAttribute('style', 'display: block')
    document.getElementById('beach-container').setAttribute('style', 'display: none')
}

const toggleBeaches = () => {
    document.getElementById('beach-container').setAttribute('style', 'display: block')
    document.getElementById('town-container').setAttribute('style', 'display: none')
}