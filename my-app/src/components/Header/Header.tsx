import { Flex } from '@chakra-ui/react'
import React from 'react'

const Header:React.FC = () => {
  return (
    <>
        <Flex fontSize={"1.2rem"} fontWeight={"bold"} bgColor={"#3783FB"} color="white" height={"8vh"} width={"80%"} justifyContent={"space-between"}>
            <Flex width={"15%"} justifyContent="center"  alignItems={"center"}>Company</Flex>
            <Flex width={"20%"} justifyContent="center" alignItems={"center"}>Date of Inogaration</Flex>
            <Flex width={"20%"} justifyContent="center" alignItems={"center"}>Pay Scale</Flex>
            <Flex width={"20%"} justifyContent="center"  alignItems={"center"}>Manager</Flex>
            <Flex width={"20%"} alignItems={"center"}></Flex>
        </Flex>
    </>
  )
}

export default Header