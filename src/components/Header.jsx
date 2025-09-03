
import "boxicons/css/boxicons.min.css";

const Header = () => {
    //For mobile Menu
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobileMenu");

        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
        } else {
            mobileMenu.classList.add("hidden");
        }
    }

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800" className="text-3xl md:text-4xl font-light m-0">
                Portfolio
            </h1>

            <nav className="z-50 hidden md:flex items-center gap-12">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                    <a href="#Home" className="text-base bg-transparent tracking-wider transition-colors duration-500 ease-in-out hover:bg-[#1a1a1a]
                     px-4 py-[10px] rounded-[10px]">HOME</a>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <a href="#About" className="text-base tracking-wider transition-colors duration-300 ease-in-out hover:bg-[#1a1a1a] px-4 py-[10px] rounded-[10px]">ABOUT</a>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                    <a href="#Projects" className="text-base tracking-wider transition-colors duration-300 ease-in-out hover:bg-[#1a1a1a] px-4 py-[10px] rounded-[10px]">PROJECTS</a>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500">
                    <a href="#Contacts" className="text-base tracking-wider transition-colors duration-300 ease-in-out hover:bg-[#1a1a1a] px-4 py-[10px] rounded-[10px]">CONTACTS</a>

                </div>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-cursor z-50">
                <i class="fa-solid fa-laptop-code"></i>
            </button>

            {/* mobile screen responsive  */}

            <button className="md:hidden text-3xl p-2 z-50 mt-2" onClick={toggleMobileMenu}>
                <i className="bx bx-menu"></i>
            </button>

            {/* mobile menu  */}

            <div id="mobileMenu" className=" hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70">
                <nav className="flex flex-col gap-6 items-center ">

                    <a href="#Home" className="text-base tracking-wider transition-colors hover:text-gray-300">HOME</a>

                    <a href="#About" className="text-base tracking-wider transition-colors hover:text-gray-300">ABOUT</a>

                    <a href="#Projects" className="text-base tracking-wider transition-colors hover:text-gray-300">PROJECTS</a>

                    <a href="#Contacts" className="text-base tracking-wider transition-colors hover:text-gray-300">CONTACTS</a>
                </nav>
            </div>


        </header>
    )
}

export default Header;