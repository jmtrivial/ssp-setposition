/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


import {
	TextControl,
} from '@wordpress/components';

import {
	InspectorControls,
} from "@wordpress/block-editor";

import addZero from './script';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	const attributessecond = addZero(attributes.second);
	const attributesminute = addZero(attributes.minute);

	return (
		<div { ...blockProps }>
			<div>{attributes.name} <button class='components-button' type='button'>à { attributesminute }:{attributessecond} ▸</button></div>
		<InspectorControls>
			<TextControl
                label='Nom de la position'
                value={ attributes.name }
                onChange={ ( val ) => {
                    setAttributes( { name: val } );
                }}
            />
			<TextControl
				label='Minutes'
				type='number'
				min='0'
				maxlength='3'
				value={ attributes.minute }
				onChange={ ( val ) => {
					setAttributes( { minute: parseInt( val ) } );
				}}
			/>
			<TextControl
				label='Secondes'
				type='number'
				min='0'
				max='59'
				maxlength='2'
				value={ attributes.second }
				onChange={ ( val ) => {
					setAttributes( { second: parseInt( val ) } );
				}}
			/>
		</InspectorControls>

		</div>
	);
}
