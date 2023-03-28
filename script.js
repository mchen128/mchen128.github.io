const testEntry = document.getElementById('test-entry');
const rhythmHero = document.getElementById('rhythm-hero');
const fotomatic = document.getElementById('fotomatic');
const victoryAgency = document.getElementById('victory-agency');

const projectArray = [testEntry, rhythmHero, fotomatic, victoryAgency];

for (let project of projectArray) {
    project.addEventListener('mouseover', () => {
        project.children[0].children[0].style.opacity = 1;
        project.style.backgroundSize = '120%';
    });
    project.addEventListener('mouseout', () => {
        project.children[0].children[0].style.opacity = 0;
        if (project === testEntry){
            project.style.backgroundSize = '110%';
        } else {
            project.style.backgroundSize = '100%';
        }
    });
}

const gmailIcon = document.getElementById('gmail');
const linkedinIcon = document.getElementById('linkedin');
const githubIcon = document.getElementById('github');

const iconArray = [gmailIcon, linkedinIcon, githubIcon];

for (let icon of iconArray) {
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