import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const textStyle = "text-base font-normal text-white hover:text-[#d434fe] transition-colors"
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='relative flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-linear-to-b from-[#150E28] to-[#1A0B2E] border-b border-[#ffffff20]'>
            
            {/* Logo */}
            <div className="logo text-2xl md:text-3xl lg:text-4xl font-bold text-white z-20" style={{ fontFamily: "ClashDisplay" }}>
                get<span className='text-[#d434fe]'>linked</span>
            </div>
            
            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8" style={{fontFamily: "Montserrat"}}>
                <a href="#" className={textStyle}>Timeline</a>
                <a href="#" className={textStyle}>Overview</a>
                <a href="#" className={textStyle}>FAQs</a>
                <a href="#" className={textStyle}>Contact</a>
                <button className="text-white bg-linear-to-r from-[#fe34b9] to-[#903aff] border-transparent px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity">
                    Register
                </button>
            </div>
            
            {/* Mobile Menu Button - visible only on mobile */}
            <button 
                onClick={toggleMenu}
                className="md:hidden text-white text-2xl z-20 focus:outline-none"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 md:hidden"
                        onClick={toggleMenu}
                    />
                    
                    {/* Menu Panel */}
                    <div className="fixed top-0 right-0 h-full w-64 bg-[#1A0B2E] border-l border-[#D434FE] z-15 md:hidden animate-slide-in">
                        <div className="flex flex-col gap-6 p-8 mt-16" style={{fontFamily: "Montserrat"}}>
                            <a href="#" className={textStyle} onClick={toggleMenu}>Timeline</a>
                            <a href="#" className={textStyle} onClick={toggleMenu}>Overview</a>
                            <a href="#" className={textStyle} onClick={toggleMenu}>FAQs</a>
                            <a href="#" className={textStyle} onClick={toggleMenu}>Contact</a>
                            <button 
                                className="text-white bg-linear-to-r from-[#fe34b9] to-[#903aff] border-transparent px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity w-fit"
                                onClick={toggleMenu}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </>
            )}
        </nav>
    )
}