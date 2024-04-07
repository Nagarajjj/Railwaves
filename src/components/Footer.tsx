import { Instagram, Facebook, LinkedIn, WhatsApp, Google } from '@mui/icons-material';


const Footer = () => {
  return (
    <section className="w-full h-56  bg-section-dark-color">
      <div className="max-w-5xl h-full mx-auto flex items-center justify-between ">
        <p className="text-sm text-white ml-0">
          © Copyright 2024 by Trin Train. All Rights Reserved.
          <ul className="flex space-x-4 w-30 h-30 mt-2 ml-1">
            <li>
              <a href="https://www.instagram.com/railwaves.co.in/">
                <Instagram style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61558376725228">
                <Facebook style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/railwaves-770533302/">
                <LinkedIn style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/8073910992">
                <WhatsApp style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a href="mailto:info.railwaves@gmail.com">
                <Google style={{ color: "white" }} />
              </a>
            </li>
          </ul>
        </p>

        <div className="text-white  h-full mx-auto  items-center ml-20 mb-2">
          <h1 className="mt-8 text-2xl">Booking</h1>
          <ul className="text-sm">
            <li >
              <a href="#booking">Two wheeler Parcel</a>
              </li>
            <li>
              <a href="#booking">Parcel Service</a>
              </li>
            <li>
              <a href="#booking">Part Truck Load</a>
              </li>
            <li>
              <a href="#booking">Full Truck Load</a>
              </li>
            <li>
              <a href="#booking">Warehouse</a>
              </li>
            <li>
              <a href="#booking">Pickup Service</a>
              </li>
          </ul>
        </div>
        <div className="text-white  h-full mx-auto  items-center ml-30 mb-2">
          <h1 className="mt-8 text-2xl">Features</h1>
          <ul className="text-sm">
            <li>24/7 Customer Support </li>
            <li>On Time Delivery</li>
            <li>Providing Pickup Service</li>
            <li>Wide Area Coverage</li>
          </ul>
        </div>
        <div className="text-white  h-full mx-auto  items-center ml-30 mb-2">
          <h1 className="mt-8 text-2xl">Contact US</h1>
          <ul className="text-sm">
            <li> Manoj Gowda M  </li>
            <li>7795675263</li>
            <li>kammagondanahalli</li>
            <li>Bengaluru-560013</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
