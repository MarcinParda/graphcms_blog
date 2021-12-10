import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from "/services";
import Image from "next/image";
import face from '/public/face.png';
import useDarkMode from "/hooks/useDarkMode";

const Header = ( ) => {

  const [categories, setCategories] = useState([]);

  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left flex">
          <Link href="/">
            <div className="cursor-pointer flex align-middle">
              <Image
                width={50}
                height={50}
                src={face}
              />
              <span className="font-bold text-4xl text-white ml-2 mt-2">Programaniak</span>
            </div>
          </Link>
          <button
            className="ml-2 mt-3 w-16 h-8 bg-gray-100 dark:bg-gray-900 rounded-full relative border border-gray-400 dark:border-gray-600 box-content transition ease-in-out duration-300"
            onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
          >
            <span className="mx-1">🌙</span>
            <span className="mx-1">☀</span>️
            <div className={`absolute rounded-full w-6 h-6 bg-gray-400 dark:bg-gray-600 top-1 transition ease-in-out duration-300  ${colorTheme === 'dark' ? "translate-x-1.5" : "translate-x-8" }`}>
              <div className="w-5 h-5 bg-gray-100 dark:bg-gray-900 rounded-full ml-0.5 mt-0.5 transition ease-in-out duration-300" />
            </div>
          </button>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
