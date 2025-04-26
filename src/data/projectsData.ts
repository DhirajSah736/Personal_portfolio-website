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
    title: "Task Management App",
    description: "A Kanban-style task management application that helps users organize and track their projects and tasks.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["Vue.js", "Vuex", "Firebase"],
    githubUrl: "https://github.com/dhirajsah/task-manager",
    liveUrl: "https://task-manager-demo.com"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A mobile application that provides real-time weather updates and forecasts based on user location or search queries.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["React Native", "Weather API", "Geolocation"],
    githubUrl: "https://github.com/dhirajsah/weather-forecast",
    liveUrl: "https://weather-forecast-demo.com"
  },
  {
    id: 4,
    title: "Sentiment Analysis Tool",
    description: "A machine learning model that analyzes text data to determine sentiment and emotional tone in customer reviews.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "machine learning",
    technologies: ["Python", "TensorFlow", "NLP", "Flask"],
    githubUrl: "https://github.com/dhirajsah/sentiment-analysis",
    liveUrl: "https://sentiment-analysis-demo.com"
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