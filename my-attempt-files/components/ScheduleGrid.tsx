import { ScheduleSlot } from "@/my-attempt-files/types/teacher";
import { FaClock } from "react-icons/fa";

interface Props {
    schedule: ScheduleSlot[];
}

export default function ScheduleGrid({ schedule }: Props) {
    return (
        <section className="bg-white p-5 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Schedule</h3>

            {schedule.length === 0 ? (
                <p className="text-sm text-gray-500">No schedule available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {schedule.map((slot, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-md font-semibold text-blue-700">{slot.day}</h4>
                            <div className="flex items-center gap-2 mt-1 text-sm text-blue-800">
                                <FaClock className="text-blue-500" />
                                <span>
                                    {slot.startTime} - {slot.endTime}
                                </span>
                            </div>
                            {slot.student && (
                                <p className="text-sm text-gray-600 mt-2">Student: {slot.student}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
