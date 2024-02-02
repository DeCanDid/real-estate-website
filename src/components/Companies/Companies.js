import React from 'react'
import './Companies.css'
import Pro from '../../gallery/prologis.png'
import Tow from '../../gallery/tower.png'
import Equ from '../../gallery/equinix.png'
import Real from '../../gallery/realty.png'





const Companies = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <img src= {Pro} alt="" />
                <img src={Tow} alt="" />
                <img src={Equ} alt="" />
                <img src={Real}alt="" />
            </div>
        </section> 
    )
}

export default Companies