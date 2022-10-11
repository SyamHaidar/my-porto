import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const pages = [
        { to: '/', name: 'All' },
        { to: '/Unity', name: 'Unity' },
        { to: '/Flutter', name: 'Flutter' },
        { to: '/React', name: 'React' },
    ]

    const className = ({ isActive }) => (!isActive
        ? 'w-full inline-block px-6 py-4 hover:text-brand hover:border-b border-brand'
        : 'w-full inline-block px-6 py-4 font-medium text-brand border-b border-brand'
    )

    return (
        <div className='border-b sticky top-0 bg-black mx-0 md:mx-8'>
            <div className='flex text-center text-sm -mb-px'>
                {pages.map((i, k) => (
                    <NavLink key={k} to={i.to} className={className} >
                        {i.name}
                    </NavLink>
                ))}
            </div>
        </div >
    );
}

export default Navbar;