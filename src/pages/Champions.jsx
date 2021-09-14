import React, {useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import championCard from '../styles/ChampionCard.module.css'


export default function Champions() {
   
    return (
        <>
        <Header/>
            <div className={championCard.content}>
                <Card className={championCard.item}/>
            </div>
            
        </>
    )
}
