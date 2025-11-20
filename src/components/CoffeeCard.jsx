import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const CoffeeCard = ({coffee}) => {
    const{name, price, photo, quantity, supplier, _id} = coffee;
    console.log(coffee);
    return (
        <div className='bg-[#F5F4F1] rounded-lg p-4 flex justify-between items-center'>
            <div className='flex items-center gap-0'>
                <img src={photo} alt="" />
                <div className='flex flex-col gap-2'>
                    <p className='text-lg font-semibold text-[#1B1A1A]'>Name : <span className='text-base text-[#5C5B5B] font-normal'>{name}</span></p>
                    <p className='text-lg font-semibold text-[#1B1A1A]'>Price : <span className='text-base text-[#5C5B5B] font-normal'> {price}</span></p>
                    <p className='text-lg font-semibold text-[#1B1A1A]'>Supplier : <span className='text-base text-[#5C5B5B] font-normal'>{supplier}</span></p>
                    <p className='text-lg font-semibold text-[#1B1A1A]'>Quantity : <span className='text-base text-[#5C5B5B] font-normal'>{quantity}</span></p>
                </div>
            </div>
            <div className='flex flex-col gap-4 items-center mr-8'>
                <button className='p-3 rounded-lg cursor-pointer bg-[#D2B48C] text-xl text-white'><FaEye></FaEye></button>
                <button className='p-3 rounded-lg cursor-pointer bg-[#3C393B] text-xl text-white'><MdEdit></MdEdit></button>
                <button className='p-3 rounded-lg cursor-pointer bg-[#EA4744] text-xl text-white'><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};

export default CoffeeCard;