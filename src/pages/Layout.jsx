// Components
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Layout = (props) => {
    return (
        <div className='block'>
            <div className='w-full max-w-5xl m-auto'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <Profile />
                    <div className='flex-auto py-6'>
                        <Navbar />
                        <div className='block mt-6 mx-6 md:mx-8'>
                            {props.children}
                        </div>
                        <div className='block md:hidden w-full mt-6'>
                            <div className='bg-brand30 h-px w-full rounded mb-6'></div>
                            <div className='mx-6'>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;