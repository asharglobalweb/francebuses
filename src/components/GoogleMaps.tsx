import React from "react";

interface GoogleMapsProps {
  height?: string;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({
  height = "400px",
}) => {
  return (
    <div style={{ width: "100%", height }}>
      <iframe
        title="Regus - Paris Gare de Lyon Location"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '8px' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5449019726225!2d2.3680757764638334!3d48.8478188713308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67203731d19a3%3A0xdc297014622a7bc4!2sRegus%20-%20Paris%20Gare%20de%20Lyon!5e0!3m2!1sen!2sae!4v1762318953101!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
