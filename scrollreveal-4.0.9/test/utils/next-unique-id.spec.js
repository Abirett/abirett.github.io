import nextUniqueId from '../../src/utils/next-unique-id'

describe('Utilities', () => {
	describe('nextUniqueId()', () => {
		it('should start at 0', () => {
			const result = nextUniqueId()
			expect(result).to.equal(0)
		})

		it('should increment by 1', () => {
			const result = nextUniqueId()
			expect(result).to.equal(1)
		})

		it('should return a number', () => {
			const result = nextUniqueId()
			expect(result).to.be.a('number')
		})
	})
})
