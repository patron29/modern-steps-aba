import CityLayout from '../../components/CityLayout';
import { PHONE_DISPLAY } from '../../config/site.js';

export default function Manassas() {
  return (
    <CityLayout
      title="ABA Therapy in Manassas, VA | Modern Steps ABA"
      description={`In-home ABA therapy in Manassas, VA and western Prince William County. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call ${PHONE_DISPLAY}.`}
      heading="ABA Therapy in Manassas, VA"
      intro={[
        'Modern Steps ABA provides in-home ABA therapy in Manassas and western Prince William County. Instead of driving to a clinic, your child receives one-on-one therapy at home - in the environment where new skills are practiced every day.',
        'A Board Certified Behavior Analyst (BCBA) designs and supervises every plan. We primarily serve ages 2-16 and serve clients up to age 21, and Manassas-area families can enroll now with no waitlist.',
      ]}
      areas={[
        'Manassas',
        'Manassas Park',
        'Bristow',
        'Gainesville',
        'Nokesville',
        'Haymarket',
      ]}
      sections={[
        {
          heading: 'In-Home ABA in the Manassas Area',
          body: 'Sessions are built around your child\'s goals - communication, social skills, daily living routines, and reducing challenging behavior. Our therapists use Natural Environment Teaching within everyday activities, and caregiver training is included in every plan so strategies are consistent between sessions.',
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
          q: 'Do you serve Bristow and Gainesville?',
          a: 'Yes. Our Manassas service area includes Manassas, Manassas Park, Bristow, Gainesville, Nokesville, and Haymarket.',
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
        { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
        { name: 'Fairfax', href: '/aba-therapy-fairfax-va' },
        { name: 'Alexandria', href: '/aba-therapy-alexandria-va' },
        { name: 'Stafford', href: '/aba-therapy-stafford-va' },
        { name: 'Fredericksburg', href: '/aba-therapy-fredericksburg-va' },
        { name: 'Richmond', href: '/aba-therapy-richmond-va' },
      ]}
    />
  );
}
