import React, { useState } from 'react'
import { toast } from 'sonner';
import { FaFileUpload } from "react-icons/fa";

function ResumeUploadInput({ onChange, filename }) {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="relative flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-400 rounded-lg hover:border-blue-500 transition-colors duration-300">
                <input
                    id="fileInput"
                    type="file"
                    onChange={onChange}
                    className="hidden"
                />
                <label
                    htmlFor="fileInput"
                    className="flex flex-col items-center justify-center cursor-pointer"
                >
                    <FaFileUpload size={22}/>
                    <p className="mt-2 text-gray-500">{filename ?  filename : "Upload your resume"}</p>
                </label>
            </div>
        </div>
    )
}

export default ResumeUploadInput