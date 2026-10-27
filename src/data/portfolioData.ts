import { SkillItem, Project, Experience, Education, CertificationGoal, DataSample } from '../types';

export const PERSONAL_INFO = {
  name: 'Mame Assane Ndoye',
  title: 'Étudiant en Statistique & Informatique Décisionnelle (SID)',
  subTitle: 'Futur spécialiste en analyse de données, technologies web et intégration avancée de l\'IA',
  location: 'Colobane, 11241 Dakar, Sénégal',
  email: 'mameassanendoye@gmail.com',
  phone: '+221785265828',
  phoneDisplay: '+221 78 526 58 28',
  whatsappUrl: 'https://wa.me/221785265828',
  publicAppUrl: 'https://assaneportfolio.netlify.app',
  portraitImage: '/photo_mame_assane.jpeg',
  cvPdfUrl: '/cv_mame_assane_ndoye.pdf',
  analyticsImage: '/src/assets/images/project_data_analytics_1793071630117.jpg',
  status: 'Recherche active de stage ou opportunité junior',
  availability: 'Immédiate · Présentiel à Dakar ou Télétravail',
  bio: `Étudiant en Licence 2 Statistique et Informatique Décisionnelle (SID) à l'EMIA (Liberté 6, Dakar), j'ai validé ma première année universitaire et poursuis mon cursus avec rigueur. J'ai également un parcours universitaire en Mathématiques, Physique et Informatique (UCAD) et en Cybersécurité à l'UNCHK. Mon objectif est de combiner la rigueur mathématique des statistiques avec le développement informatique et une utilisation très poussée des outils d'Intelligence Artificielle pour créer des solutions numériques fiables et éclairer la prise de décision.`,
  strengths: [
    { label: 'Utilisation très poussée de l\'IA', desc: 'Maîtrise avancée des outils d\'IA générative pour accélérer l\'analyse de données, le code, l\'automatisation et la recherche de solutions.' },
    { label: 'Esprit d\'analyse & rigueur mathématique', desc: 'Formation en MPI (UCAD) et Statistique Décisionnelle (EMIA) appliquée aux données concrètes.' },
    { label: 'Pédagogie & transmission', desc: 'Professeur particulier de mathématiques (1 an et 5 mois) accompagnant des élèves de collège et lycée.' },
    { label: 'Sens des responsabilités & leadership', desc: 'Responsable de la section junior de Vovinam Viet Vo Dao (Gendarmerie Nationale) encadrant 50 jeunes depuis plus de 3 ans.' }
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // IA & Outils avancés (Placé en tête pour valoriser la maîtrise poussée de l'IA)
  {
    name: 'Utilisation poussée de l\'IA générative',
    level: 'pratique',
    levelLabel: 'Maîtrise très poussée · Utilisation quotidienne',
    description: 'Prompt engineering avancé, raisonnement assisté par l\'IA, automatisation des tâches complexes, débogage et accélération du développement et de l\'analyse statistique.',
    category: 'tools'
  },

  // Web Development
  {
    name: 'HTML5 & CSS3',
    level: 'pratique',
    levelLabel: 'Pratique solide',
    description: 'Structure sémantique, intégration de maquettes réactives et conformes aux standards ergonomiques actuels.',
    category: 'web'
  },
  {
    name: 'JavaScript (ES6+)',
    level: 'notion',
    levelLabel: 'Notions à approfondir',
    description: 'Manipulation du DOM, événements interactifs et logique procédurale en cours de consolidation.',
    category: 'web'
  },
  {
    name: 'Création de sites web simples',
    level: 'pratique',
    levelLabel: 'Pratique solide',
    description: 'Conception de sites vitrines réactifs, lisibles et adaptés au mobile.',
    category: 'web'
  },

  // Statistics & Data
  {
    name: 'Statistique descriptive',
    level: 'pratique',
    levelLabel: 'Pratique académique solide',
    description: 'Mesures de tendance centrale (moyenne, médiane), dispersion (variance, écart-type), quartiles et visualisations.',
    category: 'stats'
  },
  {
    name: 'Visualisation & Aide à la décision',
    level: 'pratique',
    levelLabel: 'Pratique appliquée',
    description: 'Conception de graphiques clairs et de synthèses décisionnelles orientées vers l\'action.',
    category: 'stats'
  },
  {
    name: 'Bases de données & SQL',
    level: 'notion',
    levelLabel: 'Notions débutantes (SQL)',
    description: 'Modèle relationnel, création de tables et requêtes d\'interrogation de base (SELECT, WHERE, JOIN).',
    category: 'stats'
  },
  {
    name: 'Notions d\'analyse de données',
    level: 'notion',
    levelLabel: 'Notions étudiées',
    description: 'Exploration d\'échantillons, corrélations simples et formulation d\'hypothèses.',
    category: 'stats'
  },

  // Programming & Algorithms
  {
    name: 'Python',
    level: 'notion',
    levelLabel: 'Bases étudiées · Pratique à renforcer',
    description: 'Variables, boucles, structures de données et scripts d\'analyse numérique.',
    category: 'programming'
  },
  {
    name: 'Langages C & C++',
    level: 'notion',
    levelLabel: 'Bases étudiées · Pratique à renforcer',
    description: 'Algorithmique impérative, gestion de mémoire, pointeurs et modularité.',
    category: 'programming'
  },
  {
    name: 'PHP & Java',
    level: 'notion',
    levelLabel: 'Premières notions académiques',
    description: 'Bases de la programmation orientée objet et logique serveur.',
    category: 'programming'
  },

  // Systems & Tools
  {
    name: 'Installation & Maintenance Windows / Logiciels',
    level: 'pratique',
    levelLabel: 'Pratique avérée',
    description: 'Déploiement d\'OS, diagnostic de problèmes matériels et logiciels, composants informatiques, dépannage Wi-Fi & réseau, machines virtuelles.',
    category: 'systems'
  },
  {
    name: 'Cisco Packet Tracer',
    level: 'pratique',
    levelLabel: 'Pratique de simulation (à réactualiser)',
    description: 'Simulation de topologies, adressage IP et découverte des équipements réseau.',
    category: 'systems'
  },
  {
    name: 'Réseaux & Protocoles fondamentaux',
    level: 'notion',
    levelLabel: 'Notions étudiées',
    description: 'Modèles OSI/TCP-IP, sous-réseaux, DHCP et routage de base.',
    category: 'systems'
  },
  {
    name: 'Visual Studio Code & Outils Bureautiques',
    level: 'pratique',
    levelLabel: 'Pratique quotidienne',
    description: 'VS Code, Microsoft Word (rédaction de rapports structurés), PowerPoint.',
    category: 'tools'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'portfolio-web',
    title: 'Site Web Personnel & Portfolio Professionnel',
    category: 'web',
    categoryLabel: 'Développement Web',
    status: 'functional',
    statusLabel: 'Terminé & Déployé',
    summary: 'Conception intégrale d\'un portfolio moderne, fluide, compact et responsive pour valoriser mon profil auprès des recruteurs.',
    problem: 'Disposer d\'un simple CV textuel ne permet pas de démontrer concrètement ses compétences numériques et sa rigueur méthodologique.',
    objective: 'Créer une interface web moderne avec lien public permanent, respectant les normes ergonomiques et de rapidité de chargement.',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript', 'React'],
    features: [
      'Interface épurée et condensée avec photo réelle et CV PDF téléchargeable',
      'Module interactif d\'analyse statistique embarqué directement dans l\'interface',
      'Consultation et téléchargement instantané du CV PDF officiel',
      'Guide transparent d\'hébergement et de partage pour Connect Emploi'
    ],
    learnings: 'Maîtrise du responsive design moderne, optimisation de la hiérarchie visuelle et clarté du positionnement professionnel.'
  },
  {
    id: 'data-lab-stats',
    title: 'Laboratoire Interactif d\'Analyse Statistique & Décisionnelle',
    category: 'stats',
    categoryLabel: 'Statistiques & Décisionnel',
    status: 'functional',
    statusLabel: 'Interactif & Fonctionnel',
    interactiveDemoId: 'demo-interactive-stats',
    image: '/src/assets/images/project_data_analytics_1793071630117.jpg',
    summary: 'Application interactive embarquée calculant dynamiquement les indicateurs descriptifs clés (moyenne, médiane, dispersion) avec visualisations instantanées.',
    problem: 'La statistique descriptive reste abstraite sans visualisation concrète permettant d\'interpréter immédiatement les chiffres.',
    objective: 'Offrir une démonstration dynamique en direct sur des jeux d\'échantillons réalistes avec calculs mathématiques réactifs.',
    technologies: ['Statistique descriptive', 'Calcul vectoriel', 'Visualisation SVG', 'TypeScript'],
    features: [
      'Calcul automatique en temps réel : Moyenne (x̄), Médiane (Me), Écart-type (σ), Quartiles (Q1, Q3)',
      'Histogramme de fréquences dynamique avec mise en valeur de la moyenne',
      'Synthèse décisionnelle générée automatiquement selon les résultats'
    ],
    learnings: 'Implémentation algorithmique rigoureuse des formules statistiques et restitution visuelle accessible.'
  },
  {
    id: 'mini-projet-stat-descriptive',
    title: 'Étude Empirique de Statistique Descriptive Appliquée',
    category: 'stats',
    categoryLabel: 'Statistiques & Données',
    status: 'in_progress',
    statusLabel: 'En cours de finalisation',
    summary: 'Analyse méthodique d\'une série statistique bivariée afin d\'évaluer la relation entre temps d\'étude et performance académique.',
    problem: 'Évaluer quantitativement si l\'investissement horaire mesuré présente une corrélation forte avec les résultats observés.',
    objective: 'Construire un dossier complet comprenant nuage de points, droite de régression linéaire et interprétation des résidus.',
    technologies: ['Statistique bivariée', 'Coefficient de Pearson', 'Python', 'Rapport d\'analyse'],
    features: [
      'Nettoyage et structuration des données d\'échantillon',
      'Calcul des coefficients de corrélation et ajustement linéaire',
      'Rédaction d\'une note synthétique d\'aide à la décision'
    ],
    learnings: 'Rigueur dans la manipulation des séries statistiques et distinction nette entre corrélation et causalité.'
  },
  {
    id: 'gestion-vovinam-app',
    title: 'Outil de Suivi des Cotisations & Présences pour Club Sportif',
    category: 'app',
    categoryLabel: 'Solutions Numériques',
    status: 'concept',
    statusLabel: 'Projet en préparation',
    summary: 'Application numérique légère répondant au besoin réel d\'encadrement des 50 élèves de la section junior de Vovinam Viet Vo Dao à Dakar.',
    problem: 'La gestion manuelle papier des cotisations et des présences hebdomadaires entraîne des pertes de temps et des risques d\'erreurs.',
    objective: 'Créer un outil simple et rapide pour enregistrer les présences par séance et éditer un état financier mensuel transparent.',
    technologies: ['HTML / CSS', 'JavaScript', 'Modélisation relationnelle'],
    features: [
      'Fiche adhérent synthétique (grade, contact, statut)',
      'Pointage rapide des présences par séance',
      'Suivi clair des cotisations mensuelles acquittées'
    ],
    learnings: 'Conception axée sur l\'usage terrain et la simplification des tâches administratives répétitives.'
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'vovinam',
    role: 'Responsable section Junior (3 ans et 2 mois)',
    organization: 'Vovinam Viet Vo Dao — Gendarmerie Nationale · Volontariat, Dakar',
    period: 'Depuis 01/2023 · En cours',
    location: 'Dakar, Sénégal',
    summary: 'Encadrement hebdomadaire de près de 50 enfants et adolescents, maintien du cadre disciplinaire, sécurité et gestion administrative des cotisations.',
    missions: [
      'Encadrement technique, physique et pédagogique régulier de 50 jeunes pratiquants.',
      'Planification et coordination des séances d\'entraînement.',
      'Suivi rigoureux des présences, des règles de sécurité et de l\'éthique martiale.',
      'Gestion administrative et suivi de la trésorerie des cotisations (caisse, reddition aux tuteurs).'
    ],
    keyStrengths: [
      'Leadership et autorité bienveillante auprès des jeunes (3+ années)',
      'Rigueur d\'organisation et sens élevé des responsabilités',
      'Communication claire avec les parents et la hiérarchie'
    ]
  },
  {
    id: 'tutorat-maths',
    role: 'Professeur particulier de mathématiques (1 an et 5 mois)',
    organization: 'Freelance · Dakar',
    period: 'Depuis 10/2024 · En cours',
    location: 'Dakar, Sénégal',
    summary: 'Accompagnement individualisé d\'élèves du secondaire (classes de 4ème, 3ème et Seconde) en mathématiques.',
    missions: [
      'Diagnostic des lacunes et plan de travail adapté à chaque élève.',
      'Préparation d\'exercices ciblés et explication intuitive des théorèmes.',
      'Préparation méthodique aux examens (BFEM, devoirs surveillés).',
      'Développement de l\'esprit d\'analyse et de la rigueur de raisonnement.'
    ],
    keyStrengths: [
      'Pédagogie et capacité à simplifier les notions abstraites',
      'Patience et adaptation au rythme de chaque élève',
      'Méthode structurée pour développer l\'autonomie'
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'sid-emia',
    degree: 'Licence 2 Statistique et Informatique Décisionnelle',
    institution: 'EMIA — Liberté 6',
    period: 'En cours',
    location: 'Dakar, Sénégal',
    status: 'en_cours',
    statusLabel: 'En cours · 1ère année validée',
    description: 'Cursus alliant mathématiques appliquées, statistique descriptive, informatique et aide à la décision.',
    highlights: [
      'Statistique descriptive et calcul des probabilités',
      'Algorithmique, structures de données et programmation',
      'Modélisation de bases de données relationnelles'
    ]
  },
  {
    id: 'l1-mpi-ucad',
    degree: 'Licence 1 Mathématique Physique Informatique (MPI), sciences fondamentales',
    institution: 'UCAD — Dakar',
    period: '2024 – 2025',
    location: 'Dakar, Sénégal',
    status: 'en_cours',
    statusLabel: 'Formation universitaire',
    description: 'Bases solides en mathématiques pures et appliquées, physique fondamentale et algorithmique.',
    highlights: [
      'Analyse mathématique, algèbre linéaire et logique',
      'Physique générale et méthodes numériques'
    ]
  },
  {
    id: 'lsimac-unchk',
    degree: 'Licence Sciences Informatiques et Mathématiques de la Cybersécurité',
    institution: 'UNCHK (ex UVS) — Dakar',
    period: '2025 – En cours',
    location: 'Dakar, Sénégal',
    status: 'admission',
    statusLabel: 'Formation en cours',
    description: 'Filière spécialisée en ingénierie informatique, mathématiques appliquées et sécurité des systèmes d\'information.',
    highlights: [
      'Sécurité des infrastructures et des réseaux',
      'Cryptographie et protection des flux de données'
    ]
  },
  {
    id: 'bac-s2',
    degree: 'Baccalauréat série S2 (Sciences Expérimentales)',
    institution: 'Lycée Blaise Diagne — Dakar',
    period: '2023 – 2024',
    location: 'Dakar, Sénégal',
    status: 'en_cours',
    statusLabel: 'Diplôme obtenu',
    description: 'Baccalauréat scientifique scientifique avec spécialisation en mathématiques et sciences physiques.',
    highlights: [
      'Rigueur scientifique et esprit cartésien'
    ]
  }
];

export const CERTIFICATION_GOALS: CertificationGoal[] = [
  {
    title: 'Utilisation & Ingénierie IA / Data Prompting',
    issuer: 'Auto-formation & Pratique intensive',
    status: 'en_cours',
    statusLabel: 'Pratique quotidienne',
    focusArea: 'Intégration d\'outils IA, prompting avancé et automatisation des workflows.'
  },
  {
    title: 'Cisco Certified Support Technician (CCST) Networking',
    issuer: 'Cisco Networking Academy',
    status: 'en_cours',
    statusLabel: 'Préparation active',
    focusArea: 'Principes fondamentaux des réseaux, commutation et routage.'
  },
  {
    title: 'Fondamentaux de la Cybersécurité',
    issuer: 'SecNumAcadémie (ANSSI) & UNCHK',
    status: 'en_cours',
    statusLabel: 'En cours d\'étude',
    focusArea: 'Hygiène informatique, sécurité des postes clients et protection des données.'
  }
];

export const DEMO_DATASETS: Record<string, { title: string; description: string; unit: string; secondaryUnit: string; data: DataSample[] }> = {
  academic: {
    title: 'Performances académiques : Heures d\'étude vs Note',
    description: 'Jeu de démonstration : 16 étudiants en statistiques.',
    unit: '/20 (Note)',
    secondaryUnit: 'h/semaine',
    data: [
      { id: 1, label: 'Étudiant A', value: 16.5, secondaryValue: 18, category: 'Mention Très Bien' },
      { id: 2, label: 'Étudiant B', value: 14.0, secondaryValue: 14, category: 'Mention Bien' },
      { id: 3, label: 'Étudiant C', value: 11.5, secondaryValue: 9, category: 'Mention Passable' },
      { id: 4, label: 'Étudiant D', value: 18.0, secondaryValue: 22, category: 'Mention Très Bien' },
      { id: 5, label: 'Étudiant E', value: 13.0, secondaryValue: 12, category: 'Mention Assez Bien' },
      { id: 6, label: 'Étudiant F', value: 9.5, secondaryValue: 6, category: 'À consolider' },
      { id: 7, label: 'Étudiant G', value: 15.0, secondaryValue: 16, category: 'Mention Bien' },
      { id: 8, label: 'Étudiant H', value: 12.0, secondaryValue: 10, category: 'Mention Assez Bien' },
      { id: 9, label: 'Étudiant I', value: 17.5, secondaryValue: 20, category: 'Mention Très Bien' },
      { id: 10, label: 'Étudiant J', value: 10.0, secondaryValue: 8, category: 'Mention Passable' },
      { id: 11, label: 'Étudiant K', value: 13.5, secondaryValue: 13, category: 'Mention Assez Bien' },
      { id: 12, label: 'Étudiant L', value: 15.5, secondaryValue: 17, category: 'Mention Bien' },
      { id: 13, label: 'Étudiant M', value: 8.0, secondaryValue: 5, category: 'À consolider' },
      { id: 14, label: 'Étudiant N', value: 14.5, secondaryValue: 15, category: 'Mention Bien' },
      { id: 15, label: 'Étudiant O', value: 16.0, secondaryValue: 19, category: 'Mention Très Bien' },
      { id: 16, label: 'Étudiant P', value: 12.5, secondaryValue: 11, category: 'Mention Assez Bien' }
    ]
  },
  club: {
    title: 'Assiduité Section Junior Vovinam',
    description: 'Jeu de démonstration : présences trimestrielles sur 14 séances.',
    unit: 'séances',
    secondaryUnit: '% assiduité',
    data: [
      { id: 1, label: 'Poussins 1', value: 13, secondaryValue: 93, category: 'Régulier' },
      { id: 2, label: 'Poussins 2', value: 11, secondaryValue: 79, category: 'Régulier' },
      { id: 3, label: 'Benjamins 1', value: 14, secondaryValue: 100, category: 'Parfait' },
      { id: 4, label: 'Benjamins 2', value: 12, secondaryValue: 86, category: 'Régulier' },
      { id: 5, label: 'Minimes 1', value: 14, secondaryValue: 100, category: 'Parfait' },
      { id: 6, label: 'Minimes 2', value: 10, secondaryValue: 71, category: 'Moyen' },
      { id: 7, label: 'Cadets 1', value: 13, secondaryValue: 93, category: 'Régulier' },
      { id: 8, label: 'Cadets 2', value: 9, secondaryValue: 64, category: 'Irrégulier' },
      { id: 9, label: 'Inscrits récents', value: 8, secondaryValue: 57, category: 'Irrégulier' },
      { id: 10, label: 'Équipe Démo', value: 14, secondaryValue: 100, category: 'Parfait' }
    ]
  }
};
