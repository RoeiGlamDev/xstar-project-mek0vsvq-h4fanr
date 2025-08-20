import React from 'react';
import './TestimonialsSection.css'; // Assuming you have a CSS file for styling

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'An unforgettable experience! The luxury and comfort were unmatched.',
    image: 'path/to/image1.jpg', // Replace with actual image path
  },
  {
    name: 'Jane Smith',
    feedback: 'A perfect getaway! The ambiance was exquisite and the service top-notch.',
    image: 'path/to/image2.jpg', // Replace with actual image path
  },
  {
    name: 'Emily Johnson',
    feedback: 'Absolutely stunning! Every detail was meticulously crafted for a luxurious stay.',
    image: 'path/to/image3.jpg', // Replace with actual image path
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Guests Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;