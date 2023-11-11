// ProjectDetailModal.tsx
import React from 'react';
import Button from '../components/Button';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    organization: string;
    title: string;
    timeline: string;
    budget: string;
    description: string;
    // Add other fields as per your project data structure
  };
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  project
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-200 p-4 rounded">
            <p className="font-bold">Organization:</p>
            <p>{project.organization}</p>
          </div>
          {/* ... other project details */}
        </div>
        {/* ... job description and buttons ... */}
        <div className="flex space-x-4">
          <Button onClick={() => {}}>Request</Button>
          <Button onClick={() => {}}>Start</Button>
          <Button onClick={() => {}}>Save</Button>
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
