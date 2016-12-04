import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyBK9PojZ8JcgWgUl1GB8yHwwBikYLfGMvo';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take components generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));