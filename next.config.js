/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
({
	dest: 'public'
  })
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({

	pwa: {
		runtimeCaching,
		dest: "public",
		register: true,
		skipWaiting: true,
	}
});