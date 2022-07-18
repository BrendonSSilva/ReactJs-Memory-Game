import s from 'styled-components'

export const Container = s.div`
    width: 200px;
    height:50px;
    display: flex;
    background-color: #1550ff;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease .3s;

    &:hover{
        opacity: .8;
    }
`

export const IconArea = s.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #fff;
    padding: 0 15px;
`

export const Icon = s.img`
    height: 20px;
`

export const Label = s.div`
    height: inherit;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`