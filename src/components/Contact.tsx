import { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus({ submitted: true, success: false, message: 'Sending message...' });
      
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        
        setFormStatus({ 
          submitted: true, 
          success: true, 
          message: 'Message sent successfully! I will get back to you soon.' 
        });
        
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-on-scroll slide-in-left">
            <div className="bg-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:eyemdheeraj436@gmail.com" 
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      eyemdheeraj436@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <Phone className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <div className="space-y-1">
                      <a 
                        href="tel:+918558935798" 
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 block"
                      >
                        +91 8558935798
                      </a>
                      <a 
                        href="tel:+9779815310840" 
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 block"
                      >
                        +977 9815310840
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-medium mb-4">Find me on</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/dhiraj-sah-7a3522220/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-yellow-400 transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/DhirajSah736" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-yellow-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll slide-in-right">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {formStatus.submitted ? (
                <div className={`border p-4 rounded-lg ${
                  formStatus.success 
                    ? 'bg-green-900/20 border-green-800 text-green-400' 
                    : 'bg-red-900/20 border-red-800 text-red-400'
                }`}>
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
                      placeholder="Your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
                      placeholder="Your message"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={formStatus.submitted && !formStatus.success}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium w-full py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    {formStatus.submitted && !formStatus.success ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;