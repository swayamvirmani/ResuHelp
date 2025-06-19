import React from 'react'
import { NavLink } from 'react-router-dom'
import { Text, IconButton } from '@chakra-ui/react'
import "./Navbar.css"
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
        <div className='Navbarcont'>
          
            <nav className='Navbar'>
              <div id="logoh">
                {/* <img src={logo} alt="" id="logohh"/> */}
                <NavLink to="/" className="logo-link">
                  <Text fontSize={"2xl" } as="b">ResuHelp</Text>
                </NavLink>
                </div>
              
                <ul id='hca'>
                    <li className='navers'>
                           <NavLink to={"/analyse"}><Text className="navname"> Analyse</Text></NavLink>
                        </li>
                    <li className='navers'>
                           <NavLink to={"/compare"}><Text className="navname">Compare</Text></NavLink>
                        </li>
                    {/* <li className='navers'>
                           <NavLink to={"/create"}><Text className="navname">Create</Text></NavLink>
                        </li> */}
                        
                        
                        
                        
                    </ul>
                    <div className="rightnav">
    
    
                    {/* <div className="login">
                      <NavLink to={"/login"}>
    
                     <Loginbutton/>
                      </NavLink>
                    </div>
                    <NavLink to={"/cart"}>
    
                    <div className='cart chamak'>
                         <IoCartOutline size="2rem"  id="carti"/>
                    </div>
                    </NavLink>
                    <div className="profile">
                        <Profile2button/>
                    </div> */}
                    
                    <IconButton
                      as="a"
                      href="https://github.com/swayamvirmani/ResuMind"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<FaGithub style={{ fontSize: '2.2rem' }} />}
                      aria-label="GitHub"
                      size="lg"
                      variant="ghost"
                      color="#222"
                      _hover={{ bg: 'transparent', color: '#2E7D32' }}
                    />
                    
                    </div>
                
                
            </nav>
        </div>
  )
}

export default Navbar