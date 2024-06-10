import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";

const UserProfile = () => {
    const { user } = useAuth();
    const { role } = useRole();

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50 rounded-xl">
            <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src="https://i.ibb.co/bPG85fK/profile.jpg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110">
                    <img
                    className="w-full h-full object-cover"
                    src={ user.photoURL }
                    alt="Profile"
                    />
                </div>
                </div>
                <div className="text-center p-6">
                    <h1 className="text-2xl font-semibold text-gray-900">{(user?.displayName).toUpperCase()}</h1>
                    <p 
                        className="text-sm badge badge-outline badge-error text-gray-600 mt-1 "
                    >
                        {role}
                    </p>
                    <p className="mt-4 text-gray-700">
                        As a <span className="text-red-500">{ role }</span> you can only access your accessible pages and perform your task. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;