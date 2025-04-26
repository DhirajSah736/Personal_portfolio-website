import { FileText, Download } from 'lucide-react';

const Resume = () => {
  const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
    { category: 'Frontend Development', items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend Development', items: ['Node.js', 'Express', 'Django', 'Spring Boot'] },
    { category: 'Database Management', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { category: 'DevOps & Tools', items: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD'] },
  ];

  return (
    <section id="resume" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-yellow-400">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Here's a summary of my qualifications, skills, and experiences. 
            Feel free to download my complete resume for more details.
          </p>
          <a 
            href="/dhiraj-sah-resume.pdf" 
            download="dhiraj-sah-resume.pdf"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-6 rounded-md mt-8 transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="animate-on-scroll slide-in-left">
            <div className="bg-gray-800 rounded-lg p-8 h-full">
              <div className="flex items-center mb-6">
                <FileText className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold">Skills & Expertise</h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-yellow-400 font-medium mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll slide-in-right">
            <div className="bg-gray-800 rounded-lg p-8 h-full">
              <div className="flex items-center mb-6">
                <FileText className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold">Experience Highlights</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-lg">Volunteer Tech Tutor</h4>
                    <span className="text-yellow-400 text-sm">Fall 2025</span>
                  </div>
                  <p className="text-gray-400 mb-2">Bal Bikas English Boarding School</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 leading-[1.5]">•</span>
                      <span className="text-gray-300 flex-1">Helped secondary school students learn about technology and basic computing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 leading-[1.5]">•</span>
                      <span className="text-gray-300 flex-1">Created fun and easy-to-follow lessons to make tech concepts simple</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 leading-[1.5]">•</span>
                      <span className="text-gray-300 flex-1">Mentored students and encouraged their interest in STEM subjects</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-lg">Research Author</h4>
                    <span className="text-yellow-400 text-sm">Spring 2024</span>
                  </div>
                  <p className="text-gray-400 mb-2">Chandigarh University</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 leading-[1.5]">•</span>
                      <span className="text-gray-300 flex-1">Authored a research paper titled "Designing a Responsive and Accessible Blood Bank Management Web Application Using MERN Stack" under the supervision of Professor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 leading-[1.5]">•</span>
                      <span className="text-gray-300 flex-1">Focused on building a full-stack MERN web application for efficient blood bank management with an emphasis on accessibility and responsiveness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 leading-[1.5]">•</span>
                      <span className="text-gray-300 flex-1">Paper accepted at the International Conference on Recent Challenges in Engineering and Technology (ICRCET)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center animate-on-scroll fade-in">
          <p className="text-gray-400 italic">
            For a complete overview of my experience, education, and achievements, please download the full resume.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;