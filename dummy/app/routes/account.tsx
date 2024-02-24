import {Layout} from '@/components/layout';
import {Navbar} from '@/lib/navbar';

export default function AccountPage() {
	return <Layout position='center'>
		<Navbar className='self-stretch'/>
		<div className='flex-1 flex items-center'>
			<h1 className='text-6xl font-thin tracking-wider'>
				Welcome back
			</h1>
		</div>
	</Layout>
}
