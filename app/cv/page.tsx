import React from 'react'

const Cv = () => {
  return (
    <div className='bg-blue-100 w-8/12 min-h-svh m-auto bg-gradient-to-br from-black/75 to-white'>
        <div className='w-full grid grid-cols-2'>
        <section className="flex flex-col items-start p-6 m-2">
				<h1 className="text-4xl">Mario Sergio</h1><h1 className="text-4xl"> Dominguez Consuegra</h1>
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
				<h2 className="text-xl">Expertise Skill</h2>
				<ul>
					<li>React.js: Reducers Redux Context</li>
					<li>Java Script</li>
					<li>HTML</li>
					<li>CSS: FlexBox, GridCSS, Bootstrap</li>
					<li>Node.js: Express Mongoose</li>
					<li>MongoDB</li>
					<li>Git GitHub</li>
				</ul>
			</section>
        </div>
       
    </div>
  )
}

export default Cv
