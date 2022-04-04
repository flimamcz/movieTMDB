import React from 'react'
import {ContainerLoading, LoadingContent} from './style'
const Loading = () => {
  return (
    <ContainerLoading>
        <div className='content-loading'>
            <LoadingContent className='loading'></LoadingContent>
        </div>
    </ContainerLoading>
  )
}

export default Loading