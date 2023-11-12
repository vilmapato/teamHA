import React, { useState } from "react";
import Link from "next/link";
import router from "next/router";

// Task interface for type safety (if using TypeScript)
interface Task {
  id: number;
  title: string;
}

interface SubmitModalProps {
  task?: Task; // Make task optional to handle undefined cases
  onClose: () => void;
  updateTaskStatus: (
    taskId: number,
    status: "Submit Work" | "Under Review" | "Completed"
  ) => void;
}

const SubmitModal: React.FC<SubmitModalProps> = ({
  task,
  onClose,
  updateTaskStatus,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [submissionConfirmed, setSubmissionConfirmed] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file to submit.");
      return;
    }
    if (!task || task.id === undefined) {
      alert("Invalid task details.");
      return;
    }
    updateTaskStatus(task.id, "Under Review");
    // Simulate file submission
    setTimeout(() => {
      setSubmissionConfirmed(true); // Update the state to show the confirmation message
    }, 1000); // You can adjust the timeout as needed
  };

  const handleConfirmationClose = () => {
    setSubmissionConfirmed(false);
    onClose();
    router.push("/profile-complete#congratulations"); // Use the router to navigate
  };

  // If task is not provided, return null or a placeholder
  if (!task) {
    return <div>Task details not available.</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {submissionConfirmed ? (
        <div className="bg-gray-400 p-8 rounded-lg shadow-xl text-center">
          <h2 className="text-black text-xl font-bold mb-4">
            Submission Confirmed
          </h2>
          <p>
            Your project "{task.title}" has been submitted. Meanwhile, your
            other project from DevDAO has finished its review process. Check out
            your new smart credential!
          </p>
          <Link href="/profile-complete" passHref>
            <button
              className="mt-4 px-4 py-2 rounded bg-teal-300 text-white"
              onClick={handleConfirmationClose}
            >
              Go to Profile
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-gray-400 p-8 rounded-lg shadow-xl">
          <h2 className="text-xl font-bold mb-4 text-black">
            Submit Work for {task.title}
          </h2>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
          <div className="mt-4 flex justify-end space-x-2">
            <button
              className="px-4 py-2 rounded bg-red-500 text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded bg-blue-500 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitModal;
