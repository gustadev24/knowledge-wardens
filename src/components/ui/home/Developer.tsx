'use client';

import { API_GITHUB } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

type DeveloperProps = {
  username: string;
  trueName?: string;
  shortDescription: string;
};

export function Developer({ username, trueName, shortDescription }: DeveloperProps) {
  const [imgUser, setImgUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_GITHUB}/users/${username}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 404) {
          // TODO: Set general user image
          setLoading(false);
          return;
        }
        setImgUser(response.avatar_url);
        setLoading(false);
      });
  }, [username]);

  return (
    <article className="p-4 w-60">
      <a className="flex flex-col items-center gap-3" href={`https://github.com/${username}`}>
        <div className="relative w-44 h-44 rounded-full overflow-hidden flex-shrink-0">
          {
            loading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full" />
          }

          {!loading && imgUser && (
            <Image
              className="object-cover"
              fill
              sizes="(max-width: 600px) 500px"
              priority={false}
              src={imgUser}
              alt={`${username}'s avatar`}
            />
          )}
          {
            !loading && !imgUser && (
              <div className="absolute inset-0 bg-gray-200 rounded-full flex items-center justify-center">
                <FaUser size="100%" className="text-white p-10" />
              </div>
            )
          }
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <h5 className="text-xl font-semibold text-center">{trueName || username}</h5>
          <p className="text-center">{shortDescription}</p>
        </div>
      </a>

    </article>
  );
}
