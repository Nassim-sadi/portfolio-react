import ProjectCard from "./ProjectCard";
import {
  laravelLogo,
  tailwindLogo,
  vueLogo,
  sqlLogo,
  gitLogo,
  phpLogo,
  piniaLogo,
} from "@/assets/logos.ts";

import LowerThirdBanner from "@/components/banner/Banner";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: (
        <>
          <h4 className="font-semibold text-lg mb-2">
            Full-Stack E-Commerce Platform with Admin Dashboard
          </h4>
          <p className="mb-2">
            A complete e-commerce solution built with clean architecture and
            modular design, developed using Vue, Laravel, and Tailwind CSS.
            Focused on performance, scalability, and code maintainability.
          </p>
          <ul>
            <li>
              <strong>Admin Dashboard</strong> – robust interface to manage:
              <ul>
                <li>Users & Role-Based Permissions</li>
                <li>
                  Products, Categories & Nested Subcategories with drag-and-drop
                  ordering
                </li>
                <li>Options & Matrix-Style Variant Management</li>
              </ul>
            </li>
            <li>
              <strong>Flexible Variant System</strong> – supports building
              variants manually from product options, ensuring uniqueness across
              option-value combinations
            </li>
            <li>
              <strong>Clean & Reusable Codebase</strong> – Composition API,
              service layers, reusable components, global event bus, and Pinia
              for centralized state management
            </li>
            <li>
              <strong>RESTful API</strong> – Laravel-powered backend with form
              request validation, policy-based authorization, and resource
              transformation
            </li>
            <li>
              <strong>Responsive Design</strong> – mobile-first layout using
              Tailwind CSS with full dark mode support
            </li>
            <li>
              <strong>Interactive UX Feedback</strong> – provides immediate
              visual cues like spinners, toasts, and button status indicators
              for user-triggered actions
            </li>
            <li>
              <strong>Secure Auth System</strong> – includes login, email
              verification, and granular access control for routes and views
            </li>
            <li>
              <strong>Full Form Validation</strong> – both client-side rules and
              Laravel server-side validation with detailed error messages
            </li>
            <li>
              <strong>Optimized Performance</strong> – uses lazy loading,
              debounced input handlers, and paginated table views
            </li>
            <li>
              <strong>Clean Git History</strong> – atomic, well-labeled commits
              and clear feature branch structure for easy collaboration and
              review
            </li>
          </ul>
        </>
      ),
      images: [
        "images/projects/shop/1.png",
        "images/projects/shop/2.png",
        "images/projects/shop/3.png",
        "images/projects/shop/4.png",
        "images/projects/shop/5.png",
        "images/projects/shop/6.png",
        "images/projects/shop/7.png",
        "images/projects/shop/8.png",
        "images/projects/shop/9.png",
        "images/projects/shop/10.png",
        "images/projects/shop/11.png",
        "images/projects/shop/12.png",
        "images/projects/shop/13.png",
        "images/projects/shop/14.png",
      ],
      tools: [
        { name: "Vue.js", icon: vueLogo },
        { name: "Laravel", icon: laravelLogo },
        { name: "Tailwind CSS", icon: tailwindLogo },
        { name: "PHP", icon: phpLogo },
        { name: "MySQL", icon: sqlLogo },
        { name: "Git", icon: gitLogo },
        { name: "Pinia", icon: piniaLogo }, // if you have a Pinia logo
      ],
      actions: [
        // {
        //   name: "Live Demo",
        //   link: "https://example.com",
        // },
        {
          name: "GitHub",
          link: "https://github.com/Nassim-sadi/shop",
        },
      ],
    },
  ];

  return (
    <div className="projects section content">
      <LowerThirdBanner
        text="What I've Built"
        subtext="Check out my projects"
        color="emerald"
      />

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
