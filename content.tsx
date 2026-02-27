import React from 'react';

export const pageContent: Record<string, { title: string; content: React.ReactNode }> = {
  'emotional-wellbeing': {
    title: 'Emotional Wellbeing',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          Modern work brings pressure, uncertainty, and constant change. GOQii offers a confidential and approachable space where employees can talk, reflect, and navigate challenges without fear of judgment.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What employees can access</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Private, one-to-one conversations with trained professionals</li>
            <li>A safe space to discuss work stress, personal concerns, and emotional challenges</li>
            <li>Flexible access that fits into busy work schedules</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Designed for trust</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Conversations remain confidential</li>
            <li>Employees stay in control of their personal information</li>
            <li>No data is shared without clear consent</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          GOQii’s approach is human, respectful, and built to feel natural — not clinical or intrusive.
        </p>
      </div>
    )
  },
  'physical-health': {
    title: 'Physical Health',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          GOQii helps employees stay active and energized through simple, everyday actions that fit naturally into work life.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What this includes</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Live and on-demand fitness sessions</li>
            <li>Movement routines designed for all levels</li>
            <li>Guided yoga, flexibility, and mobility sessions</li>
            <li>Simple habit-based activities that encourage consistency</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Built for real workdays</h3>
          <p className="text-slate-600 mb-4">
            Activities are designed to fit between meetings, deadlines, and responsibilities — without pressure or performance expectations.
          </p>
          <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
            The goal is steady participation, not perfection.
          </p>
        </div>
      </div>
    )
  },
  'team-challenges': {
    title: 'Team Challenges',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          GOQii brings teams together through light, inclusive activities that encourage participation and connection.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">How team challenges work</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Low-pressure activities that anyone can join</li>
            <li>Designed for remote, hybrid, and in-office teams</li>
            <li>Focus on shared experiences rather than competition</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why teams enjoy them</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Encourages connection across departments</li>
            <li>Creates moments of shared participation</li>
            <li>Easy to join, easy to step back</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          Challenges are designed to feel social and enjoyable — never forced.
        </p>
      </div>
    )
  },
  'integrations': {
    title: 'Integrations',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          GOQii is designed to fit seamlessly into existing enterprise environments.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What we integrate with</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Identity and access systems for easy login</li>
            <li>HR and people management platforms</li>
            <li>Secure data connections with minimal setup</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why it matters</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Faster rollout across organizations</li>
            <li>Fewer tools for employees to manage</li>
            <li>Minimal disruption to existing workflows</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          Integrations are simple, secure, and designed for scale.
        </p>
      </div>
    )
  },
  'about-us': {
    title: 'About GOQii Health Engage',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          GOQii Health Engage is built for organizations that want to create workplaces where people feel guided, included, and able to perform consistently.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our approach</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Human-led guidance</li>
            <li>Simple daily actions</li>
            <li>Technology that fits naturally into work life</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-slate-600">
            We believe workplace initiatives should feel supportive and practical — not complex or overwhelming.
          </p>
          <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
            Our platform is designed for real people, real workdays, and long-term participation.
          </p>
        </div>
      </div>
    )
  },
  'careers': {
    title: 'Careers at GOQii',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          At GOQii, we’re building experiences that matter at work.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What we value</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Empathy and clarity</li>
            <li>Ownership and accountability</li>
            <li>Thoughtful design and problem-solving</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why work with us</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Work on products that impact millions of employees</li>
            <li>Collaborate across design, technology, and human services</li>
            <li>Be part of a culture that values people as much as outcomes</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          If you care about building meaningful workplace experiences, we’d love to hear from you.
        </p>
      </div>
    )
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          Privacy is foundational to how GOQii works.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our commitment</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Employees retain control of their personal information</li>
            <li>Data is collected only when necessary</li>
            <li>Usage is transparent and clearly communicated</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What organizations see</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Aggregated participation insights</li>
            <li>No individual-level personal details</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          GOQii is built on trust, with clear boundaries that respect employee privacy at all times.
        </p>
      </div>
    )
  },
  'security': {
    title: 'Security',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          GOQii follows enterprise-grade security practices to protect organizational and employee data.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Security measures include</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Secure access controls</li>
            <li>Data encryption in transit and at rest</li>
            <li>Regular monitoring and audits</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Designed for enterprise needs</h3>
          <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
            Our platform is built to meet the expectations of large organizations, public institutions, and regulated industries.
          </p>
        </div>
      </div>
    )
  },
  'hr-toolkit': {
    title: 'HR Toolkit',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          The HR Toolkit provides practical resources to help HR teams roll out and manage workplace initiatives effectively.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What you’ll find</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Communication templates</li>
            <li>Rollout guides and best practices</li>
            <li>Tips for driving participation</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          All resources are designed for real-world HR challenges — clear, practical, and easy to use.
        </p>
      </div>
    )
  },
  'case-studies': {
    title: 'Case Studies',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          Explore how organizations across industries use GOQii to create healthier work patterns and stronger team participation.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What each case study includes</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Organizational context</li>
            <li>Approach and rollout</li>
            <li>Participation insights</li>
            <li>Learnings and outcomes</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          Case studies focus on practical impact — not marketing hype.
        </p>
      </div>
    )
  },
  'help-center': {
    title: 'Help Center',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          The Help Center provides clear answers and guidance for both employees and HR teams.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Get help with</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Platform access</li>
            <li>Common questions</li>
            <li>Step-by-step usage guides</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          Designed to be simple, searchable, and easy to navigate.
        </p>
      </div>
    )
  },
  'contact-support': {
    title: 'Contact Support',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-600 leading-relaxed">
          Have a question or need assistance?
        </p>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our support team is here to help with:</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Platform access and usage</li>
            <li>General inquiries</li>
            <li>Technical questions</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-slate-800 italic border-l-4 border-blue-500 pl-4 py-2">
          Reach out anytime, and we’ll respond as quickly as possible.
        </p>
      </div>
    )
  }
};

export const ContentPage = ({ pageId }: { pageId: string }) => {
  const page = pageContent[pageId];

  if (!page) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Page Not Found</h2>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-10 pb-6 border-b border-slate-100">{page.title}</h1>
          {page.content}
        </div>
      </div>
    </div>
  );
};
