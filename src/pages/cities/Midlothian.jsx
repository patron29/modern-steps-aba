import CityLayout from '../../components/CityLayout';
import { PHONE_DISPLAY } from '../../config/site';

export default function Midlothian() {
  return (
    <CityLayout
      title="ABA Therapy in Midlothian, VA | Modern Steps ABA"
      description={`In-home ABA therapy in Midlothian, VA and Chesterfield County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call ${PHONE_DISPLAY}.`}
      heading="ABA Therapy in Midlothian, VA"
      intro={[
        'Midlothian families, from the Village of Midlothian and Salisbury to Walton Park and Queensmill, choose in-home ABA because it meets children where they are most comfortable: at home. Modern Steps ABA serves Midlothian with BCBA-led programs, trained behavior technicians, and no waitlist. Sessions run throughout the day, with the latest start typically 5pm, so therapy can fit around school and family life.',
        'Your child\'s plan is designed by a Board Certified Behavior Analyst and delivered in your home by a trained behavior technician, so progress is tracked against real goals. We primarily serve ages 2-16, serving up to 21, and we accept most Medicaid and commercial insurances. We verify your benefits for free before you start.',
      ]}
      areas={['Midlothian', 'Village of Midlothian', 'Salisbury', 'Walton Park', 'Queensmill']}
      sections={[
        {
          heading: 'In-Home ABA in Midlothian',
          body: 'Midlothian families come to us for care that fits their lives. In-home ABA means your child learns communication, social, and daily living skills where they live, with a BCBA-designed plan and a trained behavior technician.',
          bullets: [
            'Communication skills - requesting, conversation, and understanding language',
            'Social skills - play, turn-taking, and building friendships',
            'Daily living skills - dressing, eating, hygiene, and routines',
            'Behavior support - reducing challenging behaviors with positive strategies',
            'School readiness - following directions, staying on task, and learning in groups',
            'Parent training - practical strategies you can use every day',
          ],
        },
        {
          heading: 'How to Get Started',
          body: 'Getting started is straightforward, and there is no waitlist.',
          bullets: [
            'Call us or book a free consultation - we will answer your questions and verify your insurance benefits for free.',
            'Meet your BCBA - your Board Certified Behavior Analyst completes a full assessment and designs a plan around your child.',
            'Start sessions - your behavior technician begins in-home sessions built around your child\'s goals.',
            'Track progress - your BCBA reviews data regularly and updates the plan as your child grows.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Do you serve the Village of Midlothian and Salisbury?',
          a: 'Yes. Our Midlothian service area includes the Village of Midlothian, Salisbury, Walton Park, and Queensmill.',
        },
        {
          q: 'How soon can we start?',
          a: 'There is no waitlist. After your free consultation, your BCBA completes an assessment and your behavior technician starts in-home sessions as soon as the plan is ready.',
        },
        {
          q: 'Do you accept insurance?',
          a: 'We accept most Medicaid and commercial insurances and verify your benefits for free before you start.',
        },
        {
          q: 'What ages do you work with?',
          a: 'We primarily serve ages 2-16, serving up to 21.',
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
        { name: 'Richmond', href: '/aba-therapy-richmond-va' },
        { name: 'Springfield', href: '/aba-therapy-springfield-va' },
        { name: 'Stafford', href: '/aba-therapy-stafford-va' },
        { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
      ]}
    />
  );
}
