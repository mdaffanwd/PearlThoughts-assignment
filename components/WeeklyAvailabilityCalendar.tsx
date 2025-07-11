import React from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const times = [
    'All-day', '7:30am', '8am', '8:30am', '9am', '9:30am', '10am', '10:30am',
    '11am', '11:30am', '12pm', '12:30pm', '1pm', '1:30pm', '2pm', '2:30pm',
    '3pm', '3:30pm', '4pm', '4:30pm', '5pm'
];

const sampleAvailability = [
    { day: 'Monday', time: '7:30am' },
    { day: 'Tuesday', time: '4pm' },
    { day: 'Tuesday', time: '6pm' },
    { day: 'Thursday', time: '3pm' },
];

export default function WeeklyAvailabilityCalendar() {
    return (
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 " id='schedule'>
            <div className="min-w-screen grid grid-cols-[70px_repeat(7,minmax(100px,1fr))]">
                {/* Header */}
                <div className="bg-white sticky top-0 left-0 z-10 border-b border-gray-300" />
                {days.map(day => (
                    <div
                        key={day}
                        className="h-full bg-white sticky top-0 z-10 text-sm font-semibold text-gray-700 border-b border-l border-gray-300 p-2 text-center"
                    >
                        {day}
                    </div>
                ))}

                {/* Time Rows */}
                {times.map((time) => (
                    <React.Fragment key={time}>
                        <div className="text-xs font-medium text-gray-600 border-r border-b border-gray-300 p-2 sticky left-0 bg-white z-0 whitespace-nowrap">
                            {time}
                        </div>
                        {days.map((day) => {
                            const isAvailable = sampleAvailability.some(a => a.day === day && a.time === time);
                            return (
                                <div
                                    key={`${day}-${time}`}
                                    className={`h-12 border-b border-r border-gray-200 p-1 ${isAvailable ? 'bg-green-300' : 'bg-white'
                                        }`}
                                />
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
