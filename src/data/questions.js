// NLNB Risk Assessment Questions
// id: unique | category: matches categories[] | text: shown to user | options: score 1 (low) → 5 (high)
// 26 questions across 6 categories, sourced from ETI 302 Deliverable 5

export const categories = [
  {
    id: 'infrastructure',
    name: 'Infrastructure & Legacy Systems',
    description: 'Risks from Fin, aging hardware, Windows Server 2010, and on-premises systems'
  },
  {
    id: 'vendor',
    name: 'Vendor & Third-Party Risk',
    description: 'Risks from reliance on external providers (VIA, PeoplePay, Webnet, etc.)'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Data Protection',
    description: 'Risks related to data breaches, network security, and security tooling'
  },
  {
    id: 'compliance',
    name: 'Cryptocurrency Compliance',
    description: 'Risks tied to crypto platforms, KYC/AML screening, and regulatory reporting (iReport)'
  },
  {
    id: 'ai',
    name: 'AI & Emerging Technology',
    description: 'Risks from AI reliance, fallback, monitoring, and model drift'
  },
  {
    id: 'talent',
    name: 'Talent & Operations',
    description: 'Risks from staffing levels, workload, check-ins, and certifications'
  }
]

export const questions = [
  // ========== INFRASTRUCTURE ==========
  {
    id: 'infra-1',
    category: 'infrastructure',
    text: 'Do you rely on third-party vendors for critical systems?',
    options: [
      { label: 'No reliance — all critical systems in-house', score: 1 },
      { label: 'Minimal reliance, only for non-critical systems', score: 2 },
      { label: 'Moderate reliance with tested in-house backups', score: 3 },
      { label: 'Heavy reliance with limited backups', score: 4 },
      { label: 'Fully dependent on third parties for critical systems', score: 5 }
    ]
  },
  {
    id: 'infra-2',
    category: 'infrastructure',
    text: 'How modernized is your core technology infrastructure?',
    options: [
      { label: 'Fully modernized, cloud-native', score: 1 },
      { label: 'Mostly modern with minor legacy components', score: 2 },
      { label: 'Mix of legacy and modern systems', score: 3 },
      { label: 'Mostly legacy systems', score: 4 },
      { label: 'Entirely legacy (e.g., Windows Server 2010 or older)', score: 5 }
    ]
  },
  {
    id: 'infra-3',
    category: 'infrastructure',
    text: 'Have you recently had an infrastructure failure?',
    options: [
      { label: 'No failures in the past 2+ years', score: 1 },
      { label: 'Minor failure resolved quickly in past year', score: 2 },
      { label: 'Moderate failure with limited customer impact', score: 3 },
      { label: 'Major failure in the past 6 months', score: 4 },
      { label: 'Frequent or ongoing failures', score: 5 }
    ]
  },
  {
    id: 'infra-4',
    category: 'infrastructure',
    text: 'How well does your infrastructure address single points of failure?',
    options: [
      { label: 'Full redundancy across all critical systems', score: 1 },
      { label: 'Redundancy in most critical systems', score: 2 },
      { label: 'Partial redundancy', score: 3 },
      { label: 'Known single points of failure, no plan to address', score: 4 },
      { label: 'Multiple unaddressed single points of failure', score: 5 }
    ]
  },
  {
    id: 'infra-5',
    category: 'infrastructure',
    text: 'What is your incident / disaster recovery (DR) plan?',
    options: [
      { label: 'Tested DR plan with recent successful failover drill', score: 1 },
      { label: 'DR plan exists, tested over 12 months ago', score: 2 },
      { label: 'DR plan exists but untested', score: 3 },
      { label: 'Partial DR plan in development', score: 4 },
      { label: 'No formal DR plan', score: 5 }
    ]
  },

  // ========== VENDOR ==========
  {
    id: 'vendor-1',
    category: 'vendor',
    text: 'How much visibility do you have into your vendors (including subcontractors)?',
    options: [
      { label: 'Full visibility including Nth-party subcontractors', score: 1 },
      { label: 'Visibility into most critical vendors', score: 2 },
      { label: 'Partial visibility, informal process', score: 3 },
      { label: 'Limited visibility, no enforcement', score: 4 },
      { label: 'No visibility into vendor operations', score: 5 }
    ]
  },
  {
    id: 'vendor-2',
    category: 'vendor',
    text: 'What is your response plan for vendor failure or downtime?',
    options: [
      { label: 'Tested failover to backup vendor within SLA', score: 1 },
      { label: 'Documented failover plan, not recently tested', score: 2 },
      { label: 'Informal fallback plan, no formal testing', score: 3 },
      { label: 'Ad hoc response only', score: 4 },
      { label: 'No vendor failure response plan', score: 5 }
    ]
  },
  {
    id: 'vendor-3',
    category: 'vendor',
    text: 'How credible are your vendors, and have you researched them thoroughly?',
    options: [
      { label: 'Full due diligence with ongoing audits', score: 1 },
      { label: 'Initial vetting plus periodic reviews', score: 2 },
      { label: 'Basic vetting at onboarding only', score: 3 },
      { label: 'Minimal vetting, no follow-up', score: 4 },
      { label: 'No vendor vetting or research done', score: 5 }
    ]
  },
  {
    id: 'vendor-4',
    category: 'vendor',
    text: 'How concentrated is your reliance on critical technology vendors (e.g., VIA, PeoplePay, Webnet)?',
    options: [
      { label: 'Fully diversified, no single vendor critical', score: 1 },
      { label: 'Some concentration, alternatives available', score: 2 },
      { label: 'Moderate concentration, switching costly', score: 3 },
      { label: 'Heavy reliance on a few key vendors', score: 4 },
      { label: 'Single vendor dependency for critical operations', score: 5 }
    ]
  },
  {
    id: 'vendor-5',
    category: 'vendor',
    text: 'How often are you checking in with vendors?',
    options: [
      { label: 'Monthly formal reviews with performance metrics', score: 1 },
      { label: 'Quarterly reviews with documented outcomes', score: 2 },
      { label: 'Annual reviews', score: 3 },
      { label: 'Only when issues arise', score: 4 },
      { label: 'No regular vendor check-ins', score: 5 }
    ]
  },

  // ========== CYBERSECURITY ==========
  {
    id: 'cyber-1',
    category: 'cybersecurity',
    text: 'How is cybersecurity awareness training delivered to employees?',
    options: [
      { label: 'Mandatory annual training plus ongoing phishing simulations', score: 1 },
      { label: 'Annual training, no simulations', score: 2 },
      { label: 'Ad hoc training when incidents occur', score: 3 },
      { label: 'Onboarding only, no ongoing training', score: 4 },
      { label: 'No cybersecurity training program', score: 5 }
    ]
  },
  {
    id: 'cyber-2',
    category: 'cybersecurity',
    text: 'Do you have multi-factor authentication (MFA) for sensitive data?',
    options: [
      { label: 'MFA enforced on all sensitive systems and accounts', score: 1 },
      { label: 'MFA enforced on most sensitive systems', score: 2 },
      { label: 'MFA on some systems, inconsistent coverage', score: 3 },
      { label: 'MFA available but not enforced', score: 4 },
      { label: 'No MFA in place', score: 5 }
    ]
  },
  {
    id: 'cyber-3',
    category: 'cybersecurity',
    text: 'How many security tools does your defense incorporate (SIEM, SOAR, EDR, etc.)?',
    options: [
      { label: 'Full integrated stack: SIEM + SOAR + EDR + more', score: 1 },
      { label: 'Three or more integrated tools', score: 2 },
      { label: 'Two core tools in use', score: 3 },
      { label: 'One basic tool (e.g., AV only)', score: 4 },
      { label: 'No dedicated security tools deployed', score: 5 }
    ]
  },
  {
    id: 'cyber-4',
    category: 'cybersecurity',
    text: 'How often do you update or hot-fix your cybersecurity tools in place?',
    options: [
      { label: 'Automated updates applied within days of release', score: 1 },
      { label: 'Monthly patch cycle with tracking', score: 2 },
      { label: 'Quarterly updates', score: 3 },
      { label: 'Ad hoc, no formal schedule', score: 4 },
      { label: 'Rarely or never updated', score: 5 }
    ]
  },

  // ========== CRYPTOCURRENCY COMPLIANCE ==========
  {
    id: 'comp-1',
    category: 'compliance',
    text: 'What cryptocurrency platform have you considered or adopted?',
    options: [
      { label: 'Fully vetted, regulated platform already in production', score: 1 },
      { label: 'Regulated platform selected, currently piloting', score: 2 },
      { label: 'Evaluating multiple regulated options', score: 3 },
      { label: 'Considering unregulated or unvetted platforms', score: 4 },
      { label: 'No platform evaluated or planned', score: 5 }
    ]
  },
  {
    id: 'comp-2',
    category: 'compliance',
    text: 'To use the platform, is there a KYC system to verify the identity of customers?',
    options: [
      { label: 'Automated KYC with continuous monitoring and audit trail', score: 1 },
      { label: 'KYC at onboarding plus periodic review', score: 2 },
      { label: 'KYC performed at onboarding only', score: 3 },
      { label: 'Informal ID checks, no formal KYC', score: 4 },
      { label: 'No KYC system in place', score: 5 }
    ]
  },
  {
    id: 'comp-3',
    category: 'compliance',
    text: 'How mature are your AML/KYC screening controls?',
    options: [
      { label: 'Automated screening with continuous monitoring and audit trail', score: 1 },
      { label: 'Automated screening, periodic manual review', score: 2 },
      { label: 'Partially automated, gaps in coverage', score: 3 },
      { label: 'Mostly manual, inconsistent application', score: 4 },
      { label: 'Minimal AML/KYC controls in place', score: 5 }
    ]
  },
  {
    id: 'comp-4',
    category: 'compliance',
    text: 'What is the state of your iReport software and logging for regulatory purposes?',
    options: [
      { label: 'Fully deployed with tamper-proof logs and automated validation', score: 1 },
      { label: 'Deployed with some manual reconciliation steps', score: 2 },
      { label: 'Partial deployment, inconsistent logging', score: 3 },
      { label: 'Basic logging only, no formal retention policy', score: 4 },
      { label: 'Not deployed / minimal regulatory logging', score: 5 }
    ]
  },

  // ========== AI ==========
  {
    id: 'ai-1',
    category: 'ai',
    text: "How much do you rely on AI to give information and advice to the bank's clients?",
    options: [
      { label: 'AI advisory only, human-in-the-loop required for all client output', score: 1 },
      { label: 'AI suggestions with human review on high-risk decisions', score: 2 },
      { label: 'Moderate reliance, some decisions automated', score: 3 },
      { label: 'Heavy reliance with limited human oversight', score: 4 },
      { label: 'Fully autonomous AI advice to clients, no oversight', score: 5 }
    ]
  },
  {
    id: 'ai-2',
    category: 'ai',
    text: 'Is there a back-up process or system if the AI fails?',
    options: [
      { label: 'Tested human fallback plus redundant AI systems', score: 1 },
      { label: 'Documented fallback process, untested', score: 2 },
      { label: 'Manual fallback known informally', score: 3 },
      { label: 'Limited fallback, significant downtime risk', score: 4 },
      { label: 'No fallback — AI failure halts operations', score: 5 }
    ]
  },
  {
    id: 'ai-3',
    category: 'ai',
    text: 'How are AI systems monitored for unusual behaviors or errors?',
    options: [
      { label: '24/7 automated monitoring with real-time alerts', score: 1 },
      { label: 'Daily monitoring with dashboards', score: 2 },
      { label: 'Weekly review of logs', score: 3 },
      { label: 'Ad hoc monitoring only', score: 4 },
      { label: 'No AI monitoring in place', score: 5 }
    ]
  },
  {
    id: 'ai-4',
    category: 'ai',
    text: 'How are deployed AI models monitored for bias, drift, and performance over time?',
    options: [
      { label: 'Automated continuous monitoring with bias and drift detection', score: 1 },
      { label: 'Periodic scheduled testing (quarterly or more frequent)', score: 2 },
      { label: 'Ad hoc testing when issues are suspected', score: 3 },
      { label: 'Testing done at deployment only', score: 4 },
      { label: 'No post-deployment testing', score: 5 }
    ]
  },

  // ========== TALENT ==========
  {
    id: 'talent-1',
    category: 'talent',
    text: 'Does your team have an adequate number of employees to successfully and safely run the company?',
    options: [
      { label: 'Fully staffed with buffer capacity for growth', score: 1 },
      { label: 'Fully staffed, no buffer', score: 2 },
      { label: 'Minor gaps in non-critical roles', score: 3 },
      { label: 'Understaffed in critical roles', score: 4 },
      { label: 'Severely understaffed across the board', score: 5 }
    ]
  },
  {
    id: 'talent-2',
    category: 'talent',
    text: 'Are your employees overworked?',
    options: [
      { label: 'Sustainable workload, minimal overtime', score: 1 },
      { label: 'Occasional overtime during peak periods', score: 2 },
      { label: 'Regular overtime for some teams', score: 3 },
      { label: 'Chronic overwork across several teams', score: 4 },
      { label: 'Widespread burnout driving attrition', score: 5 }
    ]
  },
  {
    id: 'talent-3',
    category: 'talent',
    text: 'Do you actively do check-ins with employees to ensure quality work is being performed?',
    options: [
      { label: 'Weekly 1:1s plus quarterly performance reviews', score: 1 },
      { label: 'Monthly check-ins with annual reviews', score: 2 },
      { label: 'Quarterly check-ins', score: 3 },
      { label: 'Annual reviews only', score: 4 },
      { label: 'No formal check-ins', score: 5 }
    ]
  },
  {
    id: 'talent-4',
    category: 'talent',
    text: 'Are your employees properly certified or qualified to perform their jobs?',
    options: [
      { label: 'All certified with ongoing continuing-education program', score: 1 },
      { label: 'Most certified with active training program', score: 2 },
      { label: 'Certifications held by key roles only', score: 3 },
      { label: 'Minimal certifications, on-the-job learning only', score: 4 },
      { label: 'No formal qualifications or certifications', score: 5 }
    ]
  }
]
