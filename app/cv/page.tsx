import React from 'react'
import { IoIosHome } from 'react-icons/io'
import { MdMarkEmailRead, MdOutlinePhone } from 'react-icons/md'

const Cv = () => {
  return (
    <div className='bg-blue-100 w-8/12 min-h-svh m-auto bg-gradient-to-br from-black/75 to-white'>
        <div className='w-full grid grid-cols-2 p-2'>
        <section className="flex flex-col items-start  px-6 m-2">
				<h1 className="text-4xl">Mario Sergio</h1><h1 className="text-3xl"> Domínguez Consuegra</h1>
				<h2 className="text-2xl">Front-End Developer</h2>
				<div className="flex items-center justify-center py-6">
					<div className="bar-circle">
						<div className="circle"></div>
						<div className="bar"></div>
					</div>
					<div className="">
						I am a creative and responsible professional passionate for web programming and problem solving.
					</div>
				</div>
			</section>
            <section className='p-6 m-2 '><img className='rounded-lg' src="/beach-house.jpg" alt="" /></section>
            <section className="flex flex-col items-start py-2 px-6 m-2">
				<h2 className="text-xl mb-4">Expertise Skill</h2>
				<ul className="list-disc pl-6">
					<li>React.js: Reducers Redux Context</li>
					<li>Java Script</li>
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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
