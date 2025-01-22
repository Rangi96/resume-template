document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Summary
    const summary = document.createElement('p');
    summary.className = 'text-xs mb-3';
    summary.textContent = resumeData.summary;
    content.appendChild(summary);

    // Experience
    const experienceSection = createSection('Professional Experience');
    resumeData.experience.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'mb-2';

        const header = document.createElement('div');
        header.className = 'flex justify-between items-start text-xs';
        header.innerHTML = `
            <span class="font-bold">${job.title} - ${job.company}</span>
            <span class="text-gray-600">${job.dates}</span>
        `;

        const responsibilities = document.createElement('ul');
        responsibilities.className = 'list-disc ml-4 text-xs text-gray-600';
        job.responsibilities.forEach(resp => {
            const li = document.createElement('li');
            li.textContent = resp;
            responsibilities.appendChild(li);
        });

        jobDiv.appendChild(header);
        jobDiv.appendChild(responsibilities);
        experienceSection.appendChild(jobDiv);
    });

    // Education
    const educationSection = createSection('Education');
    resumeData.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'text-xs mb-1';
        eduDiv.innerHTML = `
            <span class="font-semibold">${edu.degree}</span> - ${edu.school} (${edu.date})
        `;
        educationSection.appendChild(eduDiv);
    });

    // Certifications
    const certSection = createSection('Certifications');
    const certDiv = document.createElement('div');
    certDiv.className = 'text-xs';
    certDiv.textContent = resumeData.certifications.join(' | ');
    certSection.appendChild(certDiv);

    // Skills
    const skillsSection = createSection('Skills');
    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'grid grid-cols-2 gap-0.5 text-xs';
    resumeData.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'leading-tight';
        skillDiv.textContent = skill;
        skillsGrid.appendChild(skillDiv);
    });
    skillsSection.appendChild(skillsGrid);

    // Append all sections
    [experienceSection, educationSection, certSection, skillsSection].forEach(section => {
        content.appendChild(section);
    });
});

function createSection(title) {
    const section = document.createElement('section');
    section.className = 'mb-3';
    
    const heading = document.createElement('h2');
    heading.className = 'text-sm font-bold mb-1 border-b border-gray-300';
    heading.textContent = title;
    
    section.appendChild(heading);
    return section;
}