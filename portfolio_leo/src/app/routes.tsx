import { FormEvent, ReactNode, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { createBrowserRouter, Link, useLocation } from "react-router"

type Language = "es" | "ca" | "en"

type Copy = {
  nav: string[]
  menu: string
  close: string
  available: string
  heroKicker: string
  heroTitle: [string, string, string]
  heroCopy: string
  explore: string
  contact: string
  heroMeta: Array<{
    kicker: string
    title: string
    copy: string
    tags?: string[]
  }>
  ticker: string[]
  projectEyebrow: string
  projectTitle: [string, string]
  projectIntro: string
  viewCode: string
  liveSite: string
  selected: string
  servicesEyebrow: string
  servicesTitle: [string, string]
  servicesIntro: string
  services: Array<{ number: string title: string copy: string tags: string[] }>
  opportunitiesEyebrow: string
  opportunitiesTitle: [string, string]
  opportunitiesIntro: string
  opportunities: Array<{ code: string title: string copy: string }>
  opportunitiesCta: string
  aboutEyebrow: string
  aboutTitle: string
  aboutCopy: string
  currently: string
  currentlyCopy: string
  stack: string
  values: string
  valueItems: string[]
  contactEyebrow: string
  contactTitle: [string, string]
  contactCopy: string
  formName: string
  formEmail: string
  formType: string
  formMessage: string
  formPlaceholder: string
  send: string
  sent: string
  sentCopy: string
  another: string
  projectTypes: string[]
  footerCopy: string
  backTop: string
}

const copy: Record<Language, Copy> = {
  es: {
    nav: ["Proyectos", "Servicios", "Sobre mí", "Contacto"],
    menu: "Abrir menú",
    close: "Cerrar menú",
    available: "Disponible para nuevos proyectos",
    heroKicker: "Ingeniería informática · Desarrollo creativo",
    heroTitle: ["Diseño.", "Código.", "Impacto."],
    heroCopy:
      "Soy Leo, estudiante de Ingeniería Informática. Convierto curiosidad en productos digitales: diseño webs con identidad, construyo prototipos con visión artificial y aprendo seguridad explorando sistemas conectados de forma ética.",
    explore: "Explorar proyectos",
    contact: "Hablemos de tu idea",
    heroMeta: [
      {
        kicker: "Construyendo en público",
        title: "32 repositorios",
        copy: "Experimentos reales, aprendizaje continuo y código que evoluciona.",
      },
      {
        kicker: "Base de operaciones",
        title: "Barcelona",
        copy: "Conectado con equipos, negocios e ideas desde cualquier lugar.",
      },
      {
        kicker: "Órbita actual",
        title: "Crear · Romper · Aprender",
        copy: "Tres territorios donde quiero seguir creciendo.",
        tags: ["Creative web", "AI vision", "IoT security"],
      },
    ],
    ticker: [
      "Construir con intención",
      "Aprender haciendo",
      "Hackathons",
      "Computer vision",
      "CTF & seguridad",
      "Open to internships",
    ],
    projectEyebrow: "Trabajo seleccionado",
    projectTitle: ["Proyectos que viven", "entre ideas y código."],
    projectIntro:
      "Una selección real de experimentos, productos y webs para negocios locales. Cada proyecto es una excusa para aprender algo nuevo.",
    viewCode: "Ver código",
    liveSite: "Visitar web",
    selected: "Proyecto destacado",
    servicesEyebrow: "Lo que puedo construir",
    servicesTitle: ["De una idea difusa", "a algo que funciona."],
    servicesIntro:
      "Combino criterio visual, desarrollo y curiosidad técnica para crear productos digitales que no se sienten genéricos.",
    services: [
      {
        number: "01",
        title: "Webs con identidad",
        copy: "Diseño y desarrollo de páginas rápidas, memorables y adaptadas a cada negocio local.",
        tags: ["React", "TypeScript", "Responsive"],
      },
      {
        number: "02",
        title: "Prototipos & IA",
        copy: "Experimentos funcionales con visión artificial, automatización y nuevas interfaces.",
        tags: ["Python", "OpenCV", "AI"],
      },
      {
        number: "03",
        title: "Seguridad",
        copy: "Laboratorios controlados para estudiar amenazas, auditoría y recuperación segura.",
        tags: ["Ethical hacking", "IoT", "Research"],
      },
    ],
    opportunitiesEyebrow: "Abierto a nuevos retos",
    opportunitiesTitle: ["Busco equipo.", "Busco el próximo desafío."],
    opportunitiesIntro:
      "Quiero conectar con personas que tengan ganas de construir, competir y aprender. Estoy abierto a formar equipo y aportar desarrollo, ideas y energía.",
    opportunities: [
      {
        code: "HACK / 01",
        title: "Hackathons",
        copy: "¿Tienes una idea o te falta alguien en el equipo? Me interesa participar en hackathons y convertir un reto intenso en un prototipo real.",
      },
      {
        code: "CTF / 02",
        title: "Capture The Flag",
        copy: "Busco equipo para competiciones CTF, laboratorios de seguridad y desafíos donde mejorar pentesting, análisis y pensamiento ofensivo.",
      },
      {
        code: "LAB / 03",
        title: "Proyectos ambiciosos",
        copy: "IA, visión artificial, IoT o cualquier idea técnicamente interesante que nos obligue a investigar y crear algo diferente.",
      },
      {
        code: "NEXT / 04",
        title: "Prácticas en empresa",
        copy: "En un futuro cercano quiero incorporarme en prácticas a un equipo donde aprender de profesionales y contribuir con curiosidad, compromiso y ganas de mejorar.",
      },
    ],
    opportunitiesCta: "¿Formamos equipo?",
    aboutEyebrow: "Sobre mí",
    aboutTitle: "Aprender construyendo.",
    aboutCopy:
      "Estudiante de Ingeniería Informática y fundador de Echoday. No quiero limitarme a estudiar tecnología: quiero utilizarla para resolver problemas, crear experiencias memorables y crecer junto a personas con más experiencia.",
    currently: "Ahora mismo",
    currentlyCopy:
      "Creando webs para negocios reales, preparando retos CTF y profundizando en visión artificial y ciberseguridad mediante hacking ético. El siguiente paso: hackathons, equipo y prácticas.",
    stack: "Mi caja de herramientas",
    values: "Cómo trabajo",
    valueItems: [
      "Curiosidad radical",
      "Diseño con intención",
      "Código que evoluciona",
      "Seguridad desde el inicio",
    ],
    contactEyebrow: "Contacto",
    contactTitle: ["¿Tienes una idea?", "Hagámosla real."],
    contactCopy:
      "Si necesitas una web con personalidad, buscas compañero para un hackathon o CTF, tienes un proyecto experimental o una oportunidad de prácticas, me encantará escucharte.",
    formName: "Tu nombre",
    formEmail: "Email",
    formType: "Tipo de proyecto",
    formMessage: "Háblame de la idea",
    formPlaceholder: "Objetivos, tiempos, referencias…",
    send: "Enviar propuesta",
    sent: "Mensaje preparado",
    sentCopy: "Gracias. Tu idea ya está un paso más cerca de existir.",
    another: "Enviar otro",
    projectTypes: [
      "Web para negocio",
      "Portfolio / producto",
      "IA / automatización",
      "Seguridad / IoT",
    ],
    footerCopy: "Ingeniería, diseño y curiosidad desde Barcelona.",
    backTop: "Volver arriba",
  },
  ca: {
    nav: ["Projectes", "Serveis", "Sobre mi", "Contacte"],
    menu: "Obrir menú",
    close: "Tancar menú",
    available: "Disponible per a nous projectes",
    heroKicker: "Enginyeria informàtica · Desenvolupament creatiu",
    heroTitle: ["Disseny.", "Codi.", "Impacte."],
    heroCopy:
      "Soc en Leo, estudiant d’Enginyeria Informàtica. Converteixo curiositat en productes digitals: dissenyo webs amb identitat, construeixo prototips amb visió artificial i aprenc seguretat explorant sistemes connectats de manera ètica.",
    explore: "Explorar projectes",
    contact: "Parlem de la teva idea",
    heroMeta: [
      {
        kicker: "Construint en públic",
        title: "32 repositoris",
        copy: "Experiments reals, aprenentatge continu i codi que evoluciona.",
      },
      {
        kicker: "Base d’operacions",
        title: "Barcelona",
        copy: "Connectat amb equips, negocis i idees des de qualsevol lloc.",
      },
      {
        kicker: "Òrbita actual",
        title: "Crear · Trencar · Aprendre",
        copy: "Tres territoris on vull continuar creixent.",
        tags: ["Creative web", "AI vision", "IoT security"],
      },
    ],
    ticker: [
      "Construir amb intenció",
      "Aprendre fent",
      "Hackathons",
      "Computer vision",
      "CTF & seguretat",
      "Open to internships",
    ],
    projectEyebrow: "Treball seleccionat",
    projectTitle: ["Projectes que viuen", "entre idees i codi."],
    projectIntro:
      "Una selecció real d’experiments, productes i webs per a negocis locals. Cada projecte és una excusa per aprendre.",
    viewCode: "Veure codi",
    liveSite: "Visitar web",
    selected: "Projecte destacat",
    servicesEyebrow: "El que puc construir",
    servicesTitle: ["D’una idea difusa", "a alguna cosa que funciona."],
    servicesIntro:
      "Combino criteri visual, desenvolupament i curiositat tècnica per crear productes digitals que no semblen genèrics.",
    services: [
      {
        number: "01",
        title: "Webs amb identitat",
        copy: "Disseny i desenvolupament de pàgines ràpides, memorables i adaptades a cada negoci local.",
        tags: ["React", "TypeScript", "Responsive"],
      },
      {
        number: "02",
        title: "Prototips & IA",
        copy: "Experiments funcionals amb visió artificial, automatització i noves interfícies.",
        tags: ["Python", "OpenCV", "AI"],
      },
      {
        number: "03",
        title: "Seguretat",
        copy: "Laboratoris controlats per estudiar amenaces, auditoria i recuperació segura.",
        tags: ["Hacking ètic", "IoT", "Recerca"],
      },
    ],
    opportunitiesEyebrow: "Obert a nous reptes",
    opportunitiesTitle: ["Busco equip.", "Busco el pròxim desafiament."],
    opportunitiesIntro:
      "Vull connectar amb persones amb ganes de construir, competir i aprendre. Estic obert a formar equip i aportar desenvolupament, idees i energia.",
    opportunities: [
      {
        code: "HACK / 01",
        title: "Hackathons",
        copy: "Tens una idea o et falta algú a l’equip? M’interessa participar en hackathons i convertir un repte intens en un prototip real.",
      },
      {
        code: "CTF / 02",
        title: "Capture The Flag",
        copy: "Busco equip per a competicions CTF, laboratoris de seguretat i desafiaments on millorar pentesting, anàlisi i pensament ofensiu.",
      },
      {
        code: "LAB / 03",
        title: "Projectes ambiciosos",
        copy: "IA, visió artificial, IoT o qualsevol idea tècnicament interessant que ens obligui a investigar i crear alguna cosa diferent.",
      },
      {
        code: "NEXT / 04",
        title: "Pràctiques en empresa",
        copy: "En un futur pròxim vull incorporar-me en pràctiques a un equip on aprendre de professionals i contribuir amb curiositat, compromís i ganes de millorar.",
      },
    ],
    opportunitiesCta: "Formem equip?",
    aboutEyebrow: "Sobre mi",
    aboutTitle: "Aprendre construint.",
    aboutCopy:
      "Estudiant d’Enginyeria Informàtica i fundador d’Echoday. No vull limitar-me a estudiar tecnologia: vull utilitzar-la per resoldre problemes, crear experiències memorables i créixer amb persones amb més experiència.",
    currently: "Ara mateix",
    currentlyCopy:
      "Creant webs per a negocis reals, preparant reptes CTF i aprofundint en visió artificial i ciberseguretat mitjançant hacking ètic. El següent pas: hackathons, equip i pràctiques.",
    stack: "La meva caixa d’eines",
    values: "Com treballo",
    valueItems: [
      "Curiositat radical",
      "Disseny amb intenció",
      "Codi que evoluciona",
      "Seguretat des de l’inici",
    ],
    contactEyebrow: "Contacte",
    contactTitle: ["Tens una idea?", "Fem-la realitat."],
    contactCopy:
      "Si necessites una web amb personalitat, busques company per a un hackathon o CTF, tens un projecte experimental o una oportunitat de pràctiques, m’encantarà escoltar-te.",
    formName: "El teu nom",
    formEmail: "Email",
    formType: "Tipus de projecte",
    formMessage: "Parla’m de la idea",
    formPlaceholder: "Objectius, temps, referències…",
    send: "Enviar proposta",
    sent: "Missatge preparat",
    sentCopy: "Gràcies. La teva idea ja és un pas més a prop d’existir.",
    another: "Enviar-ne un altre",
    projectTypes: [
      "Web per a negoci",
      "Portfolio / producte",
      "IA / automatització",
      "Seguretat / IoT",
    ],
    footerCopy: "Enginyeria, disseny i curiositat des de Barcelona.",
    backTop: "Tornar a dalt",
  },
  en: {
    nav: ["Projects", "Services", "About", "Contact"],
    menu: "Open menu",
    close: "Close menu",
    available: "Available for new projects",
    heroKicker: "Computer engineering · Creative development",
    heroTitle: ["Design.", "Code.", "Impact."],
    heroCopy:
      "I’m Leo, a Computer Engineering student turning curiosity into digital products: distinctive websites, computer-vision prototypes and ethical explorations of connected-system security.",
    explore: "Explore projects",
    contact: "Tell me about your idea",
    heroMeta: [
      {
        kicker: "Building in public",
        title: "32 repositories",
        copy: "Real experiments, continuous learning and code that keeps evolving.",
      },
      {
        kicker: "Base of operations",
        title: "Barcelona",
        copy: "Connecting with teams, businesses and ideas from anywhere.",
      },
      {
        kicker: "Current orbit",
        title: "Build · Break · Learn",
        copy: "Three territories where I want to keep growing.",
        tags: ["Creative web", "AI vision", "IoT security"],
      },
    ],
    ticker: [
      "Build with intention",
      "Learn by doing",
      "Hackathons",
      "Computer vision",
      "CTF & security",
      "Open to internships",
    ],
    projectEyebrow: "Selected work",
    projectTitle: ["Projects living", "between ideas and code."],
    projectIntro:
      "A real selection of experiments, products and websites for local businesses. Every project is an excuse to learn something new.",
    viewCode: "View code",
    liveSite: "Visit website",
    selected: "Featured project",
    servicesEyebrow: "What I can build",
    servicesTitle: ["From a fuzzy idea", "to something that works."],
    servicesIntro:
      "I combine visual judgement, development and technical curiosity to make digital products that never feel generic.",
    services: [
      {
        number: "01",
        title: "Websites with identity",
        copy: "Fast, memorable websites designed and built around each local business.",
        tags: ["React", "TypeScript", "Responsive"],
      },
      {
        number: "02",
        title: "Prototypes & AI",
        copy: "Working experiments using computer vision, automation and emerging interfaces.",
        tags: ["Python", "OpenCV", "AI"],
      },
      {
        number: "03",
        title: "Security",
        copy: "Controlled labs to study threats, auditing and fail-secure recovery.",
        tags: ["Ethical hacking", "IoT", "Research"],
      },
    ],
    opportunitiesEyebrow: "Open to new challenges",
    opportunitiesTitle: ["Looking for a team.", "Looking for what comes next."],
    opportunitiesIntro:
      "I want to connect with people who are excited to build, compete and learn. I am open to joining a team and bringing development, ideas and energy.",
    opportunities: [
      {
        code: "HACK / 01",
        title: "Hackathons",
        copy: "Have an idea or need another person on the team? I want to turn intense hackathon challenges into working prototypes.",
      },
      {
        code: "CTF / 02",
        title: "Capture The Flag",
        copy: "I am looking for a team for CTF competitions, security labs and challenges that sharpen pentesting, analysis and offensive thinking.",
      },
      {
        code: "LAB / 03",
        title: "Ambitious projects",
        copy: "AI, computer vision, IoT or any technically interesting idea that pushes us to research and build something different.",
      },
      {
        code: "NEXT / 04",
        title: "Company internship",
        copy: "In the near future I want to join a company as an intern, learn from experienced people and contribute curiosity, commitment and a drive to improve.",
      },
    ],
    opportunitiesCta: "Want to team up?",
    aboutEyebrow: "About me",
    aboutTitle: "Learning by building.",
    aboutCopy:
      "Computer Engineering student and founder of Echoday. I do not just want to study technology: I want to use it to solve problems, create memorable experiences and grow alongside experienced people.",
    currently: "Right now",
    currentlyCopy:
      "Building websites for real businesses, preparing CTF challenges and diving deeper into computer vision and cybersecurity through ethical hacking. Next: hackathons, teams and internships.",
    stack: "My toolkit",
    values: "How I work",
    valueItems: [
      "Radical curiosity",
      "Design with intent",
      "Code that evolves",
      "Security from the start",
    ],
    contactEyebrow: "Contact",
    contactTitle: ["Have an idea?", "Let’s make it real."],
    contactCopy:
      "If you need a website with personality, a teammate for a hackathon or CTF, have an experimental project or an internship opportunity, I would love to hear from you.",
    formName: "Your name",
    formEmail: "Email",
    formType: "Project type",
    formMessage: "Tell me about the idea",
    formPlaceholder: "Goals, timing, references…",
    send: "Send proposal",
    sent: "Message prepared",
    sentCopy: "Thank you. Your idea is already one step closer to existing.",
    another: "Send another",
    projectTypes: [
      "Business website",
      "Portfolio / product",
      "AI / automation",
      "Security / IoT",
    ],
    footerCopy: "Engineering, design and curiosity from Barcelona.",
    backTop: "Back to top",
  },
}

const projects = [
  {
    id: "iot",
    number: "01",
    name: "Vending Machine IoT",
    category: "IoT · Ethical Hacking · Python",
    description: {
      es: "Simulación local de una máquina expendedora IoT centrada en compras seguras, protección contra replay y auditoría estructurada.",
      ca: "Simulació local d’una màquina expenedora IoT centrada en compres segures, protecció contra replay i auditoria estructurada.",
      en: "A local IoT vending machine simulation focused on secure purchases, replay protection and structured auditing.",
    },
    github: "https://github.com/cleonaia/vendinig_machine_ioT",
    className: "project-visual--iot",
  },
  {
    id: "camera",
    number: "02",
    name: "Invisible Cam",
    category: "Computer Vision · OpenCV · Python",
    description: {
      es: "Una cámara experimental que detecta gestos de la mano y hace desaparecer al usuario reconstruyendo el fondo en tiempo real.",
      ca: "Una càmera experimental que detecta gestos de la mà i fa desaparèixer l’usuari reconstruint el fons en temps real.",
      en: "An experimental camera that detects hand gestures and makes the user disappear by rebuilding the background in real time.",
    },
    github: "https://github.com/cleonaia/invisible_cam",
    className: "project-visual--camera",
  },
  {
    id: "smash",
    number: "03",
    name: "SMASH Burger",
    category: "Food Experience · TypeScript · Web",
    description: {
      es: "Una web con actitud para una hamburguesería smash: producto protagonista, identidad urbana y una experiencia visual que abre el apetito.",
      ca: "Una web amb actitud per a una hamburgueseria smash: producte protagonista, identitat urbana i una experiència visual que obre la gana.",
      en: "A bold website for a smash burger restaurant: product-led, urban and designed as a visual experience that builds appetite.",
    },
    github: "https://github.com/cleonaia/smash_burger",
    className: "project-visual--burger",
  },
  {
    id: "perplexity",
    number: "04",
    name: "Perplexity from Scratch",
    category: "AI · TypeScript · Learning Lab",
    description: {
      es: "Exploración práctica para comprender y reconstruir desde cero la experiencia de un buscador asistido por inteligencia artificial.",
      ca: "Exploració pràctica per comprendre i reconstruir des de zero l’experiència d’un cercador assistit per intel·ligència artificial.",
      en: "A hands-on exploration to understand and rebuild an AI-assisted search experience from scratch.",
    },
    github: "https://github.com/cleonaia/perplexity_create",
    className: "project-visual--ai",
  },
]

const githubAchievements = [
  { short: "PE", name: "Pair Extraordinaire", detail: "Coauthored commits" },
  { short: "PS", name: "Pull Shark", detail: "Merged pull requests" },
  { short: "YO", name: "YOLO", detail: "Merged without review" },
  { short: "QD", name: "Quickdraw", detail: "Fast issue close" },
]

function Icon({ name }: { name: "arrow" | "github" | "external" | "mail" }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.58-.29-5.29-1.29-5.29-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.16 1.18a10.94 10.94 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.4-2.72 5.38-5.3 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
        />
      </svg>
    )
  }
  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 6.5h18v12H3zM3 7l9 7 9-7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={name === "external" ? "M8 16 16 8M9 8h7v7" : "M5 12h14M14 7l5 5-5 5"}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

