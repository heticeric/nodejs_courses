/**
 * telnet pour chatter avec node.js sockets
 *
 * User: kogit
 * Date: 02/12/13
 * Time: 23:32
 */
var net = require( 'net' );
var server = net.createServer()
		,clients = [];

// Capture les nouvelles connexions
server.on
(
		"connection", function( client )
		{
			clients.push( client );
			client.write( "Bienvenue padawan javascripter !" )

			// Données entrantes
			client.on
			(
				"data", function( data )
				{
					clients.forEach
					(
						function( c )
						{
							// Filtre les messages de sortie
							if( client !== c )
							{
								c.write( "node.js "+ client.remoteAddress +":"+ client.remotePort +" rapporte que "+ data );
							}
						}
					);
				}
			)
		}
);

// server socket configuration
server.listen( 1234 );