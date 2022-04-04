import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import {HeaderTop, Flex, Nav} from './style'

const Header = ({text}) => {
  return (
    <HeaderTop>
        <Flex className='container'>
            <Link to={'/'}>
                <img src={Logo} alt="Logo the of The Movie Double Black " />
            </Link>
            <a className='btn-header' href={'https://www.themoviedb.org/'} target="_blank" rel='noopener noreferrer'>{text}</a>
        </Flex>
        
        <Nav>
            <h1>The Movie Double Black</h1>
        </Nav>
    </HeaderTop>
  )
}

export default Header