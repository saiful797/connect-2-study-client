import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/Shared/SectionTitle';
import ScrollToTop from '../../Components/Shared/ScrollToTop';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="contact-page min-h-screen pt-10 bg-green-50 rounded-xl flex flex-col">
      <Helmet>
        <title>Connect2Study | Contact Us</title>
      </Helmet>

      <div className=" text-gray-800">
      {/* Hero Section */}
          <section className="bg-blue-950 mt-20 text-white p-12 text-center lg:mr-5 lg:ml-5">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">We'd love to hear from you! Get in touch with us for any inquiries or support.</p>
          </section>

          {/* Contact Information */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle title={'Our Contact Information'} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p>support@connect2study.com</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p>1234 Learning Lane, Education City, USA</p>
                </div>
              </div>
            </div>
          </section>

          {/* Send Us a Message Form */}
          <section className="pb-12">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle title={'Send Us Your Message'} />
              <form 
                className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md" 
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                  <input
                    className="bg-[#fae9df] w-full px-3 py-2 rounded-lg focus:outline-[#D35400] border border-[#ecaf86]"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    className="bg-[#fae9df] w-full px-3 py-2 rounded-lg focus:outline-[#D35400] border border-[#ecaf86]"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                  <textarea
                    className="bg-[#fae9df] w-full px-3 py-2 rounded-lg focus:outline-[#D35400] border border-[#ecaf86]"
                    name="message"
                    id="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    className="bg-[#D35400] border-2 hover:border-2 hover:border-blue-950 text-white px-4 py-2 rounded-full transition duration-300 " 
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
      </div>
      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
