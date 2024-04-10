import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Onenex',
      companyUrl: 'https://www.onenex.co/',
      role: 'Site Reliability Engineer',
      started: 'September 2023',
      upto: 'present',
      tasks: [
        'Providing the complete cloud architecture (AWS)',
        'Delivering AWS Cloud Managed Services to clients.',
        'Designing, building, and maintaining CI/CD pipelines.',
        'Automating infrastructure provisioning, configuration management, and deployment processes.',
        'Monitoring and troubleshooting production issues.',
        'Ensuring availability, performance, and scalability of systems and services.',
        'Mentoring junior-level team members.',
      ],
    },
    {
      company: 'DevKTOps',
      companyUrl: 'https://www.devktops.com/',
      role: 'Lab Instructor / Support',
      started: 'February 2024',
      upto: 'present',
      tasks: [
        'AWS Certification Training.',
        'Assisting students in the lab sessions.',
        'Designing and developing lab exercises.',
        'Providing technical support to students.',
        'Grading lab assignments and exams.',
      ],
    },
    {
      company: 'Expa.AI',
      companyUrl: 'https://expa.ai/',
      role: 'DevOps Engineer',
      started: 'September 2021',
      upto: 'September 2023',
      tasks: [
        'Designing, building, and maintaining CI/CD pipelines.',
        'Automating infrastructure provisioning and configuration using Terraform and Ansible.',
        'Managing containerized applications using Docker and Kubernetes.',
        'Implemeting automated testing and monitoring for Node.js applications.',
        'Designing and implementing disaster recovery plans.',
        'Managing observability tools like Prometheus and Grafana',
      ],
    },
    {
      company: 'Expa.AI',
      companyUrl: 'https://expa.ai/',
      role: 'Software Engineer',
      started: 'September 2021',
      upto: 'February 2019',
      tasks: [
        'Architecting and developing scalable backend services using Node.js.',
        'Reviewing code and providing feedback to the team members.',
        'Maintaining and enforcing coding standards and best practices.',
        'Optimizing the codebase for performance and scalability.',
        'Communicating with clients and providing solutions to achieve their requirements.',
        'Mentoring and training junior-level team members.',
      ],
    },
  ],
};
