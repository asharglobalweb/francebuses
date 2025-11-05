import ServicesHero from '../../components/Hero2'
import Breadcrumbs from "../../components/Breadcrumbs";
import TransferDetails from '../../components/TransferDetails'
import TestimonialSection from '../../components/TestimonialSection'
import FinalCta from '../../components/FinalCtaSection'
// import PricingSection from '../../components/PricingSection'

const transfer = {
    title: 'Door to Door',
    span: 'Transfers',
    subTitle: 'Reliable transfers across France with France Buses — premium comfort, professional drivers, and on time service wherever you travel.',
    image: '/images/transfer1.png',
}

const transferDetail = {
    h2: 'About Our Transfer Service',
    title: 'France Buses offers smooth and comfortable door to door transfers across France. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free.',
    features: [
        'Meet and greet service included',
        'Real time flight and traffic tracking',
        'Complimentary WiFi and refreshments',
        'Fixed transparent pricing with no surprises'
    ],
    images: [
        { image: "/images/transfer2.png" },
        { image: "/images/transfer3.png" }
    ]
}

export default function Transfer() {
    return (
        <>
            <Breadcrumbs
                crumbs={[
                    { name: "Home", href: "/" },
                    { name: "Transfers" },
                ]}
            />
            <ServicesHero {...transfer} />
            <TransferDetails {...transferDetail} />
            {/* <PricingSection /> */}
            <TestimonialSection />
            <FinalCta />
        </>
    );
}
