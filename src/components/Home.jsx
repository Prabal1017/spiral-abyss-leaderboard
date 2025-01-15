import React from 'react'

export default function Home(props) {
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1 className="lmao" >Kannu simps on citlali</h1>
    </div>
    </>
  )
}
