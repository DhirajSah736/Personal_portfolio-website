import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-yellow-400 tracking-wider">DS</a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav>
              <ul className="flex gap-6">
                {['About', 'Projects', 'Education', 'Resume', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Dhiraj Sah. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Made with <Heart className="text-yellow-400" size={14} /> by Dhiraj Sah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;