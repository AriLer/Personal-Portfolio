import React from 'react'
import styled, { keyframes } from 'styled-components'


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        height: 200vh;  
    }
`

const Container = styled.div`
    height: 100%;
    /* scroll-snap-align: center; */
    width: 1400px;
    /* width: 80%; */
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        flex-direction: column;  
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`

const Projects = () => {
  return (
    <div>Projects</div>
  )
}

export default Projects