/* global QUnit */

import { LoaderUtils } from '../../../../src/loaders/LoaderUtils.js';

export default QUnit.module( 'Loaders', () => {

	QUnit.module( 'LoaderUtils', () => {

		// INSTANCING
		QUnit.test( 'decodeText', ( assert ) => {

			var jsonArray = new Uint8Array( [ 123, 34, 106, 115, 111, 110, 34, 58, 32, 116, 114, 117, 101, 125 ] );
			assert.equal( '{"json": true}', LoaderUtils.decodeText( jsonArray ) );
		} );

		QUnit.test( 'extractUrlBase', ( assert ) => {

			assert.equal( '/path/to/', LoaderUtils.extractUrlBase( '/path/to/model.glb' ) );
			assert.equal( './', LoaderUtils.extractUrlBase( 'model.glb' ) );
			assert.equal( '/', LoaderUtils.extractUrlBase( '/model.glb' ) );

		} );

	} );

} );
