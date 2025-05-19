const projects = [
  {
    id: 1,
    title: "Shopify Store Setup",
    description: "A fully responsive theme was designed for this client based on the Dawn theme. Custom features include a hero section, animated cart progress bar and product page upsell",
    longDescription: "Enhanced tech brand's Shopify store with custom features for a unique, high-converting experience. Implemented dynamic video hero, minimalist nav, immersive landing page, editable sections, custom fonts, pre-ticked upsell, and versatile animated progress bar for shipping & bundles. Aimed for engaging brand presence and increased conversion/average order value.",
    thumbnailSrc: "inscight-thumbnail.png",
    previewVideoSrc: "/videos/ecommerce-preview.webm",
    videoSrc: {
      type: "youtube",
      url: "https://www.youtube.com/embed/pouAW3I3vZc",
    },
    techStack: ["JavaScript", "Liquid", "HTML", "CSS", "Premiere Pro"],
    links: [{ type: "github", url: "https://github.com/OmarMDev/inscight-theme" }],
    featured: true,
  },
  {
    id: 2,
    title: "Shopify Custom Theme",
    description: "A fully customized theme that I made for a client. It includes a custom hero section, navbar and product page.",
    longDescription: "A custom theme demonstrating some of the features I made for a client's custom theme. This client needed a custom theme for their store that offered features beyond what it available with the free themes. I have done this by using the free themes as a base, and building on top of that with some custom code to implement custom features as per the client's needs. This included custom blocks and sections, including the flagship landing page.",
    thumbnailSrc: "arbirtat-thumbnail.png",
    previewVideoSrc: "/videos/ai-generator-preview.webm",
    videoSrc: {
      type: "youtube",
      url: "https://www.youtube.com/embed/1TpVVIKO5Vw",
    },
    techStack: ["JavaScript", "Liquid", "HTML", "CSS", "Photoshop", "Figma"],
    links: [{ type: "github", url: "https://github.com/OmarMDev/Arbirtat-theme" }],
    featured: true,
  },
];

// Function to create project cards
function createProjectCards() {
  const projectsGrid = document.getElementById("projects-grid");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-project-id", project.id);

    projectCard.innerHTML = `
          <div class="project-video-container">
            <img src="${project.thumbnailSrc}" alt="${project.title}" class="project-thumbnail">
            <video src="${project.previewVideoSrc}" class="project-preview-video" muted loop></video>
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
              ${project.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
            </div>
            <div class="project-links">
              ${project.links
                .map(
                  (link) => `
                <a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer">
                  ${
                    link.type === "github"
                      ? `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Repository
                  `
                      : `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Live Demo
                  `
                  }
                </a>
              `
                )
                .join("")}
            </div>
          </div>
        `;

    projectsGrid.appendChild(projectCard);

    // Play preview video on hover
    const previewVideo = projectCard.querySelector(".project-preview-video");

    projectCard.addEventListener("mouseenter", () => {
      previewVideo.play();
    });

    projectCard.addEventListener("mouseleave", () => {
      previewVideo.pause();
      // Reset video to start for next hover
      previewVideo.currentTime = 0;
    });

    // Add click event to open modal
    projectCard.addEventListener("click", (e) => {
      // Only open modal if not clicking on a link
      if (!e.target.closest(".project-link")) {
        openProjectModal(project);
      }
    });
  });
}

// Function to open project modal
function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  const modalVideoContainer = document.getElementById("modal-video-container");
  const modalInfo = document.getElementById("modal-info");

  // Set video content
  let videoHtml = "";
  if (project.videoSrc.type === "youtube") {
    videoHtml = `<iframe src="${project.videoSrc.url}?autoplay=1" title="${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:500px;"></iframe>`;
  } else if (project.videoSrc.type === "vimeo") {
    videoHtml = `<iframe src="${project.videoSrc.url}?autoplay=1" title="${project.title}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%; height:500px;"></iframe>`;
  } else if (project.videoSrc.type === "webm") {
    videoHtml = `<video src="${project.videoSrc.url}" controls autoplay style="width:100%; height:500px;"></video>`;
  }

  modalVideoContainer.innerHTML = videoHtml;

  // Set modal info content
  modalInfo.innerHTML = `
        <h2 class="project-title" style="font-size: 3rem; margin-bottom: 2rem;">${project.title}</h2>
        <p style="margin-bottom: 2.5rem; color: var(--dark-color); line-height: 1.8; font-size: 1.6rem;">${project.longDescription}</p>
        
        <div style="margin: 3rem 0;">
          <h3 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--dark-color);">Technologies Used</h3>
          <div class="tech-stack" style="margin-bottom: 3rem;">
            ${project.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
          </div>
        </div>
        
        <div style="display: flex; gap: 2rem; margin-top: 3rem;">
          ${project.links
            .map(
              (link) => `
            <a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer" style="padding: 1rem 2rem; background: rgba(114, 82, 234, 0.1); border-radius: 0.6rem; display: inline-flex; align-items: center; gap: 1rem; transition: all 0.2s ease;">
              ${
                link.type === "github"
                  ? `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Repository
              `
                  : `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Visit Live Demo
              `
              }
            </a>
          `
            )
            .join("")}
        </div>
      `;

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal function
function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  const modalVideoContainer = document.getElementById("modal-video-container");

  modal.classList.remove("active");
  document.body.style.overflow = "auto";

  // Clear video to stop playback
  setTimeout(() => {
    modalVideoContainer.innerHTML = "";
  }, 300);
}

// Event listener for close button
document.getElementById("modal-close").addEventListener("click", closeProjectModal);

// Close modal when clicking outside the content
document.getElementById("project-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeProjectModal();
  }
});

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  createProjectCards();

  // GSAP animations
  gsap.from(".section-header", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".project-card", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.3,
  });

  // Glow effect follows mouse
  document.addEventListener("mousemove", (e) => {
    gsap.to(".glow-1", {
      x: e.clientX / 8,
      y: e.clientY / 8,
      duration: 1.5,
    });

    gsap.to(".glow-2", {
      x: -e.clientX / 12,
      y: -e.clientY / 12,
      duration: 2,
    });
  });
});
