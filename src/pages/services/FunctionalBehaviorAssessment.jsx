import ServiceLayout from '../../components/ServiceLayout';

export default function FunctionalBehaviorAssessment() {
  return (
    <ServiceLayout
      title="Functional Behavior Assessment (FBA) | Modern Steps ABA"
      description="A Functional Behavior Assessment (FBA) from a Modern Steps ABA BCBA identifies why challenging behavior happens and builds the plan to change it. Call (571) 866-0640."
      heading="Functional Behavior Assessment (FBA)"
      intro={[
        'A Functional Behavior Assessment (FBA) is the process of understanding why a child engages in challenging behavior. Every behavior serves a purpose - an FBA identifies that purpose, so the response addresses the cause instead of just the symptom.',
        'At Modern Steps ABA, an FBA conducted by a BCBA is the foundation of every treatment plan we write.',
      ]}
      sections={[
        {
          heading: 'What an FBA Looks At',
          bullets: [
            'Antecedents - what happens right before the behavior, and what seems to trigger it',
            'The behavior itself - what it looks like, how often it happens, and how intense it is',
            'Consequences - what happens afterward, and what the behavior achieves for the child',
            'The function - whether the behavior is seeking attention, escape, access to something, or sensory input',
          ],
        },
        {
          heading: 'What You Receive',
          bullets: [
            'A written assessment summarizing findings and the identified function of the behavior',
            'A behavior intervention plan with specific, practical strategies for home',
            'Skill-building goals that teach a safer, more effective replacement behavior',
            'Guidance for caregivers on responding consistently',
          ],
        },
        {
          heading: 'Why It Matters',
          body: 'Guessing at behavior leads to strategies that work by luck or not at all. An FBA replaces guessing with evidence, which is why assessments anchor ABA therapy - and why insurers require them. The result is a plan built around your child, not a template.',
        },
      ]}
      faqs={[
        {
          q: 'Who performs the FBA?',
          a: 'A Board Certified Behavior Analyst (BCBA) conducts the assessment, including observation, caregiver interviews, and data review.',
        },
        {
          q: 'Is an FBA required before therapy starts?',
          a: 'Yes - an assessment is part of starting services and is typically required for insurance authorization. It ensures the treatment plan targets the right skills and behaviors.',
        },
        {
          q: 'How long does the assessment take?',
          a: 'Timing varies by child and by insurance authorization. We will walk you through the expected timeline during your free consultation.',
        },
      ]}
    />
  );
}
