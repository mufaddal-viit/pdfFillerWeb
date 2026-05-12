'use client';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import ThemeToggle from './themeToggle';
import LangSwitch from './langSwitch';

import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';

export default function Navbar() {
	const langName = defaultLocale;
	const linkList = NavLinksList[`LINK_${defaultLocale.toUpperCase()}`] || [];

	return (
		<header className='w-full relative z-50 bg-base-100 p-5 pb-0 container mx-auto md:mb-5 flex justify-between items-center'>
			<a
				aria-label='PDF Filler'
				className='flex items-center w-1/2 md:w-1/5'
				title='PDF Filler'
				href={`/${langName}`}
			>
				<Image
					width={200}
					height={200}
					src={'/logo.gif'}
					className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
					alt='logo'
				></Image>
				<h2 className='ml-3 font-bold leading-5'>PDF Filler</h2>
			</a>

			<ul className='w-3/5 px-5 font-medium hidden md:flex flex-nowrap items-center justify-around'>
				{linkList.map((link, index) => {
					return (
						<li
							key={index}
							className='group py-3 text-center'
						>
							<a
								aria-label={link.name}
								className='group relative'
								title={link.name}
								href={`/${langName}${link.url}`}
							>
								{link.name}
								<div className='absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90'></div>
							</a>
						</li>
					);
				})}
			</ul>

			<div className='md:w-1/5 flex items-center justify-end gap-2'>
				<label className='flex items-center justify-center md:bg-base-100 md:rounded-full w-5 md:w-8 h-5 md:h-8 md:shadow-sm md:hover:shadow-md transition-all'>
					<a
						aria-label='view source code on GitHub'
						title='view source code on GitHub'
						href='https://github.com/mufaddal'
					>
						<SiGithub size={14} />
					</a>
				</label>
				<ThemeToggle />
				{/* <LangSwitch /> */}
				<details className='flex md:hidden dropdown dropdown-end'>
					<summary className='btn btn-ghost p-0'>
						<MdMenu size={18} />
					</summary>
					<ul className='menu dropdown-content z-[100] p-2 shadow bg-base-100 opacity-100 rounded-box w-52'>
						{linkList.map((link, index) => {
							return (
								<li key={index}>
									<a
										aria-label={link.name}
										title={link.name}
										href={`/${langName}${link.url}`}
									>
										{link.name}
									</a>
								</li>
							);
						})}
					</ul>
				</details>
			</div>
		</header>
	);
}
