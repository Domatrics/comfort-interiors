"use client";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto">
        
        {/* Left-align the heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 text-center sm:text-left">
          Our Projects
        </h2> 
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-center">
          
          {/* Project #1 */}
          <div className="text-center">
            <div className="bg-gray-300 w-full h-40 rounded-lg mb-4 mx-auto sm:w-60 md:w-64"></div> {/* Light gray placeholder for project image */}
            <h3 className="text-lg font-medium text-black">Project Name #1</h3>
          </div>

          {/* Project #2 */}
          <div className="text-center">
            <div className="bg-gray-300 w-full h-40 rounded-lg mb-4 mx-auto sm:w-60 md:w-64"></div>
            <h3 className="text-lg font-medium text-black">Project Name #2</h3>
          </div>

          {/* Project #3 */}
          <div className="text-center">
            <div className="bg-gray-300 w-full h-40 rounded-lg mb-4 mx-auto sm:w-60 md:w-64"></div>
            <h3 className="text-lg font-medium text-black">Project Name #3</h3>
          </div>

          {/* Project #4 */}
          <div className="text-center">
            <div className="bg-gray-300 w-full h-40 rounded-lg mb-4 mx-auto sm:w-60 md:w-64"></div>
            <h3 className="text-lg font-medium text-black">Project Name #4</h3>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-[#758F78] text-white rounded-full hover:bg-[#5d7360] transition-all duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
