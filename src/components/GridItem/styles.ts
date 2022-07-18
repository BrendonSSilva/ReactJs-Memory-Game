import s from 'styled-components'

type ContainerProps = {
    showBackground: boolean;
}

export const Container = s.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#1550ff' : '#e3e3e3'};
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number;
}

export const Icon = s.img<IconProps>`
    opacity: ${props => props.opacity ?? 1};
    width: 60px;
    height: 60px;
`;
