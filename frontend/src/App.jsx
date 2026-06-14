import { Button } from '@heroui/react';
import { useState } from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { ThemeProvider } from './context/ThemeContext';
import { WallpaperProvider } from './context/WallpaperContext';
import {useAuth} from "@clerk/react";
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import { Navigate, Route, Routes } from 'react-router';
import PageLoader from './components/PageLoader';
import {axiosInstance} from "./lib/axios"
import { useEffect } from 'react';
import { useAuthStore } from './store/useAuthStore';
import { Toaster } from 'react-hot-toast';



function App() {
  // const [count, setCount] = useState(0)
  const {isSignedIn, isLoaded} = useAuth();

 const clearAuth = useAuthStore((state) => state.clearAuth);
 const checkAuth = useAuthStore((state) => state.checkAuth);
 const isCheckingAuth = useAuthStore((state) => state.authUser);

useEffect(()=>{
  if(!isLoaded) return;
  if(isSignedIn){
    checkAuth();
  }else{
    clearAuth();
  }
},[checkAuth,clearAuth,isSignedIn,isLoaded])

  if(!isLoaded || (isSignedIn && isCheckingAuth))return <PageLoader />


  return (
    <ThemeProvider>
    <WallpaperProvider>
     <Routes>
      <Route path="/" element ={isSignedIn ? <ChatPage />:<Navigate to={"/auth"} replace />}  />
      <Route path="/auth" element ={!isSignedIn ? <AuthPage />:<Navigate to={"/"} replace />} />

      
     </Routes>
     <Toaster />
    </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App
