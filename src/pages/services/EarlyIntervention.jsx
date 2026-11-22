import ServiceLayout from '../../components/ServiceLayout';

export default function EarlyIntervention() {
  return (
    <ServiceLayout
      title="Early Intervention ABA Therapy | Modern Steps ABA"
      description="Early intervention ABA therapy at home from Modern Steps ABA, primarily starting at age 2. Play-based, BCBA-led, no waitlist. Call (571) 866-0640."
      heading="Early Intervention ABA Therapy"
      intro={[
        'The early years are when children build the foundations for communication, learning, and independence. Early intervention ABA uses play-based, evidence-based teaching to build those skills as early as possible - right in your home.',
        'Modern Steps ABA provides early intervention for young children, primarily starting at age 2, with individualized plans designed and supervised by a BCBA.',
      ]}
      sections={[
        {
          heading: 'What Early Intervention Focuses On',
          bullets: [
            'Communication - requesting, labeling, and early conversation skills',
            'Social interaction and play skills',
            'Imitation and early learning readiness',
            'Daily living routines such as mealtime, dressing, and bedtime',
            'Reducing challenging behavior by teaching functional alternatives',
          ],
        },
        {
          heading: 'When Families Reach Out',
          body: 'Families often contact us when they notice limited speech or communication, difficulty with social interaction or play, frustration that leads to challenging behavior, or delays in everyday routines. If you are unsure whether ABA is right for your child, a free consultation is a good first step - we will talk honestly about what we see and what we recommend.',
        },
        {
          heading: 'How It Works at Home',
          body: 'After a free consultation and assessment, your child\'s BCBA builds a plan around your family\'s routines. Sessions are one-on-one and play-based, and caregivers learn the same strategies so learning continues all day, not just during sessions.',
        },
      ]}
      faqs={[
        {
          q: 'What age can my child start?',
          a: 'We primarily serve ages 2-16, and early intervention typically begins around age 2. We serve clients up to age 21.',
        },
        {
          q: 'Does my child need a diagnosis first?',
          a: 'An autism diagnosis is typically required for insurance-covered ABA therapy. If you are still in that process, book a free consultation and we can talk through the usual next steps.',
        },
        {
          q: 'How many hours of therapy will my child get?',
          a: 'Hours are individualized. After the assessment, the BCBA recommends a schedule based on your child\'s needs and goals.',
        },
        {
          q: 'Do you have a waitlist?',
          a: 'No. Modern Steps ABA is currently enrolling with no waitlist.',
        },
      ]}
    />
  );
}
