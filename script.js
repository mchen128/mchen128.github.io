const testEntry = document.getElementById('test-entry');
const rhythmHero = document.getElementById('rhythm-hero');
const fotomatic = document.getElementById('fotomatic');
const teaCozy = document.getElementById('tea-cozy');

const projectArray = [testEntry, rhythmHero, fotomatic, teaCozy];

for (let project of projectArray) {
    project.addEventListener('mouseover', () => {
        project.children[0].children[0].style.opacity = 1;
        project.style.backgroundSize = '120%';
    })
    project.addEventListener('mouseout', () => {
        project.children[0].children[0].style.opacity = 0;
        if (project === testEntry){
            project.style.backgroundSize = '110%';
        } else {
            project.style.backgroundSize = '100%';
        }
    })
    
}
