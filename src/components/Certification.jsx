import {motion} from "framer-motion";
import {CERTIFICATION} from "../constants";
const Certification = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Ceritification</motion.h1>
        <div>
        {CERTIFICATION.map((certification, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-5m text-neutral-400">{certification.year}</p>
                    </motion.div>

                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {certification.company} 
                        </h6>
                        <h6 className="text-5m text-purple-400">{certification.role}</h6>
                    </motion.div>



                </div>
        ))}
        </div>
    </div>
  )
}

export default Certification;