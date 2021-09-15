import React, {useState} from 'react'
import header from './Header.module.css';
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from '../SearchBar/SearchBar';
import {FaBars} from 'react-icons/fa'


export default function Header() {
    return (
        <nav className={header.nav}>
            <div className={header.logo}>
                <Link href="/" to="/">
                    <Image src="/logo.png" alt="" width={100} height={100}/>
                </Link>
            </div>
           
                <ul className={header.nav_bar_list}>
                    <li className={header.nav_bar_item}>
                        <Link href="/Champions" to="/Champions">
                            Champions
                        </Link>
                    </li>
                </ul>

        </nav>
    )
}
