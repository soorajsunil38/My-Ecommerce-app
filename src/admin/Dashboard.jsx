const Dashboard = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-600 hover:bg-green-700 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold text-white">Total Sales</h3>
                    <p className="text-2xl text-white">₹7,845</p>
                </div>
                <div className="bg-red-600 hover:bg-red-700 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold text-white">Orders</h3>
                    <p className="text-2xl text-white">120</p>
                </div>
                <div className="bg-orange-600 hover:bg-orange-700 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold text-white">Customers</h3>
                    <p className="text-2xl text-white">350</p>
                </div>
                <div className="bg-amber-500 hover:bg-amber-600 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold text-white">Active Users</h3>
                    <p className="text-2xl text-white">45</p>
                </div>
                <div className="bg-slate-600 hover:bg-slate-700 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold text-white">Top Products</h3>
                    <p className="text-2xl text-white">25</p>
                </div>
                <div className="bg-blue-600 hover:bg-blue-700 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold text-white">Total Revenue</h3>
                    <p className="text-2xl text-white">₹3,55,674</p>
                </div>
            </div>
        </div>
    );
};
  
  export default Dashboard;
  