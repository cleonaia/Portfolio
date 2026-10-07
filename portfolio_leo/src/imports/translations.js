// Sistema de traducción para Echoday
const translations = {
  es: {
  hero_projects: "Soluciones a medida, trato cercano y resultados garantizados.<br>Más de 30 proyectos realizados para empresas y autónomos.",
  services_header: "Servicios profesionales",
  services_header_desc: "Soluciones digitales para empresas y autónomos en Catalunya y España.<br>Consulta precios y opciones personalizadas.<br><span style='color:#42fa7a;font-weight:700;font-size:1.45rem;'>¡Solicita asesoría gratuita!</span>",
  about_header: "Sobre mí",
  about_section_desc: "Soy Leo, profesional digital con más de 3 años de experiencia en desarrollo web, apps móviles, inteligencia artificial y consultoría tecnológica. Mi misión es ayudar a empresas y autónomos a crecer y transformarse digitalmente, ofreciendo soluciones innovadoras, eficientes y adaptadas a cada cliente.<br><br><b>Valores:</b> Innovación, honestidad, compromiso y orientación al cliente.<br><b>Experiencia:</b> Más de 30 proyectos realizados en España, Catalunya y Latinoamérica, incluyendo:<br>- App de gestión para una gestoría en Catalunya.<br>- Plataforma web para una cooperativa en Paraguay.<br>- Automatización IA para una startup en Alemania.<br><b>Enfoque internacional:</b> Conozco el mercado catalán, español y latinoamericano, adaptando cada solución a las necesidades reales de cada zona.<br><br>Si buscas un aliado tecnológico para tu negocio, <a href='#contacto' style='color:var(--accent2);text-decoration:underline;'>contáctame</a> y descubre cómo podemos innovar juntos.",
  about_section_contact: "¿Quieres saber más? <a href='#contacto' style='color:var(--accent2);text-decoration:underline;'>Contáctame</a>",
  service_web_title: "Web profesional",
  service_web_desc: "Desarrollo web moderno, optimizado y adaptado a tu negocio.",
  service_web_includes: "Incluye: diseño personalizado, SEO, integración con redes sociales y Google Analytics.",
  service_web_feature1: "Responsive y SEO",
  service_web_feature2: "Panel de administración",
  service_web_feature3: "Integración con APIs",
  service_web_feature4: "Ejemplo:",
  service_web_example: "www.tienda-catalunya.com",
  service_web_price: "Desde 1.800€",
  service_app_title: "App móvil",
  service_app_desc: "Apps para iOS y Android, personalizadas para tu empresa.",
  service_app_includes: "Incluye: publicación en tiendas, notificaciones push, soporte post-lanzamiento.",
  service_app_feature1: "Notificaciones push",
  service_app_feature2: "Publicación en tiendas",
  service_app_feature3: "Interfaz intuitiva",
  service_app_feature4: "Ejemplo:",
  service_app_example: "AppGestión Catalunya",
  service_app_price: "Desde 2.400€",
  service_ai_title: "Automatización IA",
  service_ai_desc: "Automatiza procesos con inteligencia artificial y bots avanzados.",
  service_ai_includes: "Incluye: chatbots, integración WhatsApp, análisis de datos.",
  service_ai_feature1: "Chatbots inteligentes",
  service_ai_feature2: "Integración WhatsApp Business",
  service_ai_feature3: "Workflows personalizados",
  service_ai_feature4: "Ejemplo:",
  service_ai_example: "BotAtención Express",
  service_ai_price: "Desde 900€",
  service_consult_title: "Consultoría digital",
  service_consult_desc: "Diagnóstico, estrategia y capacitación para empresas y autónomos.",
  service_consult_includes: "Incluye: auditoría digital, plan de acción, formación presencial/online.",
  service_consult_feature1: "Diagnóstico digital",
  service_consult_feature2: "Estrategia personalizada",
  service_consult_feature3: "Formación y soporte",
  service_consult_feature4: "Ejemplo:",
  service_consult_example: "Consultoría Pyme Barcelona",
  service_consult_price: "Desde 250€",
  service_present_title: "Presentaciones de impacto",
  service_present_desc: "Diseño de presentaciones profesionales para eventos, pitch y formación.",
  service_present_includes: "Incluye: animaciones, guion, asesoría en comunicación.",
  service_present_feature1: "Diseño visual y animaciones",
  service_present_feature2: "Contenido persuasivo",
  service_present_feature3: "Interactividad avanzada",
  service_present_feature4: "Ejemplo:",
  service_present_example: "Pitch DemoTech",
  service_present_price: "Desde 350€",
  service_maint_title: "Mantenimiento web",
  service_maint_desc: "Actualizaciones, seguridad y soporte técnico continuo.",
  service_maint_includes: "Incluye: copias de seguridad, monitorización, respuesta rápida.",
  service_maint_feature1: "Actualizaciones mensuales",
  service_maint_feature2: "Soporte técnico",
  service_maint_feature3: "Seguridad avanzada",
  service_maint_feature4: "Ejemplo:",
  service_maint_example: "MantenimientoWeb Pro",
  service_maint_price: "130€/mes",
  faq_title: "Preguntas frecuentes",
  faq_q1: "¿Cuánto tarda un proyecto web?",
  faq_a1: "Normalmente entre 2 y 4 semanas, dependiendo de la complejidad.",
  faq_q2: "¿Ofreces soporte después de la entrega?",
  faq_a2: "Sí, todos los proyectos incluyen soporte y mantenimiento opcional.",
  faq_q3: "¿Trabajas solo en Catalunya?",
  faq_a3: "Principalmente, pero también realizo proyectos en toda España.",
  faq_q4: "¿Cómo se realiza el pago?",
  faq_a4: "Por transferencia bancaria, con opción de pago fraccionado.",
  about_text: "¡Hola! Soy un profesional de Ingeniería de Datos y desarrollo web, apasionado por la innovación y la tecnología. Mi objetivo es aportar soluciones creativas y eficientes que impulsen la transformación digital de empresas y emprendedores, sin importar el sector o la región.\n\nMe motiva crear herramientas y plataformas que faciliten la vida de las personas y los negocios, utilizando datos, inteligencia artificial y automatización para resolver desafíos reales. Creo que la tecnología es un motor de cambio positivo y busco estar siempre a la vanguardia, aprendiendo y aplicando las mejores prácticas del sector.\n\nMi visión es contribuir al crecimiento de empresas competitivas, conectadas y preparadas para el futuro, colaborando con equipos multidisciplinares y compartiendo conocimiento. Si compartes esta pasión por innovar y transformar, ¡conversemos y creemos juntos el próximo gran proyecto!",
  testimonials_title: "Testimonios",
  testimonial_1_text: "La app de gestión que desarrolló Leo para nuestra gestoría ha mejorado la productividad y la satisfacción de nuestros clientes.<br>Muy profesional y atento en todo el proceso.",
  testimonial_1_author: "— Jordi, Gestoría Catalunya",
  testimonial_2_text: "La plataforma web creada por Leo para nuestra cooperativa ha facilitado la gestión y comunicación con nuestros socios.<br>Recomendamos su trabajo por la seriedad y el compromiso.",
  testimonial_2_author: "— Lorenzo Barreto, Presidente de la Cooperativa Medalla Milagrosa (Paraguay)",
    // Navegación
    nav_services: "Servicios",
    nav_automation: "Automatización IA",
    nav_web_dev: "Desarrollo Web",
    nav_presentations: "Presentaciones de Impacto",
    nav_mobile_apps: "Creación de Apps Móviles",
    nav_about: "About",
    nav_contact: "Contacto",

    // Hero Section
    hero_title: "El futuro es hoy, Echoday",
    hero_subtitle: "Transformación digital y creatividad para empresas que quieren destacar.",
    hero_cta: "¡Hablemos de tu próximo proyecto!",

    // Servicios
    services_title: "¿Qué hacemos en Echoday?",
    services_description: "Creamos experiencias digitales que inspiran, transforman y hacen crecer tu empresa. Evoluciona, destaca y lidera.",
    
    click_hint: "¡Haz clic!",

    // Servicio 1 - Automatización IA
    service1_title: "Automatización IA",
    service1_description: "Automatiza procesos con inteligencia artificial, bots avanzados y sistemas inteligentes para transformar tu empresa.",
    service1_feature1: "Chatbots inteligentes con IA",
    service1_feature2: "Integración WhatsApp Business",
    service1_feature3: "Automatización de tareas repetitivas",
    service1_feature4: "Análisis de datos en tiempo real",
    service1_feature5: "Workflows personalizados",

    // Servicio 2 - Desarrollo Web
    service2_title: "Desarrollo Web",
    service2_description: "Webs, apps, chatbots y dashboards con tecnología de punta y diseño atractivo, listos para crecer contigo.",
    service2_feature1: "Diseño responsive y moderno",
    service2_feature2: "Optimización SEO avanzada",
    service2_feature3: "Integración con APIs",
    service2_feature4: "Panel de administración",
    service2_feature5: "Velocidad de carga optimizada",

    // Servicio 3 - Apps Móviles
    service3_title: "Apps Móviles",
    service3_description: "Desarrollo de apps móviles para iOS y Android, personalizadas para tu negocio y clientes.",
    service3_feature1: "Desarrollo iOS y Android",
    service3_feature2: "Interfaz intuitiva y atractiva",
    service3_feature3: "Notificaciones push",
    service3_feature4: "Sincronización en tiempo real",
    service3_feature5: "Publicación en tiendas",

    // Servicio 4 - Consultoría
    service4_title: "Consultoría para Empresarios",
    service4_description: "Diagnóstico, ideas, implementación y capacitación: conviértete en referente digital en tu sector.",
    service4_feature1: "Diagnóstico digital completo",
    service4_feature2: "Estrategia de transformación",
    service4_feature3: "Implementación personalizada",
    service4_feature4: "Capacitación del equipo",
    service4_feature5: "Soporte continuo",

    // Servicio 5 - Presentaciones
    service5_title: "Presentaciones de Impacto",
    service5_description: "Convierte tu pitch, demo o evento en una experiencia memorable. Sorprende a tu audiencia desde el primer minuto.",
    service5_feature1: "Diseño visual impactante",
    service5_feature2: "Animaciones y transiciones",
    service5_feature3: "Contenido persuasivo",
    service5_feature4: "Interactividad avanzada",
    service5_feature5: "Adaptado a tu audiencia",

    // Simulador
    simulator_title: "Simulador de WhatsApp",
    simulator_description: "Esta demo te permite interactuar como si fueras un cliente en WhatsApp, viendo paso a paso cómo funciona la automatización de atención y solicitud de préstamos.",
    simulator_instruction1: "Haz clic en las opciones para avanzar.",
    simulator_instruction2: "¡No es real, es solo una demo!",
    simulator_start: "Iniciar simulación",
    simulator_option1: "1️⃣ Consultar estado de mi solicitud",
    simulator_option2: "2️⃣ Solicitar nuevo préstamo",
    simulator_option3: "3️⃣ Hablar con un agente",
    simulator_send_data: "Enviar mis datos de préstamo",
    simulator_accept: "SÍ, acepto condiciones",
    simulator_reject: "NO, tengo dudas",
    simulator_reset: "Reiniciar simulador",

    // Proyectos
    projects_title: "Proyectos Destacados",
    projects_description: "Algunos de nuestros trabajos más recientes que demuestran nuestra capacidad de innovación y calidad.",
    
    // Proyectos específicos
    project1_title: "E-commerce Innovador",
    project1_description: "Plataforma de comercio electrónico con automatización completa y experiencia de usuario excepcional.",
    project1_feature1: "Diseño responsive y moderno",
    project1_feature2: "Optimización SEO avanzada",
    project1_feature3: "Integración con APIs",
    project1_feature4: "Panel de administración",
    project1_feature5: "Velocidad de carga optimizada",
    
    project2_title: "App de Gestión",
    project2_description: "Aplicación móvil para gestión empresarial con integraciones avanzadas y análisis en tiempo real.",
    project2_feature1: "Interfaz intuitiva multiplataforma",
    project2_feature2: "Sincronización en tiempo real",
    project2_feature3: "Notificaciones push personalizadas",
    project2_feature4: "Modo offline funcional",
    project2_feature5: "Seguridad biométrica avanzada",
    
    project3_title: "Sistema de Automatización",
    project3_description: "Plataforma de automatización empresarial que redujo costos operativos en un 60%.",
    project3_feature1: "Machine Learning predictivo",
    project3_feature2: "Procesamiento de datos masivo",
    project3_feature3: "Dashboards analíticos avanzados",
    project3_feature4: "Integración con sistemas legacy",
    project3_feature5: "Escalabilidad en la nube",

    // Contacto
    contact_title: "¡Conversemos!",
    contact_subtitle: "¿Listo para transformar tu empresa? ¡Hagamos juntos algo grande!",
    contact_name_label: "Nombre",
    contact_name_placeholder: "¿Cómo te llamas?",
    contact_company_label: "Empresa",
    contact_company_placeholder: "¿Dónde trabajas? (opcional)",
    contact_email_label: "Email",
    contact_email_placeholder: "Tu correo de contacto",
    contact_message_label: "Mensaje",
    contact_message_placeholder: "¿En qué puedo ayudarte?",
    contact_send_button: "Enviar mensaje",
    contact_whatsapp: "Escríbeme ahora",
    contact_social: "Redes:",

    // Footer
    footer_tagline: "Innovación + Tecnología + Creatividad",
    footer_made_with: "Hecho con",
    footer_by: "por",

    // Páginas de servicios detalladas
    // Desarrollo Web Features
    web_dev_feature_1_title: "Desarrollo Frontend",
    web_dev_feature_1_desc: "Interfaces modernas y responsivas con las últimas tecnologías web.",
    web_dev_feature_2_title: "Backend Robusto",
    web_dev_feature_2_desc: "Arquitectura escalable y segura para aplicaciones complejas.",
    web_dev_feature_3_title: "Ecommerce",
    web_dev_feature_3_desc: "Tiendas online completas con pasarelas de pago integradas.",
    web_dev_feature_4_title: "Diseño Responsive",
    web_dev_feature_4_desc: "Perfecta adaptación a todos los dispositivos y pantallas.",
    web_dev_feature_5_title: "SEO Optimizado",
    web_dev_feature_5_desc: "Optimización para motores de búsqueda desde el primer día.",
    web_dev_feature_6_title: "Alta Performance",
    web_dev_feature_6_desc: "Carga rápida y experiencia de usuario excepcional.",

    // Automatización IA Features
    automation_feature_1_title: "Chatbots Inteligentes",
    automation_feature_1_desc: "Desarrollamos chatbots avanzados con procesamiento de lenguaje natural que brindan atención al cliente 24/7 y automatizan respuestas complejas.",
    automation_feature_2_title: "Integración WhatsApp Business",
    automation_feature_2_desc: "Conecta tu negocio con WhatsApp Business API para automatizar comunicaciones, gestionar pedidos y mejorar la experiencia del cliente.",
    automation_feature_3_title: "Procesos Automatizados",
    automation_feature_3_desc: "Automatizamos tareas repetitivas, flujos de trabajo complejos y procesos de toma de decisiones para maximizar la productividad.",
    automation_feature_4_title: "Análisis Predictivo",
    automation_feature_4_desc: "Utilizamos IA para analizar patrones, predecir comportamientos y optimizar la toma de decisiones empresariales.",
    automation_feature_5_title: "Integración de Sistemas",
    automation_feature_5_desc: "Conectamos tus sistemas existentes con soluciones de IA para crear un ecosistema digital unificado y eficiente.",

    // Presentaciones Features
    presentations_feature_1_title: "Pitch Decks",
    presentations_feature_1_desc: "Presentaciones convincentes para inversionistas y clientes.",
    presentations_feature_2_title: "Presentaciones Corporativas",
    presentations_feature_2_desc: "Comunicación empresarial profesional y efectiva.",
    presentations_feature_3_title: "Diseño Visual",
    presentations_feature_3_desc: "Gráficos y elementos visuales que captan la atención.",
    presentations_feature_4_title: "Presentaciones Comerciales",
    presentations_feature_4_desc: "Herramientas de venta que convierten prospectos en clientes.",
    presentations_feature_5_title: "Material Educativo",
    presentations_feature_5_desc: "Contenido didáctico y formativo de alta calidad.",

    // Apps Móviles Features
    mobile_apps_feature_1_title: "Desarrollo Nativo",
    mobile_apps_feature_1_desc: "Apps nativas para iOS y Android con rendimiento óptimo.",
    mobile_apps_feature_2_title: "UI/UX Intuitivo",
    mobile_apps_feature_2_desc: "Interfaces de usuario atractivas y fáciles de usar.",
    mobile_apps_feature_3_title: "Integración Backend",
    mobile_apps_feature_3_desc: "Conexión con sistemas y bases de datos existentes.",
    mobile_apps_feature_4_title: "Notificaciones Push",
    mobile_apps_feature_4_desc: "Comunicación directa y personalizada con usuarios.",
    mobile_apps_feature_5_title: "Análisis y Métricas",
    mobile_apps_feature_5_desc: "Seguimiento detallado del comportamiento de usuarios.",

    // CTAs
    service_cta: "Solicita una Consulta Gratuita",

    // Modales
    modal_thanks_title: "¡Gracias por tu mensaje!",
    modal_thanks_message: "Tomaste una gran decisión.<br>Nos pondremos en contacto contigo lo más rápido posible.",
    modal_close: "Cerrar",
    modal_about_title: "Sobre Echoday",

    // About Text
    about_text: "¡Hola! Soy un estudiante de Ingeniería de Datos con una profunda pasión por la innovación y el desarrollo tecnológico. Mi objetivo es aportar soluciones creativas y eficientes que impulsen la transformación digital, especialmente en Sudamérica, una región llena de potencial y oportunidades para abrir nuevos horizontes de conocimiento.\n\nMe motiva crear herramientas y plataformas que faciliten la vida de las personas y las empresas, utilizando datos, inteligencia artificial y automatización para resolver desafíos reales. Creo firmemente que la tecnología es un motor de cambio positivo, y por eso busco estar siempre a la vanguardia, aprendiendo y aplicando las mejores prácticas del sector.\n\nMi visión es contribuir al desarrollo de una región más competitiva, conectada y preparada para el futuro, colaborando con equipos multidisciplinarios y compartiendo el conocimiento adquirido. Si compartes esta pasión por innovar y transformar, ¡conversemos y creemos juntos el próximo gran proyecto!"
  },

  en: {
  hero_projects: "Tailored solutions, close contact and guaranteed results.<br>Over 30 projects delivered for companies and freelancers.",
  services_header: "Professional Services",
  services_header_desc: "Digital solutions for companies and freelancers in Catalonia and Spain.<br>Check prices and personalized options.<br><span style='color:#42fa7a;font-weight:700;font-size:1.45rem;'>Request free advice!</span>",
  about_header: "About me",
  about_section_desc: "I'm Leo, a digital professional with over 3 years of experience in web development, mobile apps, artificial intelligence and tech consulting. My mission is to help companies and freelancers grow and transform digitally, offering innovative, efficient and tailored solutions.<br><br><b>Values:</b> Innovation, honesty, commitment and client focus.<br><b>Experience:</b> Over 30 projects completed in Spain, Catalonia and Latin America, including:<br>- Management app for an agency in Catalonia.<br>- Web platform for a cooperative in Paraguay.<br>- AI automation for a startup in Germany.<br><b>International focus:</b> I know the Catalan, Spanish and Latin American markets, adapting each solution to the real needs of each area.<br><br>If you are looking for a tech partner for your business, <a href='#contacto' style='color:var(--accent2);text-decoration:underline;'>contact me</a> and discover how we can innovate together.",
  about_section_contact: "Want to know more? <a href='#contacto' style='color:var(--accent2);text-decoration:underline;'>Contact me</a>",
  service_web_title: "Professional Website",
  service_web_desc: "Modern, optimized web development tailored to your business.",
  service_web_includes: "Includes: custom design, SEO, social media integration and Google Analytics.",
  service_web_feature1: "Responsive and SEO",
  service_web_feature2: "Admin panel",
  service_web_feature3: "API integration",
  service_web_feature4: "Example:",
  service_web_example: "www.tienda-catalunya.com",
  service_web_price: "From €1,800",
  service_app_title: "Mobile App",
  service_app_desc: "iOS and Android apps, customized for your company.",
  service_app_includes: "Includes: store publishing, push notifications, post-launch support.",
  service_app_feature1: "Push notifications",
  service_app_feature2: "Store publishing",
  service_app_feature3: "Intuitive interface",
  service_app_feature4: "Example:",
  service_app_example: "AppGestión Catalunya",
  service_app_price: "From €2,400",
  service_ai_title: "AI Automation",
  service_ai_desc: "Automate processes with artificial intelligence and advanced bots.",
  service_ai_includes: "Includes: chatbots, WhatsApp integration, data analysis.",
  service_ai_feature1: "Intelligent chatbots",
  service_ai_feature2: "WhatsApp Business integration",
  service_ai_feature3: "Custom workflows",
  service_ai_feature4: "Example:",
  service_ai_example: "BotAtención Express",
  service_ai_price: "From €900",
  service_consult_title: "Digital Consulting",
  service_consult_desc: "Diagnosis, strategy and training for companies and freelancers.",
  service_consult_includes: "Includes: digital audit, action plan, onsite/online training.",
  service_consult_feature1: "Digital diagnosis",
  service_consult_feature2: "Personalized strategy",
  service_consult_feature3: "Training and support",
  service_consult_feature4: "Example:",
  service_consult_example: "Consultoría Pyme Barcelona",
  service_consult_price: "From €250",
  service_present_title: "Impact Presentations",
  service_present_desc: "Professional presentations for events, pitches and training.",
  service_present_includes: "Includes: animations, script, communication consulting.",
  service_present_feature1: "Visual design and animations",
  service_present_feature2: "Persuasive content",
  service_present_feature3: "Advanced interactivity",
  service_present_feature4: "Example:",
  service_present_example: "Pitch DemoTech",
  service_present_price: "From €350",
  service_maint_title: "Website Maintenance",
  service_maint_desc: "Updates, security and ongoing technical support.",
  service_maint_includes: "Includes: backups, monitoring, fast response.",
  service_maint_feature1: "Monthly updates",
  service_maint_feature2: "Technical support",
  service_maint_feature3: "Advanced security",
  service_maint_feature4: "Example:",
  service_maint_example: "MantenimientoWeb Pro",
  service_maint_price: "€130/month",
  faq_title: "Frequently Asked Questions",
  faq_q1: "How long does a web project take?",
  faq_a1: "Usually between 2 and 4 weeks, depending on complexity.",
  faq_q2: "Do you offer support after delivery?",
  faq_a2: "Yes, all projects include support and optional maintenance.",
  faq_q3: "Do you work only in Catalonia?",
  faq_a3: "Mainly, but I also do projects throughout Spain.",
  faq_q4: "How is payment made?",
  faq_a4: "By bank transfer, with the option of split payment.",
  about_text: "Hello! I am a Data Engineering and web development professional, passionate about innovation and technology. My goal is to provide creative and efficient solutions that drive digital transformation for companies and entrepreneurs, regardless of sector or region.\n\nI am motivated to create tools and platforms that make life easier for people and businesses, using data, artificial intelligence, and automation to solve real challenges. I believe technology is a driver of positive change and I always seek to be at the forefront, learning and applying the best practices in the field.\n\nMy vision is to contribute to the growth of competitive, connected, and future-ready companies, collaborating with multidisciplinary teams and sharing knowledge. If you share this passion for innovation and transformation, let's talk and create the next great project!",
  testimonials_title: "Testimonials",
  testimonial_1_text: "The management app developed by Leo for our agency has improved productivity and client satisfaction.<br>Very professional and attentive throughout the process.",
  testimonial_1_author: "— Jordi, Gestoría Catalunya",
  testimonial_2_text: "The web platform created by Leo for our cooperative has made management and communication with our members easier.<br>We recommend his work for his seriousness and commitment.",
  testimonial_2_author: "— Lorenzo Barreto, President of Cooperativa Medalla Milagrosa (Paraguay)",
    // Navigation
    nav_services: "Services",
    nav_automation: "AI Automation",
    nav_web_dev: "Web Development",
    nav_presentations: "Impact Presentations",
    nav_mobile_apps: "Mobile App Creation",
    nav_about: "About",
    nav_contact: "Contact",

    // Hero Section
    hero_title: "The future is today, Echoday",
    hero_subtitle: "Digital transformation and creativity for companies that want to stand out.",
    hero_cta: "Let's talk about your next project!",

    // Services
    services_title: "What do we do at Echoday?",
    services_description: "We create digital experiences that inspire, transform and grow your business. Evolve, stand out and lead.",
    
    click_hint: "Click me!",

    // Service 1 - AI Automation
    service1_title: "AI Automation",
    service1_description: "Automate processes with artificial intelligence, advanced bots and intelligent systems to transform your company.",
    service1_feature1: "Intelligent AI chatbots",
    service1_feature2: "WhatsApp Business integration",
    service1_feature3: "Repetitive task automation",
    service1_feature4: "Real-time data analysis",
    service1_feature5: "Custom workflows",

    // Service 2 - Web Development
    service2_title: "Web Development",
    service2_description: "Websites, apps, chatbots and dashboards with cutting-edge technology and attractive design, ready to grow with you.",
    service2_feature1: "Responsive and modern design",
    service2_feature2: "Advanced SEO optimization",
    service2_feature3: "API integration",
    service2_feature4: "Admin panel",
    service2_feature5: "Optimized loading speed",

    // Service 3 - Mobile Apps
    service3_title: "Mobile Apps",
    service3_description: "Development of mobile apps for iOS and Android, customized for your business and customers.",
    service3_feature1: "iOS and Android development",
    service3_feature2: "Intuitive and attractive interface",
    service3_feature3: "Push notifications",
    service3_feature4: "Real-time synchronization",
    service3_feature5: "Store publication",

    // Service 4 - Consulting
    service4_title: "Business Consulting",
    service4_description: "Diagnosis, ideas, implementation and training: become a digital leader in your sector.",
    service4_feature1: "Complete digital diagnosis",
    service4_feature2: "Transformation strategy",
    service4_feature3: "Personalized implementation",
    service4_feature4: "Team training",
    service4_feature5: "Continuous support",

    // Service 5 - Presentations
    service5_title: "Impact Presentations",
    service5_description: "Turn your pitch, demo or event into a memorable experience. Surprise your audience from the first minute.",
    service5_feature1: "Stunning visual design",
    service5_feature2: "Animations and transitions",
    service5_feature3: "Persuasive content",
    service5_feature4: "Advanced interactivity",
    service5_feature5: "Adapted to your audience",

    // Simulator
    simulator_title: "WhatsApp Simulator",
    simulator_description: "This demo allows you to interact as if you were a customer on WhatsApp, seeing step by step how customer service and loan application automation works.",
    simulator_instruction1: "Click on the options to proceed.",
    simulator_instruction2: "It's not real, it's just a demo!",
    simulator_start: "Start simulation",
    simulator_option1: "1️⃣ Check status of my application",
    simulator_option2: "2️⃣ Request new loan",
    simulator_option3: "3️⃣ Talk to an agent",
    simulator_send_data: "Send my loan data",
    simulator_accept: "YES, I accept conditions",
    simulator_reject: "NO, I have doubts",
    simulator_reset: "Reset simulator",

    // Projects
    projects_title: "Featured Projects",
    projects_description: "Some of our most recent work that demonstrates our capacity for innovation and quality.",
    
    // Specific projects
    project1_title: "Innovative E-commerce",
    project1_description: "E-commerce platform with complete automation and exceptional user experience.",
    project1_feature1: "Responsive and modern design",
    project1_feature2: "Advanced SEO optimization",
    project1_feature3: "API integration",
    project1_feature4: "Admin panel",
    project1_feature5: "Optimized loading speed",
    
    project2_title: "Management App",
    project2_description: "Mobile application for business management with advanced integrations and real-time analytics.",
    project2_feature1: "Intuitive multiplatform interface",
    project2_feature2: "Real-time synchronization",
    project2_feature3: "Personalized push notifications",
    project2_feature4: "Functional offline mode",
    project2_feature5: "Advanced biometric security",
    
    project3_title: "Automation System",
    project3_description: "Business automation platform that reduced operational costs by 60%.",
    project3_feature1: "Predictive Machine Learning",
    project3_feature2: "Massive data processing",
    project3_feature3: "Advanced analytical dashboards",
    project3_feature4: "Legacy system integration",
    project3_feature5: "Cloud scalability",

    // Contact
    contact_title: "Let's talk!",
    contact_subtitle: "Ready to transform your business? Let's do something great together!",
    contact_name_label: "Name",
    contact_name_placeholder: "What's your name?",
    contact_company_label: "Company",
    contact_company_placeholder: "Where do you work? (optional)",
    contact_email_label: "Email",
    contact_email_placeholder: "Your contact email",
    contact_message_label: "Message",
    contact_message_placeholder: "How can I help you?",
    contact_send_button: "Send message",
    contact_whatsapp: "Write me now",
    contact_social: "Social:",

    // Footer
    footer_tagline: "Innovation + Technology + Creativity",
    footer_made_with: "Made with",
    footer_by: "by",

    // Modals
    modal_thanks_title: "Thanks for your message!",
    modal_thanks_message: "You made a great decision.<br>We will contact you as soon as possible.",
    modal_close: "Close",
    modal_about_title: "About Echoday",

    // Service pages detailed features
    // Web Development Features
    web_dev_feature_1_title: "Frontend Development",
    web_dev_feature_1_desc: "Modern and responsive interfaces with the latest web technologies.",
    web_dev_feature_2_title: "Robust Backend",
    web_dev_feature_2_desc: "Scalable and secure architecture for complex applications.",
    web_dev_feature_3_title: "Ecommerce",
    web_dev_feature_3_desc: "Complete online stores with integrated payment gateways.",
    web_dev_feature_4_title: "Responsive Design",
    web_dev_feature_4_desc: "Perfect adaptation to all devices and screens.",
    web_dev_feature_5_title: "SEO Optimized",
    web_dev_feature_5_desc: "Search engine optimization from day one.",
    web_dev_feature_6_title: "High Performance",
    web_dev_feature_6_desc: "Fast loading and exceptional user experience.",

    // AI Automation Features
    automation_feature_1_title: "Intelligent Chatbots",
    automation_feature_1_desc: "We develop advanced chatbots with natural language processing that provide 24/7 customer service and automate complex responses.",
    automation_feature_2_title: "WhatsApp Business Integration",
    automation_feature_2_desc: "Connect your business with WhatsApp Business API to automate communications, manage orders and improve customer experience.",
    automation_feature_3_title: "Automated Processes",
    automation_feature_3_desc: "We automate repetitive tasks, complex workflows and decision-making processes to maximize productivity.",
    automation_feature_4_title: "Predictive Analytics",
    automation_feature_4_desc: "We use AI to analyze patterns, predict behaviors and optimize business decision making.",
    automation_feature_5_title: "Systems Integration",
    automation_feature_5_desc: "We connect your existing systems with AI solutions to create a unified and efficient digital ecosystem.",

    // Presentations Features
    presentations_feature_1_title: "Pitch Decks",
    presentations_feature_1_desc: "Convincing presentations for investors and clients.",
    presentations_feature_2_title: "Corporate Presentations",
    presentations_feature_2_desc: "Professional and effective business communication.",
    presentations_feature_3_title: "Visual Design",
    presentations_feature_3_desc: "Graphics and visual elements that capture attention.",
    presentations_feature_4_title: "Sales Presentations",
    presentations_feature_4_desc: "Sales tools that convert prospects into customers.",
    presentations_feature_5_title: "Educational Material",
    presentations_feature_5_desc: "High quality didactic and educational content.",

    // Mobile Apps Features
    mobile_apps_feature_1_title: "Native Development",
    mobile_apps_feature_1_desc: "Native iOS and Android apps with optimal performance.",
    mobile_apps_feature_2_title: "Intuitive UI/UX",
    mobile_apps_feature_2_desc: "Attractive and easy-to-use user interfaces.",
    mobile_apps_feature_3_title: "Backend Integration",
    mobile_apps_feature_3_desc: "Connection with existing systems and databases.",
    mobile_apps_feature_4_title: "Push Notifications",
    mobile_apps_feature_4_desc: "Direct and personalized communication with users.",
    mobile_apps_feature_5_title: "Analytics and Metrics",
    mobile_apps_feature_5_desc: "Detailed tracking of user behavior.",

    // CTAs
    service_cta: "Request a Free Consultation",

    // About Text
    about_text: "Hello! I'm a Data Engineering student with a deep passion for innovation and technological development. My goal is to provide creative and efficient solutions that drive digital transformation, especially in South America, a region full of potential and opportunities to open new horizons of knowledge.\n\nI'm motivated to create tools and platforms that make life easier for people and businesses, using data, artificial intelligence and automation to solve real challenges. I firmly believe that technology is an engine of positive change, and that's why I always seek to be at the forefront, learning and applying the best practices in the sector.\n\nMy vision is to contribute to the development of a more competitive, connected and future-ready region, collaborating with multidisciplinary teams and sharing acquired knowledge. If you share this passion for innovation and transformation, let's talk and create the next big project together!"
  },

  pt: {
  hero_projects: "Soluções sob medida, atendimento próximo e resultados garantidos.<br>Mais de 30 projetos realizados para empresas e autônomos.",
  services_header: "Serviços profissionais",
  services_header_desc: "Soluções digitais para empresas e autônomos na Catalunha e Espanha.<br>Consulte preços e opções personalizadas.<br><span style='color:#42fa7a;font-weight:700;font-size:1.45rem;'>Solicite consultoria gratuita!</span>",
  about_header: "Sobre mim",
  about_section_desc: "Sou Leo, profissional digital com mais de 3 anos de experiência em desenvolvimento web, apps móveis, inteligência artificial e consultoria tecnológica. Minha missão é ajudar empresas e autônomos a crescer e se transformar digitalmente, oferecendo soluções inovadoras, eficientes e adaptadas a cada cliente.<br><br><b>Valores:</b> Inovação, honestidade, compromisso e foco no cliente.<br><b>Experiência:</b> Mais de 30 projetos realizados na Espanha, Catalunha e América Latina, incluindo:<br>- App de gestão para uma empresa na Catalunha.<br>- Plataforma web para uma cooperativa no Paraguai.<br>- Automação IA para uma startup na Alemanha.<br><b>Enfoque internacional:</b> Conheço o mercado catalão, espanhol e latino-americano, adaptando cada solução às necessidades reais de cada região.<br><br>Se você busca um parceiro tecnológico para seu negócio, <a href='#contacto' style='color:var(--accent2);text-decoration:underline;'>fale comigo</a> e descubra como podemos inovar juntos.",
  about_section_contact: "Quer saber mais? <a href='#contacto' style='color:var(--accent2);text-decoration:underline;'>Fale comigo</a>",
  service_web_title: "Site profissional",
  service_web_desc: "Desenvolvimento web moderno, otimizado e adaptado ao seu negócio.",
  service_web_includes: "Inclui: design personalizado, SEO, integração com redes sociais e Google Analytics.",
  service_web_feature1: "Responsivo e SEO",
  service_web_feature2: "Painel de administração",
  service_web_feature3: "Integração com APIs",
  service_web_feature4: "Exemplo:",
  service_web_example: "www.tienda-catalunya.com",
  service_web_price: "A partir de 1.800€",
  service_app_title: "App móvel",
  service_app_desc: "Apps para iOS e Android, personalizadas para sua empresa.",
  service_app_includes: "Inclui: publicação nas lojas, notificações push, suporte pós-lançamento.",
  service_app_feature1: "Notificações push",
  service_app_feature2: "Publicação nas lojas",
  service_app_feature3: "Interface intuitiva",
  service_app_feature4: "Exemplo:",
  service_app_example: "AppGestión Catalunya",
  service_app_price: "A partir de 2.400€",
  service_ai_title: "Automação IA",
  service_ai_desc: "Automatize processos com inteligência artificial e bots avançados.",
  service_ai_includes: "Inclui: chatbots, integração WhatsApp, análise de dados.",
  service_ai_feature1: "Chatbots inteligentes",
  service_ai_feature2: "Integração WhatsApp Business",
  service_ai_feature3: "Workflows personalizados",
  service_ai_feature4: "Exemplo:",
  service_ai_example: "BotAtención Express",
  service_ai_price: "A partir de 900€",
  service_consult_title: "Consultoria digital",
  service_consult_desc: "Diagnóstico, estratégia e capacitação para empresas e autônomos.",
  service_consult_includes: "Inclui: auditoria digital, plano de ação, treinamento presencial/online.",
  service_consult_feature1: "Diagnóstico digital",
  service_consult_feature2: "Estratégia personalizada",
  service_consult_feature3: "Treinamento e suporte",
  service_consult_feature4: "Exemplo:",
  service_consult_example: "Consultoría Pyme Barcelona",
  service_consult_price: "A partir de 250€",
  service_present_title: "Apresentações de impacto",
  service_present_desc: "Design de apresentações profissionais para eventos, pitch e treinamento.",
  service_present_includes: "Inclui: animações, roteiro, consultoria de comunicação.",
  service_present_feature1: "Design visual e animações",
  service_present_feature2: "Conteúdo persuasivo",
  service_present_feature3: "Interatividade avançada",
  service_present_feature4: "Exemplo:",
  service_present_example: "Pitch DemoTech",
  service_present_price: "A partir de 350€",
  service_maint_title: "Manutenção de site",
  service_maint_desc: "Atualizações, segurança e suporte técnico contínuo.",
  service_maint_includes: "Inclui: backups, monitoramento, resposta rápida.",
  service_maint_feature1: "Atualizações mensais",
  service_maint_feature2: "Suporte técnico",
  service_maint_feature3: "Segurança avançada",
  service_maint_feature4: "Exemplo:",
  service_maint_example: "MantenimientoWeb Pro",
  service_maint_price: "130€/mês",
  faq_title: "Perguntas frequentes",
  faq_q1: "Quanto tempo leva um projeto web?",
  faq_a1: "Normalmente entre 2 e 4 semanas, dependendo da complexidade.",
  faq_q2: "Você oferece suporte após a entrega?",
  faq_a2: "Sim, todos os projetos incluem suporte e manutenção opcional.",
  faq_q3: "Você trabalha só na Catalunha?",
  faq_a3: "Principalmente, mas também realizo projetos em toda a Espanha.",
  faq_q4: "Como é feito o pagamento?",
  faq_a4: "Por transferência bancária, com opção de pagamento parcelado.",
  about_text: "Olá! Sou profissional de Engenharia de Dados e desenvolvimento web, apaixonado por inovação e tecnologia. Meu objetivo é oferecer soluções criativas e eficientes que impulsionem a transformação digital de empresas e empreendedores, independentemente do setor ou da região.\n\nTenho motivação para criar ferramentas e plataformas que facilitem a vida das pessoas e dos negócios, utilizando dados, inteligência artificial e automação para resolver desafios reais. Acredito que a tecnologia é um motor de mudança positiva e busco estar sempre na vanguarda, aprendendo e aplicando as melhores práticas do setor.\n\nMinha visão é contribuir para o crescimento de empresas competitivas, conectadas e preparadas para o futuro, colaborando com equipes multidisciplinares e compartilhando conhecimento. Se você compartilha essa paixão por inovar e transformar, vamos conversar e criar juntos o próximo grande projeto!",
  testimonials_title: "Depoimentos",
  testimonial_1_text: "O aplicativo de gestão desenvolvido pelo Leo para nossa empresa melhorou a produtividade e a satisfação dos clientes.<br>Muito profissional e atencioso em todo o processo.",
  testimonial_1_author: "— Jordi, Gestoría Catalunya",
  testimonial_2_text: "A plataforma web criada pelo Leo para nossa cooperativa facilitou a gestão e comunicação com nossos associados.<br>Recomendamos seu trabalho pela seriedade e compromisso.",
  testimonial_2_author: "— Lorenzo Barreto, Presidente da Cooperativa Medalla Milagrosa (Paraguai)",
    // Navegação
    nav_services: "Serviços",
    nav_automation: "Automação IA",
    nav_web_dev: "Desenvolvimento Web",
    nav_presentations: "Apresentações de Impacto",
    nav_mobile_apps: "Criação de Apps Móveis",
    nav_about: "Sobre",
    nav_contact: "Contato",

    // Seção Hero
    hero_title: "O futuro é hoje, Echoday",
    hero_subtitle: "Transformação digital e criatividade para empresas que querem se destacar.",
    hero_cta: "Vamos falar sobre seu próximo projeto!",

    // Serviços
    services_title: "O que fazemos na Echoday?",
    services_description: "Criamos experiências digitais que inspiram, transformam e fazem crescer sua empresa. Evolua, destaque-se e lidere.",
    
    click_hint: "Clique aqui!",

    // Serviço 1 - Automação IA
    service1_title: "Automação IA",
    service1_description: "Automatize processos com inteligência artificial, bots avançados e sistemas inteligentes para transformar sua empresa.",
    service1_feature1: "Chatbots inteligentes com IA",
    service1_feature2: "Integração WhatsApp Business",
    service1_feature3: "Automação de tarefas repetitivas",
    service1_feature4: "Análise de dados em tempo real",
    service1_feature5: "Workflows personalizados",

    // Serviço 2 - Desenvolvimento Web
    service2_title: "Desenvolvimento Web",
    service2_description: "Sites, apps, chatbots e dashboards com tecnologia de ponta e design atrativo, prontos para crescer com você.",
    service2_feature1: "Design responsivo e moderno",
    service2_feature2: "Otimização SEO avançada",
    service2_feature3: "Integração com APIs",
    service2_feature4: "Painel de administração",
    service2_feature5: "Velocidade de carregamento otimizada",

    // Serviço 3 - Apps Móveis
    service3_title: "Apps Móveis",
    service3_description: "Desenvolvimento de apps móveis para iOS e Android, personalizados para seu negócio e clientes.",
    service3_feature1: "Desenvolvimento iOS e Android",
    service3_feature2: "Interface intuitiva e atrativa",
    service3_feature3: "Notificações push",
    service3_feature4: "Sincronização em tempo real",
    service3_feature5: "Publicação nas lojas",

    // Serviço 4 - Consultoria
    service4_title: "Consultoria para Empresários",
    service4_description: "Diagnóstico, ideias, implementação e capacitação: torne-se referência digital em seu setor.",
    service4_feature1: "Diagnóstico digital completo",
    service4_feature2: "Estratégia de transformação",
    service4_feature3: "Implementação personalizada",
    service4_feature4: "Capacitação da equipe",
    service4_feature5: "Suporte contínuo",

    // Serviço 5 - Apresentações
    service5_title: "Apresentações de Impacto",
    service5_description: "Transforme seu pitch, demo ou evento numa experiência memorável. Surpreenda sua audiência desde o primeiro minuto.",
    service5_feature1: "Design visual impactante",
    service5_feature2: "Animações e transições",
    service5_feature3: "Conteúdo persuasivo",
    service5_feature4: "Interatividade avançada",
    service5_feature5: "Adaptado à sua audiência",

    // Simulador
    simulator_title: "Simulador do WhatsApp",
    simulator_description: "Esta demo permite interagir como se fosse um cliente no WhatsApp, vendo passo a passo como funciona a automação de atendimento e solicitação de empréstimos.",
    simulator_instruction1: "Clique nas opções para avançar.",
    simulator_instruction2: "Não é real, é apenas uma demo!",
    simulator_start: "Iniciar simulação",
    simulator_option1: "1️⃣ Consultar status da minha solicitação",
    simulator_option2: "2️⃣ Solicitar novo empréstimo",
    simulator_option3: "3️⃣ Falar com um agente",
    simulator_send_data: "Enviar meus dados de empréstimo",
    simulator_accept: "SIM, aceito as condições",
    simulator_reject: "NÃO, tenho dúvidas",
    simulator_reset: "Reiniciar simulador",

    // Projetos
    projects_title: "Projetos em Destaque",
    projects_description: "Alguns dos nossos trabalhos mais recentes que demonstram nossa capacidade de inovação e qualidade.",
    
    // Projetos específicos
    project1_title: "E-commerce Inovador",
    project1_description: "Plataforma de comércio eletrônico com automação completa e experiência do usuário excepcional.",
    project1_feature1: "Design responsivo e moderno",
    project1_feature2: "Otimização SEO avançada",
    project1_feature3: "Integração com APIs",
    project1_feature4: "Painel de administração",
    project1_feature5: "Velocidade de carregamento otimizada",
    
    project2_title: "App de Gestão",
    project2_description: "Aplicativo móvel para gestão empresarial com integrações avançadas e análise em tempo real.",
    project2_feature1: "Interface intuitiva multiplataforma",
    project2_feature2: "Sincronização em tempo real",
    project2_feature3: "Notificações push personalizadas",
    project2_feature4: "Modo offline funcional",
    project2_feature5: "Segurança biométrica avançada",
    
    project3_title: "Sistema de Automação",
    project3_description: "Plataforma de automação empresarial que reduziu custos operacionais em 60%.",
    project3_feature1: "Machine Learning preditivo",
    project3_feature2: "Processamento de dados massivo",
    project3_feature3: "Dashboards analíticos avançados",
    project3_feature4: "Integração com sistemas legados",
    project3_feature5: "Escalabilidade na nuvem",

    // Contato
    contact_title: "Vamos conversar!",
    contact_subtitle: "Pronto para transformar sua empresa? Vamos fazer algo grande juntos!",
    contact_name_label: "Nome",
    contact_name_placeholder: "Qual é seu nome?",
    contact_company_label: "Empresa",
    contact_company_placeholder: "Onde você trabalha? (opcional)",
    contact_email_label: "Email",
    contact_email_placeholder: "Seu email de contato",
    contact_message_label: "Mensagem",
    contact_message_placeholder: "Como posso te ajudar?",
    contact_send_button: "Enviar mensagem",
    contact_whatsapp: "Me escreva agora",
    contact_social: "Redes:",

    // Rodapé
    footer_tagline: "Inovação + Tecnologia + Criatividade",
    footer_made_with: "Feito com",
    footer_by: "por",

    // Modais
    modal_thanks_title: "Obrigado pela sua mensagem!",
    modal_thanks_message: "Você tomou uma ótima decisão.<br>Entraremos em contato o mais rápido possível.",
    modal_close: "Fechar",
    modal_about_title: "Sobre Echoday",

    // Páginas de serviços detalhadas
    // Recursos de Desenvolvimento Web
    web_dev_feature_1_title: "Desenvolvimento Frontend",
    web_dev_feature_1_desc: "Interfaces modernas e responsivas com as mais recentes tecnologias web.",
    web_dev_feature_2_title: "Backend Robusto",
    web_dev_feature_2_desc: "Arquitetura escalável e segura para aplicações complexas.",
    web_dev_feature_3_title: "Ecommerce",
    web_dev_feature_3_desc: "Lojas online completas com gateways de pagamento integrados.",
    web_dev_feature_4_title: "Design Responsivo",
    web_dev_feature_4_desc: "Adaptação perfeita a todos os dispositivos e telas.",
    web_dev_feature_5_title: "SEO Otimizado",
    web_dev_feature_5_desc: "Otimização para mecanismos de busca desde o primeiro dia.",
    web_dev_feature_6_title: "Alta Performance",
    web_dev_feature_6_desc: "Carregamento rápido e experiência de usuário excepcional.",

    // Recursos de Automação IA
    automation_feature_1_title: "Chatbots Inteligentes",
    automation_feature_1_desc: "Desenvolvemos chatbots avançados com processamento de linguagem natural que fornecem atendimento ao cliente 24/7 e automatizam respostas complexas.",
    automation_feature_2_title: "Integração WhatsApp Business",
    automation_feature_2_desc: "Conecte seu negócio com a API do WhatsApp Business para automatizar comunicações, gerenciar pedidos e melhorar a experiência do cliente.",
    automation_feature_3_title: "Processos Automatizados",
    automation_feature_3_desc: "Automatizamos tarefas repetitivas, fluxos de trabalho complexos e processos de tomada de decisão para maximizar a produtividade.",
    automation_feature_4_title: "Análise Preditiva",
    automation_feature_4_desc: "Usamos IA para analisar padrões, prever comportamentos e otimizar a tomada de decisões empresariais.",
    automation_feature_5_title: "Integração de Sistemas",
    automation_feature_5_desc: "Conectamos seus sistemas existentes com soluções de IA para criar um ecossistema digital unificado e eficiente.",

    // Recursos de Apresentações
    presentations_feature_1_title: "Pitch Decks",
    presentations_feature_1_desc: "Apresentações convincentes para investidores e clientes.",
    presentations_feature_2_title: "Apresentações Corporativas",
    presentations_feature_2_desc: "Comunicação empresarial profissional e eficaz.",
    presentations_feature_3_title: "Design Visual",
    presentations_feature_3_desc: "Gráficos e elementos visuais que capturam a atenção.",
    presentations_feature_4_title: "Apresentações Comerciais",
    presentations_feature_4_desc: "Ferramentas de vendas que convertem prospects em clientes.",
    presentations_feature_5_title: "Material Educativo",
    presentations_feature_5_desc: "Conteúdo didático e educativo de alta qualidade.",

    // Recursos de Apps Móveis
    mobile_apps_feature_1_title: "Desenvolvimento Nativo",
    mobile_apps_feature_1_desc: "Apps nativos para iOS e Android com performance otimizada.",
    mobile_apps_feature_2_title: "UI/UX Intuitivo",
    mobile_apps_feature_2_desc: "Interfaces de usuário atrativas e fáceis de usar.",
    mobile_apps_feature_3_title: "Integração Backend",
    mobile_apps_feature_3_desc: "Conexão com sistemas e bancos de dados existentes.",
    mobile_apps_feature_4_title: "Notificações Push",
    mobile_apps_feature_4_desc: "Comunicação direta e personalizada com usuários.",
    mobile_apps_feature_5_title: "Análise e Métricas",
    mobile_apps_feature_5_desc: "Acompanhamento detalhado do comportamento dos usuários.",

    // CTAs
    service_cta: "Solicite uma Consulta Gratuita",

    // Texto About
    about_text: "Olá! Sou estudante de Engenharia de Dados com uma profunda paixão por inovação e desenvolvimento tecnológico. Meu objetivo é fornecer soluções criativas e eficientes que impulsionem a transformação digital, especialmente na América do Sul, uma região cheia de potencial e oportunidades para abrir novos horizontes de conhecimento.\n\nMe motivo a criar ferramentas e plataformas que facilitem a vida das pessoas e empresas, usando dados, inteligência artificial e automação para resolver desafios reais. Acredito firmemente que a tecnologia é um motor de mudança positiva, e por isso busco estar sempre na vanguarda, aprendendo e aplicando as melhores práticas do setor.\n\nMinha visão é contribuir para o desenvolvimento de uma região mais competitiva, conectada e preparada para o futuro, colaborando com equipes multidisciplinares e compartilhando conhecimento adquirido. Se você compartilha essa paixão por inovar e transformar, vamos conversar e criar juntos o próximo grande projeto!"
  },

  ca: {
    hero_projects: "Solucions personalitzades, tracte proper i resultats garantits.<br>Més de 30 projectes realitzats per a empreses i autònoms.",
    services_header: "Serveis professionals",
    services_header_desc: "Solucions digitals per a empreses i autònoms a Catalunya i Espanya.<br>Consulta preus i opcions personalitzades.<br><span style='color:#42fa7a;font-weight:700;font-size:1.45rem;'>Sol·licita assessoria gratuïta!</span>",
    about_header: "Sobre mi",
    about_section_desc: "Sóc Leo, professional digital amb més de 3 anys d'experiència en desenvolupament web, apps mòbils, intel·ligència artificial i consultoria tecnològica. La meva missió és ajudar empreses i autònoms a créixer i transformar-se digitalment, oferint solucions innovadores, eficients i adaptades a cada client.<br><br><b>Valors:</b> Innovació, honestedat, compromís i enfocament al client.<br><b>Experiència:</b> Més de 30 projectes realitzats a Espanya, Catalunya i Llatinoamèrica, incloent:<br>- App de gestió per a una gestoria a Catalunya.<br>- Plataforma web per a una cooperativa al Paraguai.<br>- Automatització IA per a una startup a Alemanya.<br><b>Enfocament internacional:</b> Conec el mercat català, espanyol i llatinoamericà, adaptant cada solució a les necessitats reals de cada zona.<br><br>Si busques un aliat tecnològic per al teu negoci, <a href='#contacto' style='color:var(--accent2);text-decoration:underline;'>contacta'm</a> i descobreix com podem innovar junts.",
    about_section_contact: "Vols saber més? <a href='#contacto' style='color:var(--accent2);text-decoration:underline;'>Contacta'm</a>",
    service_web_title: "Web professional",
    service_web_desc: "Desenvolupament web modern, optimitzat i adaptat al teu negoci.",
    service_web_includes: "Inclou: disseny personalitzat, SEO, integració amb xarxes socials i Google Analytics.",
    service_web_feature1: "Responsive i SEO",
    service_web_feature2: "Panell d'administració",
    service_web_feature3: "Integració amb APIs",
    service_web_feature4: "Exemple:",
    service_web_example: "www.botiga-catalunya.com",
    service_web_price: "Des de 1.800€",
    service_app_title: "App mòbil",
    service_app_desc: "Apps per a iOS i Android, personalitzades per a la teva empresa.",
    service_app_includes: "Inclou: publicació a botigues, notificacions push, suport post-llançament.",
    service_app_feature1: "Notificacions push",
    service_app_feature2: "Publicació a botigues",
    service_app_feature3: "Interfície intuïtiva",
    service_app_feature4: "Exemple:",
    service_app_example: "AppGestió Catalunya",
    service_app_price: "Des de 2.400€",
    service_ai_title: "Automatització IA",
    service_ai_desc: "Automatitza processos amb intel·ligència artificial i bots avançats.",
    service_ai_includes: "Inclou: chatbots, integració WhatsApp, anàlisi de dades.",
    service_ai_feature1: "Chatbots intel·ligents",
    service_ai_feature2: "Integració WhatsApp Business",
    service_ai_feature3: "Fluxos de treball personalitzats",
    service_ai_feature4: "Exemple:",
    service_ai_example: "BotAtenció Express",
    service_ai_price: "Des de 900€",
    service_consult_title: "Consultoria digital",
    service_consult_desc: "Diagnòstic, estratègia i capacitació per a empreses i autònoms.",
    service_consult_includes: "Inclou: auditoria digital, pla d'acció, formació presencial/online.",
    service_consult_feature1: "Diagnòstic digital",
    service_consult_feature2: "Estratègia personalitzada",
    service_consult_feature3: "Formació i suport",
    service_consult_feature4: "Exemple:",
    service_consult_example: "Consultoria Pime Barcelona",
    service_consult_price: "Des de 250€",
    service_present_title: "Presentacions d'impacte",
    service_present_desc: "Disseny de presentacions professionals per a esdeveniments, pitch i formació.",
    service_present_includes: "Inclou: animacions, guió, assessoria en comunicació.",
    service_present_feature1: "Disseny visual i animacions",
    service_present_feature2: "Contingut persuasiu",
    service_present_feature3: "Interactivitat avançada",
    service_present_feature4: "Exemple:",
    service_present_example: "Pitch DemoTech",
    service_present_price: "Des de 350€",
    service_maint_title: "Manteniment web",
    service_maint_desc: "Actualitzacions, seguretat i suport tècnic continu.",
    service_maint_includes: "Inclou: còpies de seguretat, monitorització, resposta ràpida.",
    service_maint_feature1: "Actualitzacions mensuals",
    service_maint_feature2: "Suport tècnic",
    service_maint_feature3: "Seguretat avançada",
    service_maint_feature4: "Exemple:",
    service_maint_example: "MantenimentWeb Pro",
    service_maint_price: "130€/mes",

    // Contacto
    contact_title: "Parlem!",
    contact_subtitle: "Preparats per transformar la teva empresa? Fem alguna cosa gran junts!",
    contact_name_label: "Nom",
    contact_name_placeholder: "Quin és el teu nom?",
    contact_company_label: "Empresa",
    contact_company_placeholder: "On treballes? (opcional)",
    contact_email_label: "Email",
    contact_email_placeholder: "El teu email de contacte",
    contact_message_label: "Missatge",
    contact_message_placeholder: "Com et puc ajudar?",
    contact_send_button: "Enviar missatge",
    contact_whatsapp: "Escriu-me ara",
    contact_social: "Xarxes:",

    // CTAs
    service_cta: "Sol·licita una Consulta Gratuïta",

    // Texto About
    about_text: "Hola! Sóc un estudiant d'Enginyeria de Dades amb una profunda passió per la innovació i el desenvolupament tecnològic. El meu objectiu és aportar solucions creatives i eficients que impulsin la transformació digital, especialment a Catalunya i la resta d'Espanya, regions plenes de potencial i oportunitats.\n\nEm motiva crear eines i plataformes que facilitin la vida de les persones i les empreses, utilitzant dades, intel·ligència artificial i automatització per resoldre reptes reals. Crec fermament que la tecnologia és un motor de canvi positiu, i per això busco estar sempre a l'avantguarda, aprenent i aplicant les millors pràctiques del sector.\n\nLa meva visió és contribuir al desenvolupament d'una regió més competitiva, connectada i preparada per al futur, col·laborant amb equips multidisciplinaris i compartint coneixement adquirit. Si comparteixes aquesta passió per innovar i transformar, parlem i creem junts el proper gran projecte!"
  }
};

