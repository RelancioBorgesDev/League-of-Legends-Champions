import React from 'react'
import header from './Header.module.css';
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from '../SearchBar/SearchBar';


export default function Header() {
    return (
        <nav className={header.nav}>
            <div className={header.logo}>
                <Link href="/" to="/">
                    <Image src="/riot-games-logo.png" alt="" width={100} height={100}/>
                </Link>
            </div>
            <div className={header.nav_bar}>
                <ul className={header.nav_bar_list}>
                    <li className={header.nav_bar_item}>
                        <Link href="/Champions" to="/Champions">
                            Champions
                        </Link>
                    </li>
                </ul>
                <SearchBar/>
            </div>
        </nav>
    )
}
