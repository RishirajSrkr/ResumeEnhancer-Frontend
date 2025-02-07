import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { FileText, Upload as UploadIcon, Loader2 } from 'lucide-react';
import { ResumeContext } from '../context/ResumeContext';
import axios from 'axios';

const Upload = () => {
    const navigate = useNavigate();
    const [jobDescription, setJobDescription] = useState('');
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState('');

    const { setEnhancedResumeData } = useContext(ResumeContext);
    const [uploadProgress, setUploadProgress] = useState(0)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {

            const formData = new FormData;
            formData.append("jd", jobDescription);
            formData.append("file", file);


            const response = await axios.post(`http://localhost:8080/api/resume/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded) / (progressEvent.total) * 100)
                    setUploadProgress(percentCompleted)
                }
            });



            const enhancedResumeData = response.data;

            console.log(JSON.stringify(enhancedResumeData));

            setEnhancedResumeData(enhancedResumeData)

            navigate("/download")


        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <div className="flex items-center gap-2 mb-8">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <h1 className="text-2xl font-bold text-gray-900">Upload Your Details</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Job Description Input */}
                    <div>
                        <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
                            Job Description
                        </label>
                        <textarea
                            id="jobDescription"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            className="w-full h-48 px-4 py-3 rounded-lg border outline-none border-gray-200 focus:border-blue-500  transition-colors resize-none"
                            placeholder="Paste the job description here..."
                            required
                        />
                    </div>

                    {/* Resume Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Resume
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
                                className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors cursor-pointer"
                            >
                                <div className="text-center">
                                    <UploadIcon className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                                    {fileName ? (
                                        <span className="text-sm text-gray-900">{fileName}</span>
                                    ) : (
                                        <>
                                            <span className="text-blue-600 font-medium">Click to upload</span>
                                            <span className="text-gray-500"> or drag and drop</span>
                                            <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (max 10MB)</p>
                                        </>
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Generating Resume...
                            </>
                        ) : (
                            'Generate Optimized Resume'
                        )}
                    </button>

                    {isLoading && (
                        <div className="w-full space-y-2">
                            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                                Uploading: {uploadProgress}%
                            </p>
                        </div>
                    )}


                </form>
            </div>
        </div>
    );
};

export default Upload;