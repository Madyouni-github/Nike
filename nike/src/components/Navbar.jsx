import Nikelogo from '../assets/logo.png';
import MagnifyingGlass from '../assets/magnifying glass.png';
import cart from '../assets/cart.png';


function Navbar() {
    const navbarMenu =[
        {
            name: 'Men',
            link: '#'
        },
        {
            name: 'Women',
            link: '#'
        },
        {
            name: 'Kids',
            link: '#'
        },
        {
            name: 'Customize',
            link: '#'
        },
        {
            name: 'Sale',
            link: '#'
        },
    ]

  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <a href="/">
                <img src={Nikelogo} alt="Nike Logo" />
            </a>
        </div>
        <div className="navbar__menu">
            {navbarMenu.map((menu, index) => (
                <a href={menu.link} key={index} className={`${index ==0 ? 'active' : ''}`}>
                    {menu.name}
                </a>
            ))}
        </div>
        <div className="navbar__search navbar-one">
            <img src={MagnifyingGlass} alt="Magnifying Glass" />
            <input type='text' />
        </div>
        <div className="navbar__cart navrbar-one">
            <img src={cart} alt="Cart" />
        </div>
    </div>
  )
}

export default Navbar