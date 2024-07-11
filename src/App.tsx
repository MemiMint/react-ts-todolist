import { useEffect, useState } from 'react'
import { Box, Typography, Button } from "@mui/joy/"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((prevState) => prevState + 1);
    }, 2000)
  }, [count]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
      <Typography level="h1">
        React Typescript App
      </Typography>
      <Typography level="body-sm">
        A simple todo list in react/typescript
      </Typography>
      <Button onClick={() => setCount((prevState) => prevState + 1)} >Count is: { count }</Button>
    </Box>
  )
}

export default App
