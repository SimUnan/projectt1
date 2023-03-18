import { Link } from 'react-router-dom'
import {MdSpaceDashboard} from 'react-icons/md'
import {CgNotes} from 'react-icons/cg'
import {AiOutlineSchedule, AiOutlineSetting} from 'react-icons/ai'

import styled from 'styled-components'
import logo from '../assets/logo.png'
import profilePic from '../assets/profileImg.jpg'

export const Sidebar = () => {
    return (
        <Container>
            <TopSide>
                <Logo>
                    <img src={logo}/>
                    <p>Wise</p>
                </Logo>
                <Profile>
                    <div className='profileImg' 
                        style={{backgroundImage: `url(${profilePic})`}}>
                    </div>
                    <p>Louis Carter</p>
                    <button className='editButton'>Edit</button>
                </Profile>
            </TopSide>
            <Menu>
                <Link to='/'><MdSpaceDashboard className='icon'/> Dashboard</Link>
                <Link to='/activity'><CgNotes className='icon' /> Activity</Link>
                <Link to='/schedule'><AiOutlineSchedule className='icon' />Schedule</Link>
                <Link to='/setting'><AiOutlineSetting className='icon' />Settings</Link>
            </Menu> 
        </Container>
    )
}

const Container = styled.div`
    width: 12%;
    height: 100vh;

    border-right: 1px solid #35373b;
`
//Top Side Container
const TopSide = styled.div`
    /* background-color: gray; */
    width: 100%;
    
    padding: 2rem 0;

`
//Logo Container
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    img{
        width: 3rem;
    }
    
    p{
        font-size: 1.8em;
        font-weight: 500;
        padding: 0;
        margin: 0;
    }

`
//Profile Container
const Profile = styled.div`
    margin-top: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .profileImg{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    p{
        font-size: 1.1em;
        font-weight: 500;
        margin: 0.5rem;
        padding: 0;
    }

    .editButton{
        background-color: transparent;
        border: 1px solid white;
        border-radius: 1rem;
        padding: 0.3rem 0.8rem;
        color: white;
        cursor: pointer;
    }

`
//Menu Container or Bottom side Container 
const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    >a{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        font-size: 1em;
        color: white;
        text-decoration: none;
        padding-left: 2rem;

        width: 165px;
        height: 50px;

        border-radius: 1rem;

        .icon{
            margin-right: 0.3rem;
            font-size: 1.3em;
            color: white;
        }
        
        transition: all ease-in 0.2s;
        :hover{
            transition: all ease-in 0.2s;
            background-color: #363538;
        }
    }
`