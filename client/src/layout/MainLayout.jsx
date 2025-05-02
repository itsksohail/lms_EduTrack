import Navbar from '@/components/Navbar'
import { Outlet } from "react-router-dom";
import React from 'react'
import { Toaster } from '@/components/ui/sonner';

export const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Outlet/>
            <Toaster richColors position="bottom-right" />
        </div>
    </div>
  )
}

export default MainLayout;