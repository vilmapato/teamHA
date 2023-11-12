// ProjectDetailModal.tsx
import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import PurpleButton from "@/components/PurpleButton";

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
  project,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-10">
      <div className="bg-gray-400 p-6 rounded-lg max-w-2xl w-full mx-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 bg-transparent hover:bg-gray-200 rounded-full p-2"
          >
            Close [X]
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white text-black p-4 rounded-lg">
            <p className="font-bold">Organization:</p>
            <p>{project.organization}</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg">
            <p className="font-bold">Title:</p>
            <p>{project.title}</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg">
            <p className="font-bold">Timeline:</p>
            <p>{project.timeline}</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg">
            <p className="font-bold">Project Budget:</p>
            <p>{project.budget}</p>
          </div>
        </div>
        <div className="bg-white text-black p-4 rounded-lg mb-4">
          <p className="font-bold">Job Description:</p>
          <p>{project.description}</p>
        </div>
        <button
          className="w-full md:w-1/2 mx-auto bg-white text-black py-4 px-8 rounded-lg flex items-center justify-center mb-4 
             transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          onClick={() => {
            /* Define your download action here */
          }}
        >
          <span className="font-bold text-center">+ Download Files</span>
        </button>

        <div className="flex justify-around mb-4">
          <PurpleButton>Request</PurpleButton>
          <Link href="/dashboard" passHref>
            <PurpleButton>Start</PurpleButton>
          </Link>
          <PurpleButton>Save</PurpleButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
