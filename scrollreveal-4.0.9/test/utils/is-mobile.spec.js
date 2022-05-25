import isMobile from '../../src/utils/is-mobile'

describe('Utilities', () => {
	describe('isMobile()', () => {
		it('should return true when passed a mobile user agent', () => {
			const android = `Mozilla/5.0 (Linux; U; Android 4.2; en-us;
				Android SDK built for x86 Build/JOP40C) AppleWebKit/534.30
				(KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`

			const iPhone = `Mozilla/5.0 (iPhone; CPU iPhone OS 10_10_5 like Mac OS X)
				AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4`

			expect(isMobile(android)).to.be.true
			expect(isMobile(iPhone)).to.be.true
		})

		it('should return false when passed a desktop user agent', () => {
			const chrome = `Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36
				(KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36`

			const firefox =
				'Mozilla/5.0 (X11; Linux i686; rv:45.0) Gecko/20100101 Firefox/45.0'

			const ie10 = `Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1;
				WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E)`

			expect(isMobile(chrome)).to.be.false
			expect(isMobile(firefox)).to.be.false
			expect(isMobile(ie10)).to.be.false
		})

		it('should work when not passed an explicit user agent', () => {
			expect(isMobile()).to.be.a('boolean')
		})
	})
})