type LabMode = "build" | "vision" | "security"

const labCode: Record<LabMode, Array<{
  token?: "key" | "method" | "value"
  text: string
}>> = {
  build: [
    { text: "const future = await build({" },
    { token: "key", text: "  curiosity: true," },
    { token: "value", text: "  ideas: 'unlimited'," },
    { token: "method", text: "  status: 'shipping'" },
    { text: "});" },
  ],
  vision: [
    { token: "key", text: "while (camera.isOpen()) {" },
    { text: "  const gesture = detect(frame);" },
    { token: "method", text: "  background.restore(mask);" },
    { token: "value", text: "  render('invisible');" },
    { text: "}" },
  ],
  security: [
    { token: "key", text: "audit.start({ target: iot });" },
    { text: "verify(signature, nonce);" },
    { token: "method", text: "block(replay_attack);" },
    { token: "value", text: "recover('fail-secure');" },
    { text: "audit.commit();" },
  ],
}

function CodeRain({ mode }: { mode: LabMode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    const snippets = {
      build: [
        "const",
        "return",
        "</>",
        "deploy()",
        "0x01",
        "git push",
        "async",
        "{...}",
        "React",
        "TS",
      ],
      vision: [
        "frame",
        "mask",
        "cv2",
        "detect()",
        "[x,y]",
        "render",
        "OpenCV",
        "pixel",
        "gesture",
        "FPS",
      ],
      security: [
        "SHA256",
        "nonce",
        "audit",
        "0xFF",
        "verify",
        "secure",
        "token",
        "IoT",
        "deny()",
        "root",
      ],
    }[mode]
    const fontSize = 13
    let drops: number[] = []
    let animationFrame = 0
    let lastFrame = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.clientWidth * ratio
      canvas.height = canvas.clientHeight * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
      const columns = Math.ceil(canvas.clientWidth / 62)
      drops = Array.from({ length: columns }, () => Math.random() * -40)
    }

    const draw = (time: number) => {
      if (time - lastFrame > 75) {
        context.fillStyle = "rgba(8, 9, 10, 0.055)"
        context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
        context.font = `${fontSize}px "DM Mono", monospace`
        context.shadowColor = "rgba(199, 255, 47, 0.8)"
        context.shadowBlur = 5
        drops.forEach((drop, index) => {
          const text = snippets[Math.floor(Math.random() * snippets.length)]
          const opacity = 0.52 + Math.random() * 0.38
          context.fillStyle = `rgba(199, 255, 47, ${opacity})`
          context.fillText(text, index * 62, drop * 24)
          drops[index] =
            drop * 24 > canvas.clientHeight && Math.random() > 0.95
              ? Math.random() * -12
              : drop + 1
        })
        lastFrame = time
      }
      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    animationFrame = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
    }
  }, [mode])

  return <canvas ref={canvasRef} className="code-rain" aria-hidden="true" />
}

