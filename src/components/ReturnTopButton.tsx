import { useEffect, useState } from 'react'
import {
    Button
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons'

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 100  //ボタンを表示させたい位置
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    pointerEvents: 'none'
  }
  const activeStyle = {
    opacity: 1,
    transition: '0.5s'
  }
  const style = isButtonActive ? activeStyle : normalStyle

  return (
    <Button colorScheme='blue' style={style} onClick={returnTop} position="fixed" bottom="20px" right="20px" w="60px" h="60px" borderRadius="50%">
      <ChevronUpIcon w="50px" h="50px" />
    </Button>
  )
}

export default ReturnTopButton