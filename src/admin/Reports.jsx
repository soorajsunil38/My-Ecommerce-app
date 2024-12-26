const Reports = () => {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Reports</h2>
        <div className="space-x-4">
          <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded">Download Sales Report</button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Download User Report</button>
        </div>
      </div>
    );
  };
  
  export default Reports;
  