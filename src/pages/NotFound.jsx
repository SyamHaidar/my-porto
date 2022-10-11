import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='block'>
            <div className='flex justify-center items-center min-h-screen w-full text-center relative'>
                <div className='absolute h-96 w-96 border-2 rounded-full animate-pulse'></div>
                <div className='absolute h-56 w-56 border-2 rounded-full animate-ping'></div>
                <div className='relative block w-64'>
                    <h1 className='font-light text-9xl'>404</h1>
                    <h3 className='font-bold text-3xl leading-tight'>Page Not Found</h3>
                    <span className="text-sm">Sorry we couldn’t find what you were looking for.</span>
                    <div className='mt-8'>
                        <Link to={'/'} className='bg-brand30 text-brand px-6 py-2.5 rounded-full hover:bg-brand30/80'>Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;