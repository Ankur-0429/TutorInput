import React, { useState } from 'react';
import data from './data'
import Tutor from './tutor'
/* var fileUrl = require('file-url') */

const InputForm = () => {
  const [firstName, setFirstName] = useState(data.name)
  const [firstBio , setBio] = useState(data.bio)
  const [firstPic , setPic] = useState(data.pic)
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(data)
  }
  
  return <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={firstName}
            onChange={(event)=>{
              setFirstName(event.target.value)
              data.name = event.target.value
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Bio: </label>
          <input 
            type="text" 
            id="firstBio" 
            name="firstBio" 
            value={firstBio}
            onChange={(event)=>{
              setBio(event.target.value)
              data.bio = event.target.value
            }} 
          />
        </div>

        <div className="form-control">
          <label htmlFor="camera">Link: </label>
          <input 
            type="text" 
            id="pic" 
            name="pic"
            value={firstPic}
            onChange={(event)=>{
              setPic(event.target.value)
              data.pic = event.target.value
            }} 
          />
        </div>

        {/* <div className="form-control">
          <label htmlFor="camera">Link: </label>
          <input 
            type="file" 
            id="link" 
            name="link"
            accept="image/png, image/jpeg"
            capture="camera"
            value={firstPic}
            onChange={(event)=>{
              setPic(event.target.value)
              data.pic = event.target.value
              console.log(fileUrl(event.target.files[0].name))
              setPic(fileUrl(event.target.files[0].name))
              data.pic = fileUrl(event.target.files[0].name, {resolve:true})            }} 
          />
        </div> */}

        <button type="submit" onClick={handleSubmit}>add Person</button>
      
      </form>
    </article>

    <Tutor {...data}/>

  </>
};

export default InputForm;
