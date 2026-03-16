document.addEventListener("DOMContentLoaded", () => {
    // Custom Cursor tracking
    const cursorGlow = document.getElementById("cursor-glow");
    let mouseX = 0, mouseY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // Adjust center
        if (cursorGlow) {
            cursorGlow.style.top = `${mouseY}px`;
            cursorGlow.style.left = `${mouseX}px`;
        }
    });

    // Particle Generation
    const particleContainer = document.getElementById("particles");
    if (particleContainer) {
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");

            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;

            particleContainer.appendChild(particle);
        }
    }

    // Scroll Reveal with Intersection Observer
    const revealElements = document.querySelectorAll("[data-reveal='fade-up']");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute("data-delay") || "0s";
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -100px 0px", threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar Scroll Effect and Active Links
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Active link highlighting
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href").includes(current)) {
                a.classList.add("active");
            }
        });
    });

    // 3D Tilt Effect for Service Cards
    const tiltCards = document.querySelectorAll("[data-tilt]");
    tiltCards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = "transform 0.5s ease"; // smooth reset
        });

        card.addEventListener("mouseenter", () => {
            card.style.transition = "none"; // remove transition for smooth tracking
        });
    });

    // Number Counter Animation
    const stats = document.querySelectorAll(".stat-num");
    let countersStarted = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.getAttribute("data-val"));
                    let count = 0;
                    const increment = target / 50; // adjust speed
                    const updateCount = () => {
                        count += increment;
                        if (count < target) {
                            stat.innerText = Math.ceil(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            stat.innerText = target;
                        }
                    };
                    updateCount();
                });
            }
        });
    }, { threshold: 0.5 });

    if (stats.length > 0) {
        statsObserver.observe(document.querySelector(".hero-stats"));
    }

    // Portfolio Filtering
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterId = btn.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                item.style.opacity = 0;
                item.style.transform = "scale(0.9)";

                setTimeout(() => {
                    const category = item.getAttribute("data-category");
                    if (filterId === "all" || category === filterId) {
                        item.classList.remove("hide");
                        setTimeout(() => {
                            item.style.opacity = 1;
                            item.style.transform = "scale(1)";
                        }, 50);
                    } else {
                        item.classList.add("hide");
                    }
                }, 300);
            });
        });
    });

    // Skill Bar Animation
    const skillBars = document.querySelectorAll(".skill-bar-fill");
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute("data-width");
                entry.target.style.width = width;
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillsObserver.observe(bar));

    // Form Shake on Invalid Submit
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll("input, textarea");
            const status = document.getElementById("form-status");
            const submitBtn = form.querySelector(".submit-btn");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                }
            });

            if (!valid) {
                submitBtn.classList.add("shake");
                setTimeout(() => {
                    submitBtn.classList.remove("shake");
                }, 400);
                status.innerText = "Please fill in all fields.";
                status.style.color = "#ff4d4d";
                return;
            }

            // EmailJS Submission — sends real email to kmanohar17072007@gmail.com
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending...</span>`;

            // EmailJS credentials
            const EMAILJS_SERVICE_ID = 'service_bgiii7l';
            const EMAILJS_TEMPLATE_ID = 'template_44zl1ud';
            const EMAILJS_PUBLIC_KEY = 'fBz_lMQmCsA805OQL';

            emailjs.init(EMAILJS_PUBLIC_KEY);

            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
                .then(() => {
                    status.innerText = "✅ Message sent! I'll get back to you soon.";
                    status.style.color = "#00d4ff";
                    form.reset();
                })
                .catch((err) => {
                    console.error('EmailJS error:', err);
                    status.innerText = "❌ Failed to send. Please email me directly at kmanohar17072007@gmail.com";
                    status.style.color = "#ff4d4d";
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `
                        <span>Send Message</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    `;
                });
        });
    }

    // Mobile Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navLinksContainer = document.getElementById("nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinksContainer.classList.toggle("nav-active");
            hamburger.classList.toggle("toggle");
        });
    }

    // Current Year for Footer
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.innerText = new Date().getFullYear();
    }
});
