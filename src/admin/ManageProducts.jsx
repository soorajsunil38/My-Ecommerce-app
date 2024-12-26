const ManageProducts = () => {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Manage Products</h2>
        <div className="mb-4">
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded">Add New Product</button>
        </div>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Product Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">Product 1</td>
              <td className="px-4 py-2 border">₹1000</td>
              <td className="px-4 py-2 border">
                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                <button className="text-red-500 hover:text-red-600 ml-4">Delete</button>
              </td>
            </tr>
            {/* More product rows */}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ManageProducts;
  