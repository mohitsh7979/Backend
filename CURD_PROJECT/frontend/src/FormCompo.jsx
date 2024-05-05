import React from 'react'

function FormCompo() {
  return (
    <>
     
     <div className="container">
       <form action="/data/">
          <input type="text" placeholder='name' />
          <input type="text" placeholder='price' />
          <button>Submit</button>
       </form>
     </div>

    </>
  )
}

export default FormCompo