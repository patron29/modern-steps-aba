import CityLayout from '../../components/CityLayout';

export default function Fairfax() {
  return (
    <CityLayout
      title="ABA Therapy in Fairfax, VA | Modern Steps ABA"
      description="In-home ABA therapy in Fairfax, VA and Fairfax County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640."
      heading="ABA Therapy in Fairfax, VA"
      intro={[
        'Modern Steps ABA provides in-home ABA therapy in Fairfax and across Fairfax County. Your child receives one-on-one therapy at home, scheduled around your family - no clinic commute, no waiting room.',
        'A Board Certified Behavior Analyst (BCBA) designs and supervises every plan. We primarily serve ages 2-16 and serve clients up to age 21, and Fairfax-area families can enroll now with no waitlist.',
      ]}
      areas={[
        'Fairfax',
        'Vienna',
        'Oakton',
        'Falls Church',
        'Annandale',
        'Fairfax Station',
        'Clifton',
      ]}
      sections={[
        {
          heading: 'In-Home ABA in Fairfax County',
          body: 'Sessions focus on communication, social skills, school readiness, daily living routines, and reducing challenging behavior - taught in the home environment where the skills are used. Caregiver training is built into every plan, and your BCBA tracks progress data and updates goals as your child grows.',
        },
        {
          heading: 'How to Get Started',
          bullets: [
            'Book a free consultation or call (571) 866-0640, Mon-Fri 8am-6pm',
            'We complete a Functional Behavior Assessment and verify your insurance coverage',
            'Your BCBA builds an individualized treatment plan for your child',
            'Regular one-on-one sessions begin at home, with progress tracked and shared with you',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Do you serve Vienna and Falls Church?',
          a: 'Yes. Our Fairfax service area includes Fairfax, Vienna, Oakton, Falls Church, Annandale, Fairfax Station, and Clifton. We also serve Alexandria and nearby communities - see our Alexandria page.',
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
        { name: 'Manassas', href: '/aba-therapy-manassas-va' },
        { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
        { name: 'Stafford', href: '/aba-therapy-stafford-va' },
        { name: 'Fredericksburg', href: '/aba-therapy-fredericksburg-va' },
        { name: 'Richmond', href: '/aba-therapy-richmond-va' },
      ]}
    />
  );
}
