
var gradientify = new Gradientify()

gradientify.setBackground({
	element: document.body,
	gradients: [
		{type: `linear`, angle: `60deg`, colors: [`red`, `blue`], opacity: .5},
		{type: `radial`, colors: [`#1133ff`, `#22ffff`], opacity: 1}
	],
	options: {
		debug: true
	}
})

gradientify.animate({
	name: `fadeToBlack`,
	delay: 100,
	iterationCount: `infinite`
})