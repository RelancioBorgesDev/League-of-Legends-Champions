import React from 'react'
import card from './Card.module.css';
import Image from 'next/image'


export default function Card() {
    return (
    <>
        <div className={card.container}>
            <div className={card.header}>
            <h2 className={card.name}>Aatrox</h2>
                <img className={card.img} src='./Aatrox.jpg'></img>
            </div>
            <div className={card.info}>
                <h4 className={card.tag}>Tipo: Lutador</h4>
                <hr className={card.divisoria}/>
                <p className={card.historia}>"Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find..."</p>
            </div>
        </div>
        
    </>
        
    )
}
