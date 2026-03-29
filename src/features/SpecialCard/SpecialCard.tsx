import React from 'react'

const SpecialCard = () => {

    const cards = [1, 2, 3]

    return (
        <div className='px-4 py-4'>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='text-2xl font-medium'>Специально для вас</h1>
                <p className='text-md text-[#BE8A60]'>Смотреть все</p>
            </div>
            {
                cards.map((item, index) => (
                    <div key={index} className='flex mb-[11px] gap-5 bg-[#FFFFFF] shadow-xl w-full rounded-[11px]'>
                        <img src="/Rectangle 60.png" alt="coffe" />
                        <div className='flex flex-col'>
                            <div className='flex gap-18 items-center'>
                                <h1 className='text-xl font-medium mt-2 w-fit'>Тяжелый Рок Кофе</h1>
                                <img className='bg-[#BE8A60] mt-2 rounded-full shadow-md p-2' src="/favorite.svg" alt="favorite" />
                            </div>
                            <div className='flex items-center gap-2'>
                                <img className='w-[15px] h-[15px]' src="Vector.svg" alt="favorite" />
                                <p className='text-[#BE8A60]'>4.9</p>
                            </div>
                        </div>
                    </div>))
            }
        </div>
    )
}

export default SpecialCard