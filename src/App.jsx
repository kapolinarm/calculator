/* eslint no-eval: 0*/

import React, { useState } from 'react';
// import words from 'lodash.words';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import Numbers from './components/Numbers';
import './App.css';

const App = () => {

    const [stack, setStack] = useState("")

// Esta parte es para cuando no quieres que se vean las operaciones que realizas si no que se vea solo los numeros 
//  const items = words(stack, /[^-^+^*^/]+/g)

//  const value = items.length > 0 ? items[items.length-1]: "0";
    
    const value = stack.length > 0 ? stack : "0";

//    console.log("Renderización de App", value)

    const isOperator = (char) => {
        return ['+','-','*','/'].includes(char)
    }

    return (
    <main className='react-calculator'>
        <Result value={value} />
        <Numbers onclickNumber={number => {
            // console.log("Click en el numero:", number)
            setStack(`${stack}${number}`)
        }} />
        <Functions 
            onContentClear={() =>{
                // console.log("ContentClear")
                setStack('')
            }}
            onDelete={() =>{ 
                if (stack.length > 0) {
                    const newStack = stack.substring(0,stack.length - 1)
                    // console.log("DeleteContent", newStack)
                    setStack(newStack)
                }
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                // console.log("Operation:", operation)
                if (stack.length > 0) {
                    const lastChar = stack[stack.length -1]
                    if (!isOperator(lastChar)) {
                        setStack(`${stack}${operation}`)
                    } else {
                        console.log("No puedes agregar varios operadores consecutivos")
                    }
                } else {
                    console.log("No puedes comenzar con un operador")
                }
            }} 
            onClickEqual={equal => {
                // console.log("Equal:", equal)
                setStack(eval(stack).toString())
            }}
        />
    </main>)
}

export default App;

