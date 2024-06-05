import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../Shared/SectionTitle';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import StudySession from './StudySession/StudySession';

const AllStudySessions = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const axiosPublic = useAxiosPublic();
    const [ studySessions, setStudySessions ] = useState([]);

    axiosPublic.get('/allStudySessions')
    .then(res => {
        // console.log(res.data);
        setStudySessions(res.data);
    })

    const pending = studySessions.filter(session => session.status === 'pending');
    const approved = studySessions.filter(session => session.status === 'approved');
    const reject = studySessions.filter(session => session.status === 'reject');

    return (
        <div className='mb-10 mt-5'>

            <SectionTitle title = {'All Study Sessions'}/>
            
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>PENDING</Tab>
                    <Tab>APPROVED</Tab>
                    <Tab>REJECTED</Tab>
                </TabList>

                {/* pending sessions */}
                <TabPanel>
                    <div>
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