import CityLayout from '../../components/CityLayout';
import { PHONE_DISPLAY } from '../../config/site';

export default function NorthernVirginia() {
  return (
    <CityLayout
      title="In-Home ABA Therapy in Northern Virginia | Modern Steps ABA"
      description={`In-home ABA therapy across Northern Virginia, from Arlington and Alexandria to Woodbridge, Stafford, and Fredericksburg. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call ${PHONE_DISPLAY}.`}
      heading="In-Home ABA Therapy in Northern Virginia"
      intro={[
        'Modern Steps ABA provides in-home ABA therapy across Northern Virginia, from Arlington and Alexandria to Woodbridge, Stafford, and Fredericksburg. Every program is led by a Board Certified Behavior Analyst, delivered at home by trained behavior technicians, and built around your child\'s individual goals. We primarily serve ages 2-16 (serving up to 21), we accept most Medicaid and commercial insurances, and we currently have no waitlist anywhere in Northern Virginia.',
      ]}
      areas={['Arlington', 'Alexandria', 'Woodbridge', 'Dale City', 'Manassas', 'Fairfax', 'Springfield', 'Stafford', 'Fredericksburg']}
      sections={[
        {
          heading: 'Northern Virginia Cities We Serve',
          body: 'We provide in-home ABA therapy in these Northern Virginia communities:',
          bullets: [
            'Arlington',
            'Alexandria',
            'Woodbridge',
            'Dale City',
            'Manassas',
            'Fairfax',
            'Springfield',
            'Stafford',
            'Fredericksburg',
          ],
        },
        {
          heading: 'How to Get Started',
          body: 'Getting started is straightforward, and there is no waitlist.',
          bullets: [
            'Call us or book a free consultation - we will answer your questions and verify your insurance benefits for free.',
            'Meet your BCBA - your Board Certified Behavior Analyst completes a full assessment and designs a plan around your child.',
            'Start sessions - your behavior technician begins in-home sessions built around your child\'s goals.',
            'Track progress - your BCBA reviews data regularly and updates the plan as your child grows.',
          ],
        },
        {
          heading: 'Not Sure Whether In-Home ABA Is Right for Your Child?',
          body: 'Not sure whether in-home ABA is right for your child? Read our parent guides or call us for a free consultation. We will verify your insurance benefits for free and tell you honestly if we are the right fit.',
        },
      ]}
      faqs={[
        {
          q: 'Which Northern Virginia cities do you serve?',
          a: 'We provide in-home ABA therapy in Arlington, Alexandria, Woodbridge, Dale City, Manassas, Fairfax, Springfield, Stafford, and Fredericksburg.',
        },
        {
          q: 'How soon can we start?',
          a: 'There is no waitlist. After your free consultation, your BCBA completes an assessment and your behavior technician starts in-home sessions as soon as the plan is ready.',
        },
        {
          q: 'Do you accept insurance?',
          a: 'We accept most Medicaid and commercial insurances and verify your benefits for free before you start.',
        },
        {
          q: 'What ages do you work with?',
          a: 'We primarily serve ages 2-16, serving up to 21.',
        },
      ]}
      nearby={[
        { name: 'Alexandria', href: '/aba-therapy-alexandria-va' },
        { name: 'Arlington', href: '/aba-therapy-arlington-va' },
        { name: 'Dale City', href: '/aba-therapy-dale-city-va' },
        { name: 'Fairfax', href: '/aba-therapy-fairfax-va' },
        { name: 'Fredericksburg', href: '/aba-therapy-fredericksburg-va' },
        { name: 'Manassas', href: '/aba-therapy-manassas-va' },
        { name: 'Springfield', href: '/aba-therapy-springfield-va' },
        { name: 'Stafford', href: '/aba-therapy-stafford-va' },
        { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
      ]}
    />
  );
}
