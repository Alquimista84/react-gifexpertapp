import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [caterories, setcaterories] = useState(['One Punch']);

    //const handleAdd = () => {
      //  setcaterories( [...caterories, 'HunterXHunter'] );
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcaterories={setcaterories}/>
            <hr />
            <ol>
                {
                    caterories.map( category => (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}
