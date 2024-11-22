import React from 'react'
import Nav from '../component/Nav'
import Main from '../component/Main'
import useTitle from '../component/useTitle'

export default function Home() {
  useTitle("Home")
  return (
    <>
        <Nav/>
        <Main/>
    </>
  )
}
