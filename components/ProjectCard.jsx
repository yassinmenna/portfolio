import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Project Image */}
      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title}
            width={400}
            height={192}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                />
              </svg>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Project Visual</p>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Impact */}
        {project.impact && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-3">
            <p className="text-green-800 dark:text-green-200 text-sm font-medium">
              📈 {project.impact}
            </p>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-2">
          {project.description}
        </p>
        
        {/* Second Description if exists */}
        {project.description2 && (
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {project.description2}
          </p>
        )}

        {/* Technologies/Skills */}
        <div className="flex flex-wrap gap-2">
          {(project.technologies || project.skills)?.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
