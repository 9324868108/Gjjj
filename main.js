
function animateOnScroll() {
  document.querySelectorAll(
    '.trust-item, .testimonial-card, .talent-card'
  ).forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// AI DEMO: Show animated cards on click
const talentSamples = [
  {
    img: "assets/avatar1.png",
    name: "Aida R.",
    skills: ["UI/UX", "Figma", "React Native"],
    rating: "⭐ 4.9",
    price: "$38/hr"
  },
  {
    img: "assets/avatar2.png",
    name: "Jay K.",
    skills: ["Fullstack", "Node.js", "TypeScript"],
    rating: "⭐ 5.0",
    price: "$45/hr"
  },
  {
    img: "assets/avatar3.png",
    name: "Lina M.",
    skills: ["Branding", "Illustrator", "AI Art"],
    rating: "⭐ 4.8",
    price: "$33/hr"
  }
];
document.getElementById('ai-suggest-btn').onclick = function() {
  const matches = document.getElementById('ai-matches');
  matches.innerHTML = '';
  talentSamples.forEach((t, i) => {
    setTimeout(()=>{
      const card = document.createElement('div');
      card.className = 'ai-card';
      card.style.animationDelay = (i*0.13)+'s';
      card.innerHTML = `
        <img src="${t.img}" alt="AI profile"/>
        <div class="ai-card-info">
          <div class="ai-card-name">${t.name}</div>
          <div class="ai-card-skills">${t.skills.join(', ')}</div>
          <div class="ai-card-rating">${t.rating}</div>
        </div>
        <div class="ai-card-price">${t.price}</div>
        <button class="ai-card-invite">Invite</button>
      `;
      matches.appendChild(card);
    }, i*180);
  });
}

// Animated stats (Global Impact)
function animateStat(id, end, duration, isFloat = false) {
  const el = document.getElementById(id);
  if(!el) return;
  let start = 0;
  const increment = (end - start) / (duration * 60);
  let current = start;
  function update() {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      el.textContent = isFloat ? end.toFixed(1) : Math.round(end);
      return;
    }
    el.textContent = isFloat ? current.toFixed(1) : Math.round(current);
    requestAnimationFrame(update);
  }
  update();
}
window.addEventListener('DOMContentLoaded', () => {
  animateStat('stat-countries', 97, 1.2);
  animateStat('stat-speed', 0.9, 1.2, true);
  animateStat('stat-jobs', 173000, 1.2);
});

// Talent Gallery Carousel
const talentGallery = [
  {
    img: "assets/avatar1.png",
    name: "Aida R.",
    skills: ["UI/UX", "Figma", "React Native"],
    rating: "⭐ 4.9",
    price: "$38/hr"
  },
  {
    img: "assets/avatar2.png",
    name: "Jay K.",
    skills: ["Fullstack", "Node.js", "TypeScript"],
    rating: "⭐ 5.0",
    price: "$45/hr"
  },
  {
    img: "assets/avatar3.png",
    name: "Lina M.",
    skills: ["Branding", "Illustrator", "AI Art"],
    rating: "⭐ 4.8",
    price: "$33/hr"
  },
  {
    img: "assets/avatar4.png",
    name: "Rahul T.",
    skills: ["Backend", "Go", "AWS"],
    rating: "⭐ 4.9",
    price: "$42/hr"
  }
];
window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('talent-carousel');
  talentGallery.forEach((t,i) => {
    const card = document.createElement('div');
    card.className = 'talent-card';
    card.innerHTML = `
      <img src="${t.img}" alt="Talent profile"/>
      <div class="talent-info">
        <div class="talent-name">${t.name}</div>
        <div class="talent-skills">
          ${t.skills.map(skill => `<span>${skill}</span>`).join(' ')}
        </div>
        <div class="talent-rating">${t.rating}</div>
      </div>
      <div class="talent-price">${t.price}</div>
      <button class="talent-invite-btn">Invite</button>
    `;
    carousel.appendChild(card);
  });
});
