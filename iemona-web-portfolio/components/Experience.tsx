import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Big Data Engineer",
    company: "BigaBid",
    location: "Israel",
    period: "Mar 2025 – Present",
    desc: [
      "Designed and implemented scalable Big Data pipelines on AWS for high-volume analytical workloads.",
      "Developed ETL/ELT processes using AWS Glue, Athena, S3, and EMR (EC2 & Serverless).",
      "Built distributed data processing jobs using Apache Spark (PySpark).",
      "Implemented orchestration and monitoring using Apache Airflow, CloudWatch, and Grafana."
    ]
  },
  {
    role: "Senior Data Engineer",
    company: "Tango Me",
    location: "Israel",
    period: "Feb 2024 – Mar 2025",
    desc: [
      "Owned end-to-end data features from design and architecture through development and deployment.",
      "Built and maintained high-scale data pipelines using Python, SQL, Airflow, and GCP services (BigQuery, BigTable).",
      "Processed high-volume streaming and batch data using Kafka and DataStream.",
      "Implemented CI/CD pipelines and containerized deployments using Docker."
    ]
  },
  {
    role: "Data Engineer",
    company: "Skai",
    location: "Israel",
    period: "May 2021 – Jan 2024",
    desc: [
      "Developed end-to-end ETL pipelines in AWS supporting large-scale data platforms.",
      "Built complex SQL transformations and dimensional models for analytics using Snowflake and PostgreSQL.",
      "Implemented orchestration using Apache Airflow and supported CI/CD pipelines using Jenkins and Pulumi."
    ]
  },
  {
    role: "BI Team Leader",
    company: "Bezeq",
    location: "Israel",
    period: "Oct 2019 – April 2021",
    desc: [
      "Led and managed the BI team, including roadmap planning and stakeholder management.",
      "Hands-on development of ETL/ELT solutions and BI infrastructure."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white text-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">WORK <span className="text-brand-blue">EXPERIENCE</span></h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A track record of building scalable data infrastructure and leading high-performance engineering teams.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>
                
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-brand-yellow border-4 border-white rounded-full z-10 shadow-md"></div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                  {idx % 2 === 0 ? (
                     <div className="md:text-left md:pl-12">
                        <h3 className="text-2xl font-bold text-brand-blue">{exp.role}</h3>
                        <h4 className="text-xl font-bold text-gray-800">{exp.company}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase tracking-wider mb-4 md:justify-start">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <ul className="list-disc list-outside ml-4 text-gray-600 text-sm leading-relaxed text-left space-y-1">
                          {exp.desc.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                     </div>
                  ) : (
                    <div className="md:text-right md:pr-12">
                        <h3 className="text-2xl font-bold text-brand-blue">{exp.role}</h3>
                        <h4 className="text-xl font-bold text-gray-800">{exp.company}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase tracking-wider mb-4 md:justify-end">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                         <ul className="list-disc list-outside ml-4 text-gray-600 text-sm leading-relaxed text-left md:text-right space-y-1" style={{direction: 'ltr'}}>
                          {exp.desc.map((d, i) => <li key={i} className="md:list-none">{d}</li>)}
                        </ul>
                    </div>
                  )}
                </div>

                {/* Empty Side for alignment */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};