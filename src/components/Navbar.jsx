import styled from 'styled-components'
import {React, useState} from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FiSearch} from 'react-icons/fi'

const Navbar = () => {

    const [buttonColor, setButtonColor] = useState(true)

  return (
    <Container>
      <div className='Left'>
        <p>Statistics</p>
      </div>
      <div className='Middle'>
        <form>
          <FiSearch className='icon'/>
          <input placeholder='Search something...'/>
        </form>
      </div>
      <div className='Right'>
        <button style={{
            backgroundColor: buttonColor ? "#FFF37A" : "",
            color: buttonColor ? "#000" : "#fff"
        }}>
            Upgrade
        </button>
        <button style={{
            backgroundColor: !buttonColor ? "#FFF37A" : "",
            color: !buttonColor ? "#000" : "#fff",
            borderColor: !buttonColor ? "" : "#35373b"
        }}>
            <IoMdNotificationsOutline className='icon'/>
        </button>
      </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    /* background-color: gray; */
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .Left{
        margin-left: 3rem;
        cursor: default;
        p{
            font-size: 2em;
            font-weight: 100;
            padding: 0;
            margin: 0;
        }
    }
    .Middle{
      form{
        .icon{
          color: gray;
          font-size: 1.1em;
          margin: 0rem 1rem -0.125rem 0rem;
        }
        :focus-within{
          transition: all ease-in 0.325s;
          border: 1px solid white;
          border-radius: 1rem;
          padding: 0.35rem 1rem;
        }
        :hover{
          transition: all ease-in 0.125s;
          border: 1px solid white;
          border-radius: 1rem;
          padding: 0.35rem 1rem;
        }
      }
      form input {
        background-color: transparent;
        border: none;
        font-size: 1.1em;
        font-weight: 100;
        color: white;
        :focus{
          outline: none;
          width: 25vw;
          height: 3vh;
        }
      }
    }
    .Right{
        margin-right: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        button{
            background-color: transparent;
            border: 1px solid transparent;
            padding: 0 1rem;
            height: 3rem;
            border-radius: 1rem;
            font-weight: 600;
            font-size: 1em;

            cursor: pointer;

            .icon{
                font-size: 1.5em;
            }

        }
    }

`