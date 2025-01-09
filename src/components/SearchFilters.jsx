import React from 'react';

export const SearchFilters = ({ params, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...params, [name]: value });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Region</label>
        <select
          name="region"
          value={params.region}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="">All Regions</option>
          <option value="nsw">New South Wales</option>
          <option value="vic">Victoria</option>
          <option value="qld">Queensland</option>
          <option value="wa">Western Australia</option>
          <option value="sa">South Australia</option>
          <option value="tas">Tasmania</option>
          <option value="nt">Northern Territory</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Industry</label>
        <select
          name="industry"
          value={params.industry}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="">All Industries</option>
          <option value="agriculture">Agriculture</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="mining">Mining</option>
          <option value="construction">Construction</option>
          <option value="retail">Retail</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Business Size</label>
        <select
          name="size"
          value={params.size}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="">Any Size</option>
          <option value="small">Small (1-19)</option>
          <option value="medium">Medium (20-199)</option>
          <option value="large">Large (200+)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Revenue Range</label>
        <select
          name="revenue"
          value={params.revenue}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="">Any Revenue</option>
          <option value="1M-5M">$1M - $5M</option>
          <option value="5M-20M">$5M - $20M</option>
          <option value="20M-50M">$20M - $50M</option>
          <option value="50M+">$50M+</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;