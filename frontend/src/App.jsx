import { Button } from '@heroui/react';
import { useState } from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { ThemeProvider } from './context/ThemeContext';
import { WallpaperProvider } from './context/WallpaperContext';
import {useAuth} from "@clerk/react";
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import { Navigate, Route, Routes } from 'react-router';

function App() {
  // const [count, setCount] = useState(0)
  const {isSignedIn, isLoaded} = useAuth();

  if(!isLoaded)return <p>Loading...</p>


  return (
    <ThemeProvider>
    <WallpaperProvider>
     <Routes>
      <Route path="/" element ={isSignedIn ? <ChatPage />:<Navigate to={"/auth"} replace />}  />
      <Route path="/auth" element ={!isSignedIn ? <AuthPage />:<Navigate to={"/"} replace />} />

      
     </Routes>
    </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
