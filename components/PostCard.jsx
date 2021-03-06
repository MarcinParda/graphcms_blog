import React from 'react';
import Link from 'next/link';
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-black dark:bg-opacity-70 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 transition ease-in-out duration-300">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-300 text-3xl font-semibold transition ease-in-out duration-300">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            width="30px"
            height="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
            alt={post.author.name}
          />
          <p className="inline align-middle text-gray-700 dark:text-gray-100 ml-2 text-lg transition ease-in-out duration-300">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700  dark:text-gray-100 transition ease-in-out duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 dark:text-gray-100 font-normal px-4 lg:px-20 my-8 transition ease-in-out duration-300">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-green-600 dark:bg-green-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer transition ease-in-out duration-300">
            Continue reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
