import React from 'react'
import bar from './SearchBar.module.css'
export default function SearchBar() {
    return (
        <input className={bar.input} type="text" placeholder="Procure um champion......"/>
    )
}
