    export function Nav() {
        return (
            <>
            <div className="flex flex-col justify-center sticky top-0 z-10 bg-opacity-75 backdrop-blur-md ">
                <nav className="flex mx-20">
                    <ul className="flex text-white text-1xl p-6 justify-between w-full">
                        <li>
                            <a className="duration-300 hover:text-light-blue" href="#">Home</a>
                        </li>
                        <li>
                            <a className="duration-300 hover:text-light-blue" href="#">About</a>
                        </li>
                        <li>
                            <a className="duration-300 hover:text-light-blue" href="#">Contact</a>
                        </li>
                        <li>
                            <a className="duration-300 hover:text-light-blue" href="#">Skills</a>
                        </li>
                        <li>
                            <a className="duration-300 hover:text-light-blue" href="#">Projects</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <hr className="w-full"></hr>
                </div>    
            </div> 
            </>
        );
    }
