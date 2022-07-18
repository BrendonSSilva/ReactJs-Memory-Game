import s from 'styled-components'

export const Container = s.div`
    width: 768px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media(max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
`

export const Info = s.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media(max-width: 768px){
        margin-bottom: 50px; 
        align-items: center;
    }
`

export const LogoLink = s.a`
    display: block;
`

export const InfoArea = s.div`
    width: 100%;
    margin: 10px 0;

    @media(max-width: 768px){
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`

export const GridArea = s.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media(max-width: 768px){
        justify-content: center;
        margin: 0 20px;
    }
`

export const Grid = s.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;

    @media(max-width: 768px) {
    grid-template-columns: repeat(3,1fr);
    }
`

export const Foot = s.footer`
    font-weight: bold;
    display: flex;
    justify-content: center;
`