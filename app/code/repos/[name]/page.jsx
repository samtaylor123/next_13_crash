import React from 'react'
import { Suspense } from 'react';
import Link from "next/link"
import Repo from "@/app/components/Repo"
import RepoDirs from '@/app/components/RepoDirs';

// params: {name} means that the value comes from the url
const ReposPage = ({params: {name}}) => {
  return (
    <div className='card'>
        <Link href="/code/repos" className='btn btn-back'>Back to Repositories</Link>

        {/* don't want to hold up the whole page for one request so suspense boundaries make it easier */}
        <Suspense fallback={<div>Loading repo...</div>}>
            <Repo name = {name} />
        </Suspense>
        
        <Suspense fallback={<div>Loading repo...</div>}>
            <RepoDirs name = {name}/>
        </Suspense>
    </div>
  );
};

export default ReposPage