import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../context/themeContext';

const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const changeTheme = () => {
        setTheme(!theme);
        console.log(theme);
    };

    return (
        <div className="mb-4 header">
            <div className="container mx-auto">
                <nav className="navbar navbar-expand-lg">
                    <Link className="me-2"
                        to={'/'}>
                        <div>
                            <img className=""
                                style={
                                    {
                                        height: '6ch',
                                        width: '6ch',
                                        objectFit: 'contain'
                                    }
                                }
                                src="/logo.png"
                                alt="logo"/>
                        </div>
                    </Link>
                    <div style={
                            {
                                border: "none",
                                outline: "none"
                            }
                        }
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex">

                            <a href="/" className="link fw-bold mx-3">Home</a>
                            <a href="/canvas" className="link fw-bold mx-3">Playground</a>
                            <a href="/documentation" className="link fw-bold mx-3">Documentation</a>

                        </div>
                    </div>
                    <ul className="list-unstyled list-group list-group-horizontal d-flex align-items-center ms-auto fs-5">
                        <li>
                            <div onClick={changeTheme}
                                className="mx-2 hover d-flex justify-content-center rounded-circle"
                                style={
                                    {
                                        height: '5ch',
                                        width: '5ch'
                                    }
                            }>
                                <p className="text-center my-auto">
                                    <i className={
                                        `fa-solid fa-${
                                            theme ? 'sun' : 'moon'
                                        }`
                                    }/>
                                </p>
                            </div>
                        </li>
                        <li>
                            <a href="http://www.appharu.com" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill my-auto px-3 py-2">Visit AppHaru</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
