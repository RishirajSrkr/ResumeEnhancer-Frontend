import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { FileText, Upload as UploadIcon, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { ResumeContext } from '../context/ResumeContext';
import axios from 'axios';

const Upload = () => {
    const navigate = useNavigate();
    const [jobDescription, setJobDescription] = useState('');
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState('');
    const [dragActive, setDragActive] = useState(false);

    const { setEnhancedResumeData } = useContext(ResumeContext);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            setFile(droppedFile);
            setFileName(droppedFile.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("jd", jobDescription);
            formData.append("file", file);

            const response = await axios.post(`http://localhost:8080/api/resume/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded) / (progressEvent.total) * 100);
                    setUploadProgress(percentCompleted);
                }
            });

            setEnhancedResumeData(response.data);
            navigate("/download");
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                        Optimize Your Resume
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Transform your resume to perfectly match your dream job. Our AI-powered tool
                        analyzes job descriptions and optimizes your resume for maximum impact.
                    </p>
                </div>

                <div className="w-full">
                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                       <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
                         {/* Job Description Input */}
                         <div className="w-full lg:w-2/3">
                            <label htmlFor="jobDescription" className="block text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                                Job Description
                            </label>
                            <div className="relative">
                                <textarea
                                    id="jobDescription"
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    className="w-full h-40 md:h-48 px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 outline-none border-gray-200 focus:border-blue-500 transition-colors resize-none bg-gray-50 focus:bg-white text-sm md:text-base"
                                    placeholder="Paste the job description here..."
                                    required
                                />
                                <div className="absolute top-3 right-3">
                                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div className="w-full lg:w-1/3">
                            <label className="block text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                                Upload Your Resume
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="resume"
                                    accept=".pdf,.doc,.docx"
                                    required
                                />
                                <label
                                    htmlFor="resume"
                                    className={`flex flex-col items-center justify-center px-3 md:px-4 py-6 md:py-8 w-full h-40 md:h-48 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
                                        dragActive 
                                            ? 'border-blue-500 bg-blue-50' 
                                            : 'border-gray-300 hover:border-blue-500 hover:bg-gray-50'
                                    }`}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                >
                                    <div className="text-center">
                                        {fileName ? (
                                            <div className="flex items-center gap-2 px-2">
                                                <span className="text-xs md:text-sm font-medium text-gray-900 break-all">{fileName}</span>
                                            </div>
                                        ) : (
                                            <>
                                                <UploadIcon className="mx-auto h-6 w-6 md:h-8 md:w-8 text-gray-400 mb-3 md:mb-4" />
                                                <div className="space-y-1 md:space-y-2">
                                                    <p className="text-base md:text-lg font-medium text-blue-600">
                                                        Drop your resume here
                                                    </p>
                                                    <p className="text-xs md:text-sm text-gray-500">
                                                        or <span className="text-blue-600">browse</span> to choose a file
                                                    </p>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-3 md:mt-4">
                                                    Supports PDF, DOC, or DOCX (max 10MB)
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </label>
                            </div>
                        </div>
                       </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 text-sm md:text-base"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                                    Optimizing Your Resume...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                                    Generate Optimized Resume
                                </>
                            )}
                        </button>

                        {isLoading && (
                            <div className="space-y-2 md:space-y-3">
                                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                                    <div 
                                        className="bg-blue-600 h-1.5 md:h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${uploadProgress}%` }}
                                    />
                                </div>
                                <p className="text-xs md:text-sm text-center text-gray-600">
                                    {uploadProgress < 100 
                                        ? `Uploading: ${uploadProgress}%`
                                        : 'Processing your resume...'}
                                </p>
                            </div>
                        )}

                        {/* Info Section */}
                        <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-blue-50 rounded-lg">
                            <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs md:text-sm text-blue-700">
                                Our AI will analyze your resume against the job description and suggest optimizations 
                                to increase your chances of landing an interview. Your data is processed securely 
                                and confidentially.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Upload;