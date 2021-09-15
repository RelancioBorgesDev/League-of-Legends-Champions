import React from 'react'
import bar from './SearchBar.module.css'
import {FiSearch} from 'react-icons/fi'
export default function SearchBar() {
    return (
        <>
            <input className={bar.input} type="text" placeholder="Procure um champion......"/>
        </>
    )
}
