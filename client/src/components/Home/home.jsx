import React from 'react'
import { useContext } from 'react'
import {Data} from '../Contextprovider'
import Homecources from './Homecources'

const Home = () => {
  const {fullname} = useContext(Data)
  return (
      <>
          <div>Main con
            <Homecources/>
          </div>

      </>
  )
}

export default Home