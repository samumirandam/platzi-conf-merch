import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Footer.css';

const Footer = () => (
    <div className="Footer">
      <p className="Footer__title">PlatziConf Merch</p>
      <p className="Footer__copy">Todos los izquierdos Reservados</p>
      <Link to="/checkout/success">☺</Link>
    </div>
  );

export default Footer;
