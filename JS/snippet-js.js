/* 
 * JS Snippets
 *
 */

jQuery(document).ready(function($) {

	// Hide Links On Sepecific Page
	if( window.location.href.indexOf( "/" ) >-1 ) {
		$( ".class").css( "display", "none" );
	}

	// Replace Text
	$( ".class" ).text( "Updated Text" );

	// Replace Text v2
	$( ".class" ).text( function() {
		return $( this ).text().replace( "contains", "new text" );
	});


}); // END