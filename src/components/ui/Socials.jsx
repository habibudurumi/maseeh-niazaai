import Link from "next/link"
import { FaGithub, FaLinkedin,} from "react-icons/fa"
import {FaXTwitter} from 'react-icons/fa6';

const socials = [
    {icon:<FaGithub/>, path:''},
    {icon:<FaLinkedin/>, path:''},
    {icon:<FaXTwitter/>, path:''}
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
      <div className={containerStyles}>
          {
              socials.map((item, index) => {
                  return (
                      <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                      </Link>
                  )
              })
          }
    </div>
  )
}

export default Socials