import React from 'react'
import Header from '@/components/shared/Header'
import PersonalInfo from '@/components/resume/sections/PersonalInfo'

const page = () => {
    return (
        <div>
            <Header />
            <div className="flex h-screen w-full">
                <div className="w-1/3 border-r p-6 overflow-y-auto">
                    <h1 className="text-2xl font-bold mb-6">Editor</h1>
                    <PersonalInfo />
                </div>
                <div className="w-2/3 bg-gray-100 p-6 overflow-y-auto">
                    <h1 className="text-2xl font-bold mb-6">Preview</h1>
                    {/* Preview component will go here */}
                    <div className="bg-white shadow-lg w-[210mm] min-h-[297mm] mx-auto p-8">
                        <p className="text-center text-gray-400 mt-20">Resume Preview</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page