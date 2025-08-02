const projects = [
  {
    id: 1,
    title: "Inscightful | Shopify Store",
    description: "A fully responsive theme was designed for this client based on the Dawn theme. Custom features include a hero section, animated cart progress bar and product page upsell",
    html: `
      <video src="Inscightful-video.webm" controls autoplay muted style="width:100%; height:500px; margin-bottom: 2rem;" poster="inscight-video-poster.jpg">
        Your browser does not support the video tag.
      </video>
      <p style="margin-bottom: 2.5rem; color: var(--dark-color); line-height: 1.8; font-size: 1.6rem;">Enhanced tech brand's Shopify store with custom features for a unique, high-converting experience. Implemented dynamic video hero, minimalist nav, immersive landing page, editable sections, custom fonts, pre-ticked upsell, and versatile animated progress bar for shipping & bundles. Aimed for engaging brand presence and increased conversion/average order value.  </br> Password: Demo</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0;">
        <img src="inscight_mockup_1.jpg" alt="Inscight Homepage Mockup" style="width: 100%; border-radius: 0.8rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <img src="inscight_mockup_2.jpg" alt="Inscight Product Page Mockup" style="width: 100%; border-radius: 0.8rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <img src="inscight_mockup_3.jpg" alt="Inscight Cart Features Mockup" style="width: 100%; border-radius: 0.8rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      </div>
    `,
    thumbnailSrc: "inscight-thumbnail.png",
    previewVideoSrc: "",
    techStack: ["JavaScript", "Liquid", "HTML", "CSS", "Premiere Pro"],
    links: [
      { type: "github", url: "https://github.com/OmarMDev/inscight-theme" },
      { type: "site", url: "https://inscightful.myshopify.com/" },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Atmos Art | Shopify Store",
    description: "Spearheaded a project to optimize a Shopify store, delivering an overhauled design, custom animated sections and vastly improved SEO.",
    html: `
      <img src="atmos_thumbnail.png" alt="Atmos Art Store Preview" style="width:100%; height:auto; border-radius: 0.8rem; margin-bottom: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <p style="margin-bottom: 2.5rem; color: var(--dark-color); line-height: 1.8; font-size: 1.6rem;">Spearheaded a project to optimize a Shopify store, delivering an overhauled design, custom animated sections and vastly improved SEO. This collaboration resulted in a highly performant and visually stunning store that is now driving exceptional business results.

(note the website is currently being redesigned by a third party, please refer to the attached screenshots)</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0;">
        <img src="atmos_mockup_1.jpg" alt="Atmos Art Homepage Mockup" style="width: 100%; border-radius: 0.8rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <img src="atmos_mockup_2.jpg" alt="Atmos Art Product Page Mockup" style="width: 100%; border-radius: 0.8rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      </div>
    `,
    thumbnailSrc: "atmos_thumbnail.png",
    previewVideoSrc: "",
    techStack: ["JavaScript", "Liquid", "HTML", "CSS", "Technical SEO"],
    links: [{ type: "site", url: "https://www.atmos.art/" }],
    featured: true,
  },
  {
    id: 3,
    title: "Manhattan Class | Shopify Store",
    description: "Classy store design and A to Z store setup for a zero-proof beverage brand based on a Figma mockup.",
    html: `
      <img src="manhattan_thumbnail.png" alt="Manhattan Class Store Preview" style="width:100%; height:auto; border-radius: 0.8rem; margin-bottom: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <p style="margin-bottom: 2.5rem; color: var(--dark-color); line-height: 1.8; font-size: 1.6rem;">Classy store design and A to Z store setup for a zero-proof beverage brand.

They store design is based on a Figma mockup, and implementation follows a minimalist style.

The setup also included payment system, store policies, cookie and tracking for analytics, product upload, and all other back-end and operations related settings.

We concluded with a call where I briefed and trained the client on the admin panel to ensure a seamless experience moving forward with operations.
</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0;">
        <img src="manhattan_mockup_1.jpg" alt="Manhattan Class Homepage Mockup" style="width: 100%; border-radius: 0.8rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <img src="manhattan_mockup_2.jpg" alt="Manhattan Class Product Page Mockup" style="width: 100%; border-radius: 0.8rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      </div>
    `,
    thumbnailSrc: "manhattan_thumbnail.png",
    previewVideoSrc: "",
    techStack: ["JavaScript", "Liquid", "HTML", "CSS", "Figma", "Page Design", "Landing page"],
    links: [],
    featured: true,
  },
  {
    id: 4,
    title: "Shopify Custom Theme",
    description: "A fully customized theme that I made for a client. It includes a custom hero section, navbar and product page.",
    html: `
      <iframe src="https://www.youtube.com/embed/1TpVVIKO5Vw?autoplay=1" title="Shopify Custom Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:500px; margin-bottom: 2rem;"></iframe>
      <p style="margin-bottom: 2.5rem; color: var(--dark-color); line-height: 1.8; font-size: 1.6rem;">A custom theme demonstrating some of the features I made for a client's custom theme. This client needed a custom theme for their store that offered features beyond what it available with the free themes. I have done this by using the free themes as a base, and building on top of that with some custom code to implement custom features as per the client's needs. This included custom blocks and sections, including the flagship landing page.</p>
    `,
    thumbnailSrc: "arbirtat-thumbnail.png",
    previewVideoSrc: "",
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

  // Clear previous content
  modalVideoContainer.innerHTML = "";
  modalInfo.innerHTML = "";

  // Set the complete modal content in one container
  modalInfo.innerHTML = `
    <h2 class="project-title" style="font-size: 3rem; margin-bottom: 2rem;">${project.title}</h2>
    
    <div style="margin-bottom: 3rem;">
      ${project.html}
    </div>
    
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
  document.documentElement.style.overflow = "hidden";
}

// Close modal function
function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  const modalInfo = document.getElementById("modal-info");

  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";

  // Clear content to stop any videos from playing
  setTimeout(() => {
    modalInfo.innerHTML = "";
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
});
