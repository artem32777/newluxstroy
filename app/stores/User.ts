// import type { User } from '~/types/User'
// import type { LoginResponse, RegisterResponse } from '~/types/Auth'
//
// export const useUserStore = defineStore('user', () => {
// 	const _user = useCookie<User | null>('user')
// 	const _jwt = useCookie<string | null>('jwt')
//
// 	function signIn(response: RegisterResponse | LoginResponse) {
// 		_user.value = response.user
// 		_jwt.value = response.jwt
// 		void navigateTo('/')
// 	}
//
// 	function logout() {
// 		_user.value = null
// 		_jwt.value = null
// 		void navigateTo('/auth/login')
// 	}
//
// 	const user = computed((): User => {
// 		if (!_user.value) {
// 			if (import.meta.client) {
// 				void navigateTo('/auth/login')
// 			}
// 			return {} as User
// 		}
// 		return _user.value
// 	})
//
// 	return {
// 		jwt: computed(() => _jwt.value),
// 		user,
// 		signIn,
// 		logout,
// 	}
// })
