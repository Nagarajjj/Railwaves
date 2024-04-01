import { Instagram, Facebook, LinkedIn, WhatsApp, Google } from '@mui/icons-material';


const Footer = () => {
  return (
    <section className="w-full h-36  bg-section-dark-color">
      <div className="max-w-5xl h-full mx-auto flex items-center justify-between">
        <p className="text-sm text-white">
          © Copyright 2024 by Trin Train. All Rights Reserved.
        </p>
        <ul className="flex space-x-4 w-30 h-30 ">
      <li>
        <a href="https://www.instagram.com">
          <Instagram style={{ color: 'white' }} />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com">
          <Facebook style={{ color: 'white' }} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com">
          <LinkedIn style={{ color: 'white' }}/>
        </a>
      </li>
      <li>
        <a href="https://www.whatsapp.com">
          <WhatsApp style={{ color: 'white' }}/>
        </a>
      </li>
      <li>
        <a href="https://www.google.com">
          <Google style={{ color: 'white' }}/>
        </a>
      </li>
    </ul>

      </div>
     
    </section>
  );
};

export default Footer;
