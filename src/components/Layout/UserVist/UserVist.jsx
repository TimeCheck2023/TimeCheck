import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import { CardEventUser } from '../../UI/CardEventUser/CardEventUser'
import { Footer } from "../Footer/Footer";


export const UserVist = () => {
  return (
    <div className='pl-20'>
      <div className='flex justify-center py-5 px-8'>
        <input className='border border-slate-400 shadow-lg px-3 py-0.5 shadow-neutral-300 rounded-xl w-full 2xl:w-1/3' type="search" placeholder='Buscar...'/>
        <button className='absolute right-10 2xl:right-1/3 top-6'>
          <AiOutlineSearch className='text-xl'/>
        </button>
      </div>
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-5 pb-10'>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>
        <CardEventUser/>

      </div>
      <Footer/>
    </div>
  )
}
