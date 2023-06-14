import React from 'react'
import { SectionWrapper } from '../../hoc'
import { technologies } from '../../constants'
import { BallCanvas } from './canvas'
import {motion} from "framer-motion"
import { styles } from '../../styles'

const Tech = () => {
  return (
    <>
    <motion.div>
      <p className={`${styles.sectionSubText} text-center`}>What languages have I programmed in?</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>My Skills.</h2>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-12 mt-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills")