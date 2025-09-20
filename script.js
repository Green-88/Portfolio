// Load particles background
tsParticles.load("tsparticles", {
  background: { color: "#000" },
  particles: {
    number: { value: 150 },
    color: { value: ["#0ff", "#9333ea", "#facc15"] },
    shape: { type: "circle" },
    opacity: { value: 0.8, random: true },
    size: { value: { min: 1, max: 3 } },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: "out",
      angle: { offset: 45, value: 360 },
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#555",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: ["grab", "repulse"] },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.7 } },
      repulse: { distance: 120, duration: 0.4 },
      push: { quantity: 4 }
    }
  }
});

// Toggle menu in mobile view
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Scroll spy & section reveal
window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.scrollY + 150;

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (current && link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Modal open/close
function openModal(title, desc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}
