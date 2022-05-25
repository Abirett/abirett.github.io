import each from '../../utils/each'
import { applyStyle } from '../functions/style'

export default function destroy() {
	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, element => {
		applyStyle(element.node, element.styles.inline.generated)
		element.node.removeAttribute('data-sr-id')
	})

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, container => {
		const target =
			container.node === document.documentElement ? window : container.node
		target.removeEventListener('scroll', this.delegate)
		target.removeEventListener('resize', this.delegate)
	})

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	}
}
