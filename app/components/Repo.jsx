import React from 'react'
import Link from "next/link"
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa";

async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/samtaylor123/${name}`, {
            
        // if you have data that changes often then add this
        next: {
            revalidate: 60
        }
    });
 
    const repo = await response.json();
    return repo;
}

// if something calls an async function then that something needs to be async as well
const Repo = async ({ name }) => {
    
    const repo = await fetchRepo(name);
    return (
        <>
            <h2>{ repo.name }</h2>
            <p>{repo.description}</p>
            <div className='card-stats'>
                <div className='card-stat'>
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>
                
                <div className='card-stat'>
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                
                <div className='card-stat'>
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    );
};

export default Repo