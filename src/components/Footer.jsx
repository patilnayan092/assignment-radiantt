import React from 'react'

const Footer = () => {
    return (
        <footer className="usa-footer usa-footer--big">
            <div className="grid-container">
                <div className="grid-row grid-gap">
                    <div className="tablet:grid-col-12">
                        <nav className="usa-footer__nav padding-top-0" aria-label="Footer navigation,,">
                            <div className="grid-row grid-gap-4">
                                <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                                    <section
                                        className="usa-footer__primary-content usa-footer__primary-content--collapsible"
                                    >
                                        <ul className="usa-list usa-list--unstyled">
                                            <li className="usa-footer__secondary-link">
                                                <a href="javascript:void(0);">Home</a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                                    <section
                                        className="usa-footer__primary-content usa-footer__primary-content--collapsible"
                                    >
                                        <ul className="usa-list usa-list--unstyled">
                                            <li className="usa-footer__secondary-link">
                                                <a href="javascript:void(0);">Privacy Policy</a>
                                            </li>

                                        </ul>
                                    </section>
                                </div>
                                <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                                    <section
                                        className="usa-footer__primary-content usa-footer__primary-content--collapsible"
                                    >
                                        <ul className="usa-list usa-list--unstyled">
                                            <li className="usa-footer__secondary-link">
                                                <a href="javascript:void(0);">Security Policy</a>
                                            </li>

                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
