import React from 'react'

import { LuNotebookTabs } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";

import { FaMobileAlt } from "react-icons/fa";

import { RiTelegram2Line } from "react-icons/ri";

const Cards = () => {
  const content = [
    {
      title: 'User-Friendly Interface',
      description:
        'Our platform makes it easy to navigate and manage your tasks efficiently.',
      icon: <FaMobileAlt className='text-4xl text-red-500' />,
      num: '01'
    },
    {
      title: 'Collaborate & Share Effortlessly',
      description:
        'Choose from a variety of customizable themes to personalize your to-do list experience.',
      icon: <RiTelegram2Line className='text-4xl text-red-500' />,
      num: '02'
    },
    {
      title: 'Effortless Collaboration',
      description:
        'Collaborate with others by sharing your to-do lists and assigning tasks to team members.',
      icon: <FaUserCheck className='text-4xl text-red-500' />,
      num: '03'
    },
    {
      title: 'Seamless Access',
      description:
        'Access your to-do list across all your devices with seamless syncing and cloud storage.',
      icon: <LuNotebookTabs className='text-4xl text-red-500' />,
      num: '04'
    }
  ]

  return (
    <div className='flex flex-col items-center px-6 py-10  bg-white'>
      <h1 className='text-2xl md:text-[2.45rem] font-bold text-center py-10 md:mb-5'>
        Transform Your Productivity with Our <br /> Innovative To-Do List Features
      </h1>

      <div className='flex flex-wrap justify-center gap-8'>
        {content.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 w-80  rounded-3xl p-6 flex flex-col justify-between'
          >
            <div className='flex justify-between items-center mb-4'>
              <div className='bg-white p-3 rounded-lg'>{item.icon}</div>
              <h1 className='text-4xl font-extrabold text-gray-300'>{item.num}</h1>
            </div>

            <h3 className='text-2xl font-bold text-gray-800 mb-3'>
              {item.title}
            </h3>

            <div className='flex gap-3 mb-4'>
              <div className='bg-red-500 w-24 h-2 rounded-full'></div>
              <div className='bg-red-500 w-8 h-2 rounded-full'></div>
            </div>

            <p className='md:text-[1.25rem] p-2 md:mb-6 font-semibold text-black '>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
