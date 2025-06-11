import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card title="Users" value="1,254" />
                        <Card title="Revenue" value="₹98,000" />
                        <Card title="Tasks Completed" value="87%" />
                    </div>

                    <div className="mt-10 bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Welcome, {auth.user.name} 👋</h2>
                        <p className="text-gray-600 mt-2">
                            This is your dashboard. You can customize this view with charts, data, or any component.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function Card({ title, value }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-700 font-medium">{title}</h3>
            <p className="text-2xl font-bold text-indigo-600 mt-2">{value}</p>
        </div>
    );
}
