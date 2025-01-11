"use client"
import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import Swal from 'sweetalert2'
import { socialLinkSet } from '@/app/utils/IconProvider'

const Contact = () => {

  const successMessage = () => {
    Swal.fire({
      icon: 'success',
      title: 'Message Sent',
      text: 'Your message has been sent successfully. I will get back to you as soon as possible.',
      confirmButtonText: 'Close'
    })
  }

  return (
    <div className='mt-32'>
        <SectionHeader text="Contact" />

        <div className='grid md:grid-cols-2 gap-10 px-4 sm:px-20 relative pt-20 md:pt-32 pb-20 md:pb-32 mb-10'> {/* temp mb */}
            <div>
                <p className='mb-10 text-center w-full opacity-60'>Use this form to send a quick message to me.</p>
                <form onSubmit={successMessage} action="https://send.pageclip.co/cewjDTaJ9R6N5PDlhRjKdsKtcfHp6bAU/portfolio-contact" method='post' className='pageclip-form flex flex-col gap-4 items-center'>
                    <input name='name' type="text" placeholder="Your Name" className='max-w-96 py-2 px-4 rounded-md bg-white/5 border-[2px] border-transparent hover:border-[#295CA188] focus:border-[#295CA1]  transition duration-300 focus:scale-105 outline-none' />
                    <input name='email' type="email" placeholder="Email Adress" className='max-w-96 py-2 px-4 rounded-md bg-white/5 border-[2px] border-transparent hover:border-[#295CA188] focus:border-[#295CA1]  transition duration-300 focus:scale-105 outline-none' required />
                    <input name='additional-contact' type="text" placeholder="Contact Information (optional)" className='max-w-96 py-2 px-4 rounded-md bg-white/5 border-[2px] border-transparent hover:border-[#295CA188] focus:border-[#295CA1]  transition duration-300 focus:scale-105 outline-none' />
                    <textarea name='message' placeholder="Your Message" className='max-w-96 py-2 px-4 h-40 rounded-md bg-white/5 border-[2px] border-transparent hover:border-[#295CA188] focus:border-[#295CA1]  transition duration-300 focus:scale-105 outline-none' required></textarea>
                    <button type='submit' className='w-48 mt-5 button pageclip-form__submit py-2 px-4 bg-[#020914] text-white font-bold hover:scale-105 transition-all rounded-md active:scale-95 disabled:opacity-20'>
                      <span>Send</span>
                    </button>
                </form>
            </div>

            <div className='h-full w-[1px] bg-white/20 absolute hidden lg:block top-0 left-[50%] translate-x-[-50%]'></div>

            <div>
                <p className='mb-10 text-center w-full opacity-60 '>Use my social media accounts to connect with me.</p>

                <div className='flex flex-col items-center gap-5'>
                  {Object.keys(socialLinkSet).map((link, i) => {
                    const Icon = socialLinkSet[link]
                    const linkParts = link.split('/');
                    const lastElement = linkParts[linkParts.length - 1];
                    return (
                      <a href={link} target='_blank' key={i} className='flex items-center gap-2 text-white/40 font-medium text-lg hover:text-white transition-all'>
                        <span className='text-2xl mr-1'><Icon /></span>
                        <span>{lastElement}</span>
                      </a>
                    )
                  })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
