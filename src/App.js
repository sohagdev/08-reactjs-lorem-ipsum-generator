import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [paragraph, setParagraph] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setParagraph(data.slice(0, amount))
  }

  return (
    <>
      <section className='section-center'>
        <h3>Tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label for='amount'>paragraph:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className='btn'> Generate</button>
        </form>
        <article className='lorem-text'>
          {paragraph.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </article>
      </section>
    </>
  )
}

export default App
