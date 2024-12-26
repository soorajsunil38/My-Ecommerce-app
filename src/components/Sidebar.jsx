import { Link } from 'react-router-dom';

const sidebarItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Manage Products', path: '/products' },
    { label: 'Manage Users', path: '/users' },
    { label: 'Reports', path: '/reports' },
];

const Sidebar = () => {
    return (
        <div className="h-screen bg-gray-900 text-white p-5">
            <h2 className="text-3xl font-bold mb-10">Admin Panel</h2>
            <ul>
                {sidebarItems.map((item, index) => (
                    <li
                        key={index}
                        className={`mb-3 ${index !== sidebarItems.length - 1 ? 'border-b border-gray-700' : ''} pb-3`}
                    >
                        <Link to={item.path} className="text-lg hover:text-gray-400">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
