export default function Nav() {
    const textStyle = "text-base font-normal text-white hover:text-[#d434fe] transition-colors"
  return (
    <nav className='flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-linear-to-b from-[#150E28] to-[#1A0B2E] border-b border-[#ffffff20]'>
        <div className="logo text-2xl md:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "ClashDisplay" }}>
            get<span className='text-[#d434fe]'>linked</span>
        </div>
        <div className="links flex items-center gap-6 lg:gap-8" style={{fontFamily: "Montserrat"}}>
            <a href="#" className={textStyle}>Timeline</a>
            <a href="#" className={textStyle}>Overview</a>
            <a href="#" className={textStyle}>FAQs</a>
            <a href="#" className={textStyle}>Contact</a>
            <button className="text-white bg-linear-to-r from-[#fe34b9] to-[#903aff] border-transparent px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity">
                Register
            </button>
        </div>
    </nav>
  )
}