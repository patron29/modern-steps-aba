import CityLayout from '../../components/CityLayout';
import { PHONE_DISPLAY } from '../../config/site.js';

export default function Woodbridge() {
  return (
    <CityLayout
      title="ABA Therapy in Woodbridge, VA | Modern Steps ABA"
      description={`In-home ABA therapy in Woodbridge, VA and Prince William County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call ${PHONE_DISPLAY}.`}
      heading="ABA Therapy in Woodbridge, VA"
      intro={[
        'Modern Steps ABA is based in Woodbridge, and Prince William County families are the heart of our practice. We provide in-home ABA therapy across Woodbridge and the surrounding communities - therapy comes to your home, so there is no drive on I-95 and no waiting room.',
        'Every plan is designed and supervised by a Board Certified Behavior Analyst (BCBA), with one-on-one sessions delivered at home by a trained behavior technician. We primarily serve ages 2-16 and serve clients up to age 21 - and we are enrolling now with no waitlist.',
      ]}
      areas={[
        'Woodbridge',
        'Dale City',
        'Lake Ridge',
        'Occoquan',
        'Dumfries',
        'Montclair',
        'Triangle',
      ]}
      sections={[
        {
          heading: 'In-Home ABA in Prince William County',
          body: 'In-home therapy means skills are taught where your child actually uses them - during play, mealtimes, homework, and family routines. Our Woodbridge team uses approaches like Natural Environment Teaching alongside structured practice, and caregiver training is built into every plan so progress continues between sessions.',
        },
        {
          heading: 'How to Get Started',
          bullets: [
            `Book a free consultation or call ${PHONE_DISPLAY}, Mon-Fri 8am-6pm`,
            'We complete a Functional Behavior Assessment and verify your insurance coverage',
            'Your BCBA builds an individualized treatment plan for your child',
            'Regular one-on-one sessions begin at home, with progress tracked and shared with you',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Do you serve Dale City and Lake Ridge?',
          a: 'Yes. We serve Woodbridge and the surrounding Prince William County communities, including Dale City, Lake Ridge, Occoquan, Dumfries, Montclair, and Triangle.',
        },
        {
          q: 'How soon can we start?',
          a: 'We have no waitlist. After your free consultation, the timeline depends on the assessment and insurance authorization - we will walk you through each step and keep things moving.',
        },
        {
          q: 'Do you accept insurance?',
          a: 'We accept most Medicaid and commercial insurances. Contact us and we will verify your specific coverage with you.',
        },
        {
          q: 'What ages do you work with?',
          a: 'We primarily serve ages 2-16 and serve clients up to age 21.',
        },
      ]}
      nearby={[
        { name: 'Manassas', href: '/aba-therapy-manassas-va' },
        { name: 'Alexandria', href: '/aba-therapy-alexandria-va' },
        { name: 'Fairfax', href: '/aba-therapy-fairfax-va' },
        { name: 'Stafford', href: '/aba-therapy-stafford-va' },
        { name: 'Fredericksburg', href: '/aba-therapy-fredericksburg-va' },
        { name: 'Richmond', href: '/aba-therapy-richmond-va' },
      ]}
    />
  );
}
