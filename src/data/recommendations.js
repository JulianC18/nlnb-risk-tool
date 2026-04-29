// ============================================================
// RISK RESPONSE RECOMMENDATIONS
// ============================================================
// Shown on the summary page based on which categories scored
// as high risk. Each category has a business recommendation
// and a technical recommendation, aligned with the Deliverable 5
// question set and mitigation table.
// ============================================================

export const recommendations = {
  infrastructure: {
    business:
      'Fund a multi-year modernization roadmap that retires end-of-life systems (Windows Server 2010, legacy Fin components), reduces third-party dependency for critical functions, and commits to an annual tested disaster recovery drill with executive sign-off.',
    technical:
      'Migrate core workloads to cloud or hybrid infrastructure with full redundancy on critical paths, eliminate known single points of failure, and implement an automated DR runbook with quarterly failover testing and documented RTO/RPO targets.'
  },
  vendor: {
    business:
      'Stand up a Third-Party Risk Management (TPRM) program: diversify away from single-vendor dependencies (VIA, PeoplePay, Webnet), enforce tiered SLAs with financial penalties, and require documented exit plans plus quarterly vendor performance reviews.',
    technical:
      'Deploy a vendor health monitoring dashboard with real-time status and SLA tracking, require SOC 2 Type II evidence annually, and maintain pre-provisioned backup vendor integrations that can be cut over within the failover SLA.'
  },
  cybersecurity: {
    business:
      'Mandate annual security awareness training with ongoing phishing simulations for all staff, fund a layered defensive tooling budget (SIEM + SOAR + EDR), and commission annual third-party penetration tests with board-level reporting.',
    technical:
      'Enforce MFA on every sensitive system (no exceptions), deploy an integrated SIEM/SOAR/EDR stack with 24/7 monitoring, and move patching to an automated pipeline with a <=30 day SLA for critical CVEs and same-day hot-fix capability.'
  },
  compliance: {
    business:
      'Select a fully regulated cryptocurrency platform partner before launch, staff a dedicated crypto compliance function responsible for AML/KYC oversight, and establish board-level reporting on regulatory posture (FDIC, state, and crypto-specific).',
    technical:
      'Automate the iReport pipeline with tamper-proof logging and retention aligned to regulation, deploy automated KYC at onboarding plus continuous AML screening with audit trails, and integrate screening controls directly into the crypto platform onboarding flow.'
  },
  ai: {
    business:
      'Create an AI governance committee that owns model risk policy, sets clear rules on bias and accuracy, requires human-in-the-loop for client-facing advice, and trains staff on approved AI usage before deployment.',
    technical:
      'Stand up a model monitoring platform with automated bias, drift, and performance checks; implement a tested human-fallback procedure plus redundant systems for AI-driven workflows; and enforce model-registry sign-off with kill-switch controls before production release.'
  },
  talent: {
    business:
      'Build a staffing plan that right-sizes critical roles, partner with local universities and post-grad programs to build a hiring pipeline, and invest in cross-training plus competitive compensation to retain institutional knowledge.',
    technical:
      'Standardize a weekly 1:1 plus quarterly review cadence, fund role-specific certification and continuing-education tracking, and document critical system knowledge in a shared runbook repository to eliminate key-person risk.'
  }
}
