// import { toast } from 'vue-sonner'
// import { isApiErrorResponse } from '~/types/ApiResponse'
//
// export const showApiErrorToast = (response: unknown) => {
// 	let message = 'Ошибка'
// 	const errorData: unknown = response
//
// 	// if (response instanceof Error && 'data' in response) {
// 	// 	errorData = response.data ?? (response as any)._data
// 	// }
//
// 	if (isApiErrorResponse(errorData)) {
// 		message = errorData.error.message
// 	} else {
// 		console.log(response)
// 	}
//
// 	toast.error('', {
// 		description: message,
// 		action: { label: 'Ок' },
// 	})
// }
