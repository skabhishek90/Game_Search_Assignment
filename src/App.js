import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import back from "./assets/back.jpg"; 

function App() {
  const style1 = {backgroundColor: "#e7e2dc"}

  const style = {backgroundImage:`url(${back})`,backgroundRepeat:"repeat",backgroundSize:"contain",}

  const [game,setGame] = useState([])
  const [display,setDisplay] = useState([])
  const  [s,sets] = useState("")
  let i = 1

  const FetchGames =()=>{
    axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
    .then((response)=>{
      response.data.splice(0,1)
      setGame(response.data)
      setDisplay(response.data)
    })
  }

 const search = (e) =>{
  sets(e)
  setGame(display.filter(word => word.title.includes(e))) 
 }
 const ta = () =>{
 setGame([...game].sort((a,b) => a.title.localeCompare(b.title)))
 }
 const td = () =>{
  setGame([...game].sort((b,a) => a.title.localeCompare(b.title)))
  }
const pa = () =>{
  setGame([...game].sort((a,b) => a.platform.localeCompare(b.title)))
  }
const pd = () =>{
  setGame([...game].sort((b,a) => a.platform.localeCompare(b.title)))
  }
const ga = () =>{
  setGame([...game].sort((a,b) => a.genre.localeCompare(b.title)))
  }
const gd = () =>{
  setGame([...game].sort((b,a) => a.genre.localeCompare(b.title)))
  }
const sa = () =>{
  setGame([...game].sort((a,b) => a.score.localeCompare(b.title)))
  }
const sd = () =>{
  setGame([...game].sort((b,a) => a.score.localeCompare(b.title)))
  }
const ea = () =>{
  setGame([...game].sort((a,b) => a.editors_choice.localeCompare(b.title)))
  }
const ed = () =>{
  setGame([...game].sort((b,a) => a.editors_choice.localeCompare(b.title)))
  }
  useEffect(()=>{
    FetchGames();
  },[])
  return (
    <div style={style1}>
    
    <div class='search'>
    <input placeholder='Search Your Game' id = 'search' value = {s} onChange={(e)=>search(e.target.value)}  />
    </div>
<table style={style}>
  <thead>
    <tr>
      <th>S No.</th>
      <th><button className='button' onClick={()=>ta()}>Title</button></th>
      <th><button className='button' onClick={()=>pa()}>Platform</button></th>
      <th><button className='button' onClick={()=>ga()}>Genre</button></th>
      <th><button className='button' onClick={()=>sa()}>Score</button></th>
      <th><button className='button' onClick={()=>ea()}>Editors_choice</button></th>
    </tr>
   </thead>
   <tbody>
    {game.map((x)=>  <tr key={i}>
      <td>{i++}</td>
       <td>{x.title}</td>
       <td>{x.platform}</td>
       <td>{x.genre}</td>
       <td>{x.score}</td>
       <td>{x.editors_choice}</td>
     </tr>)}
    </tbody>
  </table>
    </div>    
  )
}

export default App;
