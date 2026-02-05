
import React from 'react';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white sm:bg-gray-50 flex flex-col items-center">
      {/* Unified Single-Page Brochure Content */}
      <div className="brochure-container w-full bg-white relative min-h-screen overflow-x-hidden shadow-sm flex flex-col">
        <PageOne />
        {/* Subtle transition divider */}
        <div className="px-6">
          <div className="h-px w-full bg-gray-100"></div>
        </div>
        <PageTwo />
        
        {/* Secondary footer removed to shorten the end as requested */}
      </div>
    </div>
  );
};

export default App;
