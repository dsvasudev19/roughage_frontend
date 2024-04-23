import React, { useState, useEffect } from 'react';

function TermsAndCondition({ entry }) {
  const [activeTab, setActiveTab] = useState('panel-1');
  const [entryData, setEntryData] = useState(null);

  useEffect(() => {
    if (entry) {
      setEntryData(entry);
    }
  }, [entry]);

  const onTabClick = (target) => {
    setActiveTab(target);
  };

  if (!entryData) {
    return null; // Render nothing if entryData is not available yet
  }

  return (
    <>
      <div className="bg-white">
        <nav className="tabs flex flex-col sm:flex-row">
          <button
            onClick={() => onTabClick('panel-1')}
            className={`tab ${activeTab === 'panel-1' ? 'active' : ''} text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500`}
          >
            Description
          </button>
          <button
            onClick={() => onTabClick('panel-2')}
            className={`tab ${activeTab === 'panel-2' ? 'active' : ''} text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none`}
          >
            Map and Street View
          </button>
          <button
            onClick={() => onTabClick('panel-3')}
            className={`tab ${activeTab === 'panel-3' ? 'active' : ''} text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none`}
          >
            Other info
          </button>
        </nav>
      </div>
      <div id="panels">
        <div className={`panel-1 tab-content ${activeTab === 'panel-1' ? 'active' : ''} py-5`}>
          <span className="mr-5">
            <i className="fal fa-bed mr-1" /> {entryData.bedrooms}
          </span>
          <span>
            <i className="fal fa-bath mr-1" /> {entryData.bathrooms}
          </span>
          {entryData.body}
        </div>
        <div className={`panel-2 tab-content ${activeTab === 'panel-2' ? 'active' : ''} py-5`}>Map here</div>
        <div className={`panel-3 tab-content ${activeTab === 'panel-3' ? 'active' : ''} py-5`}>Other info</div>
      </div>
    </>
  );
}

export default TermsAndCondition;
