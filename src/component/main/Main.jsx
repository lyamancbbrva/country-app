import React, { useContext, useState } from "react";
import RandomCard from "./RandomCard";
import { cntx } from "../../context/DataContext";
import Card from "./Card";

function Main() {
    const { data, likedCountry, setLikedCountry } = useContext(cntx);
    const [search, setSearch] = useState("");
    const [searchSt, setSearchSt] = useState(false);
    const [count, setCount] = useState(20);
    const [x, setX] = useState(0);

    function like(name, capital, continents, flags, area, cca3, population) {
        let obj = { name, capital, continents, flags, area, cca3, population };

        setLikedCountry([...likedCountry, obj]);
        
        console.log(likedCountry);
    }

    return (
        <>
            <main className='min-h-[70vh] wrapper mx-auto lg:min-h-[80vh]'>
                <h1 className='text-[2.2rem] font-bold text-center pt-[30px] lg:text-[2.7em]'>
                    Ölkələrə xoş gəlmisoz!
                </h1>
                <h1 className='text-[2.2rem] font-bold text-center text-[#5A5DDC] lg:text-[2.7em]'>
                    Buyurun keçin baxın
                </h1>
                <p className='text-[#4B5563] p-[10px] text-[1.1em] leading-[1.65rem] text-center'>
                    You can search all countries and find detailed information
                    about them!
                </p>
                <div className='text-center m-[10px]'>
                    <button
                        onClick={() => setSearchSt(!searchSt)}
                        className='rounded-[7px] py-[10px] w-[150px] bg-[#5A5DDC] text-white font-medium text-[1.1em] mx-[5px]'
                    >
                        Search!
                    </button>
                    <button className='rounded-[7px] py-[10px] w-[150px] border-[1px] border-[#000] font-medium text-[1.1em] mx-[5px]'>
                        keç bax
                    </button>
                </div>
                <div
                    className={` ${
                        searchSt ? "flex" : "hidden"
                    } items-center justify-center`}
                >
                    <div className='flex rounded-full bg-[#fff] px-2 w-full max-w-[70%] border-[1px] border-[#ccc] my-[20px]'>
                        <button className='self-center flex p-1 cursor-pointer bg-[#fff]'>
                            <svg
                                width='30px'
                                stroke='#000'
                                height='30px'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g
                                    id='SVGRepo_bgCarrier'
                                    strokeWidth='0'
                                    stroke='#000'
                                />

                                <g
                                    id='SVGRepo_tracerCarrier'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    stroke='#000'
                                />

                                <g id='SVGRepo_iconCarrier'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z'
                                        stroke='#000'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z'
                                        stroke='#000'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z'
                                        fill='#000'
                                    />
                                </g>
                            </svg>
                        </button>
                        <input
                            onInput={(e) => setSearch(e.target.value)}
                            type='text'
                            className='w-full bg-[#fff] flex bg-transparent pl-2  outline-0'
                            placeholder='Search...'
                        />
                        <button
                            type='submit'
                            className='relative p-2 bg-[#fff] rounded-full'
                        >
                            <svg
                                width='30px'
                                height='30px'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <g id='SVGRepo_bgCarrier' strokeWidth='0' />

                                <g
                                    id='SVGRepo_tracerCarrier'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />

                                <g id='SVGRepo_iconCarrier'>
                                    <path
                                        d='M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                                        stroke='#999'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                {searchSt ? "" : <RandomCard data={data} />}

                <div className='md:flex justify-center items-center wrapper flex-wrap py-[30px] my-[30px]'>
                    {data ? (
                        data
                            .filter((item) => {
                                return item.name.common
                                    .toLocaleLowerCase()
                                    .startsWith(search?.toLocaleLowerCase());
                            })
                            .slice(x, count)
                            .map((item, i) => {
                                return <Card like={like} {...item} key={i} />;
                            })
                    ) : (
                        <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600'></div>
                    )}
                </div>
                <div
                    aria-label='Pagination'
                    className='flex justify-center rounded-md shadow-sm pb-[20px] '
                >
                    <button
                        onClick={() => {
                            if (count <= data.length) {
                                setX(0);
                                setCount(20);
                            }
                        }}
                        type='button'
                        className='inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md focus:bg-violet-600 focus:text-white'
                    >
                        <span className='sr-only'>Previous</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                            className='w-5 h-5'
                        >
                            <path
                                fillRule='evenodd'
                                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(40);
                                setX(20);
                            }
                        }}
                        type='button'
                        aria-current='page'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-600 dark:text-gray-50 dark:border-gray-300'
                    >
                        1
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(60);
                                setX(40);
                            }
                        }}
                        type='button'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300'
                    >
                        2
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(80);
                                setX(60);
                            }
                        }}
                        type='button'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300'
                    >
                        3
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(100);
                                setX(80);
                            }
                        }}
                        type='button'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300'
                    >
                        4
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(120);
                                setX(100);
                            }
                        }}
                        type='button'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300'
                    >
                        5
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(140);
                                setX(120);
                            }
                        }}
                        type='button'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300'
                    >
                        6
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(160);
                                setX(140);
                            }
                        }}
                        type='button'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300'
                    >
                        7
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(180);
                                setX(160);
                            }
                        }}
                        type='button'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300'
                    >
                        8
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(count + 20);
                                setX(count - 20);
                            }
                        }}
                        type='button'
                        className='focus:bg-violet-600 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300'
                    >
                        9
                    </button>
                    <button
                        onClick={() => {
                            if (count < data.length) {
                                setCount(count + 20);
                                setX(count - 20);
                            }
                        }}
                        type='button'
                        className='inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-300'
                    >
                        <span className='sr-only'>Next</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                            className='w-5 h-5'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </button>
                </div>
            </main>
        </>
    );
}

export default Main;
