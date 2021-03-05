import React from 'react';
import _ from 'lodash';


const UrlList = props => {

    const displayResponse = (response) => {
        let list = []

        if (!_.isEmpty(response)) {
            if (response[ 'error_status' ]) {
                list.push(<p>{ response[ 'error_message' ] }</p>)

            } else {
                for (let i = 0; i < 10; i++) {
                    list.push(<p key={ i }>{ i + 1 }. <a href={ response[ i ] }>{ response[ i ] }</a></p>)
                }
                list.push(<p key={ 11 }>Process Time: { response[ 'process_time' ] } ms.</p>)
    
            }
        }

        console.log(list)

        return list
    }

    return (
        <div>
            { displayResponse(props.response) }
        </div>
    )
}

export default UrlList;