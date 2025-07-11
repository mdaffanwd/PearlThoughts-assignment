"use client"

import { useEffect, useState } from 'react';
import { FaHome, FaUsers, FaCalendarAlt, FaCog, FaSignOutAlt, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { name: 'Dashboard', icon: <FaHome />, path: '/' },
        { name: 'Teachers', icon: <FaUsers />, path: '/teachers' },
        { name: 'Schedule', icon: <FaCalendarAlt />, path: '#schedule' },
        { name: 'Settings', icon: <FaCog />, path: '/settings' },
        { name: 'Logout', icon: <FaSignOutAlt />, path: '/logout' },
    ];

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth < 768;
            setCollapsed(isSmallScreen);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <aside className={`sticky left-0 top-0 bg-gray-800 text-white h-screen transition-all duration-300 ${collapsed ? 'w-16' : 'w-48'} flex flex-col`}>
            {/* Toggle Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                {!collapsed && <span className="text-xl font-semibold">Menu</span>}
                <button onClick={() => setCollapsed(!collapsed)} className="text-xl focus:outline-none cursor-pointer">
                    {
                        collapsed ? <FaRegArrowAltCircleRight /> : <IoMdClose />
                    }
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
                <ul className="flex flex-col gap-1 p-2">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.path}
                                className={`flex items-center gap-3 p-3 rounded-md ${index === navItems.length - 1 ? 'hover:bg-red-800' : 'hover:bg-gray-700'
                                    } transition-colors`}
                            >
                                <span className={`text-lg ${index === navItems.length - 1 ? 'text-red-400' : ''
                                    }`}>{item.icon}</span>
                                {!collapsed && <span
                                    className={`text-sm font-medium ${index === navItems.length - 1 ? 'text-red-400' : ''
                                        }`}
                                >
                                    {item.name}
                                </span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

