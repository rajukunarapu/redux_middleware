import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addData } from './actions'

const App = () => {

  let dispatch = useDispatch()
  let userData = useSelector((state)=>state.userData)

  async function fetchData(dispatch,getState){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data =  await response.json()
    dispatch(addData(data))
  }

  return (
    <>
      <button onClick={()=>dispatch(fetchData)} >Get Data</button>
      <h1>Id:</h1>
      <p>{userData.id}</p>
      <h1>Title:</h1>
      <p>{userData.title}</p>
      <h1>Body:</h1>
      <p>{userData.body}</p>
    </>
  )
}

export default App