document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: 'CSS Effects Showcase',
            description: 'A webpage showcasing various CSS effects.',
            url: 'https://github.com/JayFeezie/css-effects-showcase'
        },
        {
            name: 'QRGen',
            description: 'A simple QR code generator made with Python for my borther-in-law.'
            , url: 'https://github.com/JayFeezie/qrGen'
        },
        {
            name: 'Dotfiles',
            description: 'My personal config files for hyprland, hyprpaper, waybar, and wofi.'
            , url: 'https://github.com/JayFeezie/hyprland-dotfiles'
        },
        {
            name: 'Shell Stats',
            description: 'A terminal script that displays basic system metrics.'
            , url: 'https://github.com/JayFeezie/shell-stats'
        }
    ];

    const projectGrid = document.querySelector('.project-grid');

    projects.forEach(project => {
        // Create a link wrapper so the whole card is clickable
        const projectLink = document.createElement('a');
        projectLink.classList.add('project-link');
        projectLink.href = project.url || '#';
        projectLink.target = '_blank';
        projectLink.rel = 'noopener noreferrer';
        projectLink.setAttribute('aria-label', `Open ${project.name} in a new tab`);

        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const projectName = document.createElement('h4');
        projectName.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectCard.appendChild(projectName);
        projectCard.appendChild(projectDescription);

        projectLink.appendChild(projectCard);
        projectGrid.appendChild(projectLink);
    });
});
