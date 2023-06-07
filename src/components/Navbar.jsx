import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;  
    }
`;

const Container = styled.div`
    /* width: 1400px; */
    width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    @media only screen and (max-width: 768px) {
        width: 100%;  
        /* padding: 10px; */
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;   
    font-size: 90%;
    color: #dedede;
    font-family: 'Fira Code', monospace; 
`


const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    
    /* @media only screen and (max-width: 768px) {
        display: none;  
    } */
    `

const ListItem = styled.li`
  cursor: pointer;
`

const Icons = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`
  

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer; 
`

const Navbar = () => {
    return <Section>
        <Container>
            <Links>
                <List>
                    <ListItem>01. About</ListItem>
                    <ListItem>02. Projects</ListItem>
                    <ListItem>03. Feedback</ListItem>
                    <ListItem>04. Contact</ListItem>
                </List>
            </Links>
            {/* <Icons>
                <Button>Hire Now</Button>
            </Icons> */}
        </Container>
    </Section>
}

export default Navbar