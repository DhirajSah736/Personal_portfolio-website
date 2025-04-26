import { educationData } from '../data/educationData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-yellow-400">Education</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            My academic journey has provided me with a strong foundation in computer science and
            has equipped me with the knowledge and skills to tackle complex technical challenges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform md:translate-x-[-50%] hidden md:block"></div>
          
          {educationData.map((item, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse text-left' : 'text-left'
              } mb-12 animate-on-scroll ${index % 2 === 0 ? 'slide-in-right' : 'slide-in-left'}`}
            >
              <div className="md:w-1/2 mb-4 md:mb-0">
                <div 
                  className={`bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-400 md:mx-4 relative ${
                    index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'
                  }`}
                >
                  <span className="text-yellow-400 font-bold text-lg mb-1 block">{item.year}</span>
                  <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                  <h4 className="text-gray-300 mb-3">{item.institution}</h4>
                  <p className="text-gray-400">{item.description}</p>
                  
                  {item.achievements && (
                    <div className="mt-4">
                      <h5 className="font-medium text-gray-300 mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-yellow-400 mr-2 leading-[1.5]">•</span>
                            <span className="text-gray-400 flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Timeline dot - hidden on mobile */}
              <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 rounded-full bg-yellow-400 transform md:translate-x-[-50%] z-10 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;