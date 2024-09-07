import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-8 lg:px-16" id="contact">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.75 }}
        className="my-10 text-center text-3xl md:text-4xl lg:text-5xl"
      >
        Get in Touch
      </motion.h1>
      <div className="flex flex-col items-center justify-center text-center">
        {/* Uncomment and adjust the address section if needed */}
        {/* <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg md:text-xl"
        >
          {CONTACT.address}
        </motion.p> */}
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg md:text-xl"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <Link
          to="#email"
          className="text-lg md:text-xl border-b-2 border-transparent hover:border-gray-300"
        >
          {CONTACT.email}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
