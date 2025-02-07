import React from 'react';

const TextArea = ({
  jobDescription,
  setJobDescription,
}) => {

  const maxLength = 3000;

  return (
    <div className="relative w-full">
      <textarea
        rows={4}
        maxLength={maxLength}
        placeholder={"Paste the job description here . . ."}
        value={jobDescription}
        onChange={setJobDescription}
        className="
          w-full 
          px-4 
          py-3 
          text-gray-700 
          bg-white 
          border 
          border-gray-300 
          rounded-lg 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500/50 
          focus:border-blue-500 
          transition-all 
          duration-300 
          ease-in-out 
          resize-y 
          min-h-[100px]
          placeholder-gray-400
        "
      />
      <div className="absolute bottom-2 right-3 text-sm text-gray-500">
        {jobDescription?.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextArea;