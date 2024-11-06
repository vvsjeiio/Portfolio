// DARK MODE -------------------

const button = document.querySelector('.darkmode');

button.addEventListener('click', () => {
    // Select image to swap
    const darkMode = button.querySelector('.show');
    const lightMode = button.querySelector('.hide');

    // Invert show & hide class
    darkMode.classList.remove('show');
    darkMode.classList.add('hide');

    lightMode.classList.remove('hide');
    lightMode.classList.add('show');

    // Swap main colors
    const root = document.documentElement;
    const currentBlack = getComputedStyle(root).getPropertyValue('--night-mode-black');
    const currentWhite = getComputedStyle(root).getPropertyValue('--night-mode-white');
    // Swap secondary colors
    const secondaryBlack = getComputedStyle(root).getPropertyValue('--light-mode-black');
    const secondaryWhite = getComputedStyle(root).getPropertyValue('--light-mode-white');

    // Set colors
    root.style.setProperty('--night-mode-black', currentWhite.trim());
    root.style.setProperty('--night-mode-white', currentBlack.trim());
    root.style.setProperty('--light-mode-black', secondaryWhite.trim());
    root.style.setProperty('--light-mode-white', secondaryBlack.trim());


    //Change icon color
    var icons = document.querySelectorAll(".icon");
    icons.forEach(function (icon) {
        // Switch order if landing mode is reversed
        if (document.body.classList.contains("dark-mode")) {
            icon.style.filter = "brightness(0%) saturate(0%)  invert(100%) brightness(98%)"; // White

        } else {
            icon.style.filter = "invert(10%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)"
        }
    });
    document.body.classList.toggle("dark-mode");
});

// DOWNLOAD BUTTON -----------

document.getElementById("download-cv").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "./data/CV_Baptiste_BLET_v4.pdf";
    link.download = "CV_Baptiste_BLET(développeur web).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// SLIDER SIZE ---------------

document.addEventListener("DOMContentLoaded", function () {
    const skillsTagContainer = document.querySelector(".soft-skills-container .skills-tag-container");
    const softSkillsContainer = document.querySelector(".soft-skills-container");

    if (skillsTagContainer && softSkillsContainer) {
        // Gets the width of skills-tag-container
        const totalWidth = skillsTagContainer.offsetWidth;

        // Apply 50% of this width to soft-skills-container
        softSkillsContainer.style.width = (totalWidth / 3) + "px";
    }
});

// Kepp responsivity
window.addEventListener("resize", function () {
    const totalWidth = skillsTagContainer.offsetWidth;
    softSkillsContainer.style.width = (totalWidth / 3) + "px";
});

// COPY BUTTON -----------------

document.querySelectorAll('.button-copy').forEach(button => {
    button.addEventListener('click', () => {
        const contentToCopy = button.closest('.copy').querySelector('h4').textContent;
        navigator.clipboard.writeText(contentToCopy).then(() => {
            const copiedMessage = button.nextElementSibling;
            copiedMessage.style.opacity = '1';
            setTimeout(() => {
                copiedMessage.style.opacity = '0';
            }, 1000);
        }).catch(err => {
            console.error('Copy error :', err);
        });
    });
});

// Position for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents default behaviour

        const targetId = this.getAttribute('href').substring(1); // Retrieves the target ID
        const targetElement = document.getElementById(targetId); // Selects the target element

        if (targetElement) {
            // Calculates the position to centre the section
            const offsetPosition = targetElement.offsetTop - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);

            // Scrolls to calculated position
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});