/* Minimal AI Blog Style */
/* This CSS file styles a modern, minimalistic blog with a focus on readability and aesthetics. */
// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development",
        excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
        category: "tech",
        date: "2025-05-15",
        readTime: "5 min read",
        image: "💻",
        content: `
                    <h2>Introduction</h2>
                    <p>Web development is evolving at an unprecedented pace. As we move further into 2025, new technologies and methodologies are reshaping how we build and interact with digital experiences.</p>
                    
                    <h2>Key Trends</h2>
                    <p>From AI-powered development tools to the rise of edge computing, the landscape is more exciting than ever. Progressive Web Apps continue to bridge the gap between web and native applications, offering users seamless experiences across all devices.</p>
                    
                    <h2>Conclusion</h2>
                    <p>The future of web development lies in creating more accessible, performant, and user-centric applications that leverage the power of modern technologies while maintaining simplicity and elegance.</p>
                `
    },
    {
        id: 2,
        title: "Minimalist Living: A Journey to Simplicity",
        excerpt: "Discovering the art of living with less and finding more joy in the simple things that truly matter in our daily lives.",
        category: "lifestyle",
        date: "2025-05-10",
        readTime: "7 min read",
        image: "🏠",
        content: `
                    <h2>The Beginning</h2>
                    <p>My journey into minimalist living began with a simple realization: I owned too much stuff, and it was owning me back. The constant clutter was affecting my mental clarity and peace of mind.</p>
                    
                    <h2>The Process</h2>
                    <p>Decluttering isn't just about throwing things away. It's about being intentional with what you choose to keep and understanding the difference between what you need and what you want.</p>
                    
                    <h2>The Benefits</h2>
                    <p>Living minimally has brought unexpected benefits: more time, less stress, better focus, and a deeper appreciation for the things that truly add value to my life.</p>
                `
    },
    {
        id: 3,
        title: "Exploring Hidden Gems in Japan",
        excerpt: "A photographic journey through Japan's lesser-known destinations, from tranquil mountain villages to secluded coastal towns.",
        category: "travel",
        date: "2025-05-05",
        readTime: "10 min read",
        image: "🗾",
        content: `
                    <h2>Off the Beaten Path</h2>
                    <p>While Tokyo and Kyoto capture most travelers' attention, Japan's hidden gems offer authentic experiences away from the crowds. These destinations showcase the country's natural beauty and cultural depth.</p>
                    
                    <h2>Mountain Villages</h2>
                    <p>The mountainous regions of Japan hide villages where time seems to stand still. Traditional architecture, local customs, and warm hospitality create unforgettable memories.</p>
                    
                    <h2>Coastal Treasures</h2>
                    <p>Japan's coastline offers pristine beaches, fishing villages, and spectacular sunsets that rival any tropical destination, yet remain largely undiscovered by international tourists.</p>
                `
    },
    {
        id: 4,
        title: "The Psychology of Color in Design",
        excerpt: "Understanding how colors influence emotions and behavior, and how to leverage this knowledge in creating impactful design experiences.",
        category: "design",
        date: "2025-04-28",
        readTime: "6 min read",
        image: "🎨",
        content: `
                    <h2>Color Theory Basics</h2>
                    <p>Colors have the power to evoke emotions, influence decisions, and create memorable experiences. Understanding color psychology is crucial for effective design communication.</p>
                    
                    <h2>Practical Applications</h2>
                    <p>Different colors serve different purposes in design. Warm colors can create energy and excitement, while cool colors promote calm and trust. The key is knowing when and how to use each effectively.</p>
                    
                    <h2>Cultural Considerations</h2>
                    <p>Color meanings can vary significantly across cultures. What represents luck in one culture might symbolize mourning in another. Global designers must be mindful of these differences.</p>
                `
    },
    {
        id: 5,
        title: "Building Better Morning Routines",
        excerpt: "How establishing a consistent morning routine can transform your productivity, mindset, and overall well-being throughout the day.",
        category: "lifestyle",
        date: "2025-04-20",
        readTime: "4 min read",
        image: "☀️",
        content: `
                    <h2>The Power of Mornings</h2>
                    <p>The first hour of your day sets the tone for everything that follows. A well-structured morning routine can be the difference between a productive day and one filled with reactive stress.</p>
                    
                    <h2>Key Elements</h2>
                    <p>Successful morning routines typically include elements of mindfulness, physical activity, planning, and personal growth. The key is finding the right combination that works for your lifestyle.</p>
                    
                    <h2>Making It Stick</h2>
                    <p>Consistency is more important than perfection. Start small, be patient with yourself, and gradually build the routine that will serve you for years to come.</p>
                `
    },
    {
        id: 6,
        title: "The Rise of Sustainable Technology",
        excerpt: "Exploring how technology companies are innovating to create more environmentally friendly solutions and reduce their carbon footprint.",
        category: "tech",
        date: "2025-04-15",
        readTime: "8 min read",
        image: "🌱",
        content: `
                    <h2>The Need for Change</h2>
                    <p>As technology becomes more prevalent in our lives, the environmental impact of digital infrastructure and device manufacturing has become a critical concern that cannot be ignored.</p>
                    
                    <h2>Innovative Solutions</h2>
                    <p>From renewable energy-powered data centers to biodegradable electronics, companies are finding creative ways to reduce their environmental footprint while maintaining technological advancement.</p>
                    
                    <h2>The Future</h2>
                    <p>Sustainable technology isn't just about reducing harm—it's about creating positive environmental impact through innovation. The future lies in technology that actively contributes to planetary health.</p>
                `
    }
];

