import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../Shared/SectionTitle';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import StudySession from './StudySession/StudySession';
import { MdOutlineNotificationsActive } from "react-icons/md";

const AllStudySessions = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const axiosPublic = useAxiosPublic();
    const [ studySessions, setStudySessions ] = useState([]);

    useEffect( () => {
        axiosPublic.get('/allStudySessions')
        .then(res => {
            setStudySessions(res.data);
        })
    }, [])

    const pending = studySessions.filter(session => session.status === 'pending');
    const approved = studySessions.filter(session => session.status === 'approved');
    const reject = studySessions.filter(session => session.status === 'reject');

    return (
        <div className='mb-10 mt-5'>

            <SectionTitle title = {'All Study Sessions'}/>
            
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>
                        <div className='flex'>
                            PENDING
                            <div className='relative ml-2'>
                                <MdOutlineNotificationsActive  className='w-5 h-5'/>
                                <p className='absolute -top-2 -right-2 text-red-600'>{pending.length}</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab>APPROVED</Tab>
                    <Tab>REJECTED</Tab>
                </TabList>

                {/* pending sessions */}
                <TabPanel className={`p-10`}>
                    <div className='grid lg:grid-cols-2 gap-5 mt-5'>
                        {
                            pending.map(studySession => <StudySession 
                                key={studySession._id} 
                                studySession = {studySession} 
                            />)
                        }
                    </div>
                </TabPanel>

                {/* approved sessions */}
                <TabPanel>
                    
                </TabPanel>   

                {/* rejected sessions */}
                <TabPanel>
                    
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllStudySessions;