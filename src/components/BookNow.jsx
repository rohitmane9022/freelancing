import { useState } from 'react';
import BookImage from "../Images/BookImage.png";
import { useLocation } from 'react-router';

const countries = ["India", "USA", "UK", "Australia"];
const services = ["Web Development", "App Development", "SEO Optimization", "Consultation"];

const BookNow = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    service: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-mock-api-endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', country: '', phone: '', service: '', email: '', message: '' });
      } else {
        console.error('Error:', response.status);
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <section className="flex lg:flex-row px-5 md:gap-10 flex-col my-10 md:mx-auto md:w-[95%] md:px-10">
      <div className="md:w-[50%]">
        <img src={BookImage} alt="Book Now" className="md:block hidden" />
      </div>

      <div>
        <h1 className={`uppercase lg:text-5xl text-5xl text-center md:text-start font-rig-solid ${location.pathname === "/enquire" ? "mt-5" : ""}`}>
          {location.pathname === "/enquire" ? "Please Fill This Form" : "Book Now"}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className={`flex md:flex-row flex-col gap-3 my-3 ${location.pathname === "/enquire" ? "mt-5" : ""}`}>
            <input required
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            />

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="flex md:flex-row flex-col gap-3 my-3">
            <input required
              type="number"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            >
              <option value="">Select Service</option>
              {services.map((service) => (
                <option required key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <input required
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="px-5 w-full py-3 border rounded-md border-gray-500"
          />

          <textarea
            name="message"
            placeholder="Tell us more..."
            value={formData.message}
            onChange={handleChange}
            className="px-5 my-3 w-full py-5 md:h-40 border rounded-md border-gray-500"
          ></textarea>

          <button className="text-white rounded-md bg-textCol text-center px-5 w-full py-3">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookNow;