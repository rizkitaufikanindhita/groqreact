import './App.css'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState } from 'react'
import getGroqChatCompletion from './groq/groq' 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const handleInput = (e: any) => {
    setInput(e.target.value)
  }

  const generate = async () => {
    const hasil = await getGroqChatCompletion(input)
    setResult(hasil)
  }



  return (
    <>
      <div className='my-20 mx-48 py-5 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
        <div className='mb-3 font-bold'>Chat with us!</div>
        <Separator className='mb-3'/>
        <div className='px-20'>
          <textarea placeholder='Message to me' value={input} onChange={handleInput} className='w-full outline-none border px-5 rounded-md py-3'/>
        </div>
        <Button onClick={generate}>Generate!</Button>
      </div>
      <div className='my-20 mx-48 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
        <SyntaxHighlighter language='typescript' style={github} wrapLongLines={true} className='bg-white text-left'>
          {result}
        </SyntaxHighlighter>
      </div>
    </>
  )
}

export default App
