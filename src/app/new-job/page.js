"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NewJob = () => {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);

  // Handle adding new question fields
  const addQuestion = () =>
    setQuestions([...questions, { question: "", answer: "" }]);

  // Handle question input change
  const updateQuestion = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  // Handle answer input change
  const updateAnswer = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].answer = value;
    setQuestions(newQuestions);
  };

  // Handle form submission (placeholder for MongoDB integration)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { jobTitle, description, questions };
    
    try {
      console.log('Sending data:', jobData); // Debug log
      
      const response = await fetch('/api/process-job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData); // Debug log
        throw new Error(errorData.error || 'Failed to process job');
      }
      
      const result = await response.json();
      console.log('Success:', result); // Debug log
      
      alert('Job saved successfully!');
      router.push('/');
    } catch (error) {
      console.error('Detailed error:', error); // Debug log
      alert(`Failed to save job: ${error.message}`);
    }
  };
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-orange-600 mb-4">
        Add New Job
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Title */}
        <div>
          <label className="block font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            rows="4"
            required
          />
        </div>

        {/* Questions & Answers */}
        <div>
          <label className="block font-medium text-gray-700">
            Questions & Answers
          </label>
          {questions.map((q, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={q.question}
                onChange={(e) => updateQuestion(index, e.target.value)}
                className="w-full p-2 border rounded mt-1"
                placeholder={`Question ${index + 1}`}
                required
              />
              <input
                type="text"
                value={q.answer}
                onChange={(e) => updateAnswer(index, e.target.value)}
                className="w-full p-2 border rounded mt-1"
                placeholder={`Answer ${index + 1}`}
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addQuestion}
            className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
          >
            + Add Question & Answer
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-2 rounded font-bold"
        >
          Save Job
        </button>
      </form>
    </div>
  );
};

export default NewJob;
      
