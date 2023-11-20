import { pokedex,weather } from "../assets";

import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  three,
  nest,
  twitter,
  github,
  linkedin
} from '../assets'


const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
];


const projects = [
    {
      name: "Pokedex",
      description:
        "The aim of this tool is to allow users to explore detailed information about the original Pokémon from the first generation.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "GraphQl",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pokedex,
      source_code_link: "https://github.com/",
    },
    {
      name: "Weather App",
      description:
        "Users can view hourly forecasts or let the app detect their current location for instant weather updates.",
      tags: [
        {
          name: "Working on",
          color: "blue-text-gradient",
        },
        {
          name: "Api",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/",
    },
    {
      name: "Three.js Environment",
      description:
        "My Three.js project creates an immersive 3D environment, akin to a game, for interactive and immersive experiences.",
      tags: [
        {
          name: "Planning",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: three,
      source_code_link: "https://github.com/",
    },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Nest JS",
    icon: nest,
  },
 
];

const socialMedia = [
  {
    name: "Linkedin",
    icon: linkedin,
    link:"https://www.linkedin.com/in/jonathan-gonzalez-42074a251/"
  },
  {
    name: "Github",
    icon: github,
    link:"https://github.com/Tvkaes"
  },
  {
    name: "Twitter",
    icon: twitter,
    link:"https://twitter.com/tvkaes"
  },

 
];



export {navLinks,projects,technologies,socialMedia}

