const baseSiteConfig = {
	name: 'PDF Filler',
	description: 'A free, open-source and powerful landing page for PDF Filler — fill, edit, and manage PDF documents with ease.',
	url: 'https://yoursite.com',
	ogImage: 'https://yoursite.com/og.png',
	metadataBase: '/',
	keywords: [
		'pdf filler',
		'pdf editor',
		'fill pdf online',
		'pdf form filler',
		'edit pdf',
		'pdf tools',
	],
	authors: [
		{
			name: 'Mufaddal',
			url: 'https://yoursite.com',
		},
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	},
};

export const SiteConfig = {
	en: {
		name: 'PDF Filler',
		description: 'A free, open-source and powerful landing page for PDF Filler — fill, edit, and manage PDF documents with ease.',
		url: 'https://yoursite.com',
		ogImage: 'https://yoursite.com/og.png',
		metadataBase: '/',
		keywords: [
			'pdf filler',
			'pdf editor',
			'fill pdf online',
			'pdf form filler',
			'edit pdf',
			'pdf tools',
		],
		authors: [
			{
				name: 'Mufaddal',
				url: 'https://yoursite.com',
			},
		],
		icons: {
			icon: '/favicon.ico',
			shortcut: '/logo.png',
			apple: '/logo.png',
		},
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: baseSiteConfig.url,
			title: 'PDF Filler',
			description: 'A free, open-source and powerful landing page for PDF Filler — fill, edit, and manage PDF documents with ease.',
			siteName: 'PDF Filler',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'PDF Filler',
			description: 'A free, open-source and powerful landing page for PDF Filler — fill, edit, and manage PDF documents with ease.',
			images: [`${baseSiteConfig.url}/og.png`],
			creator: 'Mufaddal',
		},
	},
};
