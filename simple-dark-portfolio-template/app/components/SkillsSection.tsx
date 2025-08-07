export default function SkillsSection() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'TailwindCSS',
    'PostgreSQL',
    'GraphQL',
    'Git',
  ];

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-semibold text-white mb-4">Skills & Expertise</h2>

      {/* Codeworks & Core Skills */}
      <ul className="list-disc ml-6 text-gray-300 space-y-2 text-lg mb-8">
        <li>Problem Solving & Systems Thinking</li>
        <li>Cybersecurity & Network Analysis</li>
        <li>AI Automation with OpenAI & n8n</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Collaboration & Communication</li>
      </ul>

      {/* Technical Stack */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-lg">
        {skills.map((skill) => (
          <div key={skill} className="bg-gray-800 p-2 rounded text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}


