import CityLayout from '../../components/CityLayout';

export default function Alexandria() {
  return (
    <CityLayout
      title="ABA Therapy in Alexandria, VA | Modern Steps ABA"
      description="In-home ABA therapy in Alexandria, VA and nearby Fairfax County communities. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640."
      heading="ABA Therapy in Alexandria, VA"
      intro={[
        'Modern Steps ABA provides in-home ABA therapy in Alexandria and the surrounding Fairfax County communities. Therapy happens at home - no commute, no waiting room - with sessions scheduled around your family, Monday to Friday, 8am-6pm.',
        'Every plan is designed and supervised by a Board Certified Behavior Analyst (BCBA). We primarily serve ages 2-16 and serve clients up to age 21, and we are enrolling Alexandria-area families now with no waitlist.',
      ]}
      areas={[
        'Alexandria',
        'Franconia',
        'Kingstowne',
        'Mount Vernon',
        'Lorton',
        'Springfield',
        'Burke',
      ]}
      sections={[
        {
          heading: 'In-Home ABA in Alexandria',
          body: 'One-on-one sessions at home focus on communication, social interaction, daily living skills, and reducing challenging behavior through evidence-based strategies. Caregiver training is built into every plan, and your BCBA reviews progress data regularly and adjusts goals as your child grows.',
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
          q: 'Do you serve Springfield and Lorton?',
          a: 'Yes. Our Alexandria service area includes Alexandria, Franconia, Kingstowne, Mount Vernon, Lorton, Springfield, and Burke.',
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
        { name: 'Fairfax', href: '/aba-therapy-fairfax-va' },
        { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
        { name: 'Manassas', href: '/aba-therapy-manassas-va' },
        { name: 'Stafford', href: '/aba-therapy-stafford-va' },
        { name: 'Fredericksburg', href: '/aba-therapy-fredericksburg-va' },
        { name: 'Richmond', href: '/aba-therapy-richmond-va' },
      ]}
    />
  );
}
