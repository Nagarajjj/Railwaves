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
  <div className="fixed bottom-10 right-10 z-20 flex items-center">
    <h1 className="mt-8 animate-bounce">- Chat with us -</h1>
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="./assets/whatsapp.webp"
        alt="WhatsApp"
        className="w-20 h-20 transition duration-300 transform hover:scale-110"
      />
    </a>
  </div>
  // <div className="fixed bottom-10 right-10 z-20 flex">
  //   <h1 className="mt-8 -mr-3">chat with us</h1>
  //   <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
  //     <img src="./assets/whatsapp.webp" alt="WhatsApp" className="w-20 h-20" />
  //   </a>
  // </div>
);

const Services = () => {
  const services = [
    {
      img: "./assets/parcel.jpg",
      title: "Bike Transport Service",
      description:
        "you can send full truck goods with us we will provide safe delivery",
    },
    {
      img: "./assets/warehouse.jpg",
      title: "Rail Logistics",
      description: "we are providing Storage containers for your goods",
    },
    {
      img: "./assets/parcel.jpg",
      title: "Road Logistics",
      description: "we are providing parcel service for your order",
    },
    {
      img: "./assets/Fulltruck.webp",
      title: "Air Freight",
      description:
        "you can send full truck goods with us we will provide safe delivery",
    },
    {
      img: "./assets/parcel.jpg",
      title: "Full Truck Load",
      description:
        "you can send full truck goods with us we will provide safe delivery",
    },
    {
      img: "./assets/parcel.jpg",
      title: "Part Truck Load",
      description:
        "you can send full truck goods with us we will provide safe delivery",
    },
    
  ];

  return (
    <div className="relative" id="services">
      <div class="w-[10px] h-[35px] bg-[gray] ml-56 "></div>
      <h2 class="uppercase text-4xl tracking-tight font-[400] text-black ml-60 ">
        Our Services
      </h2>
      <div className="flex flex-wrap mt-8 mb-4  justify-center">
        <div className="flex flex-wrap justify-center">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4"
            >
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
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4"
            >
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
