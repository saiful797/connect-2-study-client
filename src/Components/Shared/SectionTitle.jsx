import PropTypes from 'prop-types';
import { PiNyTimesLogo } from 'react-icons/pi';

const SectionTitle = ({ title }) => {
    return (
        <div className="mt-10 mb-5 space-y-2 w-1/2 mx-auto">
            <div className='p-[2px] bg-slate-500 rounded-full'></div>
            <p className="text-4xl font-bold text-center">{title}</p>
            <div className='p-[2px] bg-slate-500 rounded-full'></div>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
}
export default SectionTitle;