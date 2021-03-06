import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={NavStyle}>
                <a class="navbar-brand" href="/">Book Search App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="search">Search</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="saved">Saved</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const NavStyle = {
    textAlign: 'center'
}

export default Navbar