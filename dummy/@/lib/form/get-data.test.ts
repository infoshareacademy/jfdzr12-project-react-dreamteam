import {describe, expect, it} from 'vitest';
import {getFormData} from './get-data'

describe('getFormData', () => {
	it('should return form data as JSON', () => {
		const form = document.createElement('form');
		form.innerHTML = `
      <input name="username" value="john"/>
      <input name="email" value="john@email.com"/>`;

			const expected = {
			username: 'john',
			email: 'john@email.com'
		};

		expect(getFormData(form)).toEqual(expected);
	})


})
