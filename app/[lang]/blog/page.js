import { IoMdHome } from 'react-icons/io';
import BlogCard from '@/components/blog/card';
import BlogList from '@/locales/blog/list.json';
import { defaultLocale, getDictionary } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';
export function generateMetadata() {
	const dict = getDictionary();
	const site = SiteConfig[defaultLocale];

	return {
		title: dict['Blog']['title'] + ' - ' + site.name,
		description: dict['Blog']['description'],
		keywords: site.keywords,
		authors: site.authors,
		creator: site.creator,
		icons: site.icons,
		metadataBase: site.metadataBase,
		openGraph: site.openGraph,
		twitter: site.twitter,
	};
}

export default function Page() {
	const dict = getDictionary();
	const list = BlogList[defaultLocale];
	const extendedList = Array.from({ length: 9 }, () => list[0]);

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
				</ul>
			</div>
			<div className='flex items-start gap-10 py-5'>
				<div className='w-full'>
					<section className='grid grid-cols-1 md:grid-cols-3 gap-10'>
						{extendedList.map((item, index) => (
							<BlogCard
								key={index}
								lang={defaultLocale}
								item={item}
							/>
						))}
					</section>

					{/* You need to implement your own pagination here */}
					<div className='join my-10'>
						<button className='join-item btn'>1</button>
						<button className='join-item btn btn-active'>2</button>
						<button className='join-item btn'>3</button>
						<button className='join-item btn'>4</button>
					</div>
				</div>
			</div>
		</main>
	);
}
