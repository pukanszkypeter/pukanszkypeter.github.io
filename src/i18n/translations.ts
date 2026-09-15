export type Lang = 'en' | 'hu' | 'de';

interface ExperienceEntry {
	role: string;
	location: string;
	dates: string;
	description: string;
}

interface EducationEntry {
	degree: string;
	org: string;
	dates: string;
	description: string;
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
	};
	hero: { tagline: string; blurb: string; viewProjects: string; contactMe: string };
	about: {
		heading: string;
		p1: string;
		p2: string;
		languages: string;
		languageItems: string[];
		outsideWork: string;
		interests: string[];
	};
	projects: {
		heading: string;
		badge: string;
		viewDetails: string;
		openProject: string;
		close: string;
		item: { title: string; description: string; details: string; tags: string[] };
	};
	skills: {
		heading: string;
		core: string;
		familiar: string;
		certifications: string;
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
	experience: { heading: string; entries: ExperienceEntry[] };
	education: { heading: string; entries: EducationEntry[] };
	contact: {
		heading: string;
		blurb: string;
		downloadCv: string;
		downloadToast: string;
		emailMe: string;
		github: string;
		linkedin: string;
	};
	footer: { email: string; github: string; linkedin: string };
	notFound: { title: string; body: string; backHome: string };
}

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
		},
		hero: {
			tagline: 'Software Engineer',
			blurb:
				'Software engineer at Accenture, using AI tooling to accelerate full-cycle delivery — from technical decisions to translating business needs into working software.',
			viewProjects: 'View Projects',
			contactMe: 'Contact Me',
		},
		about: {
			heading: 'About',
			p1: "I'm a software engineer with a background mainly in retail logistics software. I have a reliable and flexible personality, equally comfortable collaborating in a team and driving things independently, with a continuous focus on problem-solving and learning new technologies.",
			p2: "My role has been evolving beyond hands-on engineering toward owning how a project gets delivered day to day — coordinating across engineering teams, presenting technical decisions to business stakeholders, and using AI tooling to take on more scope and move faster. I'm working toward growing this into a full management role, applying that same AI-accelerated approach at a larger scale.",
			languages: 'Languages',
			languageItems: ['Hungarian (Native)', 'English (Professional)', 'German (Professional)'],
			outsideWork: 'Outside of work',
			interests: ['Gym', 'Tennis', 'Gastronomy', 'Finance & Investing'],
		},
		projects: {
			heading: 'Projects',
			badge: 'Work in progress',
			viewDetails: 'View Details',
			openProject: 'Open Project',
			close: 'Close',
			item: {
				title: '[Project Name]',
				description: '[One to two sentences describing what the project does and why you built it.]',
				details:
					'[Longer placeholder text for the dialog — project goals, your role, challenges solved, and outcomes. Replace with real details once available.]',
				tags: ['[Tech 1]', '[Tech 2]', '[Tech 3]'],
			},
		},
		skills: {
			heading: 'Skills',
			core: 'Core',
			familiar: 'Familiar with',
			certifications: 'Certifications',
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
			heading: 'Experience',
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
			heading: 'Education',
			entries: [
				{
					degree: "Master's degree, Computer Science",
					org: 'Eötvös Loránd University',
					dates: 'September 2021 – June 2023',
					description:
						'Thesis on researching various mobile robot dispersion algorithms, presenting the results and simulations through a web application.',
				},
				{
					degree: "Bachelor's degree, Computer Science",
					org: 'Eötvös Loránd University',
					dates: 'September 2018 – June 2021',
					description:
						'Thesis on developing a web application to compare and present sentiment analysis results from Python and SAP.',
				},
			],
		},
		contact: {
			heading: 'Contact',
			blurb: 'Open to new opportunities and collaborations — feel free to reach out.',
			downloadCv: 'Download CV',
			downloadToast: "Downloading the real CV — no malware, promise 🙂",
			emailMe: 'Email Me',
			github: 'GitHub',
			linkedin: 'LinkedIn',
		},
		footer: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
		notFound: {
			title: 'Page not found',
			body: "The page you're looking for doesn't exist. It might have been moved, or the link might be incorrect.",
			backHome: 'Back to Home',
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
		},
		hero: {
			tagline: 'Szoftvermérnök',
			blurb:
				'Szoftvermérnök az Accenture-nél, aki AI-eszközökkel gyorsítja fel a teljes fejlesztési ciklust — a technikai döntésektől az üzleti igények szoftverré alakításáig.',
			viewProjects: 'Projektek megtekintése',
			contactMe: 'Kapcsolatfelvétel',
		},
		about: {
			heading: 'Rólam',
			p1: 'Szoftvermérnök vagyok, tapasztalatom elsősorban kiskereskedelmi logisztikai szoftverek terén van. Megbízható és rugalmas személyiség vagyok, egyaránt otthonosan mozgok csapatban és önállóan is, folyamatos problémamegoldási és tanulási igénnyel.',
			p2: 'A szerepem a gyakorlati fejlesztésen túl egyre inkább a projekt napi szintű megvalósításának irányítása felé mozdul el — együttműködés más fejlesztői csapatokkal, technikai döntések prezentálása üzleti érdekelteknek, és AI-eszközök használata, hogy több feladatot vállaljak és gyorsabban haladjak. Azon dolgozom, hogy ezt egy teljes vezetői szerepkörré fejlesszem, ugyanezt az AI-gyorsított megközelítést alkalmazva nagyobb léptékben.',
			languages: 'Nyelvek',
			languageItems: ['Magyar (Anyanyelvi szint)', 'Angol (Felsőfokú)', 'Német (Felsőfokú)'],
			outsideWork: 'Szabadidőben',
			interests: ['Edzés', 'Tenisz', 'Gasztronómia', 'Pénzügyek és befektetés'],
		},
		projects: {
			heading: 'Projektek',
			badge: 'Folyamatban',
			viewDetails: 'Részletek megtekintése',
			openProject: 'Projekt megnyitása',
			close: 'Bezárás',
			item: {
				title: '[Projekt neve]',
				description: '[Egy-két mondat arról, mit csinál a projekt és miért hoztad létre.]',
				details:
					'[Hosszabb helykitöltő szöveg a párbeszédablakhoz — projektcélok, a szereped, megoldott kihívások és eredmények. Cseréld le valós adatokra, ha elérhetők.]',
				tags: ['[Technológia 1]', '[Technológia 2]', '[Technológia 3]'],
			},
		},
		skills: {
			heading: 'Készségek',
			core: 'Fő terület',
			familiar: 'Ismerem',
			certifications: 'Tanúsítványok',
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
			heading: 'Tapasztalat',
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
			heading: 'Tanulmányok',
			entries: [
				{
					degree: 'Mesterdiploma, Programtervező informatikus',
					org: 'Eötvös Loránd Tudományegyetem',
					dates: '2021. szeptember – 2023. június',
					description:
						'Szakdolgozat mobil robotok szétszóródási algoritmusainak kutatásáról, az eredmények és szimulációk egy webalkalmazáson keresztüli bemutatásával.',
				},
				{
					degree: 'Alapdiploma, Programtervező informatikus',
					org: 'Eötvös Loránd Tudományegyetem',
					dates: '2018. szeptember – 2021. június',
					description:
						'Szakdolgozat egy webalkalmazás fejlesztéséről, amely Python és SAP alapú szentimentelemzési eredményeket hasonlít össze és jelenít meg.',
				},
			],
		},
		contact: {
			heading: 'Kapcsolat',
			blurb: 'Nyitott vagyok új lehetőségekre és együttműködésekre — bátran keress meg.',
			downloadCv: 'Önéletrajz letöltése',
			downloadToast: 'Az igazi önéletrajz töltődik le — semmi vírus, ígérem 🙂',
			emailMe: 'Írj emailt',
			github: 'GitHub',
			linkedin: 'LinkedIn',
		},
		footer: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
		notFound: {
			title: 'Az oldal nem található',
			body: 'A keresett oldal nem létezik. Lehet, hogy áthelyezték, vagy a hivatkozás hibás.',
			backHome: 'Vissza a kezdőlapra',
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
		},
		hero: {
			tagline: 'Softwareentwickler',
			blurb:
				'Softwareentwickler bei Accenture, der mit KI-gestützten Tools die gesamte Entwicklung beschleunigt — von technischen Entscheidungen bis zur Umsetzung geschäftlicher Anforderungen in funktionierende Software.',
			viewProjects: 'Projekte ansehen',
			contactMe: 'Kontakt aufnehmen',
		},
		about: {
			heading: 'Über mich',
			p1: 'Ich bin Softwareentwickler mit Erfahrung vor allem im Bereich Logistiksoftware für den Einzelhandel. Ich bin zuverlässig und flexibel, arbeite gerne im Team, aber genauso eigenständig, mit stetigem Fokus auf Problemlösung und das Erlernen neuer Technologien.',
			p2: 'Meine Rolle entwickelt sich zunehmend über die praktische Entwicklungsarbeit hinaus hin zur Verantwortung für die tägliche Projektumsetzung — durch die Zusammenarbeit mit anderen Entwicklungsteams, die Präsentation technischer Entscheidungen vor Fachbereichs-Stakeholdern und den Einsatz von KI-Tools, um mehr Verantwortung zu übernehmen und schneller voranzukommen. Ich arbeite darauf hin, dies zu einer vollwertigen Führungsrolle auszubauen, mit demselben KI-gestützten Ansatz in größerem Maßstab.',
			languages: 'Sprachen',
			languageItems: ['Ungarisch (Muttersprache)', 'Englisch (Verhandlungssicher)', 'Deutsch (Verhandlungssicher)'],
			outsideWork: 'Neben der Arbeit',
			interests: ['Fitness', 'Tennis', 'Gastronomie', 'Finanzen & Investieren'],
		},
		projects: {
			heading: 'Projekte',
			badge: 'In Arbeit',
			viewDetails: 'Details ansehen',
			openProject: 'Projekt öffnen',
			close: 'Schließen',
			item: {
				title: '[Projektname]',
				description: '[Ein bis zwei Sätze darüber, was das Projekt macht und warum du es entwickelt hast.]',
				details:
					'[Längerer Platzhaltertext für den Dialog — Projektziele, deine Rolle, gelöste Herausforderungen und Ergebnisse. Durch echte Details ersetzen, sobald verfügbar.]',
				tags: ['[Technologie 1]', '[Technologie 2]', '[Technologie 3]'],
			},
		},
		skills: {
			heading: 'Kenntnisse',
			core: 'Kernkompetenz',
			familiar: 'Vertraut mit',
			certifications: 'Zertifikate',
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
			heading: 'Erfahrung',
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
			heading: 'Ausbildung',
			entries: [
				{
					degree: 'Master, Informatik',
					org: 'Eötvös-Loránd-Universität',
					dates: 'September 2021 – Juni 2023',
					description:
						'Masterarbeit zur Erforschung verschiedener Streuungsalgorithmen für mobile Roboter, mit Darstellung der Ergebnisse und Simulationen über eine Webanwendung.',
				},
				{
					degree: 'Bachelor, Informatik',
					org: 'Eötvös-Loránd-Universität',
					dates: 'September 2018 – Juni 2021',
					description:
						'Bachelorarbeit zur Entwicklung einer Webanwendung zum Vergleich und zur Darstellung von Sentiment-Analyse-Ergebnissen aus Python und SAP.',
				},
			],
		},
		contact: {
			heading: 'Kontakt',
			blurb: 'Offen für neue Möglichkeiten und Kooperationen — melde dich gerne.',
			downloadCv: 'Lebenslauf herunterladen',
			downloadToast: 'Der echte Lebenslauf wird heruntergeladen — kein Virus, versprochen 🙂',
			emailMe: 'E-Mail senden',
			github: 'GitHub',
			linkedin: 'LinkedIn',
		},
		footer: { email: 'E-Mail', github: 'GitHub', linkedin: 'LinkedIn' },
		notFound: {
			title: 'Seite nicht gefunden',
			body: 'Die gesuchte Seite existiert nicht. Sie wurde möglicherweise verschoben, oder der Link ist fehlerhaft.',
			backHome: 'Zurück zur Startseite',
		},
	},
};
