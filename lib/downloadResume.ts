import { portfolioData } from './portfolioData';

/**
 * Generates a plain-text résumé from the portfolio data and triggers a
 * client-side download. Acts as a functional placeholder until a real PDF
 * résumé URL is wired into portfolioData.personal.resumeUrl.
 */
export function downloadResume() {
  const { personal, experience, skills, education, certifications } =
  portfolioData;

  const line = '='.repeat(60);
  const parts: string[] = [];

  parts.push(personal.name.toUpperCase());
  parts.push(personal.role);
  parts.push(`${personal.email} | ${personal.location}`);
  parts.push(`${personal.github} | ${personal.linkedin}`);
  parts.push(line);
  parts.push('');
  parts.push('SUMMARY');
  parts.push(personal.summary);
  parts.push('');

  parts.push('EXPERIENCE');
  experience.forEach((exp) => {
    parts.push(`- ${exp.role} — ${exp.company} (${exp.period})`);
    exp.description.forEach((d) => parts.push(`    • ${d}`));
    parts.push(`    Tech: ${exp.tech.join(', ')}`);
    parts.push('');
  });

  parts.push('SKILLS');
  skills.forEach((cat) => {
    parts.push(`- ${cat.title}: ${cat.skills.map((s) => s.name).join(', ')}`);
  });
  parts.push('');

  parts.push('EDUCATION');
  education.forEach((edu) => {
    parts.push(`- ${edu.degree}, ${edu.institution} (${edu.period})`);
  });
  parts.push('');

  parts.push('CERTIFICATIONS');
  certifications.forEach((cert) => {
    parts.push(`- ${cert.name} — ${cert.issuer} (${cert.date})`);
  });

  const blob = new Blob([parts.join('\n')], {
    type: 'text/plain;charset=utf-8'
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'HIRWA-Christian-Resume.txt';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}