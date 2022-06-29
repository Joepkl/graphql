
// Zoekbalk repo's
const zoekInput = document.querySelector('#zoekInput')
const zoekBalk = document.querySelector('.zoekBalk')
const repositories = document.querySelectorAll('article')

zoekBalk.addEventListener('submit', zoeken)

function zoeken(e){
    e.preventDefault();
    repositories.forEach(repo =>{
        repo.classList.add('hide')
        let repositoryTitle = repo.querySelector('h2')
        if(repositoryTitle.textContent.toLowerCase().includes(zoekInput.value.toLowerCase())){
            repo.classList.remove('hide')
        }
    })
}