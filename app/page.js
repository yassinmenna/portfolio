import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "AI Concierge Assistant (Elena) - Litty",
      impact: "↑15% bookings",
      description: "Designed, launched, and scaled AI-powered concierge chat assistant to help customers discover and book venues for their private events.",
      skills: ["Product Strategy", "Tech Startup", "AI/ML", "User Research", "Analytics"],
      image: "/elena.jpg"
    },
    {
      id: 2,
      title: "Venue Matchmaker - Litty",
      impact: "scaled across 540K+ users & 80+ venues",
      description: "Impact for Customers: submit multiple venue inquiries, compare offers, simplify decision-making, and get personalized recommendations.",
      description2: "Impact for Businesses: negotiation power, view competitor offers, optimize pricing to win more bookings.",
      technologies: ["Product Strategy", "Tech Startup", "UX Design", "A/B Testing", "User-Centric Design"],
      image: "/venuematchmaker.jpg"
    },
    {
      id: 3,
      title: "VIPER AI Automation - USDOT",
      impact: "reduce case processing time and manual data entry errors",
      description: "Influenced executive leadership to adopt AI driven automation for crash investigations. Translated user feedback into product requirements and led cross disciplinary team to deliver product across a national program.",
      technologies: ["AI", "Govtech", "Process Optimization", "Executive Buy-In"],
      image: "/viper.jpg"
    }
  ];

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-6 place-items-center">
          <div className="text-right pl-6 md:pl-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mb-4 whitespace-nowrap">
              hi! I&apos;m Menna (men-nah)
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light mb-6 tracking-wide">
              Lead Product Manager
            </p>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
              Passionate about building innovative products that solve real user problems.
              I lead cross-functional teams to deliver exceptional user experiences through
              data-driven decision making and strategic product vision.
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl"> 
            </p>
              Outside of work, I love to ski/snowboard, travel and currently teaching myself to play piano. 
            </p>
            <a
              href="https://www.linkedin.com/in/menna-yassin-6486312b"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center md:justify-center w-full">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/mennaprofile.jpg"
                alt="Portrait of Menna Yassin"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Here are some of the key projects I&apos;ve led as a Product Manager, 
            that I&apos;m excited about.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/50 dark:bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I&apos;d love to connect with you! Reach out for any product opportunities or just to say hi.
          </p>
          <a
            href="mailto:yassin.menna@gmail.com"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            contact me
          </a>
        </div>
      </section>
    </div>
  );
}
