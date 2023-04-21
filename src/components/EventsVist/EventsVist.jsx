import React,{useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'
import {ImPlus} from 'react-icons/im'
import { CardEventAdmin } from '../CardEventAdmin/CardEventAdmin'
import { Footer } from '../Footer/Footer'
import { ModalEventAdd } from '../ModalEventAdd/ModalEventAdd'

export const EventsVist = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () =>{
    setOpenModal(!openModal)
  }

  const handleCloseModal = () =>{
    setOpenModal(false)
  }

  return (
    <div className='w-full h-full flex items-center flex-col gap-12'>
      <div className='mt-2'>
        <h1 className='pl-20 text-2xl lg:text-5xl font-semibold'>Historial de Eventos</h1>
      </div>
      <div className='w-full flex justify-center'>
        <button className='flex justify-center items-center gap-2 px-4 py-2 bg-purple-600 rounded-l-md font-normal text-white'>Caregorias <BiChevronDown className='text-2xl'/></button>
        <input type="text" className='bg-slate-300 cursor-pointer py-2 focus:outline-none focus:border focus:border-gray-400 rounded-r-md w-1/4 text-zinc-500 text-base px-4' placeholder='Busca un evento'/>
        <div className='absolute right-1/3 mr-5 top-28 mt-1 text-lg'>
          <AiOutlineSearch/>
        </div>
      </div>
      <div className='w-full h-full flex justify-center gap-12 mb-2'>
        <CardEventAdmin/>
        <CardEventAdmin/>
        <CardEventAdmin/>
        <CardEventAdmin/>
      </div>
      <div onClick={handleOpenModal} className='absolute rounded-full bg-slate-200 p-5 text-2xl text-purple-600 bottom-44 right-10 transform transition-transform hover:scale-125 hover:bg-slate-300'>
        <ImPlus/>
      </div>
      {
        openModal && <ModalEventAdd handleCloseModal={handleCloseModal}/>
      }
     <div className='pl-14 w-full'>
     <Footer/>
     </div>
    </div>
  )
}
