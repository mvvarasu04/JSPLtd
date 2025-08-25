import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://formspree.io/f/yourFormID';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', mobile: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <>
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2 py-10">
          Jambavan Software Systems Pvt Ltd
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Connect with us for software development, training programs, or placement services. Our team is ready to assist with your inquiries and collaboration proposals.
        </p>
      </div>

      {/* Contact Card Section */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Info Card */}
          <div className="md:w-1/2 bg-blue-400 text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">We’d love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.</p>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold">📍 Address</h4>
                <p>Jambavan Software Systems Pvt Ltd, No: 57, 7th Main Road, Near Gayathri Temple, Seethappa Layout, RT Nagar, Bangalore - 560032</p>
              </div>
              <div>
                <h4 className="font-semibold">📞 Phone</h4>
                <a href="tel:8073514213">+91 8073514213</a>
              </div>
              <div>
                <h4 className="font-semibold">📧 Email</h4>
                <a href="mailto:jambavansoftwaresystemspvtltd@gmail.com">jambavansoftwaresystemspvtltd@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
