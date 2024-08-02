import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sidebar({ status, setStatus }) {
    return (
        <aside
            className={`w-full p-6 ${
                status ? "flex" : "hidden"
            } bg-white w-[100vw] h-screen fixed top-0`}
        >
            <FaXmark
                onClick={() => setStatus(false)}
                className='absolute top-[20px] right-[40px] text-[1.8em]'
            />
            <nav className='space-y-8 text-[1.6em]'>
                <div className='space-y-2'>
                    <div className='flex flex-col space-y-1'>
                        <Link
                            rel='noopener noreferrer'
                            to='/africa'
                            onClick={() => setStatus(false)}
                        >
                            Africa
                        </Link>

                        <Link
                            rel='noopener noreferrer'
                            to='/europe'
                            onClick={() => setStatus(false)}
                        >
                            Europe
                        </Link>
                        <Link
                            rel='noopener noreferrer'
                            to='/oceania'
                            onClick={() => setStatus(false)}
                        >
                            Oceania
                        </Link>
                        <Link
                            rel='noopener noreferrer'
                            to='/asia'
                            onClick={() => setStatus(false)}
                        >
                            Asia
                        </Link>
                        <Link
                            rel='noopener noreferrer'
                            to='/americas'
                            onClick={() => setStatus(false)}
                        >
                            Americas
                        </Link>
                        <Link
                            rel='noopener noreferrer'
                            href='/antarctic'
                            onClick={() => setStatus(false)}
                        >
                            Antarctic
                        </Link>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;
