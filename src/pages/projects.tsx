// projects.tsx
import React from 'react';
import Image from 'next/image';
import Button from '../components/Button'; // Button for Info
import PurpButton from '../components/PurpButton'; // Button for Start/Apply
import BlackBox from '../components/BlackBox'; // Container for each project
import Header from '../components/Header'; // Adding the Header component
import PurpleButton from '@/components/PurpleButton';

interface Project {
  name: string;
  description: string;
  status: string;
  reward: string;
  image: string;
  buttonType: string;
}

const ProjectBoard: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Developer DAO',
      description: 'Develop LLM Model for DAO',
      status: 'Info',
      reward: '2 ETH',
      image: 'org1.png',
      buttonType: 'PurpleButton',
    },
    {
      name: 'Starknet',
      description: 'Write Developer Documents',
      status: 'Info',
      reward: '3 ETH',
      image: 'starknet.png',
      buttonType: 'PurpleButton',
    },
    {
      name: 'ACTxDesign',
      description: 'Write Our Documentation',
      status: 'Info',
      reward: '4 ETH',
      image: 'act.png',
      buttonType: 'PurpleButton',
    },
    // Add other projects here...
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <header className="text-center my-10">
          <h1 className="text-5xl font-bold mb-6">The Project Board</h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur. Cursus dictumst nec ac ac tellus placerat viverra. Pellentesque varius tortor nulla consectetur. Adipiscing a sit nibh ante. Feugiat porttitor scelerisque bibendum tincidunt semper.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project: Project, index: number) => (
              <BlackBox
                key={index}
                label={project.status}
                onClick={() => {}}
                className="flex flex-col items-center p-6 rounded-lg space-y-4"
              >
                <Image
                  src={`/${project.image}`}
                  alt={`${project.name} Logo`}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="self-stretch bg-gray-700 p-2 rounded-lg flex justify-between items-center">
                  <span className="font-bold text-lg">{project.reward}</span>
                  {project.buttonType === 'Button' ? (
                    <Button>{project.status}</Button>
                  ) : (
                    <PurpButton>{project.status}</PurpButton>
                  )}
                </div>
              </BlackBox>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectBoard;
