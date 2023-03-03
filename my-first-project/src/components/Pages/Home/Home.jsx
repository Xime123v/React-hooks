import React from 'react';
import {Header} from '../../../components/Layouts/Header/Header';
import {Main} from '../../../components/Layouts/Main/Main'

export const Home = () => {
  return(
     <div className='container'>
      <Header/>
      <Main/>
    </div>
  )
}