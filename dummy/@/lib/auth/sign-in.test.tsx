import {describe, expect, it, vi} from 'vitest';
import {FormEvent} from 'react'
import {signIn, SignInForm} from './sign-in'
import {render, screen} from '@testing-library/react';
import {getFormData} from '../form/get-data';

describe('SignInForm', () => {
	it.todo('should display email input')
	it.todo('should display password input')
	it.todo('should display sign in button')

	it.todo('should be submitted with email and password', () => {
		const onSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => getFormData(event.currentTarget))

		render(<SignInForm onSubmit={onSubmit}/>)
	})
})

describe('signIn', () => {
	it.todo('should return `wrong email` error')
	it.todo('should return `invalid password` error')
	it.todo('should authenticate user')
})
