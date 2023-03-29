// TO-DO: Change code to be more versatile

/* Add listeners for project buttons */

const testEntry = document.getElementById('test-entry');
const rhythmHero = document.getElementById('rhythm-hero');
const fotomatic = document.getElementById('fotomatic');
const victoryAgency = document.getElementById('victory-agency');

const projectArray = [testEntry, rhythmHero, fotomatic, victoryAgency];

for (let project of projectArray) {
    if (screen.width > 814) {
        project.addEventListener('mouseover', () => {
            project.children[0].children[0].style.opacity = 1;
            project.style.backgroundSize = '115%';
        });
        project.addEventListener('mouseout', () => {
            project.children[0].children[0].style.opacity = 0;
            if (project === testEntry){
                project.style.backgroundSize = '112%';
            } else {
                project.style.backgroundSize = '110%';
            }
        });
    }

    let popUp;
    project.addEventListener('mousedown', () => {
        switch (project) {
            case testEntry:
                popUp = document.getElementById('test-entry-popup');
                break;
            case rhythmHero:
                popUp = document.getElementById('rhythm-hero-popup');
                break;
            case fotomatic:
                popUp = document.getElementById('fotomatic-popup');
                break;
            case victoryAgency:
                popUp = document.getElementById('victory-agency-popup');
                break;
        }
        popUp.style.visibility = 'visible';
        popUp.children[0].style.top = 0;
        popUp.style.opacity = 1;
    }) 
}

/* Add listeners for x buttons */

const testEntryX = document.getElementById('test-entry-popup').children[0].children[0].children[0];
const rhythmHeroX = document.getElementById('rhythm-hero-popup').children[0].children[0].children[0];
const fotomaticX = document.getElementById('fotomatic-popup').children[0].children[0].children[0];
const victoryAgencyX = document.getElementById('victory-agency-popup').children[0].children[0].children[0];

const buttonArray = [testEntryX, rhythmHeroX, fotomaticX, victoryAgencyX];

for (let xButton of buttonArray) {
    let popUp;
    xButton.addEventListener('mousedown', () => {
        switch (xButton) {
            case testEntryX:
                popUp = document.getElementById('test-entry-popup');
                break;
            case rhythmHeroX:
                popUp = document.getElementById('rhythm-hero-popup');
                break;
            case fotomaticX:
                popUp = document.getElementById('fotomatic-popup');
                break;
            case victoryAgencyX:
                popUp = document.getElementById('victory-agency-popup');
                break;
        }
        
        popUp.style.opacity = 0;
        popUp.children[0].style.top = "2%";
        setTimeout(() => {
            popUp.style.visibility = 'hidden';
            popUp.children[0].style.top = "-2%";
        } ,500) 
    });
}

/* Add listeners for contact icons */

const gmailIcon = document.getElementById('gmail');
const linkedinIcon = document.getElementById('linkedin');
const githubIcon = document.getElementById('github');

const iconArray = [gmailIcon, linkedinIcon, githubIcon];

for (let icon of iconArray) {
    if (screen.width > 814){
        icon.addEventListener('mouseover', () => {
            if (icon === gmailIcon){
                icon.style.filter = 'drop-shadow(0 0 1rem white)';
            } else if (icon === linkedinIcon) {
                icon.style.filter = 'drop-shadow(0 0 1rem #0072b1)';
            } else if (icon === githubIcon) {
                icon.style.filter = 'drop-shadow(0 0 1rem black)';
    
            }
        });
        icon.addEventListener('mouseout', () => {
            icon.style.filter = 'drop-shadow(0 0 0 gray)';
        });
    }
}