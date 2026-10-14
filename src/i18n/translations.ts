export type Lang = 'en' | 'hu' | 'de';

interface ExperienceEntry {
	role: string;
	location: string;
	dates: string;
	description: string;
}

interface EducationEntry {
	degree: string;
	dates: string;
	thesis: string;
}

interface ProjectItem {
	name: string;
	year: string;
	desc: string;
	overview: string;
	role: string;
	highlights: string[];
	tags: string[];
}

interface Translation {
	meta: { title: string; description: string };
	nav: {
		home: string;
		about: string;
		projects: string;
		skills: string;
		experience: string;
		education: string;
		contact: string;
		lightTheme: string;
		nightTheme: string;
	};
	hero: {
		badge: string;
		tagline: string;
		blurb: string;
		viewProjects: string;
		contactMe: string;
		pillFullStack: string;
		pillAiAssisted: string;
		pillYears: string;
		pillOwnership: string;
	};
	about: {
		label: string;
		headline: string;
		p1: string;
		p2: string;
		languages: string;
		languageNames: string[];
		languageLevels: string[];
		outsideWork: string;
		interests: string[];
	};
	projects: {
		label: string;
		headline: string;
		badge: string;
		viewDetails: string;
		imagePlaceholder: string;
		items: ProjectItem[];
		dialog: {
			role: string;
			highlights: string;
			liveDemo: string;
			sourceCode: string;
			previous: string;
			next: string;
		};
	};
	skills: {
		label: string;
		headline: string;
		core: string;
		familiar: string;
		certLabel: string;
		certName: string;
		certIssuer: string;
		viewBadge: string;
		groups: {
			aiTools: string;
			languages: string;
			frameworks: string;
			architecture: string;
			databases: string;
			devops: string;
			testing: string;
		};
	};
	experience: { label: string; headline: string; entries: ExperienceEntry[] };
	education: { label: string; headline: string; entries: EducationEntry[] };
	contact: {
		label: string;
		headlinePlain: string;
		headlineAccent: string;
		blurb: string;
		downloadCv: string;
		downloadSafe: string;
		emailLabel: string;
		githubLabel: string;
		linkedinLabel: string;
	};
	footer: { email: string; github: string; linkedin: string };
	notFound: { label: string; titlePlain: string; titleAccent: string; body: string; backHome: string; jumpTo: string };
}

const placeholderProjectEn: ProjectItem = {
	name: '[Project Name]',
	year: '[Year]',
	desc: '[A short description of the project and your role in it.]',
	overview:
		'[A short overview of the project: the problem it solves, who it is for, and what the end result looks like.]',
	role: '[Your responsibilities and what you owned.]',
	highlights: ['[Key outcome or feature]', '[Key outcome or feature]', '[Key outcome or feature]'],
	tags: ['[Tech]', '[Tech]', '[Tech]', '[Tech]'],
};

const placeholderProjectHu: ProjectItem = {
	name: '[Projekt neve]',
	year: '[Év]',
	desc: '[Egy rövid leírás a projektről és a szerepedről benne.]',
	overview:
		'[Rövid áttekintés a projektről: milyen problémát old meg, kinek szól, és hogyan néz ki a végeredmény.]',
	role: '[A felelősségi köreid és amiért te feleltél.]',
	highlights: ['[Fontos eredmény vagy funkció]', '[Fontos eredmény vagy funkció]', '[Fontos eredmény vagy funkció]'],
	tags: ['[Technológia]', '[Technológia]', '[Technológia]', '[Technológia]'],
};

const placeholderProjectDe: ProjectItem = {
	name: '[Projektname]',
	year: '[Jahr]',
	desc: '[Eine kurze Beschreibung des Projekts und deiner Rolle darin.]',
	overview:
		'[Ein kurzer Überblick über das Projekt: welches Problem es löst, für wen es gedacht ist und wie das Endergebnis aussieht.]',
	role: '[Deine Verantwortlichkeiten und wofür du zuständig warst.]',
	highlights: ['[Wichtiges Ergebnis oder Feature]', '[Wichtiges Ergebnis oder Feature]', '[Wichtiges Ergebnis oder Feature]'],
	tags: ['[Technologie]', '[Technologie]', '[Technologie]', '[Technologie]'],
};

