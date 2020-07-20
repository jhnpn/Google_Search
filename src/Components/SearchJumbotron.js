import React, { Component } from 'react'

export class SearchJumbotron extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <p class="lead">Seach for a book (ex. title, author).</p>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                    />
                </div>
            </div>
        )
    }
}

export default SearchJumbotron
