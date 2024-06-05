import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../Shared/SectionTitle';

const AllStudySessions = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='mb-10 mt-5'>

            <SectionTitle title = {'All Study Sessions'}/>
            
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>PENDING</Tab>
                    <Tab>APPROVED</Tab>
                    <Tab>REJECTED</Tab>
                    
                </TabList>
                <TabPanel>
                    
                </TabPanel>
                <TabPanel>
                    
                </TabPanel>   
                <TabPanel>
                    
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllStudySessions;