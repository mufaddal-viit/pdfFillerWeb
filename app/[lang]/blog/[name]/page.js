import { IoMdHome } from 'react-icons/io';
import { defaultLocale, getDictionary } from '@/lib/i18n';
import pubfn from '@/lib/function';
import HTMLReactParser from 'html-react-parser';
import Sidebar from '@/components/blog/sidebar';

import { notFound } from 'next/navigation';
import blog from '@/locales/blog/blog.json';

import { SiteConfig } from '@/lib/config/site';
export function generateMetadata() {
	const siteConfig = SiteConfig[defaultLocale];
	const article = blog[defaultLocale];

	const keywords = article.tagList.map((item) => item.name);

	const openGraphConfig = { ...siteConfig.openGraph, title: article.name, description: article.description };
	const twitterConfig = { ...siteConfig.twitter, title: article.name, description: article.description };

	return {
		title: article.name + ' - ' + siteConfig.name,
		description: article.description,
		keywords,
		metadataBase: siteConfig.metadataBase,
		openGraph: openGraphConfig,
		twitter: twitterConfig,
	};
}

export default function Page() {
	const dict = getDictionary();
	const article = blog[defaultLocale];

	if (pubfn.isNull(article)) {
		notFound();
	}

	return (
		<main className='container mx-auto md:px-5'>
			<div className='hidden md:block absolute left-[5%] top-[10%] z-0'>
				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,theme(colors.primary/15%),rgba(255,255,255,0))]'></div>
			</div>
			<div className='breadcrumbs text-sm relative z-10'>
				<ul>
					<li>
						<a href={`/${defaultLocale}`}>
							<IoMdHome />
						</a>
					</li>
					<li>
						<a href={`/${defaultLocale}/blog`}>{dict['Blog']['title']}</a>
					</li>
					<li>
						<a href={`/${defaultLocale}/blog/${article.url_name}`}>{article.name}</a>
					</li>
				</ul>
			</div>
			<section className='relative flex flex-col md:flex-row items-start justify-between gap-5 py-5 min-h-[70vh] z-10'>
				<div className='w-full md:w-2/3 ring-2 ring-base-content/10 p-5 md:p-10 rounded-2xl bg-base-100'>
					<h1 className='mb-3 text-xl md:text-2xl font-bold text-center'>{article.name}</h1>
					<div className='flex flex-col md:flex-row justify-between items-end md:items-center text-base-content/60 text-sm'>
						<div>
							<span className='mr-3'>{article.category_name}</span>
							<span>{pubfn.timeFormat(article.create_time)}</span>
						</div>
						<div className='flex gap-x-2'>
							{article.tagList &&
								article.tagList.map((item, index) => {
									return <span key={index}>{item.name}</span>;
								})}
						</div>
					</div>
					<div className='divider'></div>
					<div className='prose'>{HTMLReactParser(article.content)}</div>
				</div>
				<div className='w-full md:w-1/3'>
					<Sidebar description={article.description} langName={defaultLocale} />
				</div>
			</section>
		</main>
	);
}