// Current state
let currentFilter = 'all';
let currentTheme = 'light';

// Initialize the website
function init() {
    renderHomeLatestPosts();
    loadAllPosts();
    setActiveNavLink('Home');
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');

    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        currentTheme = 'dark';
    } else {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        currentTheme = 'light';
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Navigation functions
function showHome() {
    hideAllPages();
    document.getElementById('homePage').classList.remove('hidden');
    setActiveNavLink('Home');
    closeMobileMenu();
}

function showAllPosts() {
    hideAllPages();
    document.getElementById('allPostsPage').classList.remove('hidden');
    setActiveNavLink('All Posts');
    closeMobileMenu();
}

function showContact() {
    hideAllPages();
    document.getElementById('contactPage').classList.remove('hidden');
    setActiveNavLink('Contact Me');
    closeMobileMenu();
}

function showBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    hideAllPages();
    document.getElementById('blogPostPage').classList.remove('hidden');

    const blogPostContent = document.getElementById('blogPostContent');
    blogPostContent.innerHTML = `
                <div class="blog-post-header">
                    <div class="blog-category">${post.category.toUpperCase()}</div>
                    <h1 class="blog-post-title">${post.title}</h1>
                    <div class="blog-post-meta">
                        <span>${formatDate(post.date)}</span> • <span>${post.readTime}</span>
                    </div>
                </div>
                <div class="blog-post-content">
                    ${post.content}
                </div>
            `;

    setActiveNavLink('');
    closeMobileMenu();
}

function hideAllPages() {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('allPostsPage').classList.add('hidden');
    document.getElementById('blogPostPage').classList.add('hidden');
    document.getElementById('contactPage').classList.add('hidden');
}

function setActiveNavLink(pageName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent === pageName) {
            link.classList.add('active');
        }
    });
}

function closeMobileMenu() {
    document.getElementById('navLinks').classList.remove('active');
}

// Load latest posts for home page
// function loadLatestPosts() {
//     const latestPostsContainer = document.getElementById('latestPosts');
//     const latestPosts = blogPosts.slice(0, 3); // Show only 3 latest posts

//     latestPostsContainer.innerHTML = latestPosts.map(post => createBlogCard(post)).join('');

//     // Add animation delay for each card
//     const cards = latestPostsContainer.querySelectorAll('.blog-card');
//     cards.forEach((card, index) => {
//         card.style.animationDelay = `${index * 0.1}s`;
//     });
//     document.querySelectorAll('.read-more').forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         const postId = Number(this.getAttribute('data-id'));
//         showBlogPost(postId);
//     });
// });
// }
function renderHomeLatestPosts() {
    const latestPostsContainer = document.getElementById('latestPosts');

    // Sort by date descending (newest first)
    const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = sorted.slice(0, 3); // top 3 latest posts

    latestPostsContainer.innerHTML = latest.map(post => createBlogCard(post)).join('');

    // Add animation delay
    const cards = latestPostsContainer.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Bind read more
    latestPostsContainer.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const postId = Number(this.getAttribute('data-id'));
            showBlogPost(postId);
        });
    });
}
// Load all posts
function loadAllPosts() {
    const allPostsContainer = document.getElementById('allPostsGrid');
    allPostsContainer.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');

    // Add animation delay for each card
    const cards = allPostsContainer.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const postId = Number(this.getAttribute('data-id'));
        showBlogPost(postId);
    });
});
}

// Create blog card HTML
function createBlogCard(post) {
    return `
                <div class="blog-card" onclick="showBlogPost(${post.id})" data-category="${post.category}">
                    <div class="blog-image">${post.image}</div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span class="blog-category">${post.category.toUpperCase()}</span>
                            <span>${post.readTime}</span>
                        </div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <a href="#" class="read-more" data-id="${post.id}">
                        Read More →
                        </a>
                    </div>
                </div>
            `;
}

// Filter posts by category
function filterPosts(category) {
    currentFilter = category;

    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter blog cards
    const blogCards = document.querySelectorAll('#allPostsGrid .blog-card');
    blogCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.6s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Handle contact form submission
function handleContactForm(event) {
    event.preventDefault();

    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;

    // Use EmailJS to send the form
    emailjs.sendForm('minimalaiblog', 'minimalAi', '#contactForm', 'g4moKzigeQIBwloeE')
        .then(function(response) {
            alert('Thank you for your message! I\'ll get back to you soon.');
            document.getElementById('contactForm').reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            alert('Failed to send message. Please try again later.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}

// Utility function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // Observe all blog cards and sections
    document.querySelectorAll('.blog-card, .section').forEach(el => {
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    loadDynamicPosts();  // ⬅️ this loads JSON blog posts from /posts/index.json
    addScrollAnimations();

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.getElementById('navLinks');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});

// Handle browser back/forward buttons (basic implementation)
window.addEventListener('popstate', () => {
    showHome(); // Default to home page
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

async function loadDynamicPosts() {
    const response = await fetch('posts/index.json');
    const dynamicPosts = await response.json();

    // Assign unique IDs to dynamic posts (starting after static ones)
    const offset = blogPosts.length;
    dynamicPosts.forEach((post, i) => post.id = offset + i + 1);

    blogPosts.push(...dynamicPosts);
    // Sort all posts by date (descending)
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Refresh views
    renderHomeLatestPosts();
    loadAllPosts();
}