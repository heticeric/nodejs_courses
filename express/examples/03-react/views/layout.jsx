import React from "react";

export default ( props ) => {
    return (
        <html>
            <head>
                <title>{ props.title }</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>{ props.children }</body>
        </html>
    );
}