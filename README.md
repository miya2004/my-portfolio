# Personal Portfolio using https://www.makeareadme.com/ for a better readme

## Name

Huien Mi Yordanova

---

## Description

This is my **personal portfolio website** built with **Next.js (App Router)** and **TypeScript**. The portfolio showcases who I am, what I do, and the projects I’ve worked on, with a strong focus on **front-end development**, **UI/UX design**, and **clean, scalable code**.

The goal of this project is not only to present my work, but also to demonstrate *how* I think and build as a developer — from component structure to data handling and responsiveness.

**Key highlights:**

* Component-based architecture
* Data-driven project rendering
* Responsive, modern UI
* Clean separation of logic, data, and presentation

---


## Visuals

The portfolio includes custom-designed sections such as:

* Hero section
* Featured work
* Projects overview
* Film strip / visual storytelling section
* Contact me page
* Video about me


---

## Installation

To run the project locally:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Requirements

* Node.js (v18 or higher recommended)
* npm or yarn

---

## Usage

This portfolio is a **static front-end project** meant for:

* Showcasing projects
* Demonstrating front-end architecture
* Presenting personal skills and experience



## Key Features & How I Built Them

### 1. Component-Based Structure

Each section of the portfolio is built as a reusable React component (Hero, About, Services, Projects, Contact, etc.).

**Why:**

* Improves readability
* Makes the project scalable
* Allows easy reordering or reuse of sections

---

### 2. Data-Driven Content

Projects and services are stored in separate data files instead of being hardcoded into components.

**Why:**

* Easy to add or remove projects
* Cleaner components
* Reflects real-world development patterns

---

### 3. Next.js App Router

The project uses the Next.js App Router with `layout.tsx` and `page.tsx`.

**Benefits:**

* Better structure
* Improved performance
* Clear separation of global layout and page content

### 4. Main Features explanation

Landing Frame & Portrait (app/components/Landing.tsx)
* I load a custom brush font with next/font/local so the large “HUYEN MI’S / PHAM” lettering looks hand-painted. Those h1  elements are absolutely positioned on either side of the hero image, which creates a stylized frame. The central portrait Image src="/miya.png" lives inside a high z-index container so it sits above the lettering and reads as the focal point. The smaller handwritten <p> tags and clean anchor-based navbar complete the introductory composition.
 
Services Section (app/components/Services.tsx + app/data/services.ts)
* Each service card is driven by structured data in app/data/services.ts, so the JSX simply maps over titles, summaries, tags, and image paths. Inside useLayoutEffect I register every card with GSAP ScrollTrigger: as a card enters the viewport it fades from opacity (line 0)/y (line 150) to fully visible, and each card is temporarily pinned so the user focuses on one offering at a time until scrolling reaches #featured-work. Visually the section mimics a folder—there’s a top tab labeled “Services,” a dark outer shell, and light “pages” containing the content.
*  
“Let’s Work Together” Contact Area (app/components/contact.tsx)
* The section uses a useRef array to hold the bubble elements. When the section scrolls into view, a GSAP animation reveals each bubble (opacity change, upward motion, slight randomized rotation) to create the falling-sticker effect. Clicking any bubble sets open to true, which triggers a useEffect that animates the modal form (#popup) from 0.85 scale/transparent to full size. The modal itself includes labeled inputs, tag pills for services, and a prominent submit button. Outside the modal, the section displays location, current time, and social links, all reinforcing the “Let’s work together!” call to action.





## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome.

If you want to experiment with the code:

1. Fork the repository
2. Install dependencies
3. Run the project locally


