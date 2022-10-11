import Footer from "./Footer";

const Profile = () => {
    return (
        <div className='md:w-96 md:min-h-screen md:pl-8'>
            <div className='block h-full'>
                <div className='md:h-screen sticky top-0'>
                    <div className='bg-blue-400 h-96 rounded-b-[2rem] overflow-hidden flex justify-center items-end'>
                        <a href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'>
                            <img src={'/img/profile.png'} className='w-full' alt='Illustration by Icons 8 from Ouch!' />
                        </a>
                    </div>
                    <div className='block mt-6'>
                        <div className='px-6 md:px-0'>
                            <h1 className='text-3xl font-medium mb-2'>
                                Yo! I'm Syam.
                            </h1>
                            <p>
                                Interest in design and programming, currently learning <span className='text-[#61DAFB]'>React</span> + <span className='text-[#EB4432]'>Laravel</span>
                            </p>
                        </div>
                        <div className='hidden md:block md:mt-12'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;