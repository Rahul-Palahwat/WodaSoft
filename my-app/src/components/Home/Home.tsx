import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Data from '../Data/Data'
import Header from '../Header/Header'
import { useAppDispatch, useAppSelector } from '../../redux'
// action to get all users 
import { getTotalItems } from '../../redux/reducers/details'
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getDataStatus, items } = useAppSelector((state) => state.data_all)
  // console.log("hello data", items);
  useEffect(() => {
    dispatch(getTotalItems({}))
  }, [])
  useEffect(() => {
    // console.log("Hello", items)
  }, [getDataStatus])

  return (
    <Flex height={"auto"} width={"100vw"} alignItems="center" justifyContent={"center"} direction="column">
      <Header />
      {items.map((item: any , idx:number) => (<Flex key={idx} width={"100%"} alignItems={"center"} justifyContent={"center"}><Data item={item}/></Flex>))}
    </Flex>
  )
}

export default Home