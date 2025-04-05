import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Github, Linkedin, Mail, Download, ExternalLink, Menu, X, Send, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const projects = [
    { title: "Fat Loss", img: "/uploads/fat-loss.jpg", description: "Shed body fat for better health, looks, and energy." },
    { title: "Strength Training", img: "/uploads/strength-training.jpg", description: "Build muscle to boost power and resilience." },
    { title: "Moblity", img: "/uploads/mobility.jpg", description: "Move freely with ease to prevent injuries." },
    { title: "Flexibility", img: "/uploads/flexibility.jpg", description: "Stretch for full range motion and agility." },
    { title: "Endurance", img: "/uploads/endurance.jpg", description: "Push through activities without burning out." },
    { title: "Mind Body Connection", img: "/uploads/mind-body.jpg", description: "Align focus with movement for peak performance." }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobile: ''
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);  // State for popup visibility
  const [isSuccess, setIsSuccess] = useState(false);     // State for success message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailData = {
      service_id: 'service_3dy675j',
      template_id: 'template_9uqm3gd',
      user_id: 'ZRsIVvLT4FrEsq9lD',
      template_params: {
        name: formData.name,
        message: formData.message,
        email: formData.email,
        mobile: formData.mobile

      }
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
      console.log(response)
      console.log('Email sent successfully:');
      setIsSuccess(true);
      setIsPopupOpen(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSuccess(false);
      setIsPopupOpen(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen animated-background text-white relative">
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-overlay fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold"
            >
              YourName
            </motion.a> */}

            <div className="hidden md:flex items-center space-x-8">
              {['about', 'features', 'services', 'contact us'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-blue-400 transition-colors capitalize"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-4"
            >
              {['about', 'features', 'services', 'contact us'].map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800/50 transition-colors capitalize"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-20 flex flex-col items-center text-center pt-32"
      >
        <motion.img 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/uploads/pic.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover mb-8 ring-14 ring-blue-500 "
        />
        <motion.h1
          {...fadeInUp}
          className="text-5xl font-bold"
        >
          <div>1stFitForYou</div>

        </motion.h1>
        <motion.h1
          {...fadeInUp}
          className="text-4xl font-bold mb-4"
        > <div className="text-xl">by</div>

         <div>Pratham Bhardwaj</div> 

        </motion.h1>
        <motion.div
          {...fadeInUp}
          className="text-xl mb-8 inline-flex"
        >
          <span className="typewriter">Coach and Fitness Instructor</span>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex gap-4"
        >
          {[
            { href: "https://www.instagram.com/1stfitforyou/?igsh=cmthMHlteGt3cWxt#", icon: <Instagram size={24} /> },
            { href: "https://www.linkedin.com/in/1stbhardwaj", icon: <Linkedin size={24} /> },
            {
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=1stfitforyou@gmail.com&su=Hello&body=Hi%20there!",
              icon: <Mail size={24} />
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              variants={fadeInUp}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="about"
        className="container mx-auto px-4 py-8 mb-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Welcome to 1stFitForYou<div className="text-xl">Where Wellness Meets Your Everyday Life !</div>
        </h2>
        <div className="max-w-2xl mx-auto text-center space-y-4 font-bold">
          <p>
            Whether you're just starting out or pushing for new goals, we are here for you. From beginners to advance, we help you build strength, flexibility, mobility, & endurance to live your healthiest, happiest life.

          </p>
          <p>
            Let’s make fitness simple and effective—together.
          </p>
          <motion.div
            className="flex justify-center mt-8 md:float-left md:mr-4 mb-4 mt-16"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="flex items-center gap-2 bg-[#cfd7e5] hover:bg-[#cfd7e5] px-6 py-3 rounded-full transition-colors text-black font-bold">
              <a href="https://docs.google.com/forms/d/11Z5OU14K-_M8jy7iiEUPWct8oqtGQJcvYcLWoN5ZRM0" target="_blank" className="flex items-center gap-2 bg-bg-[#cfd7e5] hover:bg-[#cfd7e5] px-6 py-3 rounded-full transition-colors">
                Personal Training Registration
              </a>
            </button>
          </motion.div>
          <motion.div
            className="flex justify-center mt-8 md:float-left md:mr-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="flex items-center gap-2 bg-[#cfd7e5] hover:bg-[#cfd7e5] px-6 py-3 rounded-full transition-colors text-black font-bold">
              <a href="https://docs.google.com/forms/d/1FLFnCIg7UjlAbubHEfJrzeHt0D4VOxIHWZ3VDG7oyQs/edit" target="_blank" className="flex items-center gap-2 bg-bg-[#cfd7e5] hover:bg-[#cfd7e5] px-6 py-3 rounded-full transition-colors">
                Group Session Registration
              </a>
            </button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="features"
        className="container mx-auto px-4 py-20"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-bold"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700"
            >
              <img
                src={project.img}
                alt={`Project ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">
                  {project.description}
                </p>
                {/* <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                  >
                    View Demo <ExternalLink size={16} />
                  </motion.a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="services"
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Fitness That Fits You</h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            "One on One Session", "Group Fitness Session", "Weekend Warrior Session", "Corporate Fitness Session"
          ].map((skill) => (
            <motion.div
              key={skill}
              variants={fadeInUp}
              whileHover={{ scale: 1.10 }}
              className="skill-card rounded-lg p-5 text-center font-bold"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="contact us"
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white border border-gray-700"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white border border-gray-700"
                required
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white border border-gray-700"
                required
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white resize-none border border-gray-700"
                required
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </form>
          {/* Popup Modal */}
          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
                <h2 className="text-xl font-semibold mb-2">
                  {isSuccess ? '✅ Message Sent!' : '❌ Something Went Wrong'}
                </h2>
                <p className="text-gray-600">
                  {isSuccess
                    ? 'We have received your message. We’ll get back to you soon!'
                    : 'Please try again later.'}
                </p>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-center mb-6">
              Or reach out through social media
            </p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex justify-center space-x-6"
            >
              {[
                { href: "https://www.instagram.com/1stfitforyou/?igsh=cmthMHlteGt3cWxt#", icon: <Instagram size={24} /> },
                { href: "https://www.linkedin.com/in/1stbhardwaj", icon: <Linkedin size={24} /> },
                {
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=1stfitforyou@gmail.com&su=Hello&body=Hi%20there!",
                  icon: <Mail size={24} />
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/50 backdrop-blur-sm rounded-full hover:bg-gray-600 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-8 text-center text-gray-400"
      >
        <p>© {new Date().getFullYear()} 1stFitForYou. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;