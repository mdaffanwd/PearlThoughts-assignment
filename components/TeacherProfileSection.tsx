import React from 'react'
import TeacherDetailsCards from './TeacherDetailsCards';
import WeeklyAvailabilityCalendar from './WeeklyAvailabilityCalendar';
import TeacherBreadcrumb from './TeacherBreadcrumb';

export default function TeacherProfileSection() {
    return (
        <>
            <section>
                <TeacherBreadcrumb teacherName="Alynia Allan" />
                <TeacherDetailsCards
                    name="Alynia Allan"
                    role="Teacher"
                    birthDate="1985-05-20"
                    email="alyniaallan@example.com"
                    phone="(416) 848-9057"
                    address="56 Osbourne Dr, North York, Ontario, Canada"
                    privateQualifications={[
                        { name: 'Vocal Contemporary', rate: 28 },
                        { name: 'Vocal Core', rate: 28 },
                        { name: 'Vocal Plus', rate: 28 },
                        { name: 'Instrument', rate: 28 },
                    ]}
                    groupQualifications={[]}
                />


                <div className="h-screen overflow-hidden pt-4 bg-gray-100 p-4 overflow-y-auto">
                    <div className="mb-2 ">
                        <h2 className="mb-2 min-w-full text-lg font-semibold text-gray-700  border-b border-gray-300 pb-1">Weekly Availability</h2>
                    </div>

                    <div className="overflow-y-scroll w-full sticky top-0 max-h-[calc(100vh-100px)]">
                        <WeeklyAvailabilityCalendar />
                    </div>
                </div>


            </section>
        </>
    );
}