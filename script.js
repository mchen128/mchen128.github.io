// TO-DO: Change code to be more versatile please

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

    project.addEventListener('mousedown', () => {
        switch (project) {
            case testEntry:
                document.getElementById('test-entry-popup').style.visibility = 'visible';
                break;
            case rhythmHero:
                document.getElementById('rhythm-hero-popup').style.visibility = 'visible';
                break;
            case fotomatic:
                document.getElementById('fotomatic-popup').style.visibility = 'visible';
                break;
            case victoryAgency:
                document.getElementById('victory-agency-popup').style.visibility = 'visible';
                break;
        }
    }) 
}

/* Add listeners for x buttons */

const testEntryX = document.getElementById('test-entry-popup').children[0].children[0].children[0];
const rhythmHeroX = document.getElementById('rhythm-hero-popup').children[0].children[0].children[0];
const fotomaticX = document.getElementById('fotomatic-popup').children[0].children[0].children[0];
const victoryAgencyX = document.getElementById('victory-agency-popup').children[0].children[0].children[0];

const buttonArray = [testEntryX, rhythmHeroX, fotomaticX, victoryAgencyX];

for (let xButton of buttonArray) {
    xButton.addEventListener('mousedown', () => {
        switch (xButton) {
            case testEntryX:
                document.getElementById('test-entry-popup').style.visibility = 'hidden';
                break;
            case rhythmHeroX:
                document.getElementById('rhythm-hero-popup').style.visibility = 'hidden';
                break;
            case fotomaticX:
                document.getElementById('fotomatic-popup').style.visibility = 'hidden';
                break;
            case victoryAgencyX:
                document.getElementById('victory-agency-popup').style.visibility = 'hidden';
                break;
        }
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