import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { LuGitPullRequestDraft } from "react-icons/lu";


const AllSessions = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [ allSession, setAllSession ] = useState([]);

    axiosPublic.get(`/all-sessions/${user.email}`)
    .then(res => {
        // console.log(res.data)
        setAllSession(res.data);
    })
    return (
        <div>
            <div className="flex justify-evenly py-4">
                <h2 className="text-2xl">All Sessions</h2>
                {/* <h2 className="text-2xl">Total Sessions: {sessions.length}</h2> */}
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-lg bg-slate-100">
                                <th>#</th>
                                <th>Title</th>
                                <th>Post Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSession?.map((session, index) => <tr key={session._id}>
                                    <th>{index+1}</th>
                                    <td>{session.title}</td>
                                    <td>
                                        {session.postDate}
                                    </td>
                                    <td>{session.status}</td>
                                    <td>
                                        <button onClick={() => handleDeleteSession(session._id)} className="btn btn-ghost btn-outline btn-sm">
                                            <LuGitPullRequestDraft />
                                        </button>
                                    </td>
                                </tr> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSessions;