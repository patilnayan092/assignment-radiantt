import React from 'react';
import topBanner from '../../assets/all-purpose-banner-v3.jpg';
const Header = () => {
    return (<>
        <header className="usa-banner__header">
            <div className="usa-banner__inner">
                <div className="grid-col-auto">
                    <img
                        aria-hidden="true"
                        className="usa-media-block__img"
                        src={topBanner}
                        alt="top banner"
                    />
                </div>
            </div>
        </header>
        <div className="usa-nav-container" >
            <header className="usa-header usa-header--basic" style={{ backgroundColor: '#337ab7', padding: '0.5rem 0' }}>
                <div className="usa-navbar" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: 'none' }}>
                   <nav className="usa-nav" style={{ padding: 0, border: 'none' }}>
                        <ul className="usa-nav__primary" style={{ display: 'flex', margin: '0', listStyleType: 'none' }}>
                            <li className="usa-nav__primary-item">
                                <a
                                    href="#"
                                    className="usa-nav__link"
                                    style={{
                                        color: '#fff',
                                        fontSize: '16px',
                                        padding: '0.5rem 1rem'
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="usa-nav__primary-item">
                                <a
                                    href="#"
                                    className="usa-nav__link"
                                    style={{
                                        color: '#fff',
                                        fontSize: '16px',
                                        padding: '0.5rem 1rem'
                                    }}
                                >
                                    About ASETT
                                </a>
                            </li>
                            <li className="usa-nav__primary-item">
                                <a
                                    href="#"
                                    className="usa-nav__link"
                                    style={{
                                        color: '#fff',
                                        fontSize: '16px',
                                        padding: '0.5rem 1rem'
                                    }}
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li className="usa-nav__primary-item">
                                <button
                                    className="usa-accordion__button usa-nav__link"
                                    style={{
                                        color: '#fff',
                                        fontSize: '16px',
                                        padding: '0.5rem 1rem',
                                        background: 'none',
                                        border: 'none'
                                    }}
                                >
                                    Support ▾
                                </button>
                            </li>

                            {/* 
                    <div className="usa-nav__secondary"> */}
                            {/* <ul className="usa-nav__secondary-links"> */}
                            <li className="usa-nav__nav__primary">
                                <a
                                    href="#"
                                    style={{
                                        color: '#fff',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    }}
                                >
                                    <svg className="usa-icon" aria-hidden="true" focusable="false" role="img">
                                        <use href="/assets/img/sprite.svg#group_add"></use>
                                    </svg> Register
                                </a>
                            </li>
                            <li className="usa-nav__nav__primary">
                                <a
                                    href="#"
                                    style={{
                                        color: '#fff',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    }}
                                >
                                    <svg className="usa-icon" aria-hidden="true" focusable="false" role="img">
                                        <use href="/assets/img/sprite.svg#login"></use>
                                    </svg> Login
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div
                style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    color: '#666'
                }}
            >
                Form Approved OMB No. 0938-0948
            </div>
        </div>
    </>
    );
};

export default Header;