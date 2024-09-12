// script.ts
document.getElementById('toggleSkillsButton')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('skillsSection');
    if (skillsSection) {
        // Toggle the visibility of the skills section
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    }
});
