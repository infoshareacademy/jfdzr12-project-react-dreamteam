import {signIn, SignInForm} from '@/lib/auth/sign-in';
import {ActionFunctionArgs, json, redirect} from '@remix-run/node';
import {Form, useActionData} from '@remix-run/react';
import {Alert} from '@/components/ui/alert';
import {Layout} from '@/components/layout';

export async function action({request}: ActionFunctionArgs) {
	const formData = await request.formData()

	const response = signIn({
		email: String(formData.get('email')),
		password: String(formData.get('password'))
	})

	if (!response.authenticated) {
		return json({errors: response.errors})
	}

	return redirect('/account')
}

export default function SignInPage() {
	const actionData = useActionData<typeof action>()

	return <Layout position='center'>
		<SignInForm method='post'>
			{actionData?.errors && Object.values(actionData.errors).map(error => (
				<Alert key={error} variant='destructive' emphasis='minimal'>{error}</Alert>))}
		</SignInForm>
	</Layout>
}
