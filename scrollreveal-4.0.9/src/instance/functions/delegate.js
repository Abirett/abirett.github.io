import animate from './animate'
import sequence from './sequence'
import mathSign from '../../polyfills/math-sign'
import raf from 'miniraf'
import each from '../../utils/each'
import getGeometry from '../../utils/get-geometry'
import getScrolled from '../../utils/get-scrolled'
import isElementVisible from '../../utils/is-element-visible'

export default function delegate(
	event = { type: 'init' },
	elements = this.store.elements
) {
	raf(() => {
		const stale = event.type === 'init' || event.type === 'resize'

		each(this.store.containers, container => {
			if (stale) {
				container.geometry = getGeometry.call(this, container, true)
			}
			const scroll = getScrolled.call(this, container)
			if (container.scroll) {
				container.direction = {
					x: mathSign(scroll.left - container.scroll.left),
					y: mathSign(scroll.top - container.scroll.top)
				}
			}
			container.scroll = scroll
		})

		/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
		each(elements, element => {
			if (stale || element.geometry === undefined) {
				element.geometry = getGeometry.call(this, element)
			}
			element.visible = isElementVisible.call(this, element)
		})

		each(elements, element => {
			if (element.sequence) {
				sequence.call(this, element)
			} else {
				animate.call(this, element)
			}
		})

		this.pristine = false
	})
}
