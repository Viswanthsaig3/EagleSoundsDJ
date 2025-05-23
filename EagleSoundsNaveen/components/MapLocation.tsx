'use client';

export default function MapLocation() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Eagle Sounds Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.4184479289324!2d80.5149283!3d16.222400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDEzJzIwLjYiTiA4MMKwMzEnMDEuNiJF!5e0!3m2!1sen!2sin!4v1623479868428!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}