/**
 * Lightweight i18n system — EN / ES translations for all pages
 */

const i18n = {
    en: {
        // Nav
        'nav.work': 'Work', 'nav.services': 'Services', 'nav.skills': 'Skills',
        'nav.process': 'Process', 'nav.contact': 'Contact', 'nav.lang': 'ES',

        // Hero
        'hero.label': 'Fernando Perez Gonzalez',
        'hero.tagline': 'Computer Systems Engineering Student',
        'hero.line1': 'I build systems that scale.',
        'hero.line2': 'To help you grow.',
        'hero.bio': "Computer Systems & Telecommunications Engineering student at Universidad Iberoamericana, graduating May 2027. I translate business needs into efficient technology solutions — from ETL pipeline automation for Fortune 500 companies to Zero Trust cloud architectures. Former Data & Strategy Intern at Castrol (BP) and Cloud Architecture Intern at Huawei Cloud.",
        'hero.cta.work': 'View my work', 'hero.cta.contact': 'Get in touch',

        // Trusted By
        'trusted.label': 'Trusted by teams at',

        // Metrics
        'metric.reports': 'Reporting Time Reduction', 'metric.costs': 'Cloud Cost Reduction',
        'metric.users': 'Users Trained & Onboarded', 'metric.security': 'SQL Injection Rate',

        // Services
        'services.tag': 'What I Do', 'services.heading': 'End-to-end systems that actually work',
        'services.sub': "From cloud architecture to automated workflows. I don't just write code; I design systems that solve business problems.",
        'service.cloud.title': 'Cloud Architecture & FinOps',
        'service.cloud.desc': 'Huawei Cloud solutions with cost optimization strategies. Serverless architectures that reduce compute costs by up to 35%.',
        'service.cloud.1': 'Huawei Cloud (ECS, OBS, FunctionGraph)',
        'service.cloud.2': 'Serverless & containerized deployments',
        'service.cloud.3': 'FinOps & cost optimization',
        'service.auto.title': 'Process Automation & ETL',
        'service.auto.desc': 'Automated pipelines that eliminate manual work. From SAP data extraction to real-time dashboards with Power BI and Power Query.',
        'service.auto.badge': 'Most requested',
        'service.auto.1': 'ETL pipeline design (Power Query, Python)',
        'service.auto.2': 'n8n workflow automation', 'service.auto.3': 'SAP ERP integration',
        'service.bi.title': 'Business Intelligence & AI',
        'service.bi.desc': 'Data pipelines, predictive forecasting (+/- 15% accuracy), and AI-powered assistants with enterprise-grade security.',
        'service.bi.1': 'Power BI dashboards & forecasting', 'service.bi.2': 'LLM integration (Text-to-SQL)',
        'service.bi.3': 'Zero Trust security architecture',

        // Professional Work cards
        'work.pro.tag': 'Professional Work', 'work.pro.heading': 'Projects that prove the promise',
        'work.pro.sub': 'Real systems built for real companies. Every project includes metrics, tools used, and scope.',
        'work.castrol.title': 'ETL Pipeline Automation & Business Intelligence',
        'work.castrol.desc': 'Automated ETL pipeline for SAP ERP data extraction, reducing reporting time by 80% and enabling monthly sales forecasting with +/- 15% accuracy.',
        'work.castrol.metric': '80% time reduction', 'work.castrol.tech': 'Power BI · Power Query · SAP',
        'work.castrol.cta': 'View case study →',
        'work.huawei.title': 'Secure Text-to-SQL Assistant with LLMs',
        'work.huawei.desc': 'AI assistant using Llama 3.1 for natural language to SQL translation with Zero Trust security architecture achieving 0% SQL injection rate.',
        'work.huawei.metric': '0% SQL injection rate', 'work.huawei.tech': 'Llama 3.1 · GaussDB · RBAC',
        'work.huawei.cta': 'View case study →',
        'work.homelab.title': 'Zero Trust Architecture & Virtualization',
        'work.homelab.desc': 'Homelab running on 4C/8GB hardware with Proxmox VE, Cloudflare Tunnels, and Zero Trust Network Access eliminating all port forwarding.',
        'work.homelab.metric': '100% port exposure eliminated', 'work.homelab.tech': 'Proxmox · Cloudflare · Nginx',
        'work.homelab.cta': 'View case study →',
        'work.valedor.title': 'Custom CRM for Social NGO',
        'work.valedor.desc': 'Custom CRM plugin for Mi Valedor NGO built on WordPress, tracking beneficiaries, workshops, and sales — saving 10-20 admin hours per week.',
        'work.valedor.metric': '10-20 hrs saved/week', 'work.valedor.tech': 'PHP · WordPress · RBAC',
        'work.valedor.cta': 'View case study →',

        // Extra professional
        'work.extra.tag': 'More Professional Work', 'work.extra.heading': 'Additional projects',
        'work.extra.sub': 'Technical work that rounds out my professional experience.',
        'work.extra2.tag': 'Additional Projects', 'work.extra2.heading': 'More work worth mentioning',
        'work.siem.title': 'Serverless SIEM Integration via OBS Logs',
        'work.siem.desc': 'Event-driven architecture using Huawei Cloud FunctionGraph to ingest database audit logs into Splunk/Wazuh SIEMs with batch processing to reduce costs.',
        'work.siem.tech': 'FunctionGraph · OBS · Splunk',

        // Academic cards
        'work.aca.tag': 'Academic & Personal Projects', 'work.aca.heading': 'Learning by building',
        'work.aca.sub': 'University projects and independent work that shaped my approach to problem-solving.',
        'work.uni.title': 'University Management System',
        'work.uni.desc': 'Full-stack web application for course registration, grade tracking, and student-faculty communication.',
        'work.uni.tech': 'JavaScript · Node.js · SQL',
        'work.n8n.title': 'Enterprise Orchestration & OSINT',
        'work.n8n.desc': 'n8n workflow for inventory management with Google Sheets. OSINT pipeline using Apify for lead extraction and Perplexity API for hyper-personalized outreach.',
        'work.n8n.tech': 'n8n · Apify · Perplexity API',

        // Skills
        'skills.tag': 'Capabilities', 'skills.heading': 'What I bring to the table',
        'skills.cloud.title': 'Cloud & Architecture', 'skills.data.title': 'Data & BI',
        'skills.auto.title': 'Automation & Dev', 'skills.soft.title': 'Soft Skills',
        'skill.communication': 'Technical Communication', 'skill.incident': 'Incident Management (ITIL/SLA)',
        'skill.training': 'User Training & Enablement', 'skill.adaptability': 'Adaptability',
        'skill.learning': 'Continuous Learning', 'skill.client': 'Client Relations',

        // Process
        'process.tag': 'How I Work', 'process.heading': 'A process built for results',
        'process.sub': 'No surprises. No scope creep. Just systems that work.',
        'process.1.title': 'Discovery',
        'process.1.desc': 'I analyze your current workflow, identify bottlenecks, and define what success looks like with clear metrics.',
        'process.2.title': 'Design',
        'process.2.desc': 'Architecture and automation design tailored to your stack. No one-size-fits-all templates.',
        'process.3.title': 'Build',
        'process.3.desc': 'Clean, documented code with regular updates. You see progress, not just promises.',
        'process.4.title': 'Deploy & Optimize',
        'process.4.desc': 'Smooth handoff with documentation. I stay available for tweaks and optimizations.',

        // Tech + Connect + Contact + CV + Footer
        'tech.tag': 'Tech Stack', 'tech.heading': 'Tools I use to build',
        'connect.tag': "Let's Connect",
        'connect.text': "I regularly share insights about automation, cloud infrastructure, and business intelligence on LinkedIn. Always open to interesting conversations about tech, entrepreneurship, and how automation can transform businesses.",
        'connect.linkedin': 'LinkedIn',
        'contact.heading': "Let's build something together",
        'contact.sub': 'Open to remote opportunities and automation consulting. Based in Mexico City, working worldwide.',
        'contact.email': 'businesscontact@otomatelabs.com', 'contact.call': 'Book a call',
        'footer.tagline': 'Automation that scales.', 'footer.copy': '© 2026 Fernando Perez Gonzalez',

        // --- PROJECT PAGE SHARED ---
        'project.back': 'Back to projects',
        'project.challenge': 'The Challenge', 'project.built': 'What I Built',
        'project.results': 'Results', 'project.tools': 'Tools & Technologies',
        'project.details': 'Project Details',
        'sidebar.client': 'Client', 'sidebar.duration': 'Duration', 'sidebar.role': 'Role',
        'sidebar.metric': 'Key Metric', 'sidebar.type': 'Type', 'sidebar.team': 'Team Size',
        'sidebar.org': 'Organization', 'sidebar.impact': 'Impact',

        // --- CASTROL CASE STUDY ---
        'castrol.title': 'ETL Pipeline Automation & Business Intelligence',
        'castrol.subtitle': 'Automated ETL pipeline for SAP ERP data extraction, reducing reporting time by 80% and enabling monthly sales forecasting with +/- 15% accuracy.',
        'castrol.client': 'Castrol (BP) - CVO Division',
        'castrol.duration': '6 months', 'castrol.role': 'Data & Strategy Intern',
        'castrol.metricNum': '80%', 'castrol.metricLabel': 'Reduction in reporting time',
        'castrol.ch1': 'The commercial sales team relied on inefficient manual processes for data consolidation. Extracting flat files from ERP (SAP), transforming them, and creating PowerPoint presentations consumed multiple days of work each week.',
        'castrol.ch2': 'This data latency prevented agile decision-making, increased the risk of human errors, and made it difficult to generate accurate sales forecasts to prevent stockouts.',
        'castrol.b1': 'I designed and deployed an automated ETL (Extract, Transform, Load) pipeline. Implemented Power Query flows to ingest, clean, and transform SAP flat exports programmatically. Built an interactive Power BI dashboard centralizing three critical data sources with modular filters by SKU, distributor, and time period.',
        'castrol.b.1': 'Power Query flows to ingest, clean, and transform SAP flat exports programmatically',
        'castrol.b.2': 'Interactive Power BI dashboard centralizing three critical data sources',
        'castrol.b.3': 'Modular approach with granular filters by SKU, distributor, and time period',
        'castrol.b.4': 'Elimination of static individual reports in favor of a dynamic solution',
        'castrol.r1': 'The automation reduced report generation cycle time by 80%, freeing dozens of weekly hours for the team. Clean data availability enabled monthly sales forecasting models with sustained +/- 15% accuracy.',
        'castrol.r2': 'The system was adopted by over 15 users, whom I personally trained to ensure long-term maintainability of the solution.',

        // --- HUAWEI CASE STUDY ---
        'huawei.title': 'Secure Text-to-SQL Assistant with LLMs',
        'huawei.subtitle': 'AI assistant using Llama 3.1 for natural language to SQL translation with Zero Trust security architecture achieving 0% SQL injection rate.',
        'huawei.client': 'Enterprise Telecom Clients',
        'huawei.duration': '72 hours (POC)', 'huawei.role': 'Cloud Architect Intern',
        'huawei.metricNum': '0%', 'huawei.metricLabel': 'SQL Injection Rate',
        'huawei.ch1': 'Corporate clients needed to democratize access to data in relational databases (MySQL, PostgreSQL, GaussDB) for business users without SQL knowledge.',
        'huawei.ch2': 'The main technical challenge wasn\'t just generating queries with AI, but ensuring absolute database security against model hallucinations or accidental SQL injections that could alter or destroy critical production data.',
        'huawei.b1': 'I developed a generative AI architecture using the Llama 3.1 (8B) model. Applied advanced Prompt Engineering by injecting the database schema and data dictionary as dynamic context. Applied least-privilege RBAC: the AI operated under strict read-only (SELECT) credentials with validation guardrails and query parameterization before execution.',
        'huawei.b.1': 'Advanced Prompt Engineering injecting database schema as dynamic context',
        'huawei.b.2': 'Least privilege principle (RBAC): AI under strict read-only (SELECT) credentials',
        'huawei.b.3': 'Validation guardrails and query parameterization before execution',
        'huawei.b.4': 'Blocking of DML and DDL commands to prevent accidental modifications',
        'huawei.r1': 'A functional prototype was delivered in record time (3 days) with a high accuracy rate in translating natural language to SQL. The security architecture proved robust, ensuring no LLM-generated query could execute destructive commands.',
        'huawei.r2': 'The solution validated the feasibility of integrating AI with transactional databases without compromising corporate integrity.',

        // --- HOMELAB CASE STUDY ---
        'homelab.title': 'Zero Trust Architecture & Homelab Virtualization',
        'homelab.subtitle': 'Homelab running on 4C/8GB hardware with Proxmox VE, Cloudflare Tunnels, and Zero Trust Network Access eliminating all port forwarding.',
        'homelab.client': 'Personal Infrastructure', 'homelab.duration': 'Continuous',
        'homelab.role': 'Systems Administrator',
        'homelab.metricNum': '100%', 'homelab.metricLabel': 'Port exposure eliminated',
        'homelab.ch1': 'Deploy and manage multiple network, development, and privacy services on highly restricted hardware (4 Cores, 8GB RAM, 70GB Storage), maximizing performance without subscription costs.',
        'homelab.ch2': 'It was imperative to expose certain web services to the internet without compromising the local network by opening ports on the ISP router, mitigating automated attack and vulnerability scanning risks.',
        'homelab.b1': 'I implemented a Type 1 hypervisor (Proxmox VE) optimizing resource usage with LXC containers instead of heavy VMs. Bypassed ISP hardware by disabling its DHCP server and delegating DNS resolution and traffic filtering to AdGuard Home. Configured ZTNA with Cloudflare Tunnels (cloudflared) integrated with Nginx Proxy Manager for automated SSL termination.',
        'homelab.b.1': 'Virtualization using LXC containers instead of heavy virtual machines',
        'homelab.b.2': 'ISP hardware bypass by disabling its DHCP server',
        'homelab.b.3': 'DNS resolution and traffic filtering delegated to AdGuard Home',
        'homelab.b.4': 'Zero Trust Network Access (ZTNA) with Cloudflare Tunnels',
        'homelab.b.5': 'Nginx Proxy Manager for automated SSL termination (Let\'s Encrypt)',
        'homelab.r1': 'Exceptionally high service density was achieved on limited hardware without performance degradation. The network architecture ensured total ISP privacy and DNS-level telemetry blocking.',
        'homelab.r2': 'Reverse tunnel implementation completely eliminated the need for port forwarding, ensuring internal infrastructure remains invisible and protected against external threats with end-to-end encryption.',

        // --- VALEDOR CASE STUDY ---
        'valedor.title': 'Custom CRM System for NGO',
        'valedor.subtitle': 'Custom CRM plugin for a social reintegration NGO, built on WordPress to track beneficiaries, workshops, and sales while saving 10-20 administrative hours per week.',
        'valedor.client': 'Mi Valedor (NGO - Social Reintegration)',
        'valedor.duration': '3 months', 'valedor.role': 'Full-Stack Developer / Business Analyst',
        'valedor.metricNum': '10-20', 'valedor.metricLabel': 'Hours saved per week',
        'valedor.ch1': 'Mi Valedor, an NGO dedicated to the reintegration of vulnerable populations (homeless, migrants), was managing critical beneficiary information through fragmented paper and spreadsheet processes.',
        'valedor.ch2': 'They needed a centralized system to track medical records, workshop attendance, and magazine sales. The main technical restriction was budget and operational: the system had to be built on their existing WordPress infrastructure to avoid external server maintenance costs, while ensuring sensitive data privacy (PII).',
        'valedor.b1': 'I acted as both business analyst and developer. First, I translated the director\'s requirements into data flow diagrams (ERD) to map the user journey and obtain approval before writing code. To meet the infrastructure constraint, I developed a custom CRM plugin from scratch.',
        'valedor.b.1': 'Custom CRM plugin developed from scratch on existing WordPress',
        'valedor.b.2': 'Custom Post Types (CPT) and Advanced Custom Fields (ACF) for relational databases within the CMS',
        'valedor.b.3': 'PHP hooks to automate business logic (linking sales and attendance to beneficiary records)',
        'valedor.b.4': 'Strict Role-Based Access Control (RBAC) to protect sensitive beneficiary data',
        'valedor.r1': 'The system eliminated paper dependency and data fragmentation, saving the administrative team an estimated 10-20 hours per week. The NGO now has a centralized, intuitive dashboard for real-time monitoring of progress, sales, and active beneficiary history.',
        'valedor.r2': 'By packaging the solution as a custom plugin, I ensured the system is modular, exportable, and easy to maintain for the organization.',

        // --- UNIVERSITY CASE STUDY ---
        'uni.title': 'University Management System',
        'uni.subtitle': 'Full-stack web application for course registration, grade tracking, and student-faculty communication.',
        'uni.type': 'University Project', 'uni.duration': '1 semester',
        'uni.role': 'Full Stack Developer', 'uni.team': '3 people',
        'uni.ch1': 'The university\'s existing course registration system was outdated, slow, and prone to errors during peak enrollment periods. Students struggled to find available courses, professors had no easy way to manage grades.',
        'uni.ch2': 'My goal was to build a modern, intuitive platform that could handle peak registration traffic while giving all stakeholders real-time visibility into courses, grades, and academic progress.',
        'uni.b1': 'I designed and developed a complete university management system from scratch.',
        'uni.b.1': 'Student portal for course browsing, registration, and schedule management',
        'uni.b.2': 'Professor dashboard for grade entry, attendance tracking, and student communication',
        'uni.b.3': 'Admin panel for course creation, enrollment management, and reporting',
        'uni.b.4': 'Real-time notifications for registration deadlines and grade updates',
        'uni.b.5': 'Responsive design working on desktop and mobile',
        'uni.r1': 'The system reduced course registration time from hours to minutes. Professors saved 5+ hours per week on administrative tasks. The university administration gained real-time insights into enrollment trends.',

        // --- SOCIAL CASE STUDY ---
        'social.title': 'Community Data Dashboard',
        'social.subtitle': 'Built a dashboard for a local NGO to track community health metrics and visualize impact over time.',
        'social.org': 'Local Community NGO', 'social.duration': '4 months',
        'social.role': 'Data Analyst & Developer', 'social.metric': '3 days saved per report',
        'social.ch1': 'The NGO had been collecting community health data for years but had no effective way to analyze or present it. Data lived in scattered spreadsheets.',
        'social.ch2': 'They needed a centralized dashboard that could aggregate data from multiple sources, provide visual insights, and help them tell compelling stories to donors and stakeholders.',
        'social.b1': 'I developed an end-to-end data solution for the organization.',
        'social.b.1': 'Data pipeline to clean and consolidate information from multiple sources',
        'social.b.2': 'Interactive dashboard with filters for time periods, demographics, and program areas',
        'social.b.3': 'Automated reporting that generates monthly impact summaries',
        'social.b.4': 'Visual charts showing trends in health outcomes, attendance, and program reach',
        'social.b.5': 'Export functionality for presentations and grant applications',
        'social.r1': 'The dashboard transformed how the NGO operates. They can now identify at-risk communities in real time, measure program effectiveness with concrete metrics, and present clear evidence of impact to donors. Monthly report generation that used to take 3 days now happens automatically.',
    },

    es: {
        // Nav
        'nav.work': 'Proyectos', 'nav.services': 'Servicios', 'nav.skills': 'Habilidades',
        'nav.process': 'Proceso', 'nav.contact': 'Contacto', 'nav.lang': 'EN',

        // Hero
        'hero.label': 'Fernando Perez Gonzalez',
        'hero.tagline': 'Estudiante de Ingeniería en Sistemas',
        'hero.line1': 'Construyo sistemas que escalan.',
        'hero.line2': 'Para ayudarte a crecer.',
        'hero.bio': "Estudiante de Ingeniería en Sistemas de Cómputo y Telecomunicaciones en la Universidad Iberoamericana, graduándome en mayo de 2027. Traduzco necesidades de negocio en soluciones tecnológicas eficientes — desde automatización de pipelines ETL para Fortune 500 hasta arquitecturas cloud Zero Trust. Ex becario de Datos y Estrategia en Castrol (BP) y Arquitectura Cloud en Huawei Cloud.",
        'hero.cta.work': 'Ver mis proyectos', 'hero.cta.contact': 'Contactarme',

        // Trusted By
        'trusted.label': 'Equipos que confían',

        // Metrics
        'metric.reports': 'Reducción en Tiempo de Reportes', 'metric.costs': 'Reducción de Costos Cloud',
        'metric.users': 'Usuarios Capacitados', 'metric.security': 'Tasa de Inyección SQL',

        // Services
        'services.tag': 'Qué Hago', 'services.heading': 'Sistemas de principio a fin que funcionan',
        'services.sub': "Desde arquitectura cloud hasta flujos automatizados. No solo escribo código; diseño sistemas que resuelven problemas de negocio.",
        'service.cloud.title': 'Arquitectura Cloud & FinOps',
        'service.cloud.desc': 'Soluciones en Huawei Cloud con estrategias de optimización de costos. Arquitecturas serverless que reducen costos de cómputo hasta 35%.',
        'service.cloud.1': 'Huawei Cloud (ECS, OBS, FunctionGraph)',
        'service.cloud.2': 'Despliegues serverless y contenedores',
        'service.cloud.3': 'FinOps y optimización de costos',
        'service.auto.title': 'Automatización de Procesos & ETL',
        'service.auto.desc': 'Pipelines automatizados que eliminan trabajo manual. Desde extracción de datos SAP hasta dashboards en tiempo real con Power BI y Power Query.',
        'service.auto.badge': 'Más solicitado',
        'service.auto.1': 'Diseño de pipelines ETL (Power Query, Python)',
        'service.auto.2': 'Automatización de flujos n8n', 'service.auto.3': 'Integración SAP ERP',
        'service.bi.title': 'Inteligencia de Negocios & IA',
        'service.bi.desc': 'Pipelines de datos, forecasting predictivo (+/- 15% precisión) y asistentes IA con seguridad enterprise-grade.',
        'service.bi.1': 'Dashboards Power BI y forecasting', 'service.bi.2': 'Integración LLM (Text-to-SQL)',
        'service.bi.3': 'Arquitectura de seguridad Zero Trust',

        // Professional Work cards
        'work.pro.tag': 'Trabajo Profesional', 'work.pro.heading': 'Proyectos que cumplen la promesa',
        'work.pro.sub': 'Sistemas reales construidos para empresas reales. Cada proyecto incluye métricas, herramientas y alcance.',
        'work.castrol.title': 'Automatización de Pipeline ETL y Business Intelligence',
        'work.castrol.desc': 'Pipeline ETL automatizado para extracción de datos SAP ERP, reduciendo tiempo de reportes en 80% y habilitando forecasting mensual con +/- 15% de precisión.',
        'work.castrol.metric': '80% reducción de tiempo', 'work.castrol.tech': 'Power BI · Power Query · SAP',
        'work.castrol.cta': 'Ver caso de estudio →',
        'work.huawei.title': 'Asistente Text-to-SQL Seguro con LLMs',
        'work.huawei.desc': 'Asistente IA usando Llama 3.1 para traducción de lenguaje natural a SQL con arquitectura Zero Trust logrando 0% tasa de inyección SQL.',
        'work.huawei.metric': '0% tasa inyección SQL', 'work.huawei.tech': 'Llama 3.1 · GaussDB · RBAC',
        'work.huawei.cta': 'Ver caso de estudio →',
        'work.homelab.title': 'Arquitectura Zero Trust y Virtualización',
        'work.homelab.desc': 'Homelab en hardware 4C/8GB con Proxmox VE, Cloudflare Tunnels y Zero Trust Network Access eliminando todo port forwarding.',
        'work.homelab.metric': '100% exposición de puertos eliminada', 'work.homelab.tech': 'Proxmox · Cloudflare · Nginx',
        'work.homelab.cta': 'Ver caso de estudio →',
        'work.valedor.title': 'Sistema de Gestión (CRM) a Medida para ONG',
        'work.valedor.desc': 'Plugin CRM personalizado para la ONG Mi Valedor construido sobre WordPress, rastreando beneficiarios, talleres y ventas — ahorrando 10-20 horas administrativas por semana.',
        'work.valedor.metric': '10-20 hrs ahorradas/sem', 'work.valedor.tech': 'PHP · WordPress · RBAC',
        'work.valedor.cta': 'Ver caso de estudio →',

        // Extra professional
        'work.extra.tag': 'Más Trabajo Profesional', 'work.extra.heading': 'Proyectos adicionales',
        'work.extra.sub': 'Trabajo técnico que complementa mi experiencia profesional.',
        'work.extra2.tag': 'Proyectos Adicionales', 'work.extra2.heading': 'Más trabajo que vale la pena mencionar',
        'work.siem.title': 'Integración Serverless SIEM vía OBS Logs',
        'work.siem.desc': 'Arquitectura orientada a eventos con FunctionGraph de Huawei Cloud para ingestar logs de auditoría de bases de datos hacia SIEMs Splunk/Wazuh con procesamiento batch para reducir costos.',
        'work.siem.tech': 'FunctionGraph · OBS · Splunk',

        // Academic cards
        'work.aca.tag': 'Proyectos Académicos y Personales', 'work.aca.heading': 'Aprendiendo construyendo',
        'work.aca.sub': 'Proyectos universitarios y trabajo independiente que formaron mi enfoque de resolución de problemas.',
        'work.uni.title': 'Sistema de Gestión Universitaria',
        'work.uni.desc': 'Aplicación web full-stack para registro de cursos, seguimiento de calificaciones y comunicación estudiante-docente.',
        'work.uni.tech': 'JavaScript · Node.js · SQL',
        'work.n8n.title': 'Orquestación Empresarial y OSINT',
        'work.n8n.desc': 'Flujo n8n para gestión de inventario con Google Sheets. Pipeline OSINT con Apify para extracción de leads y API de Perplexity para outreach hiper-personalizado.',
        'work.n8n.tech': 'n8n · Apify · Perplexity API',

        // Skills
        'skills.tag': 'Capacidades', 'skills.heading': 'Lo que aporto',
        'skills.cloud.title': 'Cloud & Arquitectura', 'skills.data.title': 'Datos & BI',
        'skills.auto.title': 'Automatización & Dev', 'skills.soft.title': 'Habilidades Blandas',
        'skill.communication': 'Comunicación Técnica', 'skill.incident': 'Gestión de Incidentes (ITIL/SLA)',
        'skill.training': 'Capacitación de Usuarios', 'skill.adaptability': 'Adaptabilidad',
        'skill.learning': 'Aprendizaje Continuo', 'skill.client': 'Relaciones con Clientes',

        // Process
        'process.tag': 'Cómo Trabajo', 'process.heading': 'Un proceso construido para resultados',
        'process.sub': 'Sin sorpresas. Sin cambios de alcance. Solo sistemas que funcionan.',
        'process.1.title': 'Descubrimiento',
        'process.1.desc': 'Analizo tu flujo actual, identifico cuellos de botella y defino el éxito con métricas claras.',
        'process.2.title': 'Diseño',
        'process.2.desc': 'Arquitectura y automatización diseñadas para tu stack. Sin plantillas genéricas.',
        'process.3.title': 'Construcción',
        'process.3.desc': 'Código limpio y documentado con actualizaciones regulares. Ves progreso, no solo promesas.',
        'process.4.title': 'Despliegue y Optimización',
        'process.4.desc': 'Entrega fluida con documentación. Disponible para ajustes y optimizaciones.',

        // Tech + Connect + Contact + CV + Footer
        'tech.tag': 'Stack Tecnológico', 'tech.heading': 'Herramientas que uso',
        'connect.tag': 'Conectemos',
        'connect.text': "Comparto regularmente ideas sobre automatización, infraestructura cloud e inteligencia de negocios en LinkedIn. Siempre abierto a conversaciones interesantes sobre tecnología, emprendimiento y cómo la automatización puede transformar negocios.",
        'connect.linkedin': 'LinkedIn',
        'contact.heading': 'Construyamos algo juntos',
        'contact.sub': 'Abierto a oportunidades remotas y consultoría en automatización. Basado en Ciudad de México, trabajando globalmente.',
        'contact.email': 'businesscontact@otomatelabs.com', 'contact.call': 'Agendar llamada',
        'footer.tagline': 'Automatización que escala.', 'footer.copy': '© 2026 Fernando Perez Gonzalez',

        // --- PROJECT PAGE SHARED ---
        'project.back': 'Volver a proyectos',
        'project.challenge': 'El Reto', 'project.built': 'Lo Que Construí',
        'project.results': 'Resultados', 'project.tools': 'Herramientas y Tecnologías',
        'project.details': 'Detalles del Proyecto',
        'sidebar.client': 'Cliente', 'sidebar.duration': 'Duración', 'sidebar.role': 'Rol',
        'sidebar.metric': 'Métrica Clave', 'sidebar.type': 'Tipo', 'sidebar.team': 'Equipo',
        'sidebar.org': 'Organización', 'sidebar.impact': 'Impacto',

        // --- CASTROL CASE STUDY ---
        'castrol.title': 'Automatización de Pipeline ETL y Business Intelligence',
        'castrol.subtitle': 'Pipeline ETL automatizado para extracción de datos SAP ERP, reduciendo tiempo de reportes en 80% y habilitando forecasting mensual con +/- 15% de precisión.',
        'castrol.client': 'Castrol (BP) - División CVO', 'castrol.duration': '6 meses',
        'castrol.role': 'Becario de Datos y Estrategia',
        'castrol.metricNum': '80%', 'castrol.metricLabel': 'Reducción en tiempo de reportes',
        'castrol.ch1': 'El equipo de ventas comerciales dependía de procesos manuales ineficientes para la consolidación de datos. La extracción de archivos planos desde el ERP (SAP) y su posterior transformación y visualización en presentaciones de PowerPoint consumía múltiples días de trabajo a la semana.',
        'castrol.ch2': 'Esta latencia en los datos impedía la toma de decisiones ágiles, aumentaba el riesgo de errores humanos y dificultaba la generación de pronósticos de ventas precisos para evitar quiebres de stock.',
        'castrol.b1': 'Diseñé y desplegué un pipeline ETL (Extract, Transform, Load) automatizado. Implementé flujos en Power Query para ingestar, limpiar y transformar exportaciones planas de SAP de manera programática. Construí un dashboard interactivo en Power BI que centralizó tres fuentes de datos críticas con filtros modulares por SKU, distribuidor y temporalidad.',
        'castrol.b.1': 'Flujos en Power Query para ingestar, limpiar y transformar exportaciones planas de SAP',
        'castrol.b.2': 'Dashboard interactivo en Power BI que centralizó tres fuentes de datos críticas',
        'castrol.b.3': 'Enfoque modular con filtros granulares por SKU, distribuidor y temporalidad',
        'castrol.b.4': 'Eliminación de reportes estáticos individuales en favor de una solución dinámica',
        'castrol.r1': 'La automatización redujo el tiempo de ciclo de generación de reportes en un 80%, liberando decenas de horas semanales para el equipo. La disponibilidad de datos limpios permitió desarrollar modelos de pronóstico de ventas mensuales con una precisión sostenida de +/- 15%.',
        'castrol.r2': 'El sistema fue adoptado por más de 15 usuarios, a quienes capacité personalmente para asegurar la mantenibilidad a largo plazo de la solución.',

        // --- HUAWEI CASE STUDY ---
        'huawei.title': 'Asistente Text-to-SQL Seguro con LLMs',
        'huawei.subtitle': 'Asistente IA usando Llama 3.1 para traducción de lenguaje natural a SQL con arquitectura Zero Trust logrando 0% tasa de inyección SQL.',
        'huawei.client': 'Clientes Enterprise (Telecomunicaciones)',
        'huawei.duration': '72 horas (POC)', 'huawei.role': 'Becario Arquitecto Cloud',
        'huawei.metricNum': '0%', 'huawei.metricLabel': 'Tasa de Inyección SQL',
        'huawei.ch1': 'Los clientes corporativos necesitaban democratizar el acceso a los datos alojados en bases de datos relacionales (MySQL, PostgreSQL, GaussDB) para usuarios de negocio que no dominaban el lenguaje SQL.',
        'huawei.ch2': 'El desafío técnico principal no era solo la generación de consultas mediante IA, sino garantizar la seguridad absoluta de la base de datos frente a alucinaciones del modelo o inyecciones SQL involuntarias que pudieran alterar o destruir datos críticos en producción.',
        'huawei.b1': 'Desarrollé una arquitectura de IA generativa utilizando el modelo Llama 3.1 (8B). Apliqué Prompt Engineering avanzado inyectando el esquema de la base de datos y su diccionario de datos como contexto dinámico. Apliqué el principio de menor privilegio (RBAC): la IA operaba bajo credenciales estrictas de solo lectura (SELECT) con guardrails de validación y parametrización de consultas.',
        'huawei.b.1': 'Prompt Engineering avanzado inyectando el esquema de la base de datos como contexto dinámico',
        'huawei.b.2': 'Principio de menor privilegio (RBAC): IA con credenciales estrictas de solo lectura (SELECT)',
        'huawei.b.3': 'Guardrails de validación y parametrización de consultas antes de su ejecución',
        'huawei.b.4': 'Bloqueo de comandos DML y DDL para prevenir modificaciones accidentales',
        'huawei.r1': 'Se entregó un prototipo funcional en tiempo récord (3 días) con una alta tasa de precisión en la traducción de lenguaje natural a SQL. La arquitectura de seguridad demostró ser robusta, garantizando que ninguna consulta generada por el LLM pudiera ejecutar comandos destructivos.',
        'huawei.r2': 'La solución validó la viabilidad de integrar IA con bases de datos transaccionales sin comprometer la integridad corporativa.',

        // --- HOMELAB CASE STUDY ---
        'homelab.title': 'Arquitectura Zero Trust y Virtualización en Homelab',
        'homelab.subtitle': 'Homelab en hardware 4C/8GB con Proxmox VE, Cloudflare Tunnels y Zero Trust Network Access eliminando todo port forwarding.',
        'homelab.client': 'Infraestructura Personal', 'homelab.duration': 'Continuo',
        'homelab.role': 'Administrador de Sistemas',
        'homelab.metricNum': '100%', 'homelab.metricLabel': 'Exposición de puertos eliminada',
        'homelab.ch1': 'Desplegar y administrar múltiples servicios de red, desarrollo y privacidad en un entorno de hardware altamente restringido (4 Cores, 8GB RAM, 70GB Storage), maximizando el rendimiento sin incurrir en costos de suscripción.',
        'homelab.ch2': 'Era imperativo exponer ciertos servicios web a internet sin comprometer la red local abriendo puertos en el router del ISP, mitigando el riesgo de ataques automatizados y escaneos de vulnerabilidades.',
        'homelab.b1': 'Implementé un hipervisor de tipo 1 (Proxmox VE) optimizando el uso de recursos con contenedores LXC en lugar de VMs pesadas. Evadí el hardware del ISP desactivando su servidor DHCP y delegando la resolución DNS y el filtrado de tráfico a AdGuard Home. Configuré ZTNA con Cloudflare Tunnels (cloudflared) integrados con Nginx Proxy Manager para terminación SSL automatizada.',
        'homelab.b.1': 'Virtualización mediante contenedores LXC en lugar de máquinas virtuales pesadas',
        'homelab.b.2': 'Evasión del hardware del ISP desactivando su servidor DHCP',
        'homelab.b.3': 'Resolución DNS y filtrado de tráfico delegados a AdGuard Home',
        'homelab.b.4': 'Zero Trust Network Access (ZTNA) con Cloudflare Tunnels',
        'homelab.b.5': 'Nginx Proxy Manager para terminación SSL automatizada (Let\'s Encrypt)',
        'homelab.r1': 'Se logró una densidad de servicios excepcionalmente alta en hardware limitado sin degradación de rendimiento. La arquitectura de red garantizó privacidad total frente al ISP y bloqueos de telemetría a nivel DNS.',
        'homelab.r2': 'La implementación de túneles inversos eliminó por completo la necesidad de hacer port forwarding, asegurando que la infraestructura interna permanezca invisible y protegida contra amenazas externas con cifrado de extremo a extremo.',

        // --- VALEDOR CASE STUDY ---
        'valedor.title': 'Sistema de Gestión (CRM) a Medida para ONG',
        'valedor.subtitle': 'Plugin CRM personalizado para una ONG de reinserción social, construido sobre WordPress para rastrear beneficiarios, talleres y ventas ahorrando 10-20 horas administrativas por semana.',
        'valedor.client': 'Mi Valedor (ONG - Reintegración Sociolaboral)',
        'valedor.duration': '3 meses', 'valedor.role': 'Full-Stack Developer / Business Analyst',
        'valedor.metricNum': '10-20', 'valedor.metricLabel': 'Horas ahorradas por semana',
        'valedor.ch1': 'La ONG "Mi Valedor", dedicada a la reinserción de poblaciones vulnerables (personas en situación de calle, migrantes), gestionaba la información crítica de sus beneficiarios mediante procesos fragmentados en papel y hojas de cálculo.',
        'valedor.ch2': 'Necesitaban un sistema centralizado para rastrear expedientes médicos, asistencia a talleres y ventas de revistas. La restricción técnica principal era presupuestal y operativa: el sistema debía construirse forzosamente sobre su infraestructura web existente (WordPress) para evitar costos de mantenimiento en servidores externos, garantizando al mismo tiempo la privacidad de datos sensibles (PII).',
        'valedor.b1': 'Actué como analista de negocio y desarrollador. Primero, traduje los requerimientos del director en diagramas de flujo de datos (ERD) para mapear el viaje del usuario y obtener aprobación antes de escribir código. Para cumplir con la restricción de infraestructura, desarrollé un plugin de CRM personalizado desde cero.',
        'valedor.b.1': 'Plugin de CRM personalizado desde cero integrado al WordPress existente',
        'valedor.b.2': 'Custom Post Types (CPT) y Advanced Custom Fields (ACF) para bases de datos relacionales dentro del CMS',
        'valedor.b.3': 'Hooks de PHP para automatizar la lógica de negocio (registro de ventas y asistencia vinculado al expediente)',
        'valedor.b.4': 'Control de Acceso Basado en Roles (RBAC) para proteger datos sensibles de beneficiarios',
        'valedor.r1': 'El sistema eliminó la dependencia del papel y la fragmentación de datos, ahorrando al equipo administrativo un estimado de 10 a 20 horas semanales. La ONG ahora cuenta con un panel centralizado e intuitivo que les permite monitorear en tiempo real el progreso, las ventas y el historial de los beneficiarios activos.',
        'valedor.r2': 'Al empaquetar la solución como un plugin propio, garanticé que el sistema fuera modular, exportable y fácil de mantener para la organización.',

        // --- UNIVERSITY CASE STUDY ---
        'uni.title': 'Sistema de Gestión Universitaria',
        'uni.subtitle': 'Aplicación web full-stack para registro de cursos, seguimiento de calificaciones y comunicación estudiante-docente.',
        'uni.type': 'Proyecto Universitario', 'uni.duration': '1 semestre',
        'uni.role': 'Full Stack Developer', 'uni.team': '3 personas',
        'uni.ch1': 'El sistema de registro de cursos de la universidad era obsoleto, lento y propenso a errores durante períodos de inscripción. Los estudiantes batallaban para encontrar cursos disponibles y los profesores no tenían forma fácil de gestionar calificaciones.',
        'uni.ch2': 'Mi objetivo era construir una plataforma moderna e intuitiva que manejara tráfico pico de inscripción mientras daba visibilidad en tiempo real a todos.',
        'uni.b1': 'Diseñé y desarrollé un sistema de gestión universitaria completo desde cero.',
        'uni.b.1': 'Portal estudiantil para búsqueda de cursos, inscripción y gestión de horarios',
        'uni.b.2': 'Dashboard de profesores para ingreso de calificaciones, asistencia y comunicación',
        'uni.b.3': 'Panel de administración para creación de cursos, gestión de matrícula y reportes',
        'uni.b.4': 'Notificaciones en tiempo real para fechas límite y actualizaciones de notas',
        'uni.b.5': 'Diseño responsive funcionando en escritorio y móvil',
        'uni.r1': 'El sistema redujo el tiempo de registro de cursos de horas a minutos. Los profesores ahorraron 5+ horas semanales en tareas administrativas.',

        // --- SOCIAL CASE STUDY ---
        'social.title': 'Dashboard Comunitario de Datos',
        'social.subtitle': 'Dashboard para una ONG local para rastrear métricas de salud comunitaria y visualizar impacto en el tiempo.',
        'social.org': 'ONG Comunitaria Local', 'social.duration': '4 meses',
        'social.role': 'Analista de Datos y Desarrollador', 'social.metric': '3 días ahorrados por reporte',
        'social.ch1': 'La ONG había recolectado datos de salud comunitaria durante años pero no tenía forma efectiva de analizarlos o presentarlos. Los datos vivían en hojas de cálculo dispersas.',
        'social.ch2': 'Necesitaban un dashboard centralizado que agregara datos de múltiples fuentes, diera insights visuales y ayudara a contar historias a donantes.',
        'social.b1': 'Desarrollé una solución de datos de principio a fin para la organización.',
        'social.b.1': 'Pipeline de datos para limpiar y consolidar información de múltiples fuentes',
        'social.b.2': 'Dashboard interactivo con filtros por períodos, demografía y áreas de programa',
        'social.b.3': 'Reportes automatizados que generan resúmenes de impacto mensuales',
        'social.b.4': 'Gráficos visuales mostrando tendencias en salud, asistencia y alcance',
        'social.b.5': 'Funcionalidad de exportación para presentaciones y solicitudes de fondos',
        'social.r1': 'El dashboard transformó la operación de la ONG. Ahora identifican comunidades en riesgo en tiempo real, miden efectividad con métricas concretas y presentan evidencia clara de impacto a donantes. Reportes que tomaban 3 días ahora se generan automáticamente.',
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyTranslations(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = dict[key];
        if (text !== undefined) {
            if (text.includes('{')) {
                const linkedinUrl = 'https://www.linkedin.com/in/fernandopgonzalez';
                const linkedinName = dict['connect.linkedin'] || 'LinkedIn';
                el.innerHTML = text.replace('{linkedin}', `<a href="${linkedinUrl}" target="_blank" class="connect-link">${linkedinName}</a>`);
            } else {
                el.textContent = text;
            }
        }
    });

    document.documentElement.lang = lang;
    currentLang = lang;
    localStorage.setItem('lang', lang);

    const toggle = document.querySelector('.lang-toggle');
    if (toggle) {
        toggle.textContent = dict['nav.lang'] || (lang === 'en' ? 'ES' : 'EN');
    }
}

function toggleLang() {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    applyTranslations(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
    const toggle = document.querySelector('.lang-toggle');
    if (toggle) toggle.addEventListener('click', toggleLang);
});

window.toggleLang = toggleLang;
window.applyTranslations = applyTranslations;