// Sistema de gestión de idiomas
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('echoday-language') || 'es';
    this.init();
  }

  init() {
    this.setupLanguageSelector();
    this.translatePage();
    this.updateLanguageDisplay();
  }

  setupLanguageSelector() {
    const languageToggle = document.getElementById('languageToggle');
    const languageMenu = document.getElementById('languageMenu');
    const languageOptions = document.querySelectorAll('.language-option');

    if (!languageToggle || !languageMenu) return;

    // Toggle del menú de idiomas
    languageToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const selector = document.querySelector('.language-selector');
      selector.classList.toggle('open');
      languageToggle.classList.toggle('open');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.language-selector')) {
        const selector = document.querySelector('.language-selector');
        selector.classList.remove('open');
        languageToggle.classList.remove('open');
      }
    });

    // Opciones de idioma
    languageOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        this.changeLanguage(lang);
        
        // Cerrar el menú
        const selector = document.querySelector('.language-selector');
        selector.classList.remove('open');
        languageToggle.classList.remove('open');
      });
    });

    // Actualizar estados activos
    this.updateActiveLanguage();
  }

  changeLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('echoday-language', lang);
      this.translatePage();
      this.updateLanguageDisplay();
      this.updateActiveLanguage();
      
      // Actualizar el HTML lang attribute
      document.documentElement.lang = lang;
    }
  }

  translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = translations[this.currentLanguage][key];
      if (translation) {
        element.innerHTML = translation;
      }
    });

    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      const translation = translations[this.currentLanguage][key];
      if (translation) {
        element.placeholder = translation;
      }
    });

    // Actualizar el título de la página y meta tags
    const titleMeta = {
      'es': {
        title: 'Echoday - Soluciones Creativas',
        description: 'Transformación digital y creatividad para empresas que quieren destacar. Automatización IA, desarrollo web, apps móviles y más.',
        keywords: 'desarrollo web, automatización IA, apps móviles, transformación digital, consultoría empresarial'
      },
      'ca': {
        title: 'Echoday - Solucions Creatives',
        description: 'Transformació digital i creativitat per a empreses que volen destacar. Automatització IA, desenvolupament web, apps mòbils i més.',
        keywords: 'desenvolupament web, automatització IA, apps mòbils, transformació digital, consultoria empresarial'
      },
      'en': {
        title: 'Echoday - Creative Solutions',
        description: 'Digital transformation and creativity for companies that want to stand out. AI automation, web development, mobile apps and more.',
        keywords: 'web development, AI automation, mobile apps, digital transformation, business consulting'
      },
      'pt': {
        title: 'Echoday - Soluções Criativas',
        description: 'Transformação digital e criatividade para empresas que querem se destacar. Automação IA, desenvolvimento web, apps móveis e mais.',
        keywords: 'desenvolvimento web, automação IA, apps móveis, transformação digital, consultoria empresarial'
      }
    };

    const currentMeta = titleMeta[this.currentLanguage];
    if (currentMeta) {
      document.title = currentMeta.title;
      
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', currentMeta.description);
      }
      
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta) {
        keywordsMeta.setAttribute('content', currentMeta.keywords);
      }
    }

    // Actualizar el HTML lang attribute
    document.documentElement.lang = this.currentLanguage;

    // Actualizar about modal text si existe
    this.updateAboutModalText();
  }

  updateLanguageDisplay() {
    const currentLangElement = document.querySelector('.current-lang');
    if (currentLangElement) {
      const langDisplayNames = {
        'es': 'ES',
        'en': 'EN',
        'pt': 'PT'
      };
      currentLangElement.textContent = langDisplayNames[this.currentLanguage];
    }
  }

  updateActiveLanguage() {
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
      option.classList.remove('active');
      if (option.getAttribute('data-lang') === this.currentLanguage) {
        option.classList.add('active');
      }
    });
  }

  updateAboutModalText() {
    // Actualizar función showAboutModal para manejar traducciones
    if (window.originalShowAboutModal) {
      window.originalShowAboutModal = window.showAboutModal;
    }
    
    // Override de la función showAboutModal original
    const aboutText = translations[this.currentLanguage].about_text;
    if (window.showAboutModal && aboutText) {
      // Almacenar el texto traducido para uso en showAboutModal
      window.translatedAboutText = aboutText;
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getTranslation(key) {
    return translations[this.currentLanguage][key] || key;
  }
}

// Inicializar el gestor de idiomas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
});

// Función auxiliar para obtener traducciones desde cualquier parte del código
function t(key) {
  return window.languageManager ? window.languageManager.getTranslation(key) : key;
}
