import CityLayout from '../../components/CityLayout';
import { PHONE_DISPLAY } from '../../config/site.js';

export default function Fredericksburg() {
  return (
    <CityLayout
      title="ABA Therapy in Fredericksburg, VA | Modern Steps ABA"
      description={`In-home ABA therapy in Fredericksburg, VA and Spotsylvania County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call ${PHONE_DISPLAY}.`}
      heading="ABA Therapy in Fredericksburg, VA"
      intro={[
        'Modern Steps ABA provides in-home ABA therapy in Fredericksburg and Spotsylvania County. Families along the I-95 corridor between Richmond and Northern Virginia can get BCBA-led therapy at home - without a long drive to a clinic.',
        'Every plan is designed and supervised by a Board Certified Behavior Analyst (BCBA), with one-on-one sessions delivered in your home. We primarily serve ages 2-16 and serve clients up to age 21, enrolling now with no waitlist.',
      ]}
      areas={[
        'Fredericksburg',
        'Spotsylvania',
        'Falmouth',
        'King George',
      ]}
      sections={[
        {
          heading: 'In-Home ABA in the Fredericksburg Area',
          body: 'Therapy at home means your child learns communication, social, and daily living skills in real routines - meals, play, and family time. Our team uses Natural Environment Teaching alongside structured practice, and caregiver training is part of every plan so progress continues between sessions.',
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
          q: 'Do you serve Spotsylvania and Falmouth?',
          a: 'Yes. Our Fredericksburg service area includes Fredericksburg, Spotsylvania, Falmouth, and King George. Stafford County families can also see our Stafford page.',
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
        { name: 'Alexandria', href: '/aba-therapy-alexandria-va' },
        { name: 'Arlington', href: '/aba-therapy-arlington-va' },
        { name: 'Chesterfield', href: '/aba-therapy-chesterfield-va' },
        { name: 'Dale City', href: '/aba-therapy-dale-city-va' },
        { name: 'Fairfax', href: '/aba-therapy-fairfax-va' },
        { name: 'Henrico', href: '/aba-therapy-henrico-va' },
        { name: 'Manassas', href: '/aba-therapy-manassas-va' },
        { name: 'Midlothian', href: '/aba-therapy-midlothian-va' },
        { name: 'Richmond', href: '/aba-therapy-richmond-va' },
        { name: 'Springfield', href: '/aba-therapy-springfield-va' },
        { name: 'Stafford', href: '/aba-therapy-stafford-va' },
        { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
      ]}
    />
  );
}
