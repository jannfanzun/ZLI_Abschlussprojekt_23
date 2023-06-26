import Tilt from "react-parallax-tilt"
import {motion} from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { styles } from '../../styles';
import { services } from '../../constants';
import {fadeIn, textVariant} from '../../utils/motion'
import { SectionWrapper } from '../../hoc';


// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className='lg:w-[47%] md:w-full w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain mb-6 mt-6'
        />

        <h3 className='text-white text-[20px] font-bold text-center mb-2'>
          {title}
        </h3>
        <div className='border-t border-gray-200'>
  <p className='text-white-200 text-center mt-4 text-[14px]'>{description}</p>
</div>

      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       
With a deep understanding of the digital world and an insatiable thirst for knowledge, I am passionately committed to extracting the best from every project and creating innovative solutions that push the boundaries of what is possible.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} description={service.description} {...service} />
        ))}
      </div>

    </>
  );
};


export default SectionWrapper(About, "about")

// hilft uns den Seitenabstand zu halten