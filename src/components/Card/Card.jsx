import React, { useState, useEffect } from 'react'
import card from './Card.module.css';
import api from '../../services/api'

export default function Card() {
    const [champions, setChampions] = useState([])

    useEffect(() =>{
        api.get('https://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion.json')
        .then(({data}) =>{
        setChampions(data.data);
        })
      },[])
    

    return (

    <>

    {Object.keys(champions).map((champion) => (
        <div key={champion} className={card.container}>
            <div className={card.header}>
                <h2 className={card.name}>{champions[champion].name}</h2>
                <hr className={card.divisoria}/>

                    {/* <img className={card.img} src={champions[champion].image.sprite}></img> */}
            </div>
                <div className={card.info}>
                    <h4 className={card.tag}>{champions[champion].title}</h4>
                    <hr className={card.divisoria}/>
                    <p className={card.historia}>{champions[champion].blurb}</p>
                    <h4 className={card.titulo}>Habilidades</h4>
                    <ul className={card.lista_habilidades}>
                        <li className={card.lista_habilidades_item}>Ataque: {champions[champion].info.attack}</li>
                        <li className={card.lista_habilidades_item}>Defesa: {champions[champion].info.defense} </li>
                        <li className={card.lista_habilidades_item}>Magica: {champions[champion].info.magic} </li>
                        <li className={card.lista_habilidades_item}>Dificuldade: {champions[champion].info.difficulty} </li>
                    </ul>
                </div>
        </div>
    ))}  

    </>
        
    )
}
