import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import {HashLink as Link} from 'react-router-hash-link'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="contact">
      <motion.h1
       whileInView={{opacity:1, y:0}}
       initial={{opacity: 0, y:100}}
       transition={{duration:0.75}}
       className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        {/* <motion.p 
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:-100}}
         transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p> */}
         <motion.p 
         whileInView={{opacity:1, x:0}}
         initial={{opacity: 0, x:100}}
         transition={{duration:1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <Link to="#email" className="border-b-0">{CONTACT.email}</Link>
      </div>
    </div>
  )
}

export default Contact