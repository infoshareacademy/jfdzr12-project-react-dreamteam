import {JSX} from 'react';
import {FormErrors} from '@/lib/form/errors';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {cn} from '@/lib/utils';

export interface SignInFormData {
	email: string
	password: string
}

export function signIn({email, password}: SignInFormData): {
	authenticated: false,
	errors: FormErrors<SignInFormData>
} | { authenticated: true } {
	if (email !== 'dummy@example.com') {
		return {
			authenticated: false,
			errors: {
				email: 'Account does not exist'
			}
		}
	}
	if (password !== 'abc') {
		return {
			authenticated: false,
			errors: {
				password: 'Invalid password'
			}
		}
	}

	return {
		authenticated: true
	}
}

export function SignInForm({
														 className,
														 ...props
													 }: JSX.IntrinsicElements['form']) {
	return <Card className={cn(className, 'w-96')}>
		<CardHeader>
			<CardTitle>Sign in</CardTitle>
		</CardHeader>
		<CardContent>
			<form {...props} className='space-y-6'>
				<Label>
					Email
					<Input name='email' type='email'/>
				</Label>

				<Label htmlFor='password'>
					Password
					<Input name='password' type='password'/>
				</Label>

				{props.children}

				<Button type='submit'>Sign in</Button>
			</form>
		</CardContent>
	</Card>
}
