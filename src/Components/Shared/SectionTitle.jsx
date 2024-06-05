import PropTypes from 'prop-types';
import { PiNyTimesLogo } from 'react-icons/pi';

const SectionTitle = ({ title }) => {
    return (
        <div className="mt-10 mb-5">
            <p className="text-4xl font-bold text-center">{title}</p>
            <div className='p-px bg-black'>

            </div>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
}
export default SectionTitle;