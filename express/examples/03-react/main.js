import express from 'express';
const app = express();

import reactViews from 'express-react-views';

// Define react views folder
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'jsx' );
app.engine( 'jsx', reactViews.createEngine() );

// Static routes
import path from 'path';
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get
(
    '/'
    , (req, res) =>
    {
        res.render
        (
            'index'
            , {
                title: 'Express with react'
                , count: Math.round( Math.random() *999 )
            }
        )
    }
);

// Launch the server
app.listen
(
    3000
    , () => console.log('Example app listening on port 3000!')
);