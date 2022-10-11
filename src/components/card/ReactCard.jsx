const ReactCard = () => {
    const data = [
        { title: 'React Simple Todo', link: 'https://syamh-react.web.app' },
    ]
    return (
        <div className='space-y-4'>
            {data.map((i, k) => (
                <div key={k} className='flex items-center border rounded overflow-hidden'>
                    <div className='flex flex-col justify-between flex-1 self-stretch p-6' style={{ wordBreak: ' break-word' }}>
                        <div className='block mb-4'>
                            <span className='bg-brand30/90 text-[#61DAFB] text-xs font-medium px-3 py-1.5 rounded'> React </span>
                            <p className='text-sm mt-3'> Sample </p>
                            <h1 className='font-medium text-lg mt-1'> {i.title} </h1>
                        </div>
                        <div className='flex items-center mt-auto'>
                            <a href={i.link} className='text-brand text-sm hover:underline'>View →</a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded h-40 w-40 ml-2 -mr-16 md:mr-0 flex justify-center items-center'>
                        <img src={'/img/brand/React.png'} className='h-24' alt={i.title + "'s Images"} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReactCard;