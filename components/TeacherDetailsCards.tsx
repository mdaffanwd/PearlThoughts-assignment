import React from 'react';
import { FaChevronDown, FaPlus } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

type Qualification = {
  name: string;
  rate: number;
};

type TeacherDetailsProps = {
  name: string;
  role: string;
  birthDate?: string;
  email: string;
  phone: string;
  address: string;
  privateQualifications: Qualification[];
  groupQualifications: Qualification[];
};

export default function TeacherDetailsCards(props: TeacherDetailsProps) {
  const {
    name,
    role,
    birthDate,
    email,
    phone,
    address,
    privateQualifications,
    groupQualifications,
  } = props;

  return (
    <>
      <section className="w-full px-2 md:px-4 pt-4 bg-gray-100 h-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6">
          {/* Left Side - 2/3 width */}
          <div className="md:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <div className="bg-white shadow-sm rounded-md p-4">
              <div className=" mb-2 flex justify-between items-center border-b border-gray-300 pb-1">
                <h2 className="text-lg font-semibold text-gray-700">Details</h2>
                <div className="flex gap-2 items-center">
                  <MdEdit className="text-gray-500 hover:text-blue-500 cursor-pointer" />
                  <FaChevronDown className="text-gray-500 cursor-pointer" />
                </div>
              </div>
              <div className="space-y-1 text-gray-600">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Role:</strong> {role}</p>
                {birthDate && <p><strong>Birth Date:</strong> {birthDate}</p>}
              </div>
            </div>

            {/* Private Qualifications */}
            <div className="bg-white shadow-sm rounded-md p-4">
              <div className="mb-2 flex justify-between items-center ">
                <h2 className="text-lg font-semibold  text-gray-700">Private Qualifications</h2>
                <FaPlus className="text-gray-500 cursor-pointer" />
              </div>
              <table className="w-full text-left text-sm text-gray-700">
                <thead>
                  <tr className="border-b border-gray-400">
                    <th className="py-1 font-medium">Name</th>
                    <th className="py-1 font-medium">Rate ($/hr)</th>
                  </tr>
                </thead>
                <tbody>
                  {privateQualifications.length > 0 ? (
                    privateQualifications.map((q, i) => (
                      <tr key={i} className="border-b border-gray-300 last:border-none">
                        <td className="py-1">{q.name}</td>
                        <td className="py-1">${q.rate.toFixed(2)}</td>
                      </tr>
                    ))

                  ) : (
                    <p className="text-gray-500">No group qualifications.</p>
                  )}

                </tbody>
              </table>
            </div>

            {/* Group Qualifications */}
            <div className="bg-white shadow-sm rounded-md p-4">
              <div className="mb-2 flex justify-between items-center border-b border-gray-300 pb-1">
                <h2 className="text-lg font-semibold mb-2 text-gray-700">Group Qualifications</h2>
                <FaPlus className="text-gray-500 cursor-pointer" />
              </div>
              {groupQualifications.length > 0 ? (
                <table className="w-full text-left text-sm text-gray-700">
                  <thead>
                    <tr className="border-b">
                      <th className="py-1 font-medium">Name</th>
                      <th className="py-1 font-medium">Rate ($/hr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupQualifications.map((q, i) => (
                      <tr key={i} className="border-b last:border-none">
                        <td className="py-1">{q.name}</td>
                        <td className="py-1">${q.rate.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500">No group qualifications.</p>
              )}
            </div>
          </div>

          {/* Right Side - 1/3 width */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-white shadow-sm rounded-md p-4 ">
              <div className="mb-2 flex justify-between items-center border-b border-gray-300 pb-1">
                <h2 className="text-lg font-semibold text-gray-700" >Email</h2>
                <FaPlus className="text-gray-500 cursor-pointer" />
              </div>
              <p className="text-gray-600"><strong>Work:</strong> {email}</p>
            </div>

            {/* Phone */}
            <div className="bg-white shadow-sm rounded-md p-4">
              <div className="mb-2 flex justify-between items-center border-b border-gray-300 pb-1">
                <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
                <FaPlus className="text-gray-500 cursor-pointer" />
              </div>
              <p className="text-gray-600"><strong>Home:</strong> {phone}</p>
            </div>

            {/* Address */}
            <div className="bg-white shadow-sm rounded-md p-4">
              <div className="mb-2 flex justify-between items-center border-b border-gray-300 pb-1">
                <h2 className="text-lg font-semibold text-gray-700">Addresses</h2>
                <FaPlus className="text-gray-500 cursor-pointer" />
              </div>
              <p className="text-gray-600"><strong>Home:</strong> {address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

