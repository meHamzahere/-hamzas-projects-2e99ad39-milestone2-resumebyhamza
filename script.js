var _a;
// script.ts
(_a = document.getElementById('toggleSkillsButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsSection = document.getElementById('skillsSection');
    if (skillsSection) {
        // Toggle the visibility of the skills section
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
});
