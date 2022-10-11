import { Link } from 'react-router-dom';

// Components
import Footer from '../../components/Footer';

const QuissyPrivacy = () => {
    return (
        <div className='block mx-0 md:mx-8'>
            <div className='w-full max-w-4xl m-auto'>
                <div className='min-h-screen pb-6'>
                    <div>
                        <Link to={'/Quissy'}>
                            <h1 className='font-medium text-3xl leading-tight py-4 mx-6 md:mx-0'>Quissy</h1>
                        </Link>
                        <div className='bg-brand30 h-px w-full rounded'></div>
                    </div>
                    <div className='space-y-6 my-6 mx-6 md:mx-0'>
                        <div>
                            <h1 className='font-semibold text-4xl mb-2'>PRIVACY POLICY</h1>
                            <p className='text-sm leading-6'>
                                Syamhfi built the Quissy app as a Free app. This SERVICE is provided by SyamHFi at no cost and is intended for use as is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Quissy unless otherwise defined in this Privacy Policy.
                            </p>
                        </div>
                        <div>
                            <h1 className='font-semibold text-2xl mb-2'>Information Collection and Use</h1>
                            <p className='text-sm leading-6'>
                                For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way. The app does use Third-Party services that may collect information used to identify you. Link to privacy policy of third party service providers used by the app Google Play Service.
                            </p>
                        </div>
                        <div>
                            <h1 className='font-semibold text-2xl mb-2'>Advertisement</h1>
                            <p className='text-sm leading-6'>
                                Our free applications use advertising currently provided by Admob and anonymous statistical information is reported to them so they can see whether their adverts are effective.
                            </p>
                        </div>
                        <div>
                            <h1 className='font-semibold text-2xl mb-2'>Contact Us</h1>
                            <p className='text-sm leading-6'>
                                If you have any questions or suggestions about my Privacy Policy. You can contact us at syamh.code@gmail.com.
                            </p>
                        </div>
                    </div>
                    <div className='w-full mt-auto'>
                        <div className='bg-brand30 h-px w-full rounded mb-6'></div>
                        <div className='mx-6 md:mx-0'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuissyPrivacy;