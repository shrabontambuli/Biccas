

const Navber = () => {
    return (
        <div className="bg2">
            <div className="navbar container mx-auto pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#42ac83bd] rounded-box w-52 text-white">
                            <li><a to='#' className="text-black">Home</a></li>
                            <li><a to='#'>Product</a></li>
                            <li><a to='#'>FAQ</a></li>
                            <li><a to='#'>Blog</a></li>
                            <li><a to='#'>About Us</a></li>
                        </ul>
                    </div>
                    <a className="text-3xl font-semibold text1">Biccas</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#A6A6A6]">
                        <li><a to='#' className="text-black">Home</a></li>
                        <li><a to='#'>Product</a></li>
                        <li><a to='#'>FAQ</a></li>
                        <li><a to='#'>Blog</a></li>
                        <li><a to='#'>About Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="text-[#A6A6A6]">Login</a>
                    <a className="btn bg text-white rounded-2xl ms-4">Sing up</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;