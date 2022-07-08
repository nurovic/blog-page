import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai"

const SideBar = () => {
  return (
    <div className='bg-sky-400 w-76 h-screen flex flex-col px-6'>
        <img className='h-44 w-44 ml-4 rounded-full mt-14' src="https://media-exp1.licdn.com/dms/image/C4D03AQEgDm8mNmF57Q/profile-displayphoto-shrink_800_800/0/1654120704258?e=1662595200&v=beta&t=kxfbTZVe5rk49NgNtMVHOewgyCoGH3jttPYJ31eR-Xw" alt="Mert Akturk"/>
        <h1 className='font-black mt-8 '>Mert AKTÜRK</h1>
        <h3 className='font-medium' >Full-Stack Developer</h3>
        <div className="icons">
            <div className="list-icons flex flex-row mt-8">
             <AiFillGithub className='h-7 w-7'/> 
             <a  className='pl-2' href="https://github.com/nurovic">/nurovic</a>
            </div>
            <div className="list-icons flex flex-row mt-2">
             <AiFillMail className='h-7 w-7'/>
             <a className='pl-2' href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mertnurovic@gmail.com">mertnurovic@gmail.com</a>
            </div>
            <div className="list-icons flex flex-row mt-2">
             <AiFillLinkedin className='h-7 w-7'/> 
             <a className='pl-2' href="https://www.linkedin.com/in/mert-akturk/">/mert-akturk</a>
            </div>
        </div>
    </div>
  )
}

export default SideBar