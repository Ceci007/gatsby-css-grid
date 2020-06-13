import React from 'react'
import styled from "styled-components"
import Wave from "../components/wave"

const SectionGroup = styled.div`
    background: linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props => props.image});
    height: 800px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`
const SectionLogo = styled.img`
    align-self: end;
    width: 120px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 400px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;
    justify-items: center;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 720px) {
        text-align: center;
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;

    
    @media (max-width: 720px) {
        text-align: center;
    }
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -12px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -12px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>)

export default Section