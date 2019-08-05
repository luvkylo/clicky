import React from "react";

function Image(props) {
    return(
        <main className="container">
            {props.results.map(result => (
                <div role="img" id={result.value.id} className="click-item" style={{backgroundImage: 'url(' + result.value.url + ')'}} onClick={props.handleOnClick}></div>
            ))}
        </main>
    );
}

export default Image;