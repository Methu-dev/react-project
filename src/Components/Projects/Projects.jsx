import React from 'react'
import ProjectCart from './ProjectCart'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap items-center gap-5'>
        <ProjectCart title="Blogging Website" main="this is a bloggin website created in next js and used some components library"/>
        <ProjectCart title="Youtube clone" main="this is a bloggin website created in next js and used some components library"/>
        <ProjectCart title="Netflix clone" main="this is a bloggin website created in next js and used some components library"/>
        <ProjectCart title="Nasa clone" main="this is a bloggin website created in next js and used some components library"/>
      </div>
    </div>
  )
}

export default Projects
