import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  FileText, 
  Upload as UploadIcon, 
  Loader2, 
  Sparkles, 
  AlertCircle,
  CheckCircle,
  ChevronLeft,
  X,
  Info,
  Zap,
  Shield
} from 'lucide-react';
import { ResumeContext } from '../context/ResumeContext';
import axios from 'axios';

const Upload = () => {
    const navigate = useNavigate();
    const [jobDescription, setJobDescription] = useState('');
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [fileError, setFileError] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const { setEnhancedResumeData } = useContext(ResumeContext);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Check file size (10MB limit)
            if (selectedFile.size > 10 * 1024 * 1024) {
                setFileError('File size exceeds 10MB limit');
                return;
            }
            
            // Check file type
            const fileType = selectedFile.type;
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            
            if (!validTypes.includes(fileType)) {
                setFileError('Please upload a PDF or Word document');
                return;
            }
            
            setFileError('');
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
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
            
            // Check file size (10MB limit)
            if (droppedFile.size > 10 * 1024 * 1024) {
                setFileError('File size exceeds 10MB limit');
                return;
            }
            
            // Check file type
            const fileType = droppedFile.type;
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            
            if (!validTypes.includes(fileType)) {
                setFileError('Please upload a PDF or Word document');
                return;
            }
            
            setFileError('');
            setFile(droppedFile);
            setFileName(droppedFile.name);
        }
    };

    const removeFile = () => {
        setFile(null);
        setFileName('');
        setFileError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (currentStep === 1 && file) {
            setCurrentStep(2);
            return;
        }
        
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("jd", jobDescription);
            formData.append("file", file);

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/resume/upload`, formData, {
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

    const goBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate("/");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Header Section */}
                <div className="flex items-center mb-2">
                    <button 
                        onClick={goBack}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Back</span>
                    </button>
                </div>
                
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
                        <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Optimize Your Resume
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our AI will analyze your resume against the job description to create a perfectly tailored application.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center items-center mb-8">
                    <div className="flex items-center">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-200'} text-white`}>
                            {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : "1"}
                        </div>
                        <div className={`w-16 h-1 ${currentStep > 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'} text-white`}>
                            {currentStep > 2 ? <CheckCircle className="w-5 h-5" /> : "2"}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {currentStep === 1 ? (
                            <>
                                <div className="text-lg font-semibold text-gray-800 mb-4">
                                    Step 1: Upload Your Current Resume
                                </div>
                                
                                <div className="relative">
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="resume"
                                        accept=".pdf,.doc,.docx"
                                    />
                                    <label
                                        htmlFor="resume"
                                        className={`flex flex-col items-center justify-center px-4 py-10 w-full border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
                                            dragActive 
                                                ? 'border-blue-500 bg-blue-50' 
                                                : file ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                                        }`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                    >
                                        <div className="text-center">
                                            {fileName ? (
                                                <div className="flex flex-col items-center gap-3">
                                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <FileText className="w-5 h-5 text-gray-500" />
                                                        <span className="font-medium text-gray-900 break-all">{fileName}</span>
                                                    </div>
                                                    <button 
                                                        type="button" 
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            removeFile();
                                                        }}
                                                        className="mt-2 text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                                                    >
                                                        <X className="w-4 h-4" />
                                                        Remove file
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <UploadIcon className="h-8 w-8 text-blue-500" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p className="text-lg font-medium text-blue-600">
                                                            Drag and drop your resume
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            or <span className="text-blue-600">browse</span> to choose a file
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-400 mt-4">
                                                        Supports PDF, DOC, or DOCX (max 10MB)
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </label>
                                    
                                    {fileError && (
                                        <div className="mt-2 text-red-600 text-sm flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {fileError}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-blue-700 font-medium mb-1">
                                            What makes a good resume?
                                        </p>
                                        <p className="text-sm text-blue-700">
                                            Upload your most recent resume. It doesn't need to be perfect - our AI will help
                                            optimize it for your target job.
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="text-lg font-semibold text-gray-800 mb-4">
                                    Step 2: Add Your Target Job Description
                                </div>
                                
                                <div>
                                    <label htmlFor="jobDescription" className="block text-base font-medium text-gray-700 mb-2">
                                        Job Description
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="jobDescription"
                                            value={jobDescription}
                                            onChange={(e) => setJobDescription(e.target.value)}
                                            className="w-full h-60 px-4 py-3 rounded-xl border-2 outline-none border-gray-200 focus:border-blue-500 transition-colors resize-none bg-gray-50 focus:bg-white text-base"
                                            placeholder="Paste the job description here..."
                                            required
                                        />
                                        <div className="absolute top-3 right-3">
                                            <FileText className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        For best results, paste the complete job description including requirements and responsibilities.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-blue-700 font-medium mb-1">
                                            How our AI works
                                        </p>
                                        <p className="text-sm text-blue-700">
                                            Our AI analyzes key requirements from the job description and tailors your 
                                            resume to highlight relevant skills and experience, improving your match score 
                                            with ATS systems.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading || (currentStep === 1 && !file) || (currentStep === 2 && !jobDescription)}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 text-base"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Optimizing Your Resume...
                                </>
                            ) : (
                                currentStep === 1 ? (
                                    <>
                                        Continue
                                        <ChevronRight className="w-5 h-5" />
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-5 h-5" />
                                        Generate Optimized Resume
                                    </>
                                )
                            )}
                        </button>

                        {isLoading && (
                            <div className="space-y-3">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${uploadProgress}%` }}
                                    />
                                </div>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p>
                                        {uploadProgress < 100 
                                            ? `Uploading: ${uploadProgress}%`
                                            : 'Processing your resume...'}
                                    </p>
                                    <p>
                                        {uploadProgress < 100 ? `${uploadProgress}%` : 'Almost done!'}
                                    </p>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
                
                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {[
                        {
                            icon: <Zap className="w-6 h-6 text-blue-600" />,
                            title: "AI-Powered Analysis",
                            description: "Our AI matches your skills to job requirements"
                        },
                        {
                            icon: <Shield className="w-6 h-6 text-blue-600" />,
                            title: "Data Privacy",
                            description: "Your information is secure and never shared"
                        },
                        {
                            icon: <FileText className="w-6 h-6 text-blue-600" />,
                            title: "ATS Optimization",
                            description: "Get past automated screening systems"
                        }
                    ].map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ChevronRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default Upload;