function CodeStreams() {
  const streams = [
    "const future await build deploy return async function 0101",
    "python detect frame gesture opencv render mask restore",
    "git push commit merge branch main pull request shipping",
    "security audit nonce SHA256 verify token deny root secure",
    "react component state effect typescript interface props",
    "iot machine packet replay protect fail secure recover",
    "while true learn create test improve repeat iterate",
    "01001100 01000101 01001111 code vision impact build",
    "network scan flags capture exploit patch document",
    "Barcelona engineering student creative developer lab",
  ]
  return (
    <div className="code-streams" aria-hidden="true">
      {streams.map((stream, index) => (
        <span key={index}>{stream}</span>
      ))}
    </div>
  )
}

function BootSequence() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1500)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) return null
  return createPortal(
    <div className="boot-screen" aria-hidden="true">
      <div className="boot-brand">
        LEO<span>/</span>DEV
      </div>
      <div className="boot-terminal">
        <p>
          <span>01</span> Initializing creative engine
        </p>
        <p>
          <span>02</span> Loading projects and experiments
        </p>
        <p>
          <span>03</span> Compiling visual system
        </p>
        <p>
          <span>04</span> Ready<span className="cursor">_</span>
        </p>
      </div>
      <div className="boot-progress">
        <i />
      </div>
      <span className="boot-percent">100%</span>
    </div>,
    document.body,
  )
}

function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    const move = (event: MouseEvent) => {
      cursorRef.current?.style.setProperty("--cursor-x", `${event.clientX}px`)
      cursorRef.current?.style.setProperty("--cursor-y", `${event.clientY}px`)
    }
    const down = () => cursorRef.current?.classList.add("is-active")
    const up = () => cursorRef.current?.classList.remove("is-active")
    window.addEventListener("mousemove", move, { passive: true })
    window.addEventListener("mousedown", down)
    window.addEventListener("mouseup", up)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
    }
  }, [])

  return (
    <div className="cursor-follower" ref={cursorRef} aria-hidden="true">
      <span />
    </div>
  )
}

function LanguageSwitcher({
  language,
  setLanguage,
  mobile = false,
}: {
  language: Language
  setLanguage: (language: Language) => void
  mobile?: boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setOpen(false)
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [open])

  return (
    <div
      className={`language-switcher ${
        mobile ? "language-switcher--mobile" : ""
      }`}
      ref={ref}
    >
      <button
        className="language-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{language.toUpperCase()}</span>
        <span className="language-dot" />
      </button>
      {open && (
        <div className="language-menu">
          {(["es", "ca", "en"] as Language[]).map((option) => (
            <button
              key={option}
              className={option === language ? "is-active" : ""}
              onClick={() => {
                setLanguage(option)
                setOpen(false)
              }}
            >
              <span>
                0{(["es", "ca", "en"] as Language[]).indexOf(option) + 1}
              </span>
              {option === "es"
                ? "Español"
                : option === "ca"
                  ? "Català"
                  : "English"}
              <b>{option === language ? "●" : "○"}</b>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Header({
  language,
  setLanguage,
  text,
}: {
  language: Language
  setLanguage: (language: Language) => void
  text: Copy
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const progress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0
      progressRef.current?.style.setProperty("--scroll-progress", `${progress}`)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const escape = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", escape)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener("keydown", escape)
    }
  }, [open])

  const links = ["projects", "services", "about", "contact"]
  return (
    <>
      <header
        className={`site-header ${
          scrolled || open ? "site-header--solid" : ""
        }`}
      >
        <a href="#top" className="wordmark" aria-label="Leo, inicio">
          LEO<span>/</span>DEV
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map((link, index) => (
            <a href={`#${link}`} key={link}>
              <span>0{index + 1}</span>
              {text.nav[index]}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <a
            className="header-github"
            href="https://github.com/cleonaia"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
          </a>
        </div>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? text.close : text.menu}
        >
          <span />
          <span />
        </button>
        <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      </header>
      {open &&
        createPortal(
          <div className="mobile-menu">
            <div className="mobile-menu-grid" aria-hidden="true" />
            <nav>
              {links.map((link, index) => (
                <a href={`#${link}`} key={link} onClick={() => setOpen(false)}>
                  <span>0{index + 1}</span>
                  {text.nav[index]}
                  <Icon name="arrow" />
                </a>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <LanguageSwitcher
                language={language}
                setLanguage={setLanguage}
                mobile
              />
              <a
                href="https://github.com/cleonaia"
                target="_blank"
                rel="noreferrer"
              >
                GitHub @cleonaia <Icon name="external" />
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

function MotionSystem() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".section-heading, .project-card, .services-grid article, .opportunities-grid article, .about-heading, .about-bento > *, .contact-copy, .contact-panel",
    )
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"))
      return
    }

    targets.forEach((target) => target.classList.add("reveal-item"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return null
}

function CodeWindow({ mode }: { mode: LabMode }) {
  const code = labCode[mode]
  return (
    <div
      className="code-window"
      key={mode}
      aria-label="Código creativo en ejecución"
    >
      <div className="window-bar">
        <i />
        <i />
        <i />
        <span>leo@creative-lab: ~/{mode}</span>
      </div>
      <div className="code-body">
        {code.map((line, index) => (
          <div className="code-line" key={`${mode}-${line.text}`}>
            <span className="line-number">0{index + 1}</span>
            <p className={line.token ? `token-${line.token}` : ""}>
              {line.text}
            </p>
          </div>
        ))}
        <p className="terminal-line">
          <i>→</i>{" "}
          {mode === "build"
            ? "shipping"
            : mode === "vision"
              ? "tracking"
              : "monitoring"}{" "}
          in real-time
          <span className="cursor">_</span>
        </p>
      </div>
    </div>
  )
}

function Hero({ text }: { text: Copy }) {
  const heroRef = useRef<HTMLElement>(null)
  const [mode, setMode] = useState<LabMode>("build")
  const moveGlow = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    heroRef.current?.style.setProperty(
      "--mouse-x",
      `${event.clientX - bounds.left}px`,
    )
    heroRef.current?.style.setProperty(
      "--mouse-y",
      `${event.clientY - bounds.top}px`,
    )
  }
  return (
    <section
      className={`hero hero--${mode}`}
      id="top"
      ref={heroRef}
      onMouseMove={moveGlow}
    >
      <CodeRain mode={mode} />
      <CodeStreams />
      <div className="hero-grid" />
      <div className="hero-orbit" aria-hidden="true">
        <span />
        <i />
      </div>
      <div className="hero-crosshair" aria-hidden="true">
        <i />
      </div>
      <div className="hero-shell">
        <div className="hero-topbar">
          <div className="hero-status">
            <span className="pulse-dot" />
            {text.available}
          </div>
          <div className="hero-edition">
            <span>PORTFOLIO / 2026</span>
            <span>41.38° N · 2.17° E</span>
          </div>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">{text.heroKicker}</p>
            <h1>
              <span data-index="01">{text.heroTitle[0]}</span>
              <span data-index="02">{text.heroTitle[1]}</span>
              <span className="outline-text">{text.heroTitle[2]}</span>
            </h1>
            <p className="hero-intro">{text.heroCopy}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                <span>{text.explore}</span> <Icon name="arrow" />
              </a>
              <a className="ghost-button" href="#contact">
                <span>{text.contact}</span>
                <Icon name="external" />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-label">
              <span /> LIVE LAB / {mode.toUpperCase()}
            </div>
            <CodeWindow mode={mode} />
            <div
              className="lab-controls"
              aria-label="Cambiar experimento visual"
            >
              {(["build", "vision", "security"] as LabMode[]).map(
                (option, index) => (
                  <button
                    key={option}
                    className={mode === option ? "is-active" : ""}
                    onClick={() => setMode(option)}
                  >
                    <span>0{index + 1}</span>
                    {option.toUpperCase()}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="hero-meta">
          {text.heroMeta.map((item, index) => (
            <div className="hero-meta-card" key={item.kicker}>
              <span className="hero-meta-kicker">
                <i>0{index + 1}</i>
                {item.kicker}
              </span>
              <strong>{item.title}</strong>
              <small>{item.copy}</small>
              {item.tags && (
                <div className="hero-meta-tags">
                  {item.tags.map((tag) => (
                    <b key={tag}>{tag}</b>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://github.com/cleonaia"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
            <span>
              <small>FOLLOW THE BUILD</small>
              @cleonaia
            </span>
            <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Ticker({ items }: { items: string[] }) {
  return (
    <div className="ticker" aria-hidden="true">
      <div>
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item} <i>✳</i>
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string
  title: [string, string]
  intro: string
  dark?: boolean
}) {
  return (
    <div className={`section-heading ${dark ? "section-heading--dark" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>
          {title[0]}
          <br />
          <em>{title[1]}</em>
        </h2>
      </div>
      <p>{intro}</p>
    </div>
  )
}

function ProjectVisual({ type, name }: { type: string name: string }) {
  return (
    <div className={`project-visual ${type}`}>
      <div className="visual-grid" />
      {type.includes("iot") && (
        <div className="vending-machine">
          <div className="vm-screen">
            SECURE
            <br />
            SESSION
          </div>
          <div className="vm-products">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <i key={item} />
            ))}
          </div>
          <div className="vm-slot" />
        </div>
      )}
      {type.includes("camera") && (
        <>
          <div className="camera-frame">
            <span>REC</span>
            <i />
          </div>
          <div className="camera-silhouette" />
          <div className="scan-line" />
        </>
      )}
      {type.includes("burger") && (
        <div className="burger-scene">
          <small>SMASHED / FRESH / BOLD</small>
          <span>
            SMASH
            <br />
            BURGER
          </span>
          <div className="burger-stack">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
      {type.includes("ai") && (
        <div className="ai-scene">
          <span>What do you want to know?</span>
          <i>→</i>
          <div>
            {["Searching sources", "Reading context", "Building answer"].map(
              (item) => (
                <b key={item}>{item}</b>
              ),
            )}
          </div>
        </div>
      )}
      <span className="visual-name">{name}</span>
    </div>
  )
}

function Projects({ text, language }: { text: Copy language: Language }) {
  return (
    <section className="projects section-pad" id="projects">
      <div className="section-shell">
        <SectionHeading
          eyebrow={text.projectEyebrow}
          title={text.projectTitle}
          intro={text.projectIntro}
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-card--${index + 1}`}
              key={project.id}
            >
              <ProjectVisual type={project.className} name={project.name} />
              <div className="project-info">
                <div className="project-topline">
                  <span>{project.number} / 04</span>
                  {index === 0 && <b>{text.selected}</b>}
                </div>
                <p>{project.category}</p>
                <h3>{project.name}</h3>
                <div className="project-bottom">
                  <p>{project.description[language]}</p>
                  <div>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Icon name="github" /> {text.viewCode}
                    </a>
                    {"live" in project && project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <Icon name="external" /> {text.liveSite}
                      </a>
                    )}
                  </div>
                </div>
                {project.id === "perplexity" && (
                  <div className="achievement-panel">
                    <div className="achievement-heading">
                      <span>GITHUB / ACHIEVEMENTS</span>
                      <b>04 unlocked</b>
                    </div>
                    <div className="achievement-badges">
                      {githubAchievements.map((achievement, badgeIndex) => (
                        <div
                          className="achievement-badge"
                          key={achievement.name}
                        >
                          <div>
                            <i>{achievement.short}</i>
                            <span>0{badgeIndex + 1}</span>
                          </div>
                          <b>{achievement.name}</b>
                          <small>{achievement.detail}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <a
          className="all-projects-link"
          href="https://github.com/cleonaia?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <span>32</span>
          <b>EXPLORE ALL REPOSITORIES</b>
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  )
}

function Services({ text }: { text: Copy }) {
  return (
    <section className="services section-pad" id="services">
      <div className="services-bg-code" aria-hidden="true">
        BUILD / TEST / LEARN / REPEAT
      </div>
      <div className="section-shell">
        <SectionHeading
          eyebrow={text.servicesEyebrow}
          title={text.servicesTitle}
          intro={text.servicesIntro}
          dark
        />
        <div className="services-grid">
          {text.services.map((service, index) => (
            <article key={service.number}>
              <div className="service-icon">
                {index === 0 ? "</>" : index === 1 ? "◉" : "{ }"}
              </div>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <div>
                {service.tags.map((tag) => (
                  <b key={tag}>{tag}</b>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Opportunities({ text }: { text: Copy }) {
  return (
    <section className="opportunities section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow={text.opportunitiesEyebrow}
          title={text.opportunitiesTitle}
          intro={text.opportunitiesIntro}
        />
        <div className="opportunities-grid">
          {text.opportunities.map((item, index) => (
            <article key={item.code}>
              <div className="opportunity-radar" aria-hidden="true">
                <i />
                <span>0{index + 1}</span>
              </div>
              <p>{item.code}</p>
              <h3>{item.title}</h3>
              <span>{item.copy}</span>
            </article>
          ))}
        </div>
        <a className="team-up-link" href="#contact">
          <span>COLLABORATE / 2026</span>
          <b>{text.opportunitiesCta}</b>
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  )
}

function About({ text }: { text: Copy }) {
  return (
    <section className="about section-pad" id="about">
      <div className="section-shell">
        <div className="about-heading">
          <p className="eyebrow">{text.aboutEyebrow}</p>
          <h2>{text.aboutTitle}</h2>
          <p>{text.aboutCopy}</p>
        </div>
        <div className="about-bento">
          <article className="profile-card">
            <div className="profile-photo">
              <img
                src="https://avatars.githubusercontent.com/u/181463493?v=4"
                alt="Leo, desarrollador e ingeniero informático"
              />
              <span>LEO / BCN</span>
            </div>
            <div>
              <p>Computer Engineering Student</p>
              <h3>
                Creative developer
                <br />& ethical hacker.
              </h3>
            </div>
          </article>
          <article className="now-card">
            <span className="pulse-dot" />
            <p>{text.currently}</p>
            <h3>{text.currentlyCopy}</h3>
            <div className="signal">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </article>
          <article className="stack-card">
            <p>{text.stack}</p>
            <div>
              {[
                "Linux",
                "TypeScript",
                "React",
                "Python",
                "C",
                "Swift",
                "OpenCV",
                "Git",
              ].map((item, index) => (
                <span key={item}>
                  <i>0{index + 1}</i>
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="values-card">
            <p>{text.values}</p>
            <ol>
              {text.valueItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
          <a
            className="github-card"
            href="https://github.com/cleonaia"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
            <span>
              <small>FOLLOW THE JOURNEY</small>
              github.com/cleonaia
            </span>
            <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact({ text }: { text: Copy }) {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }
  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-orb" aria-hidden="true" />
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">{text.contactEyebrow}</p>
          <h2>
            {text.contactTitle[0]}
            <br />
            <em>{text.contactTitle[1]}</em>
          </h2>
          <p>{text.contactCopy}</p>
          <a
            href="https://github.com/cleonaia"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" /> github.com/cleonaia
          </a>
        </div>
        <div className="contact-panel">
          {sent ? (
            <div className="success-message">
              <span>MESSAGE / READY</span>
              <h3>{text.sent}</h3>
              <p>{text.sentCopy}</p>
              <button onClick={() => setSent(false)}>
                {text.another} <Icon name="arrow" />
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <label>
                <span>01 / {text.formName}</span>
                <input required name="name" placeholder="Leo" />
              </label>
              <label>
                <span>02 / {text.formEmail}</span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                />
              </label>
              <label>
                <span>03 / {text.formType}</span>
                <select name="type" defaultValue="">
                  <option value="" disabled>
                    — Select
                  </option>
                  {text.projectTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>04 / {text.formMessage}</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder={text.formPlaceholder}
                />
              </label>
              <button className="submit-button" type="submit">
                {text.send} <Icon name="arrow" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer({ text }: { text: Copy }) {
  return (
    <footer>
      <div className="footer-main">
        <a href="#top" className="wordmark">
          LEO<span>/</span>DEV
        </a>
        <p>{text.footerCopy}</p>
        <div>
          <a
            href="https://github.com/cleonaia"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="https://www.echoday.tech/" target="_blank" rel="noreferrer">
            Echoday
          </a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Leo / All systems operational</span>
        <a href="#top">{text.backTop} ↑</a>
      </div>
    </footer>
  )
}

function PortfolioPage() {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("leo-language")
    return saved === "ca" || saved === "en" ? saved : "es"
  })
  const text = copy[language]
  const setLanguage = (next: Language) => {
    setLanguageState(next)
    localStorage.setItem("leo-language", next)
  }
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="app-shell">
      <BootSequence />
      <CursorFollower />
      <MotionSystem />
      <Header language={language} setLanguage={setLanguage} text={text} />
      <main>
        <Hero text={text} />
        <Ticker items={text.ticker} />
        <Projects text={text} language={language} />
        <Services text={text} />
        <Opportunities text={text} />
        <About text={text} />
        <Contact text={text} />
      </main>
      <Footer text={text} />
    </div>
  )
}

function NotFound() {
  const location = useLocation()
  return (
    <div className="not-found">
      <span>404 / LOST IN THE STACK</span>
      <h1>Nothing compiled here.</h1>
      <p>{location.pathname}</p>
      <Link to="/">
        Return home <Icon name="arrow" />
      </Link>
    </div>
  )
}

export const router = createBrowserRouter([
  { path: "/", Component: PortfolioPage },
  { path: "*", Component: NotFound },
])
