import React from 'react'
import image from "../images/about.png"
import { FaStethoscope, FaHeartbeat, FaUserMd, FaCapsules, FaXRay, FaBriefcaseMedical, FaTeeth, FaBrain } from "react-icons/fa";
import DoctorsSection from './Doctors';

const departments = [
  { name: "General Medicine", icon: <FaStethoscope /> },
  { name: "Cardiology", icon: <FaHeartbeat /> },
  { name: "Surgery", icon: <FaUserMd /> },
  { name: "Pharmacy", icon: <FaCapsules /> },
  { name: "Radiology", icon: <FaXRay /> },
  { name: "Emergency", icon: <FaBriefcaseMedical /> },
  { name: "Dentistry", icon: <FaTeeth /> },
  { name: "Neurology", icon: <FaBrain /> },
];


export default function Home() {
  return (
  <>
<section>
  <div
    className="hero min-h-screen relative"
    style={{
      backgroundImage:
        "url(https://images.pexels.com/photos/3470032/pexels-photo-3470032.jpeg?auto=compress&cs=tinysrgb&w=600)",
    }}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="hero-content relative z-10 text-center text-white">
      <div className="max-w-lg">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight">
          About Us
        </h1>
        <p className="mb-8 text-lg">
          Our dedicated team of specialists ensures that your family receives prompt, compassionate care—from emergency treatments to routine consultations.
        </p>
        <button className="btn btn-primary px-8 py-3 text-lg font-medium">
          Discover <span className="text-blue-300 ml-1">Our Story</span>
        </button>
      </div>
    </div>
  </div>
</section>


    <section className="flex justify-center py-16 bg-gray-50">
  <div className="w-2/3">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
      <figure className="w-full md:w-1/2">
        <img
          src={image}
          alt="Medical Services"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="p-8 md:w-1/2">
        <span className="inline-block bg-primary text-white px-4 py-1 text-sm font-semibold rounded-md mb-4">
          Our Services
        </span>
        <h2 className="text-3xl font-bold text-gray-800 leading-tight">
          Good Services & Better Health By Our Specialists
        </h2>
        <p className="text-gray-600 mt-4">
          Our expert doctors ensure that you and your family receive the best
          possible medical care, from emergency treatment to regular
          consultations.
        </p>
        <p className="text-gray-600 mt-2">
          The most well-known placeholder text is ‘Lorem Ipsum,’ believed to have originated in the 16th century. It is structured in pseudo-Latin, making it appear like real Latin text.
        </p>

        <div className="mt-6">
          <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    

<section className="py-16 bg-gray-50">
  
  <div className="container mx-auto w-2/3 text-center">
  {/* <div class="relative w-64 h-64">
  <img src="https://images.pexels.com/photos/8879114/pexels-photo-8879114.jpeg?auto=compress&cs=tinysrgb&w=600" class="w-full h-full object-cover" alt="Background Image" />
  <img src="https://images.pexels.com/photos/18828746/pexels-photo-18828746/free-photo-of-doctor-in-a-scrubs-and-lab-coat-with-a-stethoscope-around-her-neck.jpeg?auto=compress&cs=tinysrgb&w=600" class="absolute top-2 right-2 w-20 h-20 rounded-full border-4 border-white shadow-lg" alt="Overlay Image" />
</div> */}

    <span className="inline-block bg-primary text-white px-6 py-2 text-sm font-semibold rounded-md mb-4">
      Our Departments
    </span>
    <h2 className="text-3xl font-bold text-gray-800 leading-tight">
      Comprehensive Medical Services
    </h2>
    <p className="text-gray-600 mt-4">
      Our hospital provides high-quality, specialized medical care, ensuring
      immediate assistance, emergency treatments, and expert consultations.
    </p>
  </div>

  <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {departments.map((dept, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-2 mb-4 text-center w-56 h-64 mx-auto flex flex-col justify-center items-center">
            <div className="text-5xl text-primary mb-3">{dept.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{dept.name}</h3>
            <p className="text-gray-600 text-sm mt-2">
              Expert medical professionals ensuring top-notch care.
            </p>
            <button className="bg-primary text-white text-sm px-4 py-2 mt-auto rounded-lg hover:bg-primary-dark transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
</section>

<section className=' bg-gray-50'>
<DoctorsSection />
</section>

<section className="mt-16">
  <footer className="footer bg-base-200 text-base-content p-10 md:px-20 lg:px-32">
    {/* Logo & Company Info */}
    <aside className="flex flex-col items-center md:items-start space-y-3 w-full">
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-current text-primary"
      >
        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
      </svg>
      <p className="text-center md:text-left text-gray-600 text-sm">
        ACME Industries Ltd.  
        <br />
        Providing reliable tech since 1992
      </p>
    </aside>

    {/* Navigation Links (Full-width on small screens, Grid on larger screens) */}
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6">
      <nav className="w-full">
        <h6 className="footer-title text-lg font-semibold text-primary">Services</h6>
        <div className="flex flex-col space-y-2">
          <a href='#' className="link link-hover">Branding</a>
          <a href='#' className="link link-hover">Design</a>
          <a href='#' className="link link-hover">Marketing</a>
          <a href='#' className="link link-hover">Advertisement</a>
        </div>
      </nav>
      
      <nav className="w-full">
        <h6 className="footer-title text-lg font-semibold text-primary">Company</h6>
        <div className="flex flex-col space-y-2">
          <a href='#' className="link link-hover">About us</a>
          <a href='#' className="link link-hover">Contact</a>
          <a href='#' className="link link-hover">Jobs</a>
          <a href='#' className="link link-hover">Press kit</a>
        </div>
      </nav>
      
      <nav className="w-full">
        <h6 className="footer-title text-lg font-semibold text-primary">Legal</h6>
        <div className="flex flex-col space-y-2">
          <a href='#' className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </nav>
    </div>

    {/* Copyright */}
    <div className="w-full text-center border-t border-gray-300 mt-8 pt-4 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} ACME Industries Ltd. All Rights Reserved.
    </div>
  </footer>
</section>


    </>
  )
}
