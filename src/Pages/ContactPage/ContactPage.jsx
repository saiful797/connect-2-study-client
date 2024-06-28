import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/Shared/SectionTitle';

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
          <section className="bg-blue-950 mt-20 text-white p-12 text-center">
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
              <SectionTitle title={'Send Us a Message'} />
              <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md" >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    name="message"
                    id="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300" type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </section>
      </div>
    </div>
  );
};

export default ContactPage;
