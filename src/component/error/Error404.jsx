import React from "react";
import { Link } from "react-router-dom";

function Error404() {
    return (
        <main className='flex items-center min-h-[80vh] p-16'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl'>
                        <span className='sr-only'>Error</span>404
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl'>
                        Ağzına gələni yazma!
                    </p>
                    <p className='mt-4 mb-8 '>DE gələ 404</p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-violet-600 text-white'
                    >
                        Rədd ol home page"ə
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Error404;
