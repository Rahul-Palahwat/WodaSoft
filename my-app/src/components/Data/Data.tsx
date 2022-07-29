import { Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux'
// action to get all comments 
import { getTotalComment } from '../../redux/reducers/details'
import User from '../User/User'
// import css file 
import './Data.css'
interface Props {
  item: any
}
const Data: React.FC<Props> = ({ item }) => {
  const [show, setShow] = useState(true);
  const dispatch = useAppDispatch();
  const { getCommentStatus, comment } = useAppSelector((state) => state.data_all)
  let commen = comment.slice(1,5);
  useEffect(() => {
    dispatch(getTotalComment({}))
  }, [])
  useEffect(() => {
  }, [getCommentStatus])
  return (
    <>
    {show ?
      <Flex height={"8vh"} mt="0.5rem" className="box" width={"80%"}  justifyContent={"space-between"} >
        <Flex width={"15%"} justifyContent="center"  alignItems={"center"}>{item.company.name}</Flex>
        <Flex width={"20%"} justifyContent="center"  alignItems={"center"}>01.01.2022</Flex>
        <Flex width={"20%"} justifyContent="center"  alignItems={"center"}>500$ - 1000$Monthly</Flex>
        <Flex width={"20%"} justifyContent="center"  alignItems={"center"}>{item.name}</Flex>
        <Flex width={"20%"} justifyContent={"center"} alignItems={"center"}><Button onClick={() => setShow(false)} width={"90%"} height="70%" fontSize={"1.2rem"} fontWeight="bold" bgColor={"#3783FB"} color="white">Show Employees...</Button></Flex>
      </Flex>
      :
      <Flex direction={"column"} width="100%" alignItems={"center"} height="auto">
        <Flex height={"8vh"} borderTop={"3px solid grey"} borderLeft={"3px solid grey"} borderRight={"3px solid grey"} width={"80%"} justifyContent={"space-between"}>
        <Flex width={"15%"} justifyContent="center" alignItems={"center"}>{item.company.name}</Flex>
        <Flex width={"20%"} justifyContent="center" alignItems={"center"}>01.01.2022</Flex>
        <Flex width={"20%"} justifyContent="center" alignItems={"center"}>500$ - 1000$Monthly</Flex>
        <Flex width={"20%"} justifyContent="center" alignItems={"center"}>{item.name}</Flex>
        <Flex width={"20%"} justifyContent={"center"} alignItems={"center"}></Flex>
      </Flex>
        <Flex borderLeft={"3px solid grey"} borderRight={"3px solid grey"} height={"auto"} width={"80%"} justifyContent={"space-between"} direction="column">
          {commen.map((comm:any) => (<User comment={comm}/>))}
        </Flex>
      <Flex height={"10vh"} borderLeft={"3px solid grey"} borderRight={"3px solid grey"} borderBottom={"3px solid grey"} width={"80%"} justifyContent={"flex-end"}>
        <Flex width={"20%"} justifyContent="center" alignItems={"center"}>Total Expenditure</Flex>
        <Flex width={"20%"} justifyContent={"center"} alignItems={"center"}><Button onClick={() => setShow(true)} width={"90%"} height="5vh" fontSize={"1.2rem"} fontWeight="bold" bgColor={"#3783FB"} color="white">Hide Employees...</Button></Flex>
      </Flex> 
      </Flex>
      }
    </>
  )
}

export default Data