import {Button} from '../components/ui/button';
import * as React from 'react';
import {cn} from './utils';
import {useNavigate} from '@remix-run/react';

export function Navbar({children, className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
	const navigate = useNavigate()

	return <div className={cn(className, 'flex flex-col gap-2 p-2')} {...props}>
		<div className='flex flex-row justify-between items-center'>
			<div className='flex-1'>
				<span className='text-2xl font-medium mx-3'>Dummy</span>
				{children}
			</div>
			<div className='self-end'>
				<Button variant='ghost' onClick={() => navigate('/sign-in')}>Sign out</Button>
			</div>
		</div>
		<hr className='divide-y-2 mx-2'/>
	</div>
}
