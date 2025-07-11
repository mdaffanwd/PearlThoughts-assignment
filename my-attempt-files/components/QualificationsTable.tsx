import { Qualification } from "@/my-attempt-files/types/teacher";

interface Props {
    title: string;
    qualifications: Qualification[];
}

export default function QualificationsTable({ title, qualifications }: Props) {
    return (
        <section className="bg-white p-5 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            {qualifications.length === 0 ? (
                <p className="text-sm text-gray-500">No qualifications listed.</p>
            ) : (
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-gray-500 border-b">
                        <tr>
                            <th className="py-2">Name</th>
                            <th className="py-2 text-right">Rate ($/hr)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qualifications.map((q, idx) => (
                            <tr key={idx} className="border-b last:border-none">
                                <td className="py-2">{q.name}</td>
                                <td className="py-2 text-right">${q.rate.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}
