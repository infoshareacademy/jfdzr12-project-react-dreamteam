export function getFormData<T extends HTMLFormElement>(form: T) {
	return Object.fromEntries(new FormData(form))
}
