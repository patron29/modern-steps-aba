import CityLayout from '../../components/CityLayout';
import { PHONE_DISPLAY } from '../../config/site.js';

export default function Stafford() {
  return (
    <CityLayout
      title="ABA Therapy in Stafford, VA | Modern Steps ABA"
      description={`In-home ABA therapy in Stafford, VA and Stafford County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call ${PHONE_DISPLAY}.`}
      heading="ABA Therapy in Stafford, VA"
      intro={[
        'Modern Steps ABA provides in-home ABA therapy across Stafford County, between our Woodbridge base and Fredericksburg. Therapy comes to your home, so sessions fit your family\'s schedule instead of adding another trip up and down I-95.',
        'A Board Certified Behavior Analyst (BCBA) designs and supervises every plan, with one-on-one sessions delivered at home. We primarily serve ages 2-16 and serve clients up to age 21, enrolling now with no waitlist.',
      ]}
      areas={[
        'Stafford',
        'Stafford Courthouse',
        'Garrisonville',
        'Aquia Harbour',
        'Brooke',
        'Quantico area',
      ]}
      sections={[
        {
          heading: 'In-Home ABA in Stafford County',
          body: 'Sessions are built around your child\'s goals - communication, social interaction, independence with daily routines, and reducing challenging behavior. Teaching happens in everyday activities at home, and caregiver training is included in every plan so the whole family uses the same strategies.',
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
          q: 'Do you serve Garrisonville and Aquia Harbour?',
          a: 'Yes. Our Stafford service area includes Stafford, Stafford Courthouse, Garrisonville, Aquia Harbour, Brooke, and the Quantico area.',
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
        { name: 'Fredericksburg', href: '/aba-therapy-fredericksburg-va' },
        { name: 'Henrico', href: '/aba-therapy-henrico-va' },
        { name: 'Manassas', href: '/aba-therapy-manassas-va' },
        { name: 'Midlothian', href: '/aba-therapy-midlothian-va' },
        { name: 'Richmond', href: '/aba-therapy-richmond-va' },
        { name: 'Springfield', href: '/aba-therapy-springfield-va' },
        { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
      ]}
    />
  );
}
