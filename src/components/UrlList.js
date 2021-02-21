import React from 'react';
import _ from 'lodash';


const UrlList = props => {

    const displayResponse = (response) => {
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(<p key={ i }>{ response[ i ] }</p>)
        }
        
        if (!_.isEmpty(response)) {
            list.push(<p key={ 5 }>Process Time: { response[ 'process_time' ] }</p>)
        }

        return list
    }

    return (
        <div>
            { displayResponse(props.response) }
        </div>
    )
}

export default UrlList;