import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from "/services";
import Image from "next/image";
import face from '/public/face.png';

const Header = ( ) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left block">
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
