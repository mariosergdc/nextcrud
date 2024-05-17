import React from 'react'
import { IoIosHome } from 'react-icons/io'
import { MdMarkEmailRead, MdOutlinePhone } from 'react-icons/md'

const Cv = () => {
  return (
    <div className='bg-blue-100 shadow-md w-8/12 text-white m-auto bg-gradient-to-b from-cyan-500 to-blue-500 font-serif'>
		
		<div className='w-full grid grid-cols-1 md:grid-cols-2 p-2 z-10 relative'>
		<div className="back -z-10"></div>
        <section className="flex text-black flex-col items-start  px-6 m-2 ">
				<h1 className=" text-6xl pt-4">Mario Sergio</h1><h1 className="text-4xl"> Domínguez Consuegra</h1>
				<h2 className="text-2xl">Front-End Developer</h2>
				<div className="flex items-center justify-center py-6">
					<div className="bar-circle">
						<div className="circle"></div>
						<div className="bar"></div>
					</div>
					<div className="">
					I am a creative and responsible professional passionate about web programming, coding, problem-solving, and constantly seeking new challenges. I have honed my skills through hands-on experience in developing and managing various web projects. With a keen eye for detail and a drive for innovation, I thrive in dynamic environments where I can apply my creativity and technical expertise to deliver high-quality solutions.
					</div>
				</div>
			</section>
            <section className='p-6 m-2 col-start-1 row-start-1 md:col-start-2 md:row-start-1 '><img className='porfile-img rounded-2xl w-84 h-84' src="/porfile.jpg" alt="" /></section>
            <section className="flex flex-col items-start py-2 px-6 m-2">
				<h2 className="text-xl mb-4">Expertise Skill</h2>
				<ul className="list-disc pl-6">
					<li>React.js: Reducers Redux Context</li>
					<li>Next.js</li>
					<li>Java Script: Typescript</li>
					<li>HTML</li>
					<li>CSS: FlexBox, GridCSS, Bootstrap</li>
					<li>Node.js: Express Mongoose</li>
					<li>MongoDB</li>
					<li>Git GitHub</li>
				</ul>
			</section>

			<section className="flex flex-col items-start py-2 px-6 m-2">
				<h2 className="text-xl mb-4">Education</h2>
				<div className="flex items-center justify-center py-2">
					<div className="bar-circle">
						<div className="circle"></div>
						<div className="bar"></div>
					</div>
					<p>2013-2018:</p> <br/> <p>Bachelor's degree in Computer
						Science (Universidad de Oriente,Santiago
						de Cuba)</p>
				</div>
				<div className="flex items-center justify-center py-2">
					<div className="bar-circle">
						<div className="circle"></div>
						<div className="bar"></div>
					</div>
					<p>Courses: React.js FlexBox GridCSS JS</p>
				</div>
			</section>

			<section className="flex flex-col items-start py-2 px-6 m-2">
				<h2 className="text-xl mb-4">Language</h2>
				<ul className="list-disc pl-6">
					<li>Spanish: Native</li>
					<li>English: Intermediate(good technical
						English)</li>
				</ul>
			</section>

			<section className="flex flex-col items-start py-2 px-6 m-2 row-span-2">
				<h2 className="text-xl mb-4">Work Experience</h2>
				<div className="flex items-center justify-center py-2">
					<div className="bar-circle">
						<div className="circle"></div>
						<div className="bar"></div>
					</div>
					<p>I designed and developed a soccer tournament website using the MERN stack, handling frontend, backend, design, and database implementation. This involved creating a responsive user interface with React.js, building a robust backend API with Express.js and Node.js, designing and implementing a MongoDB database.</p>
				</div>
			</section>

			<section className="flex flex-col items-start py-2 px-6 m-2">
				<h2 className="text-xl mb-4">Contact Me</h2>
				<div className="flex items-center gap-2"><MdOutlinePhone/>Mobile: +53 58595831</div>
				<div className="flex items-center gap-2"><MdMarkEmailRead />Email: mariosergdc.webdev@gmail.com</div>
				<div className="flex items-center gap-2"><IoIosHome />Direction: Holguín ,Cuba</div>
			</section>
        </div>
		
        
       
    </div>
  )
}

export default Cv
