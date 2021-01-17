const App = {
	data() {
		return {
			displayNavSupport: 'none',
			displayNavProduct: 'none',
			displayLang: 'none',
			displaySearch: 'none',
			displayPhone: 'none'
		}
	},
	methods: {
		displayChangeSupport() {
			if (this.displayNavSupport === 'none') {
				this.displayNavSupport = 'block'
			} else {
				this.displayNavSupport = 'none'
			}
		},
		displayChangeProduct() {
			if (this.displayNavProduct === 'none') {
				this.displayNavProduct = 'block'
			} else {
				this.displayNavProduct = 'none'
			}
		},
		displayLangChange() {
			if (this.displayLang === 'none') {
				this.displayLang = 'block'
			} else {
				this.displayLang = 'none'
			}
		},
		displaySearchChange() {
			if (this.displaySearch === 'none') {
				this.displaySearch = 'block'
			} else {
				this.displaySearch = 'none'
			}
		},
		displayPhoneChange() {
			if (this.displayPhone === 'none') {
				this.displayPhone = 'block'
			} else {
				this.displayPhone = 'none'
			}
		},
		scrollUp() {
			window.scrollTo(0, 0)
		},
	}
}

Vue.createApp(App).mount('#wrap')


