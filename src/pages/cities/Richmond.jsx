import CityLayout from '../../components/CityLayout';

export default function Richmond() {
  return (
    <CityLayout
      title="ABA Therapy in Richmond, VA | Modern Steps ABA"
      description="In-home ABA therapy in Richmond, VA, including Chesterfield and Henrico Counties. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640."
      heading="ABA Therapy in Richmond, VA"
      intro={[
        'Richmond is one of Modern Steps ABA\'s main service hubs. We provide in-home ABA therapy across the Richmond metro - including Chesterfield County and Henrico County - bringing BCBA-led care directly to your home.',
        'In-home sessions fit around your family\'s life instead of adding another trip across town. We primarily serve ages 2-16 and serve clients up to age 21, and we are enrolling Richmond-area families now with no waitlist.',
      ]}
      areas={[
        'Richmond',
        'Chesterfield',
        'Midlothian',
        'Henrico',
        'Glen Allen',
        'Short Pump',
        'Mechanicsville',
        'Chester',
      ]}
      sections={[
        {
          heading: 'In-Home ABA Across the Richmond Metro',
          body: 'Your child\'s BCBA designs an individualized plan after a Functional Behavior Assessment, and a trained behavior technician delivers one-on-one sessions at home. Teaching is woven into daily routines and play, and caregiver training is part of every plan so the whole family uses the same strategies.',
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
          q: 'Do you serve Chesterfield and Henrico Counties?',
          a: 'Yes. Our Richmond service area includes the city of Richmond plus Chesterfield County and Henrico County communities such as Midlothian, Glen Allen, Short Pump, Mechanicsville, and Chester.',
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
        { name: 'Manassas', href: '/aba-therapy-manassas-va' },
        { name: 'Alexandria', href: '/aba-therapy-alexandria-va' },
      ]}
    />
  );
}
