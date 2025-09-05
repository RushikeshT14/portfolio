
import Spline from "@splinetool/react-spline";
const Hero = () => {
    return (
        <main id="Home" className="Home flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[90vh-6rem]">

            <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-[5%]" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">

                <div className="MERN relative w-full w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                    <div className=" absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                        <i className='bx bx-diamond'></i>MERN
                    </div>
                </div>


                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold traking-wider my-8">
                    RUSHIKESH
                </h1>


                <p className=" text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
                    A Full Stack Web Developer. <br />
                    I design sleek, modern websites that bring ideas to life.
                    On a journey to grow in cybersecurity and digital innovation.
                </p>

                <div className="flex gap-4 mt-12">
                    <a href="#Projects" className="HeroLink border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg  text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] ">
                        Projects <i className='bx bx-link'></i>
                    </a>

                    <a href="#" className="HeroLink pointer-events-none border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg  text-sm font-semibold tracking-wider transition-all duration-1000 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white">
                        Resume  <i class="fa-solid fa-arrow-down"></i>
                    </a>
                </div>
                <div className="SocialLink">

                    <a href="https://github.com/RushikeshT14" className="github" target="_blank" ><i class="fa-brands fa-github"></i></a>
                    <a href="http://leetcode.com/" className="leetcode" target="_blank" ><i class="fa-solid fa-code"></i></a>
                    <a href="https://www.linkedin.com/in/rushikesh-todkari/" className="linkedin" target="_blank" ><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/rushikesh_t_14/" className="instagram" target="_blank" ><i class="fa-brands fa-instagram"></i></a>

                </div>
            </div>


            <Spline className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full lg:mt-[-2%]" scene="https://prod.spline.design/uiY40MbILwTC8wLB/scene.splinecode" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" data-aos-duration="3000" />
        </main>
    )
}

export default Hero
