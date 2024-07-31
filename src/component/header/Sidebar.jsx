import React from "react";
import { FaXmark } from "react-icons/fa6";

function Sidebar({ status, setStatus }) {
    return (
        <aside
            className={`w-full p-6 sm:w-60 ${
                status ? "flex" : "hidden"
            } dark:bg-gray-50 dark:text-gray-800 h-screen fixed top-0`}
        >
            <FaXmark
            onClick={()=> setStatus(false)}
            className='absolute top-[20px] right-[40px] text-[1.8em]' />
            <nav className='space-y-8 text-[1.6em]'>
                <div className='space-y-2'>
                    <div className='flex flex-col space-y-1'>
                        <a rel='noopener noreferrer' href='#'>
                            Africa
                        </a>
                        <a rel='noopener noreferrer' href='#'>
                            Europe
                        </a>
                        <a rel='noopener noreferrer' href='#'>
                            Oceania
                        </a>
                        <a rel='noopener noreferrer' href='#'>
                            Asia
                        </a>
                        <a rel='noopener noreferrer' href='#'>
                            Americas
                        </a>
                        <a rel='noopener noreferrer' href='#'>
                            Antarctic
                        </a>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;
