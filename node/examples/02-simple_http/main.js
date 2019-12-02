/**
 * Launch a simple HTTP Server
 *
 * User: Eric Priou erixtekila
 * Date: 08/09/13
 * Time: 18:59
 */
var http = require( "http" );
var nombre = 0;

http.createServer
(
	function( req, res )
	{
		// Prouve que le daemon node tourne en tache de fond
		// La variable persiste en RAM
		if( nombre ++ > 5 )
		{
			throw new Error( "CA SUFFIT" );
		}

		console.log( "Une nouvelle requête" );
		res.writeHead( 200, { "Content-Type" : "text/plain" } );
		res.end( "Bienvenue" );
	}
).listen( 8080 );

console.log( "node.js http example" );
