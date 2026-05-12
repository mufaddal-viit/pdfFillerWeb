import { getDictionary } from '@/lib/i18n';

import Hero from '@/components/home/hero';
import Feature from '@/components/home/feature';
import Pricing from '@/components/home/pricing';
import Testimonial from '@/components/home/testimonial';
import Faq from '@/components/home/faq';
import Cta from '@/components/home/cta';
export default function Home() {
	const dict = getDictionary();

	return (
		<div className='container mx-auto md:px-5'>
			<Hero
				locale={dict.Hero}
				CTALocale={dict.CTAButton}
			/>
			<Feature locale={dict.Feature} />
			<Pricing locale={dict.Pricing} />
			<Testimonial locale={dict.Testimonial} />
			<Faq locale={dict.Faq} />
			<Cta
				locale={dict.CTA}
				CTALocale={dict.CTAButton}
			/>
		</div>
	);
}
