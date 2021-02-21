import React, { useState } from 'react';
import searchEngine from '../api/searchEngine';
import SearchBar from './SearchBar';
import UrlList from './UrlList';


const App = () => {

    const [ response, setResponse ] = useState({});

    const onSearchSubmit = async (term) => {
        const response = await searchEngine.post('/search', {
            query: term
        })
            .then(res => {
                setResponse(res.data)
            })
    };

    return (
        <div className="ui container"
            style={ { marginTop: '10px' } } >
            <SearchBar onSubmit={ onSearchSubmit } />
            <UrlList response={ response } />
        </div >
    )
}

export default App;