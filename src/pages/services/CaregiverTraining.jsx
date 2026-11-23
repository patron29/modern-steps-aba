import ServiceLayout from '../../components/ServiceLayout';
import { PHONE_DISPLAY } from '../../config/site.js';

export default function CaregiverTraining() {
  return (
    <ServiceLayout
      title="Caregiver Training & Support | Modern Steps ABA"
      description={`Caregiver training and support is built into every Modern Steps ABA plan, using the Behavioral Skills Training model. No waitlist. Call ${PHONE_DISPLAY}.`}
      heading="Caregiver Training & Support"
      intro={[
        'Therapy works best when the strategies used in sessions are the same ones used at breakfast, bedtime, and everywhere in between. That is why caregiver training is a core part of every Modern Steps ABA plan - not an add-on.',
        'Our training balances your concerns as a caregiver with your child\'s abilities, and follows the Behavioral Skills Training (BST) model: instruction, modeling, practice, and feedback.',
      ]}
      sections={[
        {
          heading: 'What Training Covers',
          bullets: [
            'Indirect and direct instruction on your child\'s specific goals and behavior plan',
            'Informative discussion - time to ask questions and talk through what you are seeing at home',
            'Focused skill presentations that break strategies into clear, usable steps',
            'Hands-on coaching and modeling, with practice and feedback from your BCBA',
          ],
        },
        {
          heading: 'Why It Matters',
          body: 'Children make faster, more durable progress when everyone responds the same way. Caregiver training gives you the same tools the therapy team uses, so skills generalize beyond session hours - and so you feel confident handling challenging moments when they come up.',
        },
        {
          heading: 'Who Participates',
          body: 'Parents and primary caregivers are the core participants. Other family members who spend significant time with your child are welcome to join sessions when it helps consistency at home.',
        },
      ]}
      faqs={[
        {
          q: 'Is caregiver training part of every plan?',
          a: 'Yes. It is a core component of Modern Steps ABA services, scheduled as part of your child\'s treatment plan.',
        },
        {
          q: 'Do I need any experience or background?',
          a: 'None at all. Training starts from where you are, and the BCBA adjusts the pace and format to your family.',
        },
        {
          q: 'When do training sessions happen?',
          a: 'Sessions are scheduled Monday to Friday, 8am-6pm, alongside your child\'s regular therapy schedule.',
        },
      ]}
    />
  );
}
