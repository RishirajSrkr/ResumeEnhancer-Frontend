import React, { useContext, useState } from 'react';
import { Layout, Eye, Download, Check, Menu, X } from 'lucide-react';
import { RiFileDownloadLine } from "react-icons/ri";
import { RiShareForwardFill } from "react-icons/ri";
import Template03 from '../templates/Template03';
import ShareablePortfolioTemplate from '../templates/ShareablePortfolioTemplate';
import Template05 from '../templates/Template05';
import { ResumeContext } from '../context/ResumeContext';
import { toast } from 'sonner';
import { saveResume } from '../utilities/saveResumeToDb'

function DownloadPage() {
    const [selectedTemplate, setSelectedTemplate] = useState("templateThree");
    const { enhancedResumeData: data } = useContext(ResumeContext);
    const [isSaving, setIsSaving] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const templates = [
        { id: "templateThree", name: "Professional", component: <Template03 data={data} />, description: "Sleek, ATS-friendly design for corporate roles." },
        { id: "templateFive", name: "Creative", component: <Template05 data={data} />, description: "Bold, eye-catching layout for creative fields." },
        { id: "portfolioResumeTemplate", name: "Digital Portfolio", component: <ShareablePortfolioTemplate />, description: "Live, shareable resume with a portfolio touch." }
    ];

    async function handleButtonClick() {
        const userName = data?.name + '_' + Date.now();
        if (selectedTemplate == "portfolioResumeTemplate") {
            const resumeId = await handleSaveToDb(userName, data);

            if (resumeId) {
                const resumeUrl = `${import.meta.env.VITE_FRONTEND_URL}/${userName}`;
                await window.navigator.clipboard.writeText(resumeUrl);
                toast.success("Copied to clipboard successfully!");
            } else {
                toast.error("Failed to save resume.");
            }
        }
        else {
            const originalTitle = document.title;
            document.title = userName;
            window.print();
            setTimeout(() => {
                document.title = originalTitle;
            }, 1000);
        }
    }

    async function handleSaveToDb(userName, resumeData) {
        try {
            setIsSaving(true)
            const resumeId = await saveResume(userName, resumeData);
            if (resumeId) {
                console.log("Resume saved successfully! ID:", resumeId);
                return resumeId;
            }
        } catch (error) {
            console.error("Error saving resume:", error);
        }
        finally {
            setIsSaving(false)
        }
        return null;
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Mobile Header */}
            <div className='lg:hidden bg-white border-b px-4 py-3 sticky top-0 z-50 flex items-center justify-between'>
                <h1 className='font-semibold text-gray-800'>Resume Templates</h1>
                <button 
                    onClick={toggleSidebar}
                    className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                >
                    {isSidebarOpen ? (
                        <X className='w-5 h-5 text-gray-600' />
                    ) : (
                        <Menu className='w-5 h-5 text-gray-600' />
                    )}
                </button>
            </div>

            <div className='max-w-[1600px] mx-auto flex flex-col lg:flex-row relative'>
                {/* Preview Area */}
                <div className='flex-grow bg-white order-2 lg:order-1'>
                    <div className='mx-auto max-w-full overflow-x-auto'>
                        {templates.find(template => template.id === selectedTemplate)?.component}
                    </div>
                </div>

                {/* Template Selection Sidebar */}
                <div className={`
                    w-full lg:w-80 flex-shrink-0 print:hidden bg-white lg:bg-transparent
                    fixed lg:relative inset-0 z-40 lg:z-auto
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}>
                    <div className='h-full lg:h-auto overflow-y-auto lg:overflow-visible p-4 lg:p-6 lg:sticky lg:top-6'>
                        {/* Header */}
                        <div className='mb-6'>
                            <h2 className='text-xl font-semibold text-gray-800'>Choose Template</h2>
                            <p className='text-sm text-gray-500 mt-1'>Select the perfect design for your resume</p>
                        </div>

                        {/* Template List */}
                        <div className='space-y-3'>
                            {templates.map((template) => (
                                <button
                                    key={template.id}
                                    onClick={() => {
                                        setSelectedTemplate(template.id);
                                        setIsSidebarOpen(false);
                                    }}
                                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 group
                                        ${selectedTemplate === template.id
                                            ? 'border-blue-500 bg-blue-50/50'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                        }`}
                                >
                                    <div className='flex items-center justify-between mb-2'>
                                        <div className='flex items-center gap-2'>
                                            <Layout className={`w-4 h-4 ${selectedTemplate === template.id ? 'text-blue-500' : 'text-gray-400'}`} />
                                            <span className={`font-medium ${selectedTemplate === template.id ? 'text-blue-500' : 'text-gray-700'}`}>
                                                {template.name}
                                            </span>
                                        </div>
                                        {selectedTemplate === template.id && (
                                            <Check className='w-4 h-4 text-blue-500' />
                                        )}
                                    </div>
                                    <p className='text-sm text-gray-500'>{template.description}</p>
                                </button>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className='mt-6 space-y-3'>
                            <button
                                onClick={() => {
                                    handleButtonClick();
                                    setIsSidebarOpen(false);
                                }}
                                className='w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                            >
                                {selectedTemplate == "portfolioResumeTemplate" ? (
                                    <span className='flex gap-2 items-center'>
                                        {isSaving ? "Preparing..." : (
                                            <span className='flex items-center gap-2'>
                                                <RiShareForwardFill size={16} /> Get Shareable Link
                                            </span>
                                        )}
                                    </span>
                                ) : (
                                    <span className='flex gap-1 items-center'>
                                        <RiFileDownloadLine size={16} /> Download PDF
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div 
                        className='fixed inset-0 bg-black/20 z-30 lg:hidden'
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default DownloadPage;