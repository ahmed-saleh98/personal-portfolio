import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn, zoomIn } from '@/utils/motion';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="md:w-[45%] min-w-[350px]"
    >
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden">
          <motion.input
            variants={slideIn('up', 100, 0.4, 0.4)}
            required
            autoComplete="true"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="contact-input h-[70px] px-4"
          />
        </div>
        <div className="overflow-hidden">
          <motion.input
            variants={slideIn('up', 100, 0.7, 0.5)}
            required
            autoComplete="true"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="contact-input h-[70px] px-4"
          />
        </div>
        <div className="overflow-hidden">
          <motion.textarea
            variants={slideIn('up', 100, 1, 0.7)}
            required
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            className="contact-input h-[250px] p-4 resize-none"
          />
        </div>
        <motion.button
          variants={zoomIn(1.2, 0.5)}
          type="submit"
          className="bg-[--main-color] w-[150px] h-[60px] mt-2 text-white font-semibold 
              hover:shadow-[0_0_5px_1px_var(--color-secondary)]"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
}
