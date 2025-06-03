# 🧠 Minimal AI Blog

A minimalist, auto-generated, AI-powered blog — designed to be beautiful, fast, and completely autonomous using local LLMs and GitHub Pages.

---

## 📌 Overview

This project is a fully automated blogging platform that:
- Generates **daily blog posts** using local LLMs (via [Ollama](https://ollama.com/) + `phi` model).
- Uses a **modern, nude-toned** responsive design.
- Displays the **latest and categorized posts** dynamically.
- **Deploys automatically** via GitHub Pages.
- Can be optionally extended with a **custom domain** (e.g. via Freenom).

---

## 1️⃣ Why We Built This

### 💡 Goals
- Build a **personal blog** that’s aesthetic, fast, and zero-maintenance.
- Integrate **local LLMs** (no OpenAI keys).
- Automate the entire process from **content generation to deployment**.
- Keep it **static and secure** using GitHub Pages.

---

## 2️⃣ Project Structure

```text
minimalAI/
├── index.html             # Main UI
├── style.css              # Nude-themed responsive styles
├── script.js              # Renders posts, handles routing and theme
├── posts/
│   ├── index.json         # Master list of all posts
│   └── YYYY-MM-DD-title.json # Individual post files
└── README.md              # You are here!

blog/
└── blog_generator.py      # Generates blog posts using Ollama + phi
```

---

## 3️⃣ Phase-by-Phase Breakdown

### 🚀 Phase 1: UI & Static Layout

**✅ What We Did**
- Built `index.html` with:
  - Hero banner and CTA
  - `Latest Posts` and `All Posts` sections
  - Navigation with light/dark mode

**🎯 Why**
- Deliver a focused, engaging UX with minimal distraction.

**📦 How**
- Pure HTML/CSS (no frameworks).
- Smooth animations and `data-theme` switching.

---

### 🧩 Phase 2: Static Content via `script.js`

**✅ What We Did**
- Created dynamic blog card rendering logic.
- Wrote view transitions for home/post/contact.
- Added category-based filtering.

**🎯 Why**
- Simulate real blog behavior without backend dependency.

**📦 How**
- Functions like `createBlogCard()`, `showBlogPost()` and `filterPosts()` manage interactivity and rendering.

---

### 🧠 Phase 3: Daily Blog Generation with Ollama

**✅ What We Did**
- Built `blog_generator.py` to:
  - Generate markdown blog using `ollama run phi`.
  - Parse content, convert to HTML, and format JSON.
  - Save post as `posts/YYYY-MM-DD-slug.json`.
  - Update `index.json`.

**🎯 Why**
- Eliminate manual content creation.
- Leverage AI to keep the blog alive and fresh.

**📦 How**
- Uses `markdown` Python package for conversion.
- Uses Python's `subprocess` for Git commands.

---

### 📡 Phase 4: Auto-Sync to GitHub Pages

**✅ What We Did**
- Automatically commit and push new posts via script.

**🎯 Why**
- Ensure that new posts go live instantly via GitHub Pages.

**📦 How**
```python
shutil.copyfile(index_path, os.path.join(dest_dir, "index.json"))
subprocess.run(["git", "add", "."], check=True)
subprocess.run(["git", "commit", "-m", f"📌 Auto-post: {title_line}"], check=True)
subprocess.run(["git", "push", "origin", "main"], check=True)
```

---

### 🛠️ Phase 5: Bug Fixes & Improvements

| Issue | Fix |
|-------|-----|
| ❌ Missing “Read More” | Ensured consistent excerpt truncation + CTA |
| ❌ `loadLatestPosts()` outdated | Replaced with `renderHomeLatestPosts()` |
| ❌ `webkit-line-clamp` warning | Removed + simplified with fallback logic |
| ❌ Git push issues | Wrapped in `try/except` for error resilience |

---

## 🔄 Daily Automation Flow

1. Run `blog_generator.py`
2. LLM (Phi via Ollama) generates post content
3. JSON written into `posts/`
4. `index.json` is updated
5. Files copied to static site directory
6. Git commit + push triggers GitHub Pages build
7. Blog post appears live

---

## 📈 Future Enhancements

- [ ] Add tag-based filtering
- [ ] Enable post editing/deletion
- [ ] Add RSS feed support
- [ ] Integrate Claude or other LLMs via API/CLI
- [ ] Add optional CMS dashboard

---

## 🤖 Tech Stack

| Layer               | Tool                            |
|--------------------|---------------------------------|
| LLM                | `phi` via [Ollama](https://ollama.com) |
| Blog Generator     | Python 3                        |
| Frontend           | HTML + CSS + JavaScript         |
| Deployment         | GitHub Pages                    |
| Version Control    | Git                             |

---

## 💬 License

MIT — feel free to fork, remix, and build upon.

---
