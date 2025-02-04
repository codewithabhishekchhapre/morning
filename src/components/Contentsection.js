import React from 'react'
import './contentsection.css'
import Login from './Login'

function Contentsection() {
  return (
    <>
    <div className='contentsection'>
     <div className='content'>
          <h1>Hello how are you ??</h1>
          <p>When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.

Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.</p>
<button>Click Here</button>

     </div>
     <div className='login'>
          <Login/>
     </div>
    </div>
    </>
  )
}

export default Contentsection