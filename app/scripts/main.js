/* jshint devel:true */
(function () {
  var username = 'bryanCR89';
  console.log(`github.com/${username}`, `twitter/${username}`);



	Reveal.initialize({
		controls: true,
		progress: true,
		history: true,
		center: true,

		theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
		transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

		// Parallax scrolling
		// parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
		// parallaxBackgroundSize: '2100px 900px',

		// Optional libraries used to extend on reveal.js
		dependencies: [
			{ src: 'bower_components/reveal.js/lib/js/classList.js', condition: function () {
				return !document.body.classList;
			} },
			{ src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function () {
				return !!document.querySelector('[data-markdown]');
			} },
			{ src: 'bower_components/reveal.js/plugin/markdown/markdown.js', condition: function () {
				return !!document.querySelector('[data-markdown]');
			} },
			{ src: 'bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function () {
				hljs.initHighlightingOnLoad();
			} },
			{ src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function () {
				return !!document.body.classList;
			} },
			{ src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true, condition: function () {
				return !!document.body.classList;
			} }
		]
	});
}());
