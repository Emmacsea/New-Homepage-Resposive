import {useState} from "react";
import logo from "../assets/assets/images/logo.svg";
import menubarz from "../assets/assets/images/icon-menu.svg";
import menuclose from "../assets/assets/images/icon-menu-close.svg";
import desktopweb from "../assets/assets/images/image-web-3-desktop.jpg";
import mobileweb from "../assets/assets/images/image-web-3-mobile.jpg";
import laptop from "../assets/assets/images/image-top-laptops.jpg";
import retro from "../assets/assets/images/image-retro-pcs.jpg";
import gaming from "../assets/assets/images/image-gaming-growth.jpg";


export const Newhomepage = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className="bg-neutral-offwhite md:h-screen h-full md:px-28 px-3">
            <div className="w-full flex flex-col justify-center items-center ">
                <header className="flex justify-between itemms-center w-full mt-7">
                    <div><img className="md:w-full w-11" src={logo} alt="" /></div>
                    <button type="click" onClick={handleMenu} className="md:hidden block">
                        <img src={menu ? menuclose : menubarz} alt="" />
                    </button>
                    {menu && (
                        <div className="bg-neutral-offwhite fixed inset-0 z-40 flex flex-col space-y-6 p-7 h-screen place-self-end w-2/3">
                            <button type="click" onClick={handleMenu} className="self-end">
                        <img src={menuclose} alt="" />
                    </button>

                    <ul className="flex flex-col space-y-4 pt-14">
                        <li className="mobile-menu"><a href="">Home</a></li>
                        <li className="mobile-menu"><a href="">New</a></li>
                        <li className="mobile-menu"><a href="">Popular</a></li>
                        <li className="mobile-menu"><a href="">Trending</a></li>
                        <li className="mobile-menu"><a href="">Categories</a></li>
                    </ul>
                    </div>
                        
                    )}
                    <ul className="hidden md:flex space-x-6 items-center">
                        <li className="menu"><a href="">Home</a></li>
                        <li className="menu"><a href="">New</a></li>
                        <li className="menu"><a href="">Popular</a></li>
                        <li className="menu"><a href="">Trending</a></li>
                        <li className="menu"><a href="">Categories</a></li>
                    </ul>
                    
                </header>

                <main className="w-full mt-8 ">
                    <section className="flex md:flex-row flex-col md:space-x-5 md:items-start h-80 md:mb-0 mb-96">
                        <div className="flex flex-col md:space-y-1 md:w-2/3 h-full w-full">
                            <div><img className="h-48 w-full hidden md:block " src={desktopweb} alt="" /></div>
                            <div><img className="h-48 w-full md:hidden" src={mobileweb} alt="" /></div>
                            <div className="flex md:flex-row flex-col space-y-3 md:space-x-4 items-start w-full">
                                <h3 className="text-neutral-vdarkblue md:text-4xl text-5xl font-bold capitalize md:mt-0 mt-3 break-normal ">The bright future of web 3.0?</h3>
                                <div className="md:space-y-0 space-y-3">
                                    <p className="text-neutral-dgrayishblue text-base font-semilight break-words">
                                        We dive into the next evolution of the web that 
                                        claims to put the power of the platforms back 
                                        into the hands of the people. but is it 
                                        really fulfilling its promise?
                                    </p>
                                    <button type="button" className="text-neutral-offwhite text-sm tracking-widest font-semilight uppercase bg-primary-softred py-2 px-5 md:mt-1 hover:bg-neutral-vdarkblue">
                                        Read more
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="bg-neutral-vdarkblue md:h-full h-auto py-3 px-5 md:w-1/3 w-full md:mt-0 mt-60">
                            <h2 className="text-primary-softorange text-2xl font-bold">New</h2>
                            <div className="">
                                <div className="left-list">
                                    <h4 className="left-h">Hydrogen VS Electric Cars</h4>
                                    <p className="left-p">
                                        Will hydrogen-fueled cars ever catch up to EVs?
                                    </p>
                                </div>

                                <div className="left-list">
                                    <h4 className="left-h">The Downsides of AI Artistry</h4>
                                    <p className="left-p">
                                        What are the possible adverse effects of on-demand AI image generation?
                                    </p>
                                </div>

                                <div className="flex flex-col border-b-0 pb-4 pt-2">
                                    <h4 className="left-h">Is VC Funding Drying Up?</h4>
                                    <p className="left-p">
                                        Private funding by VC firms is down 50% YOY. 
                                        We take a look at what that means.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>

                <footer className="flex md:flex-row flex-col justify-between md:items-start md:w-full md:mt-14 md:space-y-0 space-y-6 w-full md:pt-0 md:pb-0 pt-64 pb-10">
                    <div className="flex space-x-3 items-center">
                        <div><img className="md:w-20 w-32 h-28" src={retro} alt="" /></div>
                        <div className="flex flex-col space-y-1">
                            <h1 className="foot-num">01</h1>
                            <p className="foot-p">Reviving Retro PCs</p>
                            <p className="foot-det">
                                What happens when old PCs are given modern upgrades?
                            </p>
                        </div>
                    </div>

                    <div className="flex space-x-3 items-center">
                        <div><img className="md:w-20 w-24 h-28" src={laptop} alt="" /></div>
                        <div className="flex flex-col space-y-1">
                            <h1 className="foot-num">02</h1>
                            <p className="foot-p">Top 10 Laptops of 2022</p>
                            <p className="foot-det">
                                Our best picks for various needs and budgets.
                            </p>
                        </div>
                    </div>

                    <div className="flex space-x-3 items-center ">
                        <div><img className="md:w-20 w-28 h-28" src={gaming} alt="" /></div>
                        <div className="flex flex-col space-y-1">
                            <h1 className="foot-num">03</h1>
                            <p className="foot-p">The Growth of Gaming</p>
                            <p className="foot-det">
                                How the pandemic has sparked fresh opportunities.
                            </p>
                        </div>
                    </div>

                </footer>

            </div>

        </div>
    )
}
