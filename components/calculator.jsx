import React, { useState } from 'react'

export default () => {
  const [result, setResult] = useState('')
  const getResult = () => {
    const operator = document.getElementById('operator').value
    const numberOne = document.getElementById('numberOne').value
    const numberTwo = document.getElementById('numberTwo').value
    if (Number(numberOne) && Number(numberTwo)) {
      switch (operator) {
        case '+':
          setResult(Number(numberOne) + Number(numberTwo))
          break
        case '-':
          setResult(Number(numberOne) - Number(numberTwo))
          break
        case '*':
          setResult(Number(numberOne) * Number(numberTwo))
          break
        case '/':
          setResult(Number(numberOne) / Number(numberTwo))
          break
        default:
          setResult(0)
      }
    } else {
      setResult('Learn to use a calculator bruh')
    }
  }

  return (
    <div>
      <div>React Calculator</div>
      <br />
      <input type="number" id="numberOne" />
      <select id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" id="numberTwo" />
      <input type="submit" value="=" onClick={getResult} />
      <input type="answer" defaultValue={result} disabled />
      <br />
      <br />
      <div>Enjoy this completely unrelated picture of big Yoshi playing a saxophone</div>
      <img src="./bigyoshi.jpg" alt="Big Yoshi in sunglasses playing a sax. Truly the next John Coltrane." />
    </div>
  )
}
