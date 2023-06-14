import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../../hoc"
import { slideIn } from "../../utils/motion"



const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_rrtwoek', 
      'template_vknc2qd', {
        from_name: form.name,
        to_name: "Jann",
        from_email: form.email,
        to_email: "jannandrea.f@gmail.com",
        message: form.message
      }, 'z8mq93RrT2wpvDccv'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you for your message! I will get back to you as soon as possible.')
      
        setForm({
          name: "",
          email: "",
          message: "",
        })

      }, (error) =>{
        setLoading(false)
        console.log(error)
        alert('Something wen wrong. Try again!')
      })
  }

  return (
    <div className="xl: mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1.5)}
        className="flex-[0.75] bg-balck-100 p-8 rounded 2xl"
      >
        <p className={`${styles.sectionSubText}`}>get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={fromRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="What do you want to say?"
              rows="7"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1.5)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")