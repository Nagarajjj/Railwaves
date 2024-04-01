import React from "react";
import "tailwindcss/tailwind.css";

const ServiceCard = ({ img, title, description }) => (
  <div className="cursor-pointer bg-gray-100 shadow-md rounded-xl p-4 w-64 hover:bg-gray-400 mt-10 mb-10 mr-12">
    <img src={img} alt={title} className="w-full h-auto mb-4" />
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg">
      READ MORE
    </button> */}
  </div>
);

// WhatsAppButton component displays a WhatsApp button
const WhatsAppButton = () => (
  <div className="fixed bottom-10 right-10 z-20 flex">
    <h1 className="mt-8 -mr-3">chat with us</h1>
    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <img src="./assets/whatsapp.webp" alt="WhatsApp" className="w-20 h-20" />
    </a>
  </div>
);

const Services = () => {
  const services = [
    {
      img: "./assets/warehouse.jpg",
      title: "STORAGE",
      description: "we are providing Storage containers for your goods"
    },
    {
      img: "./assets/parcel.jpg",
      title: "Parcel service",
      description: "we are providing parcel service for your order"
    },
    {
      img: "./assets/Fulltruck.webp",
      title: "Full truck",
      description: "you can send full truck goods with us we will provide safe delivery"
    },
    // Add three additional services
    {
      img: "./assets/parcel.jpg",
      title: "Service 4",
      description: "you can send full truck goods with us we will provide safe delivery"
    },
    {
      img: "./assets/parcel.jpg",
      title: "Service 5",
      description: "you can send full truck goods with us we will provide safe delivery"
    },
    {
      img: "./assets/parcel.jpg",
      title: "Service 6",
      description: "you can send full truck goods with us we will provide safe delivery"
    }
  ];

  return (
    <div className="relative">
      <div class="w-[10px] h-[35px] bg-[gray] ml-56 "></div>
        <h2 class="uppercase text-4xl tracking-tight font-[400] text-black ml-60 ">Our Services</h2>
      <div className="flex flex-wrap mt-8 mb-4  justify-center">
        <div className="flex flex-wrap justify-center">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4">
              <ServiceCard
                img={service.img}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
        {/* Display next three cards */}
        <div className="flex flex-wrap justify-center">
          {services.slice(3, 6).map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4">
              <ServiceCard
                img={service.img}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Services;
