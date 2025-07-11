'use client';

import Link from 'next/link';
import { FiUser } from 'react-icons/fi';

type Props = {
    teacherName: string;
};

export default function TeacherBreadcrumb({ teacherName }: Props) {
    return (
        <div className="flex items-center space-x-2  px-4 md:px-8 py-4 bg-gray-200 ">
            <Link href="/teachers" className="text-blue-600 hover:underline">
                Teachers
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-800 font-medium">{teacherName}</span>
            <FiUser className="ml-2 text-gray-500" />
        </div>
    );
}
