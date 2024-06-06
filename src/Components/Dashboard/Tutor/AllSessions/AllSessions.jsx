import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { LuGitPullRequestDraft } from "react-icons/lu";
import SectionTitle from "../../../Shared/SectionTitle";
import { Tooltip } from "react-tooltip";


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
           
            {/* section title */}
            <SectionTitle title ={'All Sessions'}/>
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
                                    <td>
                                        {
                                            session.status === 'pending' && <p 
                                                className="bg-amber-50 text-amber-400 pl-2 pr-2 w-16 text-center"
                                                data-tooltip-id="my-tooltip" 
                                                data-tooltip-content={'Wait for Admin approval'}
                                            >
                                                Pending
                                            </p>
                                        }
                                        {
                                            session.status === 'approved' && <p
                                                className="bg-green-50 text-green-600 pl-2 pr-2 w-16 text-center"
                                                data-tooltip-id="my-tooltip" 
                                                data-tooltip-content={'Approved by Admin'}
                                            >
                                                Approved
                                            </p>
                                        }
                                        {
                                            session.status === 'reject' && <p
                                                className="bg-red-50 text-red-600 pl-2 pr-2 w-16 text-center"
                                                data-tooltip-id="my-tooltip"
                                                 data-tooltip-content={'Rejected by Admin'}
                                            >
                                                Rejected
                                            </p>
                                        }
                                    </td>
                                    <td>
                                        {
                                            session.status === 'reject' && <p>Rejected</p>
                                        }
                                    </td>
                                </tr> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default AllSessions;