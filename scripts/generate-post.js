const fs = require('fs');
const path = require('path');

// AI topic suggestions and content templates
const aiTopics = [
  {
    title: "Machine Learning in Everyday Apps",
    category: "tech",
    excerpt: "How machine learning algorithms are quietly revolutionizing the apps we use daily, from photo editing to music recommendations.",
    image: "🤖",
    keywords: ["machine learning", "algorithms", "mobile apps", "AI integration", "user experience"]
  },
  {
    title: "The Ethics of Artificial Intelligence",
    category: "tech",
    excerpt: "Exploring the moral implications and responsibilities that come with developing and deploying AI systems in society.",
    image: "⚖️",
    keywords: ["AI ethics", "bias", "fairness", "responsibility", "society"]
  },
  {
    title: "Natural Language Processing Breakthroughs",
    category: "tech",
    excerpt: "Recent advances in NLP are transforming how computers understand and generate human language with unprecedented accuracy.",
    image: "💬",
    keywords: ["NLP", "language models", "communication", "understanding", "breakthrough"]
  },
  {
    title: "AI-Powered Creative Tools",
    category: "design",
    excerpt: "How artificial intelligence is becoming a creative partner, helping artists, writers, and designers push the boundaries of their craft.",
    image: "🎨",
    keywords: ["creative AI", "art generation", "design tools", "creativity", "collaboration"]
  },
  {
    title: "The Future of Work with AI",
    category: "lifestyle",
    excerpt: "Understanding how AI will reshape careers and what skills will remain uniquely human in an automated world.",
    image: "💼",
    keywords: ["future work", "automation", "human skills", "career", "adaptation"]
  },
  {
    title: "AI in Healthcare Revolution",
    category: "tech",
    excerpt: "From diagnostic imaging to drug discovery, artificial intelligence is transforming healthcare and saving lives.",
    image: "🏥",
    keywords: ["healthcare AI", "medical diagnosis", "drug discovery", "patient care", "innovation"]
  },
  {
    title: "Smart Cities and AI Infrastructure",
    category: "tech",
    excerpt: "How artificial intelligence is optimizing urban planning, traffic flow, and resource management in modern cities.",
    image: "🏙️",
    keywords: ["smart cities", "urban planning", "optimization", "infrastructure", "efficiency"]
  },
  {
    title: "AI and Environmental Conservation",
    category: "lifestyle",
    excerpt: "Exploring how machine learning and AI technologies are being used to combat climate change and protect our planet.",
    image: "🌍",
    keywords: ["environmental AI", "climate change", "conservation", "sustainability", "planet"]
  },
  {
    title: "The Psychology of Human-AI Interaction",
    category: "design",
    excerpt: "Understanding how people form relationships with AI systems and what this means for interface design.",
    image: "🧠",
    keywords: ["human-AI interaction", "psychology", "interface design", "relationships", "behavior"]
  },
  {
    title: "AI in Education: Personalized Learning",
    category: "lifestyle",
    excerpt: "How artificial intelligence is creating personalized learning experiences that adapt to each student's unique needs.",
    image: "📚",
    keywords: ["education AI", "personalized learning", "adaptive systems", "student needs", "teaching"]
  }
];

// Content templates for generating posts
const contentTemplates = {
  tech: [
    {
      structure: "<h2>The Current Landscape</h2><p>{intro}</p><h2>Key Innovations</h2><p>{innovations}</p><h2>Practical Applications</h2><p>{applications}</p><h2>Looking Ahead</h2><p>{future}</p>",
      intro: ["The field of artificial intelligence continues to evolve at breakneck speed, with new developments emerging almost daily.", "Recent breakthroughs in AI technology are reshaping industries and creating possibilities we never imagined.", "As AI becomes more sophisticated, its impact on our daily lives becomes increasingly profound."],
      innovations: ["From advanced neural networks to improved processing capabilities, the technical foundations are stronger than ever.", "Breakthrough algorithms are achieving human-level performance in tasks once thought impossible for machines.", "The integration of different AI technologies is creating synergistic effects that amplify their individual capabilities."],
      applications: ["Real-world implementations are demonstrating the practical value of these theoretical advances.", "Industries across the board are finding innovative ways to leverage AI for improved efficiency and outcomes.", "The democratization of AI tools is enabling smaller organizations to benefit from cutting-edge technology."],
      future: ["The trajectory of AI development suggests even more transformative changes on the horizon.", "As these technologies mature, we can expect to see increasingly seamless integration into our daily workflows.", "The next phase of AI evolution will likely focus on making these tools more accessible and intuitive for everyone."]
    }
  ],
  design: [
    {
      structure: "<h2>Design Meets Intelligence</h2><p>{intro}</p><h2>Creative Possibilities</h2><p>{creativity}</p><h2>Human-Centered Approach</h2><p>{human}</p><h2>The Designer's Role</h2><p>{role}</p>",
      intro: ["The intersection of artificial intelligence and design is creating unprecedented opportunities for creative expression.", "AI is not replacing designers but rather becoming a powerful tool that amplifies human creativity.", "The relationship between technology and creativity is evolving in fascinating and unexpected ways."],
      creativity: ["AI-powered tools are enabling designers to explore ideas and iterate faster than ever before.", "The ability to generate and test multiple design variations quickly is revolutionizing the creative process.", "Machine learning is helping identify patterns and preferences that inform better design decisions."],
      human: ["Despite technological advances, the human element remains crucial in creating meaningful design experiences.", "The best AI-assisted designs maintain a strong focus on user needs and emotional connection.", "Technology should enhance rather than overshadow the human stories we're trying to tell through design."],
      role: ["Designers are evolving into creative directors, guiding AI tools to achieve their vision.", "The future designer will be part artist, part technologist, and part strategist.", "Success will depend on understanding both human psychology and technological capabilities."]
    }
  ],
  lifestyle: [
    {
      structure: "<h2>Impact on Daily Life</h2><p>{daily}</p><h2>Benefits and Challenges</h2><p>{balance}</p><h2>Adapting to Change</h2><p>{adaptation}</p><h2>Moving Forward</h2><p>{forward}</p>",
      daily: ["Artificial intelligence is quietly becoming part of our everyday routines, often in ways we don't even notice.", "The integration of AI into lifestyle applications is making our daily tasks more efficient and personalized.", "From morning routines to evening wind-down, AI is subtly enhancing various aspects of our lives."],
      balance: ["While AI brings numerous benefits, it's important to maintain a healthy balance with human judgment and intuition.", "The key is leveraging AI's capabilities while preserving the qualities that make us uniquely human.", "Understanding both the advantages and limitations helps us make better decisions about when and how to use AI."],
      adaptation: ["Successfully integrating AI into our lives requires thoughtful consideration and gradual adjustment.", "The most effective approach is to start small and gradually expand AI's role as we become more comfortable.", "Staying informed about AI developments helps us make better choices about which tools to adopt."],
      forward: ["The future promises even more seamless integration of AI into our personal and professional lives.", "By approaching AI with curiosity rather than fear, we can harness its potential for positive change.", "The goal is not to become dependent on AI, but to use it as a tool for living more intentionally and effectively."]
    }
  ]
};

function generateContent(topic) {
  const template = contentTemplates[topic.category][0]; // Use first template for now
  const sections = {};
  
  // Generate content for each section
  Object.keys(template).forEach(key => {
    if (key !== 'structure' && Array.isArray(template[key])) {
      sections[key] = template[key][Math.floor(Math.random() * template[key].length)];
    }
  });
  
  // Replace placeholders in structure
  let content = template.structure;
  Object.keys(sections).forEach(key => {
    content = content.replace(`{${key}}`, sections[key]);
  });
  
  return content;
}

function generateReadTime() {
  const times = ['3 min read', '4 min read', '5 min read', '6 min read', '7 min read'];
  return times[Math.floor(Math.random() * times.length)];
}

function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

function getNextPostId(posts) {
  const maxId = Math.max(...posts.map(p => p.id), 0);
  return maxId + 1;
}

async function generateDailyPost() {
  try {
    // Read existing posts
    const postsPath = path.join(__dirname, '..', 'data', 'posts.json');
    const postsData = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
    const posts = postsData.posts;
    
    // Check if we already have a post for today
    const today = getTodayDate();
    const existingPost = posts.find(post => post.date === today);
    
    if (existingPost) {
      console.log('Post already exists for today:', today);
      return;
    }
    
    // Select a random topic
    const topic = aiTopics[Math.floor(Math.random() * aiTopics.length)];
    
    // Generate new post
    const newPost = {
      id: getNextPostId(posts),
      title: topic.title,
      excerpt: topic.excerpt,
      category: topic.category,
      date: today,
      readTime: generateReadTime(),
      image: topic.image,
      content: generateContent(topic)
    };
    
    // Add to beginning of posts array (latest first)
    posts.unshift(newPost);
    
    // Keep only the last 50 posts to prevent the file from growing too large
    if (posts.length > 50) {
      posts.splice(50);
    }
    
    // Write back to file
    fs.writeFileSync(postsPath, JSON.stringify({ posts }, null, 2));
    
    console.log(`Generated new post: "${newPost.title}" for ${today}`);
    console.log(`Category: ${newPost.category}`);
    console.log(`Read time: ${newPost.readTime}`);
    
  } catch (error) {
    console.error('Error generating daily post:', error);
    process.exit(1);
  }
}

// Run the script
generateDailyPost();