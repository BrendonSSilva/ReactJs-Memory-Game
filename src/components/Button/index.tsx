//componente criado para que possa ser usado em qualquer lugar, ao invés de ficar criando botões
//novos a cada vez que for necessário usar, pois assim basta apenas alterar as props

//formatação do botão
import * as C from './styles'

type Props = {
    //texto escrito no botão
    label: string;
    //ícone do botão
    icon?: any;
    //evento do botão
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ label, icon, onClick }: Props) => {
    return (
        <C.Container onClick={onClick}>
            {icon &&
                <C.IconArea>
                    <C.Icon src={icon} />
                </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
    )
}