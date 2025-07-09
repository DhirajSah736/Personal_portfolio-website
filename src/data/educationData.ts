export interface Education {
  year: string;
  degree: string;
  institution: string;
  description: string;
  achievements?: string[];
}

export const educationData: Education[] = [
  {
    year: "January 2025 - Present",
    degree: "Test Automation in Java Certification",
    institution: "EPAM",
    description: "Currently pursuing a comprehensive certification program focused on test automation using Java.",
  },
  {
    year: "2020 - 2024",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Chandigarh University, India",
    description: "Completed a 4-year rigorous program focused on software development, algorithms, web technologies, databases, machine learning, and system design.",
    achievements: [
      "Graduated with First Class Honors",
      "Authored a research paper titled \"Designing a Responsive and Accessible Blood Bank Management Web Application Using MERN Stack\" — accepted at the ICRCET Conference",
      "Built multiple full-stack projects, including an E-commerce Web App and a Sorting Visualizer",
      "Participated in competitive programming and hackathons",
      "Completed industrial training in Web Designing using MERN Stack, gaining hands-on experience with MongoDB, Express.js, React.js, and Node.js"
    ]
  },
  {
    year: "2017 - 2019",
    degree: "Higher Secondary Education (Science Stream)",
    institution: "Delhi Public School - BPKIHS, Dharan, Nepal",
    description: "Focused on Physics, Chemistry, and Mathematics (PCM) with an inclination toward technology and innovation.",
    achievements: [
      "Certified in Digital Marketing and Personal Branding, exploring the intersection of technology and communication",
      "Participated in science exhibitions and expos, presenting projects on sustainable energy and innovative solutions",
      "Represented the school in inter-school volleyball tournaments, demonstrating teamwork and discipline"
    ]
  },
  {
    year: "Nursery - 2017",
    degree: "School Education",
    institution: "Bal Bikas English Boarding School, Nepal",
    description: "Attended from Nursery to Grade 10. Developed academic strength and leadership skills from an early age.",
    achievements: [
      "Served as House Captain and Class Captain, fostering leadership and team-building skills",
      "Represented the school in inter-school volleyball tournaments; contributed to the team’s runner-up finish",
      "Engaged in debates, science fairs, and community projects, strengthening problem-solving and collaboration skills"
    ]
  }
];