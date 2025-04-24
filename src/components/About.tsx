import React from 'react'
import Card from './Card'

const About = () => {
  return (
    <div className='w-full bg-[#EBEBE4] py-5'>
      <h1 className='text-[#1D3922] font-bold mt-4 mb-10 text-lg md:text-4xl self-center text-center'>Support our life changing-appeals</h1>
        <div className='flex flex-wrap gap-2 justify-center my-3'>
            <Card title="lorem ksdks" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam." image="/images/demo.jpg"/>
            <Card title="lorem ksdks" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam." image="/images/demo.jpg"/>
            <Card title="lorem ksdks" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam." image="/images/demo.jpg"/>
            <Card title="lorem ksdks" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam." image="/images/demo.jpg"/>
            <Card title="lorem ksdks" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam." image="/images/demo.jpg"/>
            <Card title="lorem ksdks" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam." image="/images/demo.jpg"/>
        </div>
    </div>
  )
}

export default About
