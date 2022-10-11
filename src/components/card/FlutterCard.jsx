const FlutterCard = () => {
    const data = [
        {
            title: 'Watch Ecommerce UI', type: 'Slicing UI', date: '2021',
            link: 'https://github.com/SyamHaidar/Flutter-Watch-E-commerce-UI'
        },
        {
            title: 'Furniture Catalogue UI', type: 'Slicing UI', date: '2021',
            link: 'https://github.com/SyamHaidar/Flutter-Furniture-Catalogue-UI'
        },
    ]

    return (
        <div className='space-y-4'>
            {data.map((i, k) => (
                <div key={k} className='flex items-center border rounded overflow-hidden'>
                    <div className='flex flex-col justify-between flex-1 self-stretch p-6' style={{ wordBreak: ' break-word' }}>
                        <div className='block mb-4'>
                            <span className='bg-brand30/90 text-[#54c5f8] text-xs font-medium px-3 py-1.5 rounded'> Flutter </span>
                            <p className='text-sm mt-3'> {i.type} - {i.date} </p>
                            <h1 className='font-medium text-lg mt-1'> {i.title} </h1>
                        </div>
                        <div className='flex items-center mt-auto'>
                            <a href={i.link} className='text-brand text-sm hover:underline'>Source code →</a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded h-40 w-40 ml-2 -mr-16 md:mr-0 flex justify-center items-center'>
                        <img src={'/img/brand/Flutter.png'} className='h-24' alt={i.title + "'s Images"} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FlutterCard;