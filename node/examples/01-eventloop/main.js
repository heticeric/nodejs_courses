/**
 * Event loop en pratique
 */
setInterval
(
	function ()
	{
		console.log( 'Timeout : ' + new Date().toTimeString() );
	}, 1000
);

// start time
var start = new Date();
console.log( 'Start : ' + start.toTimeString() );

// Pause l'exécution pour plusieurs secondes
var i = 0;
while ( new Date().getTime() < start.getTime() + 4000 )
{
	i++;
}
console.log( 'Stop : '+ new Date().toTimeString()+ '. ' + i + ' iterations.' );