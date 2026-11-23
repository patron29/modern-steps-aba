import ServiceLayout from '../../components/ServiceLayout';
import { PHONE_DISPLAY } from '../../config/site.js';

export default function InHomeABA() {
  return (
    <ServiceLayout
      title="In-Home ABA Therapy in Virginia | Modern Steps ABA"
      description={`In-home ABA therapy across Virginia from Modern Steps ABA. BCBA-led, evidence-based care at home, primarily ages 2-16, serving up to 21. No waitlist. Call ${PHONE_DISPLAY}.`}
      heading="In-Home ABA Therapy in Virginia"
      intro={[
        'Modern Steps ABA brings evidence-based ABA therapy to your home, where your child learns and uses new skills every day. A Board Certified Behavior Analyst (BCBA) designs an individualized plan for your child, and a trained behavior technician delivers one-on-one sessions in your home.',
        'We primarily serve ages 2-16 and serve clients up to age 21, with families across Virginia. There is no waitlist - reach out and we can get started.',
      ]}
      sections={[
        {
          heading: 'How In-Home ABA Works',
          bullets: [
            'Start with a free consultation to talk through your child\'s needs',
            'A BCBA completes a Functional Behavior Assessment and builds an individualized treatment plan',
            'One-on-one sessions take place in your home, on a consistent weekly schedule',
            'Caregiver training is built into every plan, so progress continues between sessions',
            'The BCBA tracks progress, updates goals, and adjusts the plan as your child grows',
          ],
        },
        {
          heading: 'Why Families Choose In-Home Therapy',
          bullets: [
            'Skills are learned in the environment where they are actually used - home routines, mealtimes, and play',
            'No travel to a clinic and no waiting rooms',
            'Parents and siblings are part of the process, not watching from the sidelines',
            'Sessions run Monday to Friday, scheduled around your family - the latest session start time is typically 5pm',
          ],
        },
        {
          heading: 'Who We Serve',
          body: 'We provide in-home ABA therapy for individuals with autism spectrum disorder and related developmental conditions across Virginia. We primarily serve ages 2-16 and serve clients up to age 21. We accept most Medicaid and commercial insurances - contact us and we will help you understand your coverage.',
        },
      ]}
      faqs={[
        {
          q: 'How do we get started?',
          a: `Book a free consultation or call ${PHONE_DISPLAY}. We will talk through your child's needs, complete an assessment, and build an individualized plan before regular sessions begin.`,
        },
        {
          q: 'Do you have a waitlist?',
          a: 'No. Modern Steps ABA is currently enrolling with no waitlist.',
        },
        {
          q: 'What ages do you serve?',
          a: 'We primarily serve ages 2-16 and serve clients up to age 21.',
        },
        {
          q: 'Do you accept insurance?',
          a: 'We accept most Medicaid and commercial insurances. Reach out and we will verify your specific coverage with you.',
        },
      ]}
    />
  );
}
