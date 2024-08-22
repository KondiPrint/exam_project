import React from 'react';
import Link from 'next/link';

export default function GetEventById({ data }) {
  const bodyContent = data.content;
  return (
    <>
      <article className='p-2'>
        {data && (
          <div
            dangerouslySetInnerHTML={{ __html: bodyContent }}
            className='pb-20 pt-10 space-y-5 leading-7 text-secondary [&>ul]:bg-grey-bg [&>ul]:p-4 sm:[&>ul]:px-10 [&>ul]:text-center [&>ul]:font-bold [&>ul]:rounded-md [&>ul]:text-primary [&>ul]:text-lg [&>ul]:w-fit [&>ul]:mx-auto [&>ol]:bg-grey-bg [&>ol]:p-4 sm:[&>ol]:px-10 [&>ol]:text-center [&>ol]:font-bold [&>ol]:rounded-md [&>ol]:text-primary [&>ol]:text-lg [&>ol]:w-fit [&>ol]:mx-auto 2xl:[&>p]:px-32 [&>table]:mx-auto [&>table]:border-spacing-4 [&>table]:border-2 [&>table>tbody>tr>td]:border-2 [&>table>tbody>tr>td]:px-4'
          />
        )}
        <Link className='btn btn-primary text-white' href={'/events'}>
          Tilbage til events
        </Link>
      </article>
    </>
  );
}
