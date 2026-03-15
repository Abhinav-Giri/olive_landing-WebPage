Olive Landing Page – React Implementation

This project recreates the hero section of the Olive website as a frontend exercise.
The goal is to translate a visual design into a functional React UI while following modern frontend best practices.

The implementation focuses on component architecture, responsive layout, animation, and accessibility.

Features

Modular React component architecture

Recreated hero section UI from visual reference

Animated carousel where product images slide from right → center → left

Center product displayed inside a mobile phone mockup

Product details dynamically update with carousel movement

Framer Motion animations for smooth sliding transitions

Reusable components (Hero, Carousel, PhoneMockup, Button, AvatarGroup)

CSS Modules for scalable and maintainable styling

Responsive layout

Semantic HTML and accessibility considerations

Lazy loading images for performance

Tech Stack

React

Vite

CSS Modules

Framer Motion

React Icons

Project Structure
src
 ├ assets
 │   ├ images
 │   └ avatars
 │
 ├ components
 │   ├ Hero
 │   ├ ProductCarousel
 │   ├ PhoneMockup
 │   ├ Button
 │   └ AvatarGroup
 │
 ├ data
 │   └ products.js
 │
 ├ App.jsx
 └ main.jsx
Carousel Behavior

The carousel displays three product states:

[left faded]  [center active]  [right faded]

Animation flow:

Right image → slides into phone → becomes active → moves left → fades out

The center product information is displayed inside the mobile mockup.

Installation

Clone the repository and install dependencies.

git clone <repo-url>
cd olive-landing
npm install

Run the development server:

npm run dev

Open:

http://localhost:5173
Notes

This project recreates a UI layout for learning and evaluation purposes only.
All images used are placeholders for demonstration.