import React from 'react'
import SelectOne from "../assets/borabora.jpg"
import SelectTwo from "../assets/keywest.jpg"
import SelectThree from '../assets/borabora2.jpg'
import SelectFour from "../assets/maldives.jpg"
import SelectFive from "../assets/maldives2.jpg"
import SelectSix from "../assets/maldives3.jpg"
import SelectCard from './SelectCard'
const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectCard img={SelectOne} txt = "maldives"/>
      <SelectCard img={SelectTwo} txt = "borabora"/>
      <SelectCard img={SelectThree} txt = "key weist"/>
      <SelectCard img={SelectFour} txt = "jamaica"/>
      <SelectCard img={SelectFive} txt = "antiqua"/>
      <SelectCard img={SelectSix} txt = "cozumel"/>
     
    </div>
  )
}

export default Select
