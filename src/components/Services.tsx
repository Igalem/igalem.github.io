import React from 'react';
import { Database, Server, Cpu, Globe, Lock, Brain } from 'lucide-react';


const techStack = [
  { name: 'Python', slug: 'python', color: '#e2db1c' },
  { name: 'AWS', slug: 'icloud', color: '#FF9900' },
  { name: 'GCP', slug: 'googlecloud', color: '#4285F4' },
  { name: 'Apache Spark', slug: 'apachespark', color: '#E25A1C' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
  { name: 'Apache Airflow', slug: 'apacheairflow', color: '#017CEE' },
  { name: 'Apache Kafka', slug: 'apachekafka', color: '#ddd8d9' },
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'Snowflake', slug: 'snowflake', color: '#29B5E8' },
  { name: 'Databricks', slug: 'databricks', color: '#FF3621' },
  { name: 'Datadog', slug: 'datadog', color: '#7B42BC' },
  { name: 'Kubernetes', slug: 'kubernetes', color: '#326CE5' },
  { name: 'BigQuery', slug: 'googlebigquery', color: '#669DF6' },
  { name: 'Bigtable', slug: 'googlebigtable', color: '#4285F4' },
  { name: 'Grafana', slug: 'grafana', color: '#F46800' },
  { name: 'Jenkins', slug: 'jenkins', color: '#D24939' },
  { name: 'Pulumi', slug: 'pulumi', color: '#8A3391' },
  { name: 'dbt', slug: 'dblp', color: '#FF694B' },
  { name: 'Git', slug: 'git', color: '#F05032' },
  { name: 'Linux', slug: 'linux', color: '#FCC624' },
];

const services = [
  { title: "Big Data Pipelines", icon: Database, desc: "Designing scalable ETL/ELT processes using AWS Glue, Athena, EMR, and BigQuery for high-volume workloads." },
  { title: "Cloud Architecture", icon: Server, desc: "Architecting secure, cloud-native solutions on AWS and GCP with serverless components (Lambda, Cloud Functions)." },
  { title: "Real-time Streaming", icon: Cpu, desc: "Processing high-volume streaming data using Kafka, Spark Streaming, and DataStream." },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">

          {/* Services List */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              MY <span className="text-brand-blue">EXPERTISE</span>
            </h2>
            <div className="grid gap-8">
              {services.map((s, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-yellow/50 transition-all hover:-translate-y-1 group">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="bg-brand-blue/20 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300 transform group-hover:rotate-6">
                      <s.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Proficiency - Logo Stickers */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              TECH <span className="text-brand-yellow">STACK</span>
            </h2>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 min-h-[400px]">
              <div className="grid grid-cols-4 gap-6 items-center justify-items-center">
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center group"
                    title={tech.name}
                  >
                    <div className="w-16 h-16 bg-brand-dark/50 rounded-2xl p-3 shadow-lg flex items-center justify-center relative overflow-hidden border border-white/10">
                      <img
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-[10px] mt-2 font-bold uppercase tracking-wider text-gray-400">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-500/30 flex items-center gap-3 group hover:border-indigo-400 transition-all">
                <div className="bg-indigo-500/20 p-2 rounded-lg group-hover:bg-indigo-500/40 transition-colors">
                  <Brain className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold">MCP Enabled</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-tighter">AI Agent Implementations</div>
                </div>
              </div>
              <div className="bg-brand-blue/30 p-4 rounded-xl border border-brand-blue/30 flex items-center gap-3 group hover:border-brand-yellow/50 transition-all">
                <div className="bg-brand-blue/20 p-2 rounded-lg group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                  <Cpu className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold">Autonomous</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-tighter">Intelligent Workflows</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};