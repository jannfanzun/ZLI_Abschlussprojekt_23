import Tilt from "react-parallax-tilt"
import { SectionWrapper } from '../../hoc'
import {motion} from "framer-motion"
import { styles } from '../../styles'
import { github, urlicon } from '../../assets/assets'
import { projects } from '../../constants'
import { fadeIn } from '../../utils/motion'



const ProjectCard = ({index, name, description, tags, image, source_code}) => { // den array von index.js -> daten holen
  return (
    <motion.div 
      variants={fadeIn("left", "spring", index * 0.5, 1)}
    >
     <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl md:w-[450px] w-full'
      >
         <div className='relative w-full h-[230px]'>
    <img
      src={image}
      alt={name}
      className='w-full h-full object-cover rounded-2xl'
    />
    <div className='absolute inset-0 flex justify-end m-3 car-img_hover'>
      <div
        onClick={() => window.open(source_code_link, "_blank")}
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img src={github} alt='github' className='w-4/5 h-4/5 object-contain' />
      </div>
    </div>
    <div className='absolute bottom-0 right-0 m-3 car-img_hover'>
      <div
        onClick={() => window.open(web_link, "_blank")}
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img src={urlicon} alt='url' className='w-4/5 h-4/5 object-contain' />
      </div>
    </div>
  </div>
  <div className='mt-5'>
    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
  </div>
  <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
</Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className='w-full, flex'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur dolores. Quidem optio ipsum excepturi quaerat sequi fugiat blanditiis at animi placeat, omnis eaque qui est architecto perspiciatis possimus error dicta veniam, quos tempore nisi nulla soluta nihil ullam. Repellendus repudiandae expedita nisi fuga voluptate.
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-10'>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`}
        index={index}  
        {...project}
        />
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")