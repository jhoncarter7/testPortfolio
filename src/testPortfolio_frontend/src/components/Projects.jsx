import React, { useState } from 'react';

const Projects = () => {

    let AllProject = [
        {
            title: "Project 1",
            description: "This is a project",
            type: 'frontend',
            image: "/blog3.jpg"
        },
        {
            title: "Project 2",
            description: "This is a project",
            type: 'backend',
            image: "/blog1.jpg"
        },
        {
            title: "Project 3",
            description: "This is a project",
            type: 'frontend',
            image: "/blog3.jpg"
        },
        {
            title: "Project 4",
            description: "This is a project",
            type: 'backend',
            image: "/blog4.jpg"
        }
    ];

    const [currentView, setCurrentView] = useState('all');
    const [projects, setProjects] = useState(AllProject);
    // const [backendProjects, setBackendProjects] = useState([]);

    const showAll = () => {
        setProjects(AllProject);
        setCurrentView('all');
    };

    const showFrontend = () => {
        setProjects(AllProject.filter((project) => project.type === "frontend"));
        setCurrentView('frontend');
    };
console.log(projects)
    const showBackend = () => {
        setProjects(AllProject.filter((project) => project.type === "backend"));
        setCurrentView('backend');
    };
    return (
        <section id='projects' className=" h-full flex flex-col items-center justify-center pt-24 ">
            <div className='flex flex-col gap-x-4 items-center'>
                <h4 className='text-orange-600 font-medium text-2xl pb-3'>Portfolio</h4>
                <h1 className='text-3xl md:text-5xl font-semibold pb-5 leading-snug'>My Amazing Works</h1>
                <p className='text-2xl font-normal text-gray-400 text-center pb-8 md:pb-16'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
            </div>
            <div className="mb-6 md:mb-24 flex gap-6">
                <button
                    onClick={showAll}
                    className="px-4 py-2 font-semibold text-xl rounded mr-2"
                >
                    All
                </button>
                <button
                    onClick={showFrontend}
                    className="px-4 py-2 font-semibold text-xl rounded"
                >
                    Frontend
                </button>
                <button
                    onClick={showBackend}
                    className="px-4 py-2 font-semibold text-xl rounded"
                >
                    Backend
                </button>
            </div>
            <div className='relative w-fit flex justify-center'>
                <div className={` w-[96vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-6 text-center '}`}>
                    {projects?.map((project, index) => (
                        <div key={index} className='overflow-hidden m-auto'>
                            <img
                                src={project.image}
                                alt="Example"
                                className="w-[27rem] sm:max-w-96 h-72 object-cover"
                            />
                        </div>
                    ))}
                </div>
               
            </div>
        </section>
    );
};

export default Projects;
