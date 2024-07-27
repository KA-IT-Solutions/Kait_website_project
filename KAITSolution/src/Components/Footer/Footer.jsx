import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
const sections =[
  {
    title:'logo',
    items:['Marketing','Analytics','Commerce','Data','Cloud']
},
{
    title:'Solutions',
    items:['Marketing','Analytics','Commerce','Data','Cloud']
},
{
    title:'Support',
    items:['Marketing','Analytics','Commerce','Data','Cloud']
},
{
    title:'Company',
    items:['Marketing','Analytics','Commerce','Data','Cloud']
},

]
const items =[
    {
        Name:'Facebook',
        icon:FaFacebook,
        link:'https://facebook.com/'
    },
    {
        Name:'Instagram',
        icon:FaInstagram,
        link:'https://instagram.com/'
    },
    {
        Name:'Twitter',
        icon:FaTwitter,
        link:'https://twitter.com/'
    },
    {
        Name:'Github',
        icon:FaGithub ,
        link:'https://github.com/'
    }
    
]
const Footer = () => {
  return (
    <>
   <div className="w-screen mt-24 bg-slate-900 text-gray-300 py-8 px-2">
  <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
    {sections.map((section, index) => (
      <div key={index}>
        <h6 className='font-bold uppercase pt-2'>
            {section.title}</h6>
            <ul>
                {section.items.map((item,i)=>(
                    <li key={i}
                    className='py-1 text-gray-500 hover:text-white cursor-pointer'>
                        {item}
                    </li>
                ))}
            </ul>
      </div>
    ))}
    <div className='cols-span-2 pt-8 nd;pt-2'>
        <p className='font-bold uppercase'>
            kait software solutions llp
        </p>
        <p className='py-4'>
        KAIT Solution On, Kharadi - Hadapsar Bypass Rd, opposite NOVA IVF Center, Sambhajinagar, Kharadi, Pune, Maharashtra 411014
        </p>
        <form className='flex flex-col sn:flex-row'>
            <input type='email' placeholder='Enter the email'
            className='w-full p-2 mr-4 rounded-md mb-4'/>
            {/* <button className='p-2 mb-4 '>
                submit
            </button> */}
        </form>
    </div>
  </div>
  <div className='flex flex-cols max-w-[1240px] px-2 py-4 mx-auto justify-between sn:flex-row text-center text-gray'>
    <p className='py-4'>
        2024 kait solutions all right reserved
    </p>
    <div className='flex justify-between sn:w[300px} pt-4 text-2xl'>
        {
            items.map((x,index)=>{
                return<x.icon key={index} className='hover:text-white cursor-pointer'/>
            })
        }
    </div>
  </div>
</div>

      
    </>
  )
}

export default Footer
