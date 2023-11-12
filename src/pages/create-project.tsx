import React, { useState } from 'react';
import Button from '../components/Button';

const CreateProjectModal: React.FC = () => {
  const [projectDetails, setProjectDetails] = useState({
    organization: '',
    title: '',
    timeline: '',
    budget: '',
    description: '',
    files: [] as File[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProjectDetails({ ...projectDetails, files: Array.from(e.target.files) });
    }
  };

  const handleSubmit = () => {
    // Handle the submission of the new project
    console.log(projectDetails);
    // You will likely want to send this data to a server or some other processing function
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-10">
      <div className="bg-gray-400 text-black p-6 rounded-lg max-w-2xl w-full mx-4 shadow-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Add a New Project</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur.</p>
          
          <div className="mb-4">
            <input
              type="text"
              name="organization"
              value={projectDetails.organization}
              onChange={handleInputChange}
              placeholder="Organization"
              className="p-2 rounded border-2 border-gray-300 w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={projectDetails.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="p-2 rounded border-2 border-gray-300 w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="timeline"
              value={projectDetails.timeline}
              onChange={handleInputChange}
              placeholder="Timeline"
              className="p-2 rounded border-2 border-gray-300 w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="budget"
              value={projectDetails.budget}
              onChange={handleInputChange}
              placeholder="Budget"
              className="p-2 rounded border-2 border-gray-300 w-full"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="description"
              value={projectDetails.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="p-2 rounded border-2 border-gray-300 w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="file"
              name="files"
              onChange={handleFileChange}
              multiple
              className="p-2 rounded border-2 border-gray-300 w-full"
            />
          </div>

          <div className="flex justify-center gap-4">
            <Button onClick={handleSubmit}>Submit</Button>
            <Button>Save</Button>
            {/* Add additional buttons as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
