import React, { useState } from 'react';
import './style/SearchBar.css'

const SearchBar = props => {

    const [ term, setTerm ] = useState('');

    const onFormSubmit = event => {
        // allows enter button to submit
        event.preventDefault();
        props.onSubmit(term)
    }

    return (
        <div className="ui segment" >
            <form className="ui form"
                onSubmit={ onFormSubmit } >
                <div className="field" >
                    <label >
                        UCI ICS Website Search
                </label >
                    <div style={ { display: 'flex' } }>
                        <input type="text"
                            onChange={ (e) => setTerm(e.target.value) }
                            value={ term } />
                        <button className="ui" onClick={ onFormSubmit }>
                            Search
                        </button>
                    </div>
                </div >
            </form >
        </div >
    )
}

export default SearchBar;