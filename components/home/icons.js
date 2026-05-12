import { SiGithub } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';
export default function HeroIcons({CTALocale}) {
	const ctaLinks = [
		{
			href: "https://github.com/mufaddal",
			title: "View source code on GitHub",
			label: CTALocale.btn1,
			icon: <SiGithub aria-hidden="true" />,
			variant: "primary",
			external: true,
		},
		{
			href: "https://yoursite.com/docs",
			title: "Read the documentation",
			label: CTALocale.btn2,
			icon: <IoDocumentText aria-hidden="true" />,
			variant: "secondary",
			external: false,
		},
	];


	return (
		<div className='flex items-center gap-3'>
			<div className="flex flex-col gap-2 sm:flex-row">
				{ctaLinks.map(({ href, title, label, icon, variant, external }) => (
					<a
					key={href}	
					href={href}
					title={title}
					aria-label={title}
					target={external ? "_blank" : undefined}
					rel={external ? "noopener noreferrer" : undefined}
					className={[
						"btn btn-sm md:btn-md rounded-full gap-2 transition-all duration-200",
						"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-base-content",
						variant === "primary"
						? "border-none bg-base-content text-base-100 hover:bg-base-100 hover:text-base-content hover:ring-1 hover:ring-base-content"
						: "btn-base",
					].join(" ")}
					>
					{icon}
					<span>{label}</span>
				</a>
			))}
			</div>
				</div>
			);
}


