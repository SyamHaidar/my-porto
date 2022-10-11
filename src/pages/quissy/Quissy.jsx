import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";

const Quissy = () => {
    return (
        <div className='block mx-0 md:mx-8'>
            <div className='w-full max-w-4xl m-auto'>
                <div className='flex flex-col items-center min-h-screen pt-16 pb-6'>
                    <div className='flex flex-col-reverse md:flex-row items-start mb-12 md:mb-0 mx-6 md:mx-0'>
                        <div className='flex-1 space-y-16'>
                            <div className='space-y-8'>
                                <div className='space-y-4'>
                                    <h1 className='md:block hidden font-medium text-5xl leading-tight'>Quissy</h1>
                                    <div className='bg-brand30 h-1 w-full rounded'></div>
                                    <p className='text-lg'>
                                        Quissy adalah permainan kuis. Belajar sambil bermain dengan menjawab soal - soal kuis yang telah tersedia. Soal - soal kuis bersifat umum dan dapat dimainkan oleh siapa saja.
                                    </p>
                                </div>
                                <div>
                                    <h3 className='font-medium text-2xl mb-2'>Fitur</h3>
                                    <ul className='ml-2'>
                                        <li>&middot; 200+ Pertanyaan</li>
                                        <li>&middot; Peningkat Item</li>
                                        <li>&middot; High Score</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex justify-center md:justify-start items-center'>
                                <a href={'https://play.google.com/store/apps/details?id=com.shfi.quissy&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'}>
                                    <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className='h-16' alt='Get it on Google Play' />
                                </a>
                                <Link to={'/Quissy/Privacy'} className='bg-brand30 text-brand rounded px-10 py-3 ml-2 hover:bg-brand30/80'>
                                    Privacy
                                </Link>
                            </div>
                        </div>
                        <div className='w-full md:w-60 m-0 md:ml-40 mb-12 md:mb-0 flex justify-center md:justify-end'>
                            <img src={'/img/game/Quissy.png'} alt="Quissy phone" />
                        </div>
                        <div className='block md:hidden text-center w-full mb-6'>
                            <h1 className='font-medium text-6xl'>QUISSY</h1>
                            <span className='text-2xl leading-tight'>Kuis Game</span>
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

export default Quissy;