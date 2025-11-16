// import { useUserStore } from "~/stores/User";

export default defineNuxtPlugin((nuxtApp) => {
	// const store = useUserStore();

	const api = $fetch.create({
		baseURL: nuxtApp.$config.public.API_URL + '/api',

		onRequest({ options, request }) {
			// console.log('request:', request)
			// if (store.jwt) {
			//   options.headers.set("Authorization", `Bearer ${store.jwt}`);
			// }
		},

		// onResponse({ response }) {
		// 	console.log('response:', response._data)
		// },

		async onResponseError({ response }) {
			if (response.status === 401) {
				store.logout()
			}
		},
	})

	return {
		provide: {
			api,
		},
	}
})
