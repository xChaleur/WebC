import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ResumeSection = styled.section`
  background-color: #181818;
  padding: 100px 0;
`;

const ResumeContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
  }
`;

const ResumeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const SidebarColumn = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const MainColumn = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const SidebarTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ResumeItem = styled(motion.div)`
  margin-bottom: 40px;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to bottom, #6a11cb, #2575fc);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #e0e0e0;
`;

const JobInfo = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 15px;
  color: #b0b0b0;
  
  span {
    color: #9a65f0;
    margin: 0 10px;
  }
  
  em {
    font-style: italic;
    color: #909090;
  }
`;

const JobDescription = styled.div`
  margin-top: 15px;
`;

const BulletPoint = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: #b0b0b0;
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #9a65f0;
    font-size: 1.2rem;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 50px;
`;

const SkillCategoryContainer = styled.div`
  margin-bottom: 25px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #e0e0e0;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
  }
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -6px;
`;

const SkillsColumn = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 6px;
  margin-bottom: 12px;
  
  @media (max-width: 1200px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  
  @media (max-width: 992px) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  @media (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 10px;
  background: #2a2a2a;
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(106, 17, 203, 0.3);
  }
`;

const SkillName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  color: #d0d0d0;
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Resume = () => {
  // Skills organized by category
  const skillCategories = [
    {
      category: 'Networking',
      skills: [
        'Switches', 'Routers', 'Firewalls', 'Load Balancers', 'VLANs', 'VPNs', 'WAN', 'LAN',
        'RJ45', 'SFP', 'TCP/IP', 'DHCP', 'DNS', 'HTTP/HTTPS', 'FTP', 'SFTP', 'SSH', 'RDP',
        'SMTP', 'Zero Trust Networking', 'NACL', 'SSL/TLS'
      ]
    },
    {
      category: 'Cloud & Virtualization',
      skills: [
        'AWS', 'VMware NSX', 'Nutanix', 'Proxmox', 'EC2', 'Docker', 'IAAC', 'SAAC', 'PAAS'
      ]
    },
    {
      category: 'Security & Monitoring',
      skills: [
        'Firewall Configuration', 'IPS', 'OpsGenie', 'Site24/7', 'AWS CloudWatch', 'AirLock',
        'ZScaller', 'CyberArk', 'Splunk'
      ]
    },
    {
      category: 'Systems Administration',
      skills: [
        'SAN', 'NAS', 'RAID', 'ADUC', 'SCCM', 'Intune', 'Rubrik', 'Veeam', 'InfoBlox',
        'Lansweeper', 'Remote Desktop Services (RDS)', 'Ubuntu', 'CentOS', 'ArchLinux',
        'RedHat', 'Windows'
      ]
    },
    {
      category: 'Programming & Automation',
      skills: [
        'PowerShell', 'Python', 'Bash', 'Terraform', 'Jenkins', 'BitBucket', 'Cron Jobs',
        'Puppet', 'JSON', 'YAML', 'GitHub', 'VBS', 'HTML', 'Automation'
      ]
    },
    {
      category: 'Tools & Troubleshooting',
      skills: [
        'Webhooks', 'Wireshark', 'Traceroute', 'Netstat', 'Nslookup', 'ICMP/Ping',
        'TeamDynamix', 'JIRA', 'Office365', 'Service Desk', 'Documentation', 'SSO'
      ]
    }
  ];
  
  // Flatten skills for the old format if needed
  const skills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({ name: skill })));


  return (
    <ResumeSection id="resume">
      <ResumeContainer>
        <SectionTitle>
          <Title>Resume</Title>
        </SectionTitle>
        
        {/* Work Experience */}
        <ResumeRow>
          <SidebarColumn>
            <SidebarTitle>Work</SidebarTitle>
          </SidebarColumn>
          
          <MainColumn>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ResumeItem variants={itemVariants}>
                <CompanyName>• Leonardo DRS, Arlington, VA</CompanyName>
                <JobInfo>
                  Senior IT Support <span>&bull;</span> <em>MAY 2024 - Present</em>
                </JobInfo>
                <JobDescription>
                  <BulletPoint>Implemented, and managed the company's Active Directory (AD) domain controller,
                    ensuring secure authentication, streamlined access control, and efficient management
                    of user accounts and resources across the organization.</BulletPoint>
                  <BulletPoint>Implemented comprehensive security measures in alignment with NIST 800-171 and
                    CMMC compliance standards.</BulletPoint>
                  <BulletPoint>Administered and optimized network switch configurations(TCP/IP), ensuring efficient
                    traffic management and redundancy.</BulletPoint>
                  <BulletPoint>Configured and managed Jira servers, ensuring optimal performance, reliability,
                    and seamless integration with organizational workflows.</BulletPoint>
                  <BulletPoint>Advocated for the adoption of Linux within the company's infrastructure to
                    streamline software development processes, enhance flexibility, and improve overall
                    productivity for developers.</BulletPoint>
                  <BulletPoint>Collaborated closely and transparently with the cybersecurity team to ensure full
                    compliance with all security protocols. Actively communicated and aligned
                    development practices with security guidelines, fostering a proactive approach to
                    risk management and safeguarding company assets.</BulletPoint>
                  <BulletPoint>Monitored and managed unapproved software installations on user computers using
                    Airlock, ensuring compliance with security policies and mitigating potential risk.</BulletPoint>
                  <BulletPoint>Developed PowerShell and VBS, Bash, and Batch scripts to automate tasks such
                    as VM decommissioning, Active Directory account creation, and other routine
                    processes, significantly improving efficiency and reducing manual effort.</BulletPoint>
                  <BulletPoint>Used Zscaler (SAAS) to manage and monitor website access, enforcing web
                    security policies and ensuring safe browsing for endpoint users across the
                    organization.</BulletPoint>
                  <BulletPoint>Designed, configured, and maintained the RDS Broker and Session Pool, ensuring
                    secure, efficient, and scalable remote desktop services for users across the
                    organization.</BulletPoint>
                  <BulletPoint>Utilized Secrets Manager to securely store and manage sensitive information such as
                    API keys, passwords, and credentials, enhancing security and access control within
                    the organization.</BulletPoint>
                </JobDescription>
              </ResumeItem>
              
              <ResumeItem variants={itemVariants}>
                <CompanyName>• Dartmouth College, Hanover, NH</CompanyName>
                <JobInfo>
                  System Administrator <span>&bull;</span> <em>July 2021 - March 2024</em>
                </JobInfo>
                <JobDescription>
                  <BulletPoint>Managed VMware to Nutanix migrations, including user downtime scheduling.</BulletPoint>
                  <BulletPoint>Monitored SAAS softwares like Zcaller, Which was used as a webfirewall.</BulletPoint>
                  <BulletPoint>Experience with CyberArk, performing account reconciliation, password changes, and cybersecurity measures.</BulletPoint>
                  <BulletPoint>Conducted system backups and data recovery using Rubrik and Nutanix Recovery Points.</BulletPoint>
                  <BulletPoint>Generated Puppet certifications on Linux servers and managed software deployment through SCCM.</BulletPoint>
                  <BulletPoint>Trained employees across multiple departments on network operations, including login procedures, network management software, permissions, troubleshooting printing issues, security protocols, and software usage.</BulletPoint>
                  <BulletPoint>Configured and maintained the RDS Broker and Session Pool, ensuring secure, efficient, and scalable remote desktop services for users across the organization.</BulletPoint>
                  <BulletPoint>Utilized Site24/7 and OpsGenie to monitor VMs, promptly addressing performance issues.</BulletPoint>
                  <BulletPoint>Configured Pharos for printing services across the organization, improving efficiency.</BulletPoint>
                </JobDescription>
              </ResumeItem>
              
              <ResumeItem variants={itemVariants}>
                <CompanyName>• JJtech, Bowie, MD</CompanyName>
                <JobInfo>
                  Cloud Engineer <span>&bull;</span> <em>April 2018 - December 2020</em>
                </JobInfo>
                <JobDescription>
                  <BulletPoint>Integrated MFA with on-premise Active Directory (AD) for unified
                    identity and access management.</BulletPoint>
                  <BulletPoint>Configured infrastructure using CloudFormation (JSON/YAML) and Terraform; debugged and
                    optimized Infrastructure as Code (IaaC) deployments.</BulletPoint>
                  <BulletPoint>Monitored end-to-end infrastructure performance using CloudWatch, SNS, and detailed log
                    management to ensure optimal performance and quick issue resolution.</BulletPoint>
                </JobDescription>
              </ResumeItem>
            </motion.div>
          </MainColumn>
        </ResumeRow>
        
        {/* Skills */}
        <SkillsContainer>
          <SectionTitle>
            <Title>Skills</Title>
          </SectionTitle>
          
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategoryContainer key={categoryIndex}>
              <CategoryTitle>{category.category}</CategoryTitle>
              <SkillsRow>
                {category.skills.map((skill, skillIndex) => (
                  <SkillsColumn key={`${categoryIndex}-${skillIndex}`}>
                    <SkillItem
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.03, duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <SkillName>{skill}</SkillName>
                    </SkillItem>
                  </SkillsColumn>
                ))}
              </SkillsRow>
            </SkillCategoryContainer>
          ))}
        </SkillsContainer>
      </ResumeContainer>
    </ResumeSection>
  );
};

export default Resume;
