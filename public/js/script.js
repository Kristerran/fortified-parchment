// card elements
const aboutMeCard = document.querySelector('#aboutMeCard')
const resumeCard = document.querySelector('#resumeCard')
const portfolioCard = document.querySelector('#portfolioCard')
const linkCard = document.querySelector('#externalLinks')
// button elements
const aboutMeButton = document.querySelector('#aboutMe')
const resumeButton = document.querySelector('#resume')
const portfolioButton = document.querySelector('#portfolio')
const mobileButton = document.querySelector('#mobileButton')
document.addEventListener('click', function(event){
    console.log(event.target)
    if (event.target == aboutMeButton){
        aboutMeCard.classList.remove('invisible')
        resumeCard.classList.add('invisible')
        portfolioCard.classList.add('invisible')
    }
    if (event.target == resumeButton){
        resumeCard.classList.remove('invisible')
        aboutMeCard.classList.add('invisible')
        portfolioCard.classList.add('invisible')
    }
    if (event.target == portfolioButton){
        portfolioCard.classList.remove('invisible')
        resumeCard.classList.add('invisible')
        aboutMeCard.classList.add('invisible')
    }
    if (event.target == mobileButton){
        linkCard.classList.toggle('mobileInvisible')
        linkCard.classList.toggle('mobileVisible')
    }
    else{
        return
    }
    
})