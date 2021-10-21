import Link from 'next/link'
import { motion } from "framer-motion"

export default function homeCards() {

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1,
            }
        },
    }

    return (
        <div>

            <section className="text-blueGray-700 bg-white m-8 md:mx-20">

                <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="container flex flex-col bg-gray-200 items-center px-5 py-14 mx-auto md:flex-row lg:px-28 rounded-tl-3xl rounded-br-3xl">
                    <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                        <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font font-dancingScript"> Blog Title </h1>
                        <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur accusamus quam officiis aperiam officia quasi enim debitis soluta placeat perferendis autem, sunt laudantium. Ipsum fugiat impedit tempora voluptatum tenetur. </p>
                        <div className="flex flex-col justify-center lg:flex-row">
                            <Link href="/blog"><button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Read more </button></Link>
                            <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> Written by: <br className="hidden lg:block" />
                                <p className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> John Doe </p>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
                        <img className="object-cover object-center rounded-lg " alt="blog img" src="data:image/jpeg;base64,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" />
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
