import React from 'react'
import Link from "next/link"

async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`https://api.github.com/repos/samtaylor123/${name}/contents`, {
            
        // if you have data that changes often then add this \/ \/
        next: {
            revalidate: 60
        }
    });
    const contents = await response.json();
    return contents;
}

// if something calls an async function then that something needs to be async as well
const RepoDirs = async ({name}) => {

    // const dirs = await fetchRepoContents(name);
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir');
    


    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        {/* <Link href={`/repos/${name}/${dir.path}`}> */}
                        <Link href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RepoDirs