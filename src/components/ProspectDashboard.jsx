import React, { useState } from 'react';
import { BusinessMap } from './BusinessMap';
import { ProspectList } from './ProspectList';
import { SearchFilters } from './SearchFilters';

export const ProspectDashboard = () => {
  const [searchParams, setSearchParams] = useState({
    region: '',
    industry: '',
    size: '',
    revenue: ''
  });

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <SearchFilters 
          params={searchParams} 
          onChange={setSearchParams} 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <BusinessMap
            searchParams={searchParams}
            onBusinessSelect={setSelectedBusiness}
          />
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <ProspectList
            searchParams={searchParams}
            selectedBusiness={selectedBusiness}
          />
        </div>
      </div>
    </div>
  );
};

export default ProspectDashboard;