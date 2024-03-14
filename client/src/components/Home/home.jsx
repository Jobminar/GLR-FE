import React from 'react'
import { useContext } from 'react'
import {Data} from '../Contextprovider'

const Home = () => {
  const {fullname} = useContext(Data)
  return (
      <>
         Home
          <p>Name : {fullname}</p> 

      </>
  )
}

export default Home