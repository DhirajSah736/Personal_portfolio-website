import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment processing capabilities.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/dhirajsah/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.com"
  },
  {
    id: 2,
    title: "TaskNest-Task Management App",
    description: "A Kanban-style task management application that helps users organize and track their projects and tasks.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Jwt Authentication", "Node.js"],
    githubUrl: "https://github.com/DhirajSah736/TaskNest-A-task-manager-web-App",
    liveUrl: "https://to-do-list-test-0kjw.onrender.com"
  },
  {
    id: 3,
    title: "Weather Pulse",
    description: "A Web application that provides real-time weather updates and forecasts based on user location or search queries.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Weather API", "Geolocation"],
    githubUrl: "https://github.com/DhirajSah736/Weather-pulse",
    liveUrl: "https://weather-pulse-one.vercel.app/"
  },
  {
    id: 4,
    title: "Sorting Visualizer",
    description: "A web application that visually demonstrates how various sorting algorithms work through engaging, real-time animations and interactive controls.",
    image: "https://images.pexels.com/photos/6539278/pexels-photo-6539278.jpeg",
    category: "web",
    technologies: ["React", "Vite", "Data Structure and Algorithms"],
    githubUrl: "https://github.com/DhirajSah736/Sorting-Visualizer",
    liveUrl: "https://sorting-visualizer-xi-eight.vercel.app/"
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "A mobile app that tracks workouts, nutrition, and progress towards fitness goals with personalized recommendations.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Health API"],
    githubUrl: "https://github.com/dhirajsah/fitness-tracker",
    liveUrl: "https://fitness-tracker-demo.com"
  },
  {
    id: 6,
    title: "Image Classification System",
    description: "A deep learning model that can identify and classify objects in images with high accuracy.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "machine learning",
    technologies: ["Python", "PyTorch", "CNN", "Computer Vision"],
    githubUrl: "https://github.com/dhirajsah/image-classifier",
    liveUrl: "https://image-classifier-demo.com"
  },
];