import React from 'react'
import styled from "styled-components"

const FooterMain = styled.div`
    margin: 0; 
    padding: 0;
    background: #e5f2ef;
`

const FooterGroup = styled.div`
    padding: 50px 10px;
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600; 
    color: #596c67;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: 420px) {
        width: 100%;
        margin: 0 auto;
    }
`

const FooterLink = styled.p`
    color: #00e3ae;
    font-weight: 600;
    margin: 0;
    font-size: 20px;
    text-align: justify;
    cursor: pointer;
`

const Button = styled.button`
    font-size: 24px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    background: linear-gradient(102.24deg, #00e3ae 0%, #9be15d 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    margin: 0 auto;
    margin-top: 30px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    align-items: center;
    justify-content: center;

    a {
        color: #00e3ae;
        font-size: 20px;
        font-weight: 500;
        margin: 5px 0;
        transition: 1s;
    }

    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #596c67;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

const Footer = () => (
    <FooterMain>
        <FooterGroup>
            <Text>Tweet “Prototype and build apps with React and Swift. New courses by @MengTo”</Text>
            <Button>Tweet</Button>
            <LinkGroup>
                <FooterLink>Home</FooterLink>
                <FooterLink>About</FooterLink>
                <FooterLink>Privacy</FooterLink>
                <FooterLink>Courses</FooterLink>
                <FooterLink>Contact</FooterLink>
            </LinkGroup>
            <Copyright> © {new Date().getFullYear()}, for a better web</Copyright> 
        </FooterGroup>
    </FooterMain>
)

export default Footer;