import React from 'react'
import EachInformation from './UI/EachInformation'

const page = async(props:PageProps<"/[id]">) => {
    const{id}=await props.params
  return (
    <EachInformation postId={id}/>
  )
}

export default page