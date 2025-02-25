import { FaHeartbeat, FaUserMd, FaTeeth, FaBrain } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. John Smith",
    specialty: "Cardiology",
    image: "https://images.pexels.com/photos/6129118/pexels-photo-6129118.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaHeartbeat />,
  },
  {
    name: "Dr. Emily White",
    specialty: "Surgery",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaUserMd />,
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Dentistry",
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaTeeth />,
  },
  {
    name: "Dr. Sophia Green",
    specialty: "Neurology",
    image: "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaBrain />,
  },
];

export default function DoctorsSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Specialists</h2>
        <p className="text-lg text-gray-600 mt-3">
          Our highly experienced doctors are dedicated to providing expert care in their respective fields.
        </p>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-72 object-contain bg-gray-100"
              />
              <div className="absolute top-4 right-4">{doctor.icon}</div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-500 text-md">{doctor.specialty}</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
