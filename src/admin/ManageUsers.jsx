const ManageUsers = () => {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Manage Users</h2>
        <div className="mb-4">
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded">Add New User</button>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Username</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Role</th>
                    <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="px-4 py-2 border">1</td>
                    <td className="px-4 py-2 border">John Doe</td>
                    <td className="px-4 py-2 border">john@example.com</td>
                    <td className="px-4 py-2 border">Admin</td>
                    <td className="px-4 py-2 border">
                        <button className="text-blue-500 hover:underline">Edit</button>
                        <button className="text-red-500 hover:underline ml-4">Delete</button>
                    </td>
                    </tr>
                    {/* More user rows */}
                </tbody>
            </table>
        </div>
      </div>
    );
  };
  
  export default ManageUsers;
  