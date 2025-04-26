import { Code, Monitor, Server, Sparkles } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Monitor className="w-6 h-6" />, description: 'Creating responsive and interactive user interfaces with modern frameworks.' },
    { name: 'Backend Development', icon: <Server className="w-6 h-6" />, description: 'Building robust server-side applications and RESTful APIs.' },
    { name: 'Algorithms & Data Structures', icon: <Code className="w-6 h-6" />, description: 'Implementing efficient solutions to complex computational problems.' },
    { name: 'Machine Learning', icon: <Sparkles className="w-6 h-6" />, description: 'Developing models to analyze and interpret data for predictive insights.' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a Computer Science graduate with a passion for creating innovative solutions through code. 
            My journey in technology began with a curiosity about how digital systems work, 
            which evolved into a deep appreciation for software development and its potential to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-8 animate-on-scroll slide-in-left">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Throughout my academic career, I've focused on building a strong foundation in computer science principles 
              while gaining practical experience through projects and internships.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I enjoy tackling challenging problems and am constantly learning new technologies to expand my skillset. 
              My goal is to develop solutions that are not only technically sound but also deliver exceptional user experiences.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 animate-on-scroll slide-in-right">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technical Proficiency</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-1/3 text-gray-400">Languages:</span>
                <span className="w-2/3 text-gray-300">JavaScript, TypeScript, Python, Java, C++</span>
              </li>
              <li className="flex items-center">
                <span className="w-1/3 text-gray-400">Frontend:</span>
                <span className="w-2/3 text-gray-300">React, Vue.js, HTML5, CSS3, Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <span className="w-1/3 text-gray-400">Backend:</span>
                <span className="w-2/3 text-gray-300">Node.js, Express, Django, Spring Boot</span>
              </li>
              <li className="flex items-center">
                <span className="w-1/3 text-gray-400">Databases:</span>
                <span className="w-2/3 text-gray-300">MongoDB, PostgreSQL, MySQL, Redis</span>
              </li>
              <li className="flex items-center">
                <span className="w-1/3 text-gray-400">DevOps:</span>
                <span className="w-2/3 text-gray-300">Docker, Kubernetes, CI/CD, AWS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:border-yellow-400 animate-on-scroll fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-yellow-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;