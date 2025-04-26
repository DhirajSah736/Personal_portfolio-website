import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      window.scrollTo({
        top: projects.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative pt-20 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10 animate-on-scroll fade-in">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-7xl mx-auto">
          <div className="md:w-1/2 max-w-xl">
            <p className="text-yellow-400 mb-3 uppercase tracking-widest font-medium">Computer Science Graduate</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Hi, I'm <span className="text-yellow-400">Dhiraj Sah</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
              A passionate developer with a focus on creating elegant solutions to complex problems. I specialize in building responsive and interactive web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center gap-2"
              >
                View My Work
              </button>
              <a 
                href="#resume" 
                className="border border-gray-600 hover:border-yellow-400 text-gray-200 hover:text-yellow-400 font-medium py-3 px-6 rounded-md transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center max-w-xl">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br  z-10"></div>
              <img
                src="public/image/PP-image.png"
                alt="Dhiraj Sah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => {
            const about = document.getElementById('about');
            if (about) {
              window.scrollTo({
                top: about.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;