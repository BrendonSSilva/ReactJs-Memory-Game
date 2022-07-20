import { useEffect, useState } from 'react';
import * as C from './App.styles'

import logo from './assets/devmemory_logo.png'
import restartIcon from './svgs/restart.svg'

import { InfoItem } from './components/InfoItem'
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';

import { GridItemType } from './types/GridItemType';
import { items } from './Data/items'
import { formatTime } from './helpers/formatTime';


const App = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [time, setTime] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [shownCount, setShownCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  //função resetar e criar uma grid
  useEffect(() => { resetAndCreateGrid() }, [])

  useEffect(() => {
    //contagem do timer
    const timer = setInterval(() => {
      if (playing) setTime(time + 1)
    }, 1000)
    //zerar o timer
    return () => clearInterval(timer)
  }, [playing, time])

  useEffect(() => {

    if (shownCount === 2) {
      //verificar se as duas peças clicadas combinam
      let opened = gridItems.filter(item => item.shown === true)
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          const tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0)
        } else {
          //se as duas peças clicadas não combinam, deixar elas aparecendo por 1seg para o usuário
          //conferir quais peças são, depois virar as peças de "cabeça para baixo" novamente
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0)
          }, 1000)
        }
        setMoveCount(moveCount => moveCount + 1);
      }
    }
  }, [shownCount, gridItems])

  //verificar quando o jogo acabar
  useEffect(() => {
    if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false)
    }
  }, [moveCount, gridItems])

  const resetAndCreateGrid = () => {
    //1 - resetar o jogo
    setTime(0)
    setMoveCount(0)
    setShownCount(0)

    //2 - criar grid
    //2.1 - criar um grid vazio
    let tmpGrid: GridItemType[] = []
    //criar 2x cada item do GridItemType aleatoriamente
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null, shown: false, permanentShown: false
      })
    }
    //2.2 preencher grid
    //o for será executado 2x (duas vezes)
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1
        //verificar se a posição está preenchida
        while (pos < 0 || tmpGrid[pos].item !== null) {
          // uma posição aleatória até o item 2 foi gerada
          pos = Math.floor(Math.random() * (items.length * 2))
        }
        tmpGrid[pos].item = i;
      }
    }

    //2.3 atualizar o state
    setGridItems(tmpGrid)

    //3 - iniciar o jogo
    setPlaying(true)
  }

  //contagem de movimentos
  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems]
      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true
        setShownCount(shownCount + 1)
      }

      setGridItems(tmpGrid)
    }
  }

  return (
    <>
      <C.Container>
        <C.Info>
          <C.LogoLink href=''>
            <img src={logo} width='200' alt='' />
          </C.LogoLink>
          <C.InfoArea>
            <InfoItem label="tempo" value={formatTime(time)} />
            <InfoItem label="Movimentos" value={moveCount.toString()} />
          </C.InfoArea>
          <Button label="Reiniciar" icon={restartIcon} onClick={resetAndCreateGrid} />
        </C.Info>
        <C.GridArea>
          <C.Grid>
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                item={item}
                onClick={() => handleItemClick(index)}
              />

            ))}
          </C.Grid>
        </C.GridArea>
      </C.Container>
      <C.Foot>
        Projeto de estudo feito por&nbsp;<a href='https://github.com/BrendonSSilva' target='blank'>Brendon</a>
      </C.Foot>
    </>
  );
}

export default App;