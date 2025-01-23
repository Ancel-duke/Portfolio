import React from 'react';
import { Github, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'MongoDB', 'MySQL',
    'Angular', 'Vite', 'jQuery', 'Express', 'Bootstrap',
    'Vue.js', 'Laravel', 'PHP'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <img
            src="https://i.ibb.co/MsZKMM2/profile.jpg"
            alt="Ancel Ajanga"
            className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg mx-auto"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Ancel Ajanga</h1>
          <h2 className="text-2xl text-blue-400 mb-6">Software Engineer</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I love coding and coming up with creative ideas to solve problems. My passion lies in helping startups bring their vision to life, not just for monetary gain, but because I have the skills to make a difference. When I'm not coding, you'll find me admiring kittens or designing beautiful applications that bring smiles to my clients' faces.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="mailto:ancel.ajanga@yahoo.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors">
              <Mail size={20} /> Email
            </a>
            <a href="https://www.instagram.com/lema.yian._?igsh=MTZybzRhNWpnYnhsZw==" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full transition-colors">
              <Instagram size={20} /> Instagram
            </a>
            <a href="tel:+254793558755" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Location */}
      <div className="bg-gray-800 py-4 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <MapPin size={20} />
          <span>Nairobi, Kenya</span>
        </div>
      </div>

      {/* Education & Experience */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xl font-semibold text-blue-400">KCA University</h4>
                <p>Degree in Computing Science</p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-blue-400">Institute of Software Technologies</h4>
                <p>Diploma in Software Engineering</p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-blue-400">Moringa School</h4>
                <p>Software Development</p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <div>
              <h4 className="text-xl font-semibold text-blue-400">Freelance Software Engineer</h4>
              <p className="text-gray-300 mt-2">
                Working with various startups and businesses to create custom software solutions, web applications, and digital experiences that meet their specific needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:ancel.ajanga@yahoo.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.instagram.com/lema.yian._?igsh=MTZybzRhNWpnYnhsZw==" className="hover:text-pink-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;