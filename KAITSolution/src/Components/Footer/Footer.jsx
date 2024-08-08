import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const sections = [
  {
    title: 'Solutions',
    items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud']
  },
  {
    title: 'Services',
    items: ['Web Development', 'App Development', 'Digital Marketing', 'Branding']
  },
  {
    title: 'Company',
    items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud']
  }
];

const items = [
  {
    Name: 'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com/'
  },
  {
    Name: 'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/'
  },
  {
    Name: 'Twitter',
    icon: FaTwitter,
    link: 'https://twitter.com/'
  },
  {
    Name: 'Github',
    icon: FaGithub,
    link: 'https://github.com/'
  }
];

const Footer = () => {
  return (
    <>
      <div className="w-screen mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <img src='/logo.png' alt='Kait Solution Logo' className='w-44 h-auto mr-90' />
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 border-b-2 border-gray-600 py-8 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col text-center">
              <h6 className='font-bold uppercase pt-2'>{section.title}</h6>
              <ul className='list-none'>
                {section.items.map((item, i) => (
                  <li key={i} className='py-1 text-gray-500 hover:text-white cursor-pointer'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='flex flex-col text-center pt-8'>
            <div className='flex items-center justify-center mb-4'>
              
              <p className='font-bold uppercase'>Kait Software Solutions LLP</p>
            </div>
            <p className='py-4'>
              KAIT Solution On, Kharadi - Hadapsar Bypass Rd, opposite NOVA IVF Center, Sambhajinagar, Kharadi, Pune, Maharashtra 411014
            </p>
            <form className='flex flex-col sm:flex-row justify-center'>
                
              <input type='email' placeholder='Enter your email'
                className='w-full p-2 mr-4 rounded-md mb-4'/>
              {/* <button className='p-2 mb-4'>
                submit
              </button> */}
            </form>
          </div>
         
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
          <p className='py-4'>
            2024 Kait Solutions All Rights Reserved
          </p>
          <div className='flex justify-center sm:justify-between pt-4 text-2xl'>
            {items.map((x, index) => (
              <a key={index} href={x.link} target="_blank" rel="noopener noreferrer">
                <x.icon className='hover:text-white cursor-pointer mx-2'/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;