export const translations: Record<Lang, Translation> = {
	en: {
		meta: {
			title: 'Pukánszky Péter — Software Engineer',
			description: 'Portfolio of Pukánszky Péter, software engineer — projects, skills, and experience.',
		},
		nav: {
			home: 'Home',
			about: 'About',
			projects: 'Projects',
			skills: 'Skills',
			experience: 'Experience',
			education: 'Education',
			contact: 'Contact',
			lightTheme: 'Light theme',
			nightTheme: 'Night theme',
		},
		hero: {
			badge: 'Open to new opportunities',
			tagline: 'Software Engineer',
			blurb: 'Software engineer at Accenture, using AI tooling to accelerate full-cycle delivery.',
			viewProjects: 'View Projects',
			contactMe: 'Contact Me',
			pillFullStack: 'Full-stack',
			pillAiAssisted: 'AI-assisted',
			pillYears: '5+ years',
			pillOwnership: 'Delivery ownership',
		},
		about: {
			label: '01 — About',
			headline: 'Solving problems, learning fast, owning delivery.',
			p1: "I'm a software engineer with a background mainly in retail logistics software. I work in international teams alongside engineers and specialists from different countries. I have a reliable and flexible personality, equally comfortable collaborating in a team and driving things independently, with a continuous focus on problem-solving and learning new technologies.",
			p2: "My role has been evolving beyond hands-on engineering toward owning how a project gets delivered day to day — coordinating across engineering teams, presenting technical decisions to business stakeholders, and using AI tooling to take on more scope and move faster. I'm working toward growing this into a full management role, applying that same AI-accelerated approach at a larger scale.",
			languages: 'Languages',
			languageNames: ['Hungarian', 'English', 'German'],
			languageLevels: ['Native', 'Professional', 'Professional'],
			outsideWork: 'Outside of work',
			interests: ['Gym', 'Tennis', 'Gastronomy', 'Finance & Investing'],
		},
		projects: {
			label: '02 — Projects',
			headline: 'Selected work',
			badge: 'Work in progress',
			viewDetails: 'View Details',
			imagePlaceholder: '[ project image ]',
			items: [placeholderProjectEn, placeholderProjectEn, placeholderProjectEn],
			dialog: {
				role: 'My role',
				highlights: 'Highlights',
				liveDemo: 'Live demo',
				sourceCode: 'Source code',
				previous: 'Previous',
				next: 'Next',
			},
		},
		skills: {
			label: '03 — Skills',
			headline: 'The toolbox, from code to production.',
			core: 'Core',
			familiar: 'Familiar with',
			certLabel: 'Certification',
			certName: 'Reinvention with Agentic AI',
			certIssuer: 'Issued by Accenture',
			viewBadge: 'View badge',
			groups: {
				aiTools: 'AI Tools',
				languages: 'Languages',
				frameworks: 'Frameworks & Libraries',
				architecture: 'Architecture & APIs',
				databases: 'Databases',
				devops: 'DevOps & Infrastructure',
				testing: 'Testing',
			},
		},
		experience: {
			label: '04 — Experience',
			headline: "Where I've built things.",
			entries: [
				{
					role: 'Software Engineer',
					location: 'Budapest, Hungary',
					dates: 'September 2022 – Present',
					description:
						'Full-cycle, full-stack development of a greenfield internal order-processing tool, supporting the deprecation of a legacy database. Coordinate with other engineering teams, present technical decisions directly to business stakeholders, and use AI tooling to accelerate delivery.',
				},
				{
					role: 'Software Developer',
					location: 'Budapest, Hungary',
					dates: 'June 2022 – September 2022',
					description: 'Java maintenance of financial software during a three-month engagement.',
				},
				{
					role: 'Software Developer',
					location: 'Budapest, Hungary',
					dates: 'March 2021 – June 2022',
					description:
						'Implemented several features for an in-factory decision-support application — including production-line quality assurance and factory data visualization — over 15 months of intensive full-stack development, supporting daily logistics operations.',
				},
			],
		},
		education: {
			label: '05 — Education',
			headline: 'Eötvös Loránd University.',
			entries: [
				{
					degree: "Master's in Computer Science",
					dates: 'September 2021 – June 2023',
					thesis:
						'Thesis on researching various mobile robot dispersion algorithms, presenting the results and simulations through a web application.',
				},
				{
					degree: "Bachelor's in Computer Science",
					dates: 'September 2018 – June 2021',
					thesis:
						'Thesis on developing a web application to compare and present sentiment analysis results from Python and SAP.',
				},
			],
		},
		contact: {
			label: '06 — Contact',
			headlinePlain: "Let's build something",
			headlineAccent: 'together.',
			blurb: 'Open to new opportunities and collaborations.',
			downloadCv: 'Download CV (PDF)',
			downloadSafe: "Yes, it's safe to download.",
			emailLabel: 'Email',
			githubLabel: 'GitHub',
			linkedinLabel: 'LinkedIn',
		},
		footer: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
		notFound: {
			label: 'Error 404',
			titlePlain: 'This page wandered',
			titleAccent: 'off.',
			body: "The link may be broken or the page may have moved. Let's get you back on track.",
			backHome: 'Back to home',
			jumpTo: 'Or jump to',
		},
	},
	hu: {
		meta: {
			title: 'Pukánszky Péter — Szoftvermérnök',
			description: 'Pukánszky Péter, szoftvermérnök portfóliója — projektek, készségek és szakmai tapasztalat.',
		},
		nav: {
			home: 'Kezdőlap',
			about: 'Rólam',
			projects: 'Projektek',
			skills: 'Készségek',
			experience: 'Tapasztalat',
			education: 'Tanulmányok',
			contact: 'Kapcsolat',
			lightTheme: 'Világos téma',
			nightTheme: 'Sötét téma',
		},
		hero: {
			badge: 'Nyitott új lehetőségekre',
			tagline: 'Szoftvermérnök',
			blurb: 'Szoftvermérnök az Accenture-nél, aki AI-eszközökkel gyorsítja fel a teljes fejlesztési ciklust.',
			viewProjects: 'Projektek megtekintése',
			contactMe: 'Kapcsolatfelvétel',
			pillFullStack: 'Full-stack',
			pillAiAssisted: 'AI-asszisztált',
			pillYears: '5+ év',
			pillOwnership: 'Felelősségvállalás',
		},
		about: {
			label: '01 — Rólam',
			headline: 'Problémamegoldás, gyors tanulás, felelősségvállalás.',
			p1: 'Szoftvermérnök vagyok, tapasztalatom elsősorban kiskereskedelmi logisztikai szoftverek terén van. Nemzetközi csapatokban dolgozom, különböző országokból származó mérnökökkel és szakértőkkel. Megbízható és rugalmas személyiség vagyok, egyaránt otthonosan mozgok csapatban és önállóan is, folyamatos problémamegoldási és tanulási igénnyel.',
			p2: 'A szerepem a gyakorlati fejlesztésen túl egyre inkább a projekt napi szintű megvalósításának irányítása felé mozdul el — együttműködés más fejlesztői csapatokkal, technikai döntések prezentálása üzleti érdekelteknek, és AI-eszközök használata, hogy több feladatot vállaljak és gyorsabban haladjak. Azon dolgozom, hogy ezt egy teljes vezetői szerepkörré fejlesszem, ugyanezt az AI-gyorsított megközelítést alkalmazva nagyobb léptékben.',
			languages: 'Nyelvek',
			languageNames: ['Magyar', 'Angol', 'Német'],
			languageLevels: ['Anyanyelvi szint', 'Felsőfokú', 'Felsőfokú'],
			outsideWork: 'Szabadidőben',
			interests: ['Edzés', 'Tenisz', 'Gasztronómia', 'Pénzügyek és befektetés'],
		},
		projects: {
			label: '02 — Projektek',
			headline: 'Válogatott munkák',
			badge: 'Folyamatban',
			viewDetails: 'Részletek megtekintése',
			imagePlaceholder: '[ projekt kép ]',
			items: [placeholderProjectHu, placeholderProjectHu, placeholderProjectHu],
			dialog: {
				role: 'Az én szerepem',
				highlights: 'Kiemelt eredmények',
				liveDemo: 'Élő demó',
				sourceCode: 'Forráskód',
				previous: 'Előző',
				next: 'Következő',
			},
		},
		skills: {
			label: '03 — Készségek',
			headline: 'Az eszköztár, a kódtól az éles környezetig.',
			core: 'Fő terület',
			familiar: 'Ismerem',
			certLabel: 'Tanúsítvány',
			certName: 'Reinvention with Agentic AI',
			certIssuer: 'Kiállította: Accenture',
			viewBadge: 'Jelvény megtekintése',
			groups: {
				aiTools: 'AI eszközök',
				languages: 'Nyelvek',
				frameworks: 'Keretrendszerek és könyvtárak',
				architecture: 'Architektúra és API-k',
				databases: 'Adatbázisok',
				devops: 'DevOps és infrastruktúra',
				testing: 'Tesztelés',
			},
		},
		experience: {
			label: '04 — Tapasztalat',
			headline: 'Ahol projekteken dolgoztam.',
			entries: [
				{
					role: 'Szoftvermérnök',
					location: 'Budapest, Magyarország',
					dates: '2022. szeptember – jelenleg',
					description:
						'Egy zöldmezős, belső rendelésfeldolgozó alkalmazás teljes ciklusú, full-stack fejlesztése, támogatva egy elavult adatbázis kivezetését. Együttműködöm más fejlesztői csapatokkal, közvetlenül prezentálom a technikai döntéseket az üzleti érdekelteknek, és AI-eszközökkel gyorsítom fel a szállítást.',
				},
				{
					role: 'Szoftverfejlesztő',
					location: 'Budapest, Magyarország',
					dates: '2022. június – 2022. szeptember',
					description: 'Pénzügyi szoftver Java alapú karbantartása egy három hónapos megbízás keretében.',
				},
				{
					role: 'Szoftverfejlesztő',
					location: 'Budapest, Magyarország',
					dates: '2021. március – 2022. június',
					description:
						'Egy gyári döntéstámogató alkalmazáshoz fejlesztettem több funkciót — köztük gyártósori minőségbiztosítást és gyári adatvizualizációt — 15 hónapos, intenzív full-stack fejlesztői munka során, a napi logisztikai működés támogatására.',
				},
			],
		},
		education: {
			label: '05 — Tanulmányok',
			headline: 'Eötvös Loránd Tudományegyetem.',
			entries: [
				{
					degree: 'Mesterdiploma, Programtervező informatikus',
					dates: '2021. szeptember – 2023. június',
					thesis:
						'Szakdolgozat mobil robotok szétszóródási algoritmusainak kutatásáról, az eredmények és szimulációk egy webalkalmazáson keresztüli bemutatásával.',
				},
				{
					degree: 'Alapdiploma, Programtervező informatikus',
					dates: '2018. szeptember – 2021. június',
					thesis:
						'Szakdolgozat egy webalkalmazás fejlesztéséről, amely Python és SAP alapú szentimentelemzési eredményeket hasonlít össze és jelenít meg.',
				},
			],
		},
		contact: {
			label: '06 — Kapcsolat',
			headlinePlain: 'Építsünk valamit',
			headlineAccent: 'együtt.',
			blurb: 'Nyitott vagyok új lehetőségekre és együttműködésekre.',
			downloadCv: 'Önéletrajz letöltése (PDF)',
			downloadSafe: 'Igen, biztonságos letölteni.',
			emailLabel: 'Email',
			githubLabel: 'GitHub',
			linkedinLabel: 'LinkedIn',
		},
		footer: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
		notFound: {
			label: '404-es hiba',
			titlePlain: 'Ez az oldal',
			titleAccent: 'elkószált.',
			body: 'Lehet, hogy a hivatkozás hibás, vagy az oldalt áthelyezték. Innen könnyen visszatalálsz.',
			backHome: 'Vissza a kezdőlapra',
			jumpTo: 'Vagy ugorj ide',
		},
	},
	de: {
		meta: {
			title: 'Pukánszky Péter — Softwareentwickler',
			description: 'Portfolio von Pukánszky Péter, Softwareentwickler — Projekte, Kenntnisse und Erfahrung.',
		},
		nav: {
			home: 'Start',
			about: 'Über mich',
			projects: 'Projekte',
			skills: 'Kenntnisse',
			experience: 'Erfahrung',
			education: 'Ausbildung',
			contact: 'Kontakt',
			lightTheme: 'Heller Modus',
			nightTheme: 'Dunkler Modus',
		},
		hero: {
			badge: 'Offen für neue Möglichkeiten',
			tagline: 'Softwareentwickler',
			blurb: 'Softwareentwickler bei Accenture, der mit KI-gestützten Tools die gesamte Entwicklung beschleunigt.',
			viewProjects: 'Projekte ansehen',
			contactMe: 'Kontakt aufnehmen',
			pillFullStack: 'Full-Stack',
			pillAiAssisted: 'KI-unterstützt',
			pillYears: '5+ Jahre',
			pillOwnership: 'Lieferverantwortung',
		},
		about: {
			label: '01 — Über mich',
			headline: 'Probleme lösen, schnell lernen, Verantwortung übernehmen.',
			p1: 'Ich bin Softwareentwickler mit Erfahrung vor allem im Bereich Logistiksoftware für den Einzelhandel. Ich arbeite in internationalen Teams mit Entwicklern und Fachleuten aus verschiedenen Ländern zusammen. Ich bin zuverlässig und flexibel, arbeite gerne im Team, aber genauso eigenständig, mit stetigem Fokus auf Problemlösung und das Erlernen neuer Technologien.',
			p2: 'Meine Rolle entwickelt sich zunehmend über die praktische Entwicklungsarbeit hinaus hin zur Verantwortung für die tägliche Projektumsetzung — durch die Zusammenarbeit mit anderen Entwicklungsteams, die Präsentation technischer Entscheidungen vor Fachbereichs-Stakeholdern und den Einsatz von KI-Tools, um mehr Verantwortung zu übernehmen und schneller voranzukommen. Ich arbeite darauf hin, dies zu einer vollwertigen Führungsrolle auszubauen, mit demselben KI-gestützten Ansatz in größerem Maßstab.',
			languages: 'Sprachen',
			languageNames: ['Ungarisch', 'Englisch', 'Deutsch'],
			languageLevels: ['Muttersprache', 'Verhandlungssicher', 'Verhandlungssicher'],
			outsideWork: 'Neben der Arbeit',
			interests: ['Fitness', 'Tennis', 'Gastronomie', 'Finanzen & Investieren'],
		},
		projects: {
			label: '02 — Projekte',
			headline: 'Ausgewählte Arbeiten',
			badge: 'In Arbeit',
			viewDetails: 'Details ansehen',
			imagePlaceholder: '[ Projektbild ]',
			items: [placeholderProjectDe, placeholderProjectDe, placeholderProjectDe],
			dialog: {
				role: 'Meine Rolle',
				highlights: 'Highlights',
				liveDemo: 'Live-Demo',
				sourceCode: 'Quellcode',
				previous: 'Zurück',
				next: 'Weiter',
			},
		},
		skills: {
			label: '03 — Kenntnisse',
			headline: 'Das Werkzeug, vom Code bis zur Produktion.',
			core: 'Kernkompetenz',
			familiar: 'Vertraut mit',
			certLabel: 'Zertifikat',
			certName: 'Reinvention with Agentic AI',
			certIssuer: 'Ausgestellt von Accenture',
			viewBadge: 'Badge ansehen',
			groups: {
				aiTools: 'KI-Tools',
				languages: 'Sprachen',
				frameworks: 'Frameworks & Bibliotheken',
				architecture: 'Architektur & APIs',
				databases: 'Datenbanken',
				devops: 'DevOps & Infrastruktur',
				testing: 'Testing',
			},
		},
		experience: {
			label: '04 — Erfahrung',
			headline: 'Wo ich Dinge gebaut habe.',
			entries: [
				{
					role: 'Softwareentwickler',
					location: 'Budapest, Ungarn',
					dates: 'September 2022 – heute',
					description:
						'Full-Cycle-, Full-Stack-Entwicklung eines internen Auftragsbearbeitungstools (Greenfield-Projekt), zur Unterstützung der Ablösung einer Legacy-Datenbank. Arbeite mit anderen Entwicklungsteams zusammen, präsentiere technische Entscheidungen direkt den Fachbereichs-Stakeholdern und nutze KI-Tools zur Beschleunigung der Lieferung.',
				},
				{
					role: 'Softwareentwickler',
					location: 'Budapest, Ungarn',
					dates: 'Juni 2022 – September 2022',
					description: 'Java-Wartung von Finanzsoftware im Rahmen eines dreimonatigen Einsatzes.',
				},
				{
					role: 'Softwareentwickler',
					location: 'Budapest, Ungarn',
					dates: 'März 2021 – Juni 2022',
					description:
						'Entwicklung mehrerer Funktionen für eine werksinterne Entscheidungsunterstützungssoftware — darunter Qualitätssicherung für die Fertigungslinie und Werksdatenvisualisierung — über 15 Monate intensiver Full-Stack-Entwicklung, zur Unterstützung des täglichen Logistikbetriebs.',
				},
			],
		},
		education: {
			label: '05 — Ausbildung',
			headline: 'Eötvös-Loránd-Universität.',
			entries: [
				{
					degree: 'Master, Informatik',
					dates: 'September 2021 – Juni 2023',
					thesis:
						'Masterarbeit zur Erforschung verschiedener Streuungsalgorithmen für mobile Roboter, mit Darstellung der Ergebnisse und Simulationen über eine Webanwendung.',
				},
				{
					degree: 'Bachelor, Informatik',
					dates: 'September 2018 – Juni 2021',
					thesis:
						'Bachelorarbeit zur Entwicklung einer Webanwendung zum Vergleich und zur Darstellung von Sentiment-Analyse-Ergebnissen aus Python und SAP.',
				},
			],
		},
		contact: {
			label: '06 — Kontakt',
			headlinePlain: 'Lass uns etwas',
			headlineAccent: 'gemeinsam bauen.',
			blurb: 'Offen für neue Möglichkeiten und Kooperationen.',
			downloadCv: 'Lebenslauf herunterladen (PDF)',
			downloadSafe: 'Ja, der Download ist sicher.',
			emailLabel: 'E-Mail',
			githubLabel: 'GitHub',
			linkedinLabel: 'LinkedIn',
		},
		footer: { email: 'E-Mail', github: 'GitHub', linkedin: 'LinkedIn' },
		notFound: {
			label: 'Fehler 404',
			titlePlain: 'Diese Seite hat sich',
			titleAccent: 'verirrt.',
			body: 'Der Link ist möglicherweise fehlerhaft oder die Seite wurde verschoben. Hier geht es zurück.',
			backHome: 'Zurück zur Startseite',
			jumpTo: 'Oder direkt zu',
		},
	},
};
