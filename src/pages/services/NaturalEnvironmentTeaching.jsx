import ServiceLayout from '../../components/ServiceLayout';
import { PHONE_DISPLAY } from '../../config/site.js';

export default function NaturalEnvironmentTeaching() {
  return (
    <ServiceLayout
      title="Natural Environment Teaching (NET) | Modern Steps ABA"
      description={`Natural Environment Teaching (NET) builds skills through play and daily routines at home. BCBA-led ABA from Modern Steps ABA across Virginia. Call ${PHONE_DISPLAY}.`}
      heading="Natural Environment Teaching (NET)"
      intro={[
        'Natural Environment Teaching (NET) teaches skills inside the activities your child already does every day - play, routines, and family life - instead of only at a table with flashcards. Because learning happens in real situations, skills generalize: your child uses them where they actually matter.',
        'NET is one of the core teaching approaches our BCBAs build into Modern Steps ABA treatment plans.',
      ]}
      sections={[
        {
          heading: 'How NET Works',
          bullets: [
            'Teaching is woven into play and daily routines your child already enjoys',
            'Sessions follow your child\'s interests and motivation, which keeps learning engaging',
            'Correct responses earn natural reinforcement - the activity itself, a favorite toy, or shared fun',
            'Skills are practiced across people, places, and materials so they stick',
          ],
        },
        {
          heading: 'Skills NET Builds',
          bullets: [
            'Requesting wants and needs (manding)',
            'Labeling objects, actions, and people (tacting)',
            'Social play, turn-taking, and early conversation',
            'Daily living skills like dressing, mealtime routines, and cleanup',
          ],
        },
        {
          heading: 'NET at Home',
          body: 'Because Modern Steps ABA delivers therapy in your home, NET happens in the real environment from day one - the kitchen, the playroom, the backyard. Caregivers see the techniques in action and learn to use the same strategies between sessions.',
        },
      ]}
      faqs={[
        {
          q: 'How is NET different from traditional table work?',
          a: 'Structured table teaching (DTT) practices one skill at a time in a controlled setting. NET teaches in natural activities and routines. Most plans use both - your BCBA decides the right mix for your child.',
        },
        {
          q: 'Where do NET sessions happen?',
          a: 'In your home, during everyday activities - playtime, snack, routines, and family interactions.',
        },
        {
          q: 'Is NET right for every child?',
          a: 'NET is a standard, evidence-based ABA teaching approach used with most learners. Your BCBA will recommend the approaches that fit your child\'s goals.',
        },
      ]}
    />
  );
}
