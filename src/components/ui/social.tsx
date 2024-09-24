import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin,FaYoutube,FaTwitter, FaFacebook } from 'react-icons/fa'

const socials=[
    { icon:<FaGithub/> , path:'https://github.com/RafiaSuleman?tab=repositories'},
    { icon:<FaLinkedin/> , path:'https://www.linkedin.com/in/rafia-khurshid-853510b7/recent-activity/all/'},
    { icon:<FaFacebook/> , path:'https://www.facebook.com/profile.php?id=100067042838048'},
    
]
const Social = ({containerStyles,iconStyles}:any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
        </Link>
      
      })}
    </div>
  )
}

export default Social
