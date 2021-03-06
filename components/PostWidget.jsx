import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from "/services";
import moment from "moment";

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    }
  }, [slug]);

  return (
    <div className="bg-white dark:bg-black dark:bg-opacity-70 shadow-lg rounded-lg p-8 mb-8 transition ease-in-out duration-300">
      <h3 className="text-xl mb-8 font-semibold dark:text-gray-100 border-b pb-4 transition ease-in-out duration-300">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map(post => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4 dark:text-gray-100 transition ease-in-out duration-300">
            <p className="text-gray-500 font-xs dark:text-gray-100 transition ease-in-out duration-300">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
