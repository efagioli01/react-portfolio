import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-containere">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/works' className='nav-links' onClick={closeMobileMenu}>
                                works
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                about
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                contact
                            </Link>
                        </li>
                    </ul>
                    {button && <button buttonStyle='btn--outline'>about </button>}

                </div>
            </nav>
        </>
    );
}

export default Navbar;
