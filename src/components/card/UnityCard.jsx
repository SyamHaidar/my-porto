const UnityCard = () => {
    const data = [
        {
            title: 'Quissy - Kuis Game', date: '2021',
            page: '/Quissy', link: 'https://play.google.com/store/apps/details?id=com.shfi.quissy'
        },
        {
            title: 'Chibbo Jump', date: '2021',
            page: '', link: 'https://play.google.com/store/apps/details?id=com.shfi.chibbo'
        },
    ]
    return (
        <div className='space-y-4'>
            {data.map((i, k) => (
                <div key={k} className='flex items-center border rounded overflow-hidden'>
                    <div className='flex flex-col justify-between flex-1 self-stretch p-6' style={{ wordBreak: ' break-word' }}>
                        <div className='block mb-4'>
                            <span className='bg-brand30/90 text-white text-xs font-medium px-3 py-1.5 rounded'> Unity </span>
                            <p className='text-sm mt-3'> Game App - {i.date} </p>
                            {i.page
                                ? <a href={i.page}><h1 className='font-medium text-lg mt-1 hover:text-white hover:underline underline-offset-1'> {i.title} </h1></a>
                                : <h1 className='font-medium text-lg mt-1'> {i.title} </h1>
                            }
                        </div>
                        <div className='flex items-center mt-auto'>
                            <a href={i.link} className='text-brand text-sm hover:underline'>Play store →</a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded h-40 w-40 ml-2 -mr-16 md:mr-0 flex justify-center items-center'>
                        <img src={'/img/brand/Unity.png'} className='h-40' alt={i.title + "'s Images"} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UnityCard;