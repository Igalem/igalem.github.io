import React from 'react';
import { ExternalLink, Github, ArrowRight, BookOpen } from 'lucide-react';

const projects = [
    {
        title: "Airflow Autonomous Ops Agent",
        description: "An innovative AI agent that revolutionizes Airflow operations by autonomously monitoring, diagnosing, and repairing DAG failures using LLMs. It acts as a 24/7 on-call engineer, reducing downtime and manual intervention.",
        image: "/projects/airflow-agent.png",
        tags: ["Python", "Airflow", "LLM", "AI Agents", "Docker"],
        link: "https://medium.com/@igal.emona/revolutionizing-airflow-operations-meet-your-new-autonomous-ops-agent-04d075f69f68",
        article: "https://medium.com/@igal.emona/revolutionizing-airflow-operations-meet-your-new-autonomous-ops-agent-04d075f69f68",
        type: "Autonomous Operations"
    },
    {
        title: "Real-Time User Event Streaming",
        description: "A high-performance data pipeline streaming user events from a Bookstore web app to Cassandra using Kafka and Spark. Features real-time processing and scalable storage for analytical workloads.",
        image: "/projects/bookstore.png",
        tags: ["Java", "Kafka", "Spark Streaming", "Cassandra", "Spring Boot"],
        link: "https://github.com/Igalem/Streamer/tree/main/bookstore",
        github: "https://github.com/Igalem/Streamer/tree/main/bookstore",
        article: "https://medium.com/@igal.emona/real-time-user-event-streaming-from-bookstore-web-app-to-cassandra-with-kafka-and-spark-2d0ea7a94eee",
        type: "Data Engineering"
    },
    {
        title: "MCP AWS Cost Explorer",
        description: "A Model Context Protocol (MCP) server that provides access to AWS Cost Explorer. It enables AI agents to query, analyze, and report on AWS billing and usage data through a standardized interface.",
        image: "/projects/mcp-aws-cost.png",
        tags: ["TypeScript", "AWS SDK", "MCP", "Node.js", "AI Infrastructure"],
        link: "https://github.com/Igalem/mcp-aws-cost",
        github: "https://github.com/Igalem/mcp-aws-cost",
        type: "Cloud FinOps"
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 bg-white text-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-4 uppercase tracking-tight">Featured <span className="text-brand-blue">Projects</span></h2>
                    <div className="w-24 h-1.5 bg-brand-yellow mx-auto mb-6"></div>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Exploring the intersection of Big Data, AI, and Autonomous Systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group relative bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">{project.type}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white text-brand-blue text-xs font-bold rounded-full border border-brand-blue/10 shadow-sm uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-black text-brand-dark mb-4 leading-tight group-hover:text-brand-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-dark transition-colors"
                                    >
                                        View Project <ExternalLink size={16} />
                                    </a>
                                    {project.article && project.link !== project.article && (
                                        <a
                                            href={project.article}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-gray-200 text-brand-dark hover:bg-brand-yellow hover:text-brand-blue transition-all"
                                            title="Read Article"
                                        >
                                            <BookOpen size={20} />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-gray-200 text-brand-dark hover:bg-brand-yellow hover:text-brand-blue transition-all"
                                            title="View GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="https://github.com/Igalem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-blue font-black text-xl hover:gap-4 transition-all uppercase tracking-widest border-b-4 border-brand-yellow pb-1"
                    >
                        See more on GitHub <ArrowRight size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};
