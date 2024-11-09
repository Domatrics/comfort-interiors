"use client";

const ProjectsSection = () => {

  const projectsData = [
    {
      imageUrl: '/images/project4.jpg', // Replace with your image URLs
      projectName: 'Furniture sets',
    },
    {
      imageUrl: '/images/project3.jpg',
      projectName: 'Mandir',
    },
    {
      imageUrl: '/images/project2.jpg',
      projectName: 'Furnished Living Rooms',
    },
    {
      imageUrl: '/images/project1.jpg',
      projectName: 'Kitchens',
    },
  ];
  return (
    <section id="projects" className="bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto">
        
        {/* Left-align the heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-8 md:text-center sm:text-left">
          Our Projects
        </h2> 
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={project.imageUrl}
              alt={project.projectName}
              className="object-cover w-full h-full"
              style={{ height: '250px'}}
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm w-full p-2 text-center">
              {project.projectName}
            </div>
          </div>
        ))}
      </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-[#758F78] text-white rounded-lg hover:bg-[#5d7360] transition-all duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
