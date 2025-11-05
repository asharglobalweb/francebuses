"use client";
import { Star } from "lucide-react";
import { useState } from 'react';

export default function TestimonialSection() {
  const testimonials = [
    // Passengers testimonials
    {
      key: 'passengers',
      name: "Claire Dubois",
      role: "Regular Commuter, Paris",
      avatar: "avatar1",
      message:
        "I travel frequently between Paris and Lyon for work. France Buses is always on time, and the coaches are spotless. The WiFi makes it easy to stay productive on the road.",
    },
    {
      key: 'passengers',
      name: "Lucas Moreau",
      role: "University Student, Toulouse",
      avatar: "avatar2",
      message:
        "As a student travelling between Toulouse and Bordeaux, France Buses has been reliable and affordable. The drivers are polite and always willing to help with luggage.",
    },
    {
      key: 'passengers',
      name: "Sophie Martin",
      role: "Family Traveller, Marseille",
      avatar: "avatar3",
      message:
        "We booked France Buses for our family trip to the French Riviera. The coach was modern and very comfortable, and our driver made the journey pleasant from start to finish.",
    },
    // Corporate testimonials
    {
      key: 'corporate',
      name: "Antoine Lefèvre",
      role: "Operations Manager, Lyon",
      avatar: "avatar4",
      message:
        "Our company has used France Buses for several corporate events around Lyon and Marseille. Their service is professional, flexible, and always punctual.",
    },
    {
      key: 'corporate',
      name: "Isabelle Laurent",
      role: "HR Director, Paris",
      avatar: "avatar5",
      message:
        "France Buses organized the transport for our annual conference in Paris. The entire experience was seamless, and the drivers were extremely professional and courteous.",
    },
    {
      key: 'corporate',
      name: "Julien Bernard",
      role: "Event Coordinator, Nice",
      avatar: "avatar6",
      message:
        "We hired France Buses for an international summit in Nice. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
    },
    // School testimonials
    {
      key: 'school',
      name: "Mme. Caroline Petit",
      role: "Primary School Teacher, Bordeaux",
      avatar: "avatar7",
      message:
        "Our school trip to the Cité de l’Espace in Toulouse went perfectly thanks to France Buses. The driver was kind and attentive, and the children were very comfortable throughout.",
    },
    {
      key: 'school',
      name: "M. François Lambert",
      role: "Sports Coach, Lille",
      avatar: "avatar8",
      message:
        "We use France Buses for all our sports competitions. They understand how important timing is and always get our teams to matches safely and on schedule.",
    },
    {
      key: 'school',
      name: "Mme. Élodie Girard",
      role: "Headmistress, Lyon",
      avatar: "avatar9",
      message:
        "Safety and reliability are top priorities for our school, and France Buses delivers both. Parents appreciate how professional and friendly the service is for school transport.",
    },
  ];

  const categories = ['passengers', 'corporate', 'school'];
  const [active, setActive] = useState(categories[0]);
  const filtered = testimonials.filter(t => t.key === active);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold ">
            Client Testimonials
          </h3>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>
        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {categories.map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={
                `px-5 py-2 rounded-full transition-colors duration-200 focus:outline-none border 
                ${active === key
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600'}`
              }
            >
              {key === 'passengers'
                ? 'From passengers'
                : key === 'corporate'
                  ? 'From companies'
                  : 'From schools'}
            </button>
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-xl shadow-md p-6 text-left h-full"
            >
              <p className="text-gray-700 mb-6 flex-grow">{t.message}</p>
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                    />
                  ))}
              </div>
              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mt-auto">
                {/* <img
                  src={`/images/${t.avatar}.png`}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                /> */}
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
