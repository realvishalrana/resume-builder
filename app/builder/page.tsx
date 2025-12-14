import React from 'react';

export default function BuilderPage() {
  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 border-r p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Editor</h1>
        {/* Form components will go here */}
        <div className="space-y-4">
          <p className="text-muted-foreground">Resume form will appear here.</p>
        </div>
      </div>
      <div className="w-1/2 bg-gray-100 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Preview</h1>
        {/* Preview component will go here */}
        <div className="bg-white shadow-lg w-[210mm] min-h-[297mm] mx-auto p-8">
           <p className="text-center text-gray-400 mt-20">Resume Preview</p>
        </div>
      </div>
    </div>
  );
}
