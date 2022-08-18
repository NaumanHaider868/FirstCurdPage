import React from 'react'
import '../asset/css/style.css';

function SideBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Cars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Todo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Post</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SideBar