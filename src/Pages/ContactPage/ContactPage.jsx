import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="contact-page min-h-screen pt-20 bg-green-50 flex flex-col">
      <header className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section id="contact-form" className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-[#00b16e]" />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-[#00b16e]" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-medium">Subject</label>
                <input type="text" id="subject" name="subject" required className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-[#00b16e]" />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
                <textarea id="message" name="message" rows="4" required className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-[#00b16e]"></textarea>
              </div>

              <button type="submit" className="bg-[#00b16e] text-white py-3 px-6 rounded-md hover:bg-[#00b16e]">Submit</button>
            </form>
          </section>

          <section id="contact-info" className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Our Contact Information</h2>
            <p className="text-lg mb-2"><strong>Email:</strong> support@connect2study.com</p>
            <p className="text-lg mb-2"><strong>Phone:</strong> +1 (800) 123-4567</p>
            <p className="text-lg mb-2"><strong>Address:</strong></p>
            <p className="text-lg mb-2">Connect2Study Headquarters,<br /> 123 Learning Lane,<br /> Education City, ED 56789</p>
            <p className="text-lg mb-2"><strong>Business Hours:</strong></p>
            <p className="text-lg mb-2">Monday to Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-lg mb-2">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-lg mb-2">Sunday: Closed</p>
          </section>
        </div>

        <section id="social-media" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-5">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>YouTube</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
