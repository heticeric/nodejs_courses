import React from "react";
import Layout from "./layout";

export default ( { title, count } ) =>
{
    console.log( count, title );
    
    return (
        <Layout
            title={ title }
        >
            <div>Magic number is { count }</div>
            <div><a href="http://www.hetic.net">HETIC</a></div>
        </Layout>
    );
}