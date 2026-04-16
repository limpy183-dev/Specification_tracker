/* ============================================================
   SPEC TRACKER — Application Logic
   All topic data, rendering, state management, and interactions
   ============================================================ */

// ─── Topic Data ──────────────────────────────────────────
const SUBJECTS = [
  {
    id: 'aqa-cs',
    name: 'AQA Computer Science',
    icon: '💻',
    sections: [
      {
        code: '4.1', title: 'Fundamentals of Programming',
        topics: [
          { code: '4.1.1', title: 'Programming', desc: 'Data types, variables, arithmetic, logic, strings, subroutines, recursion, etc.' },
          { code: '4.1.2', title: 'Programming Paradigms', desc: 'Procedural and Object-Oriented Programming' },
        ]
      },
      {
        code: '4.2', title: 'Fundamentals of Data Structures',
        topics: [
          { code: '4.2.1', title: 'Data Structures & Abstract Data Types', desc: 'ADTs and their implementations' },
          { code: '4.2.2', title: 'Queues', desc: 'Linear, circular, priority queues' },
          { code: '4.2.3', title: 'Stacks', desc: 'Stack operations and applications' },
          { code: '4.2.4', title: 'Graphs', desc: 'Adjacency matrices and adjacency lists' },
          { code: '4.2.5', title: 'Trees', desc: 'Binary trees and traversals' },
          { code: '4.2.6', title: 'Hash Tables', desc: 'Hashing functions and collision handling' },
          { code: '4.2.7', title: 'Dictionaries', desc: 'Key-value pair data structures' },
          { code: '4.2.8', title: 'Vectors', desc: 'Vector representation and operations' },
        ]
      },
      {
        code: '4.3', title: 'Fundamentals of Algorithms',
        topics: [
          { code: '4.3.1', title: 'Graph Traversal', desc: 'Breadth-first and Depth-first search' },
          { code: '4.3.2', title: 'Tree Traversal', desc: 'Pre-order, In-order, Post-order' },
          { code: '4.3.3', title: 'Reverse Polish Notation', desc: 'Postfix expression evaluation' },
          { code: '4.3.4', title: 'Searching Algorithms', desc: 'Linear, Binary, Binary tree search' },
          { code: '4.3.5', title: 'Sorting Algorithms', desc: 'Bubble sort and Merge sort' },
          { code: '4.3.6', title: 'Optimisation Algorithms', desc: "Dijkstra's shortest path algorithm" },
        ]
      },
      {
        code: '4.4', title: 'Theory of Computation',
        topics: [
          { code: '4.4.1', title: 'Abstraction & Automation', desc: 'Problem abstraction and computational thinking' },
          { code: '4.4.2', title: 'Regular Languages', desc: 'Finite State Machines, Regular Expressions' },
          { code: '4.4.3', title: 'Context-Free Languages', desc: 'BNF notation and Syntax diagrams' },
          { code: '4.4.4', title: 'Classification of Algorithms', desc: 'Big-O notation, Tractability, Halting problem' },
          { code: '4.4.5', title: 'A Model of Computation', desc: 'Turing Machines' },
        ]
      },
      {
        code: '4.5', title: 'Fundamentals of Data Representation',
        topics: [
          { code: '4.5.1', title: 'Number Systems', desc: 'Natural, Integer, Rational, Irrational, Real, Ordinal' },
          { code: '4.5.2', title: 'Number Bases', desc: 'Binary, Octal, Hexadecimal conversions' },
          { code: '4.5.3', title: 'Units of Information', desc: 'Bits, Bytes, Kibibytes, etc.' },
          { code: '4.5.4', title: 'Binary Number System', desc: "Unsigned, Signed/Two's complement, Floating point" },
          { code: '4.5.5', title: 'Information Coding Systems', desc: 'ASCII, Unicode, Error checking/correction' },
          { code: '4.5.6', title: 'Representing Images, Sound & Data', desc: 'Bitmaps, Vectors, MIDI, Compression (lossy/lossless)' },
        ]
      },
      {
        code: '4.6', title: 'Fundamentals of Computer Systems',
        topics: [
          { code: '4.6.1', title: 'Hardware & Software', desc: 'System and application software' },
          { code: '4.6.2', title: 'Classification of Programming Languages', desc: 'High-level vs. Low-level languages' },
          { code: '4.6.3', title: 'Types of Program Translator', desc: 'Assembler, Compiler, Interpreter' },
          { code: '4.6.4', title: 'Logic Gates', desc: 'AND, OR, NOT, XOR, NAND, NOR, Adders' },
          { code: '4.6.5', title: 'Boolean Algebra', desc: 'Boolean identities, Karnaugh maps, simplification' },
        ]
      },
      {
        code: '4.7', title: 'Fundamentals of Computer Organisation & Architecture',
        topics: [
          { code: '4.7.1', title: 'Internal Hardware Components', desc: 'Buses, I/O controllers, memory' },
          { code: '4.7.2', title: 'Stored Program Concept', desc: 'Von Neumann and Harvard architectures' },
          { code: '4.7.3', title: 'Structure & Role of the Processor', desc: 'Fetch-Execute cycle, Registers, Pipelining' },
          { code: '4.7.4', title: 'External Hardware Devices', desc: 'Secondary storage, I/O devices' },
        ]
      },
      {
        code: '4.8', title: 'Consequences of Uses of Computing',
        topics: [
          { code: '4.8.1', title: 'Moral, Ethical, Legal & Cultural Issues', desc: 'Individual, social, legal, and cultural consequences' },
        ]
      },
      {
        code: '4.9', title: 'Fundamentals of Communication & Networking',
        topics: [
          { code: '4.9.1', title: 'Communication', desc: 'Serial, Parallel, Baud rate, Bit rate, Bandwidth' },
          { code: '4.9.2', title: 'Networking', desc: 'Topologies, Wireless/WiFi, CSMA/CA' },
          { code: '4.9.3', title: 'The Internet', desc: 'Packet switching, Routers, DNS, IP addressing' },
          { code: '4.9.4', title: 'TCP/IP Protocol', desc: 'Layers, Sockets, HTTP, FTP, SSH, CRUD, REST, JSON' },
        ]
      },
      {
        code: '4.10', title: 'Fundamentals of Databases',
        topics: [
          { code: '4.10.1', title: 'Relational Databases & SQL', desc: 'Normalisation (1NF, 2NF, 3NF), SQL queries' },
        ]
      },
      {
        code: '4.11', title: 'Big Data',
        topics: [
          { code: '4.11.1', title: 'Big Data Concepts', desc: 'Volume, Velocity, Variety; Fact-based modelling' },
        ]
      },
      {
        code: '4.12', title: 'Fundamentals of Functional Programming',
        topics: [
          { code: '4.12.1', title: 'Functional Programming', desc: 'Function types, First-class objects, Function application, List processing (Map, Filter, Reduce/Fold)' },
        ]
      },
      {
        code: '4.13', title: 'Systematic Approach to Problem Solving',
        topics: [
          { code: '4.13.1', title: 'Problem Solving Methodology', desc: 'Analysis, Design, Implementation, Testing, Evaluation' },
        ]
      },
    ]
  },
  {
    id: 'ocr-physics',
    name: 'OCR A Physics',
    icon: '⚛️',
    sections: [
      {
        code: 'M1', title: 'Development of Practical Skills in Physics',
        topics: [
          { code: '1.1.1', title: 'Planning', desc: 'Designing experiments and investigations' },
          { code: '1.1.2', title: 'Implementing', desc: 'Carrying out experiments safely and accurately' },
          { code: '1.1.3', title: 'Analysis', desc: 'Processing and interpreting data' },
          { code: '1.1.4', title: 'Evaluation', desc: 'Assessing reliability and accuracy of results' },
          { code: '1.2.1', title: 'Practical Skills', desc: 'Independent thinking, methods, research' },
          { code: '1.2.2', title: 'Use of Apparatus & Techniques', desc: 'Laboratory apparatus and measurement techniques' },
        ]
      },
      {
        code: 'M2', title: 'Foundations of Physics',
        topics: [
          { code: '2.1.1', title: 'Physical Quantities', desc: 'Base and derived quantities' },
          { code: '2.1.2', title: 'S.I. Units', desc: 'International System of Units and prefixes' },
          { code: '2.2.1', title: 'Measurements & Uncertainties', desc: 'Systematic/random errors, percentage uncertainty' },
          { code: '2.3.1', title: 'Scalars & Vectors', desc: 'Adding and resolving vectors' },
        ]
      },
      {
        code: 'M3', title: 'Forces and Motion',
        topics: [
          { code: '3.1.1', title: 'Kinematics', desc: 'Displacement, velocity, acceleration definitions' },
          { code: '3.1.2', title: 'Linear Motion', desc: 'SUVAT equations and motion graphs' },
          { code: '3.1.3', title: 'Projectile Motion', desc: 'Independent horizontal and vertical components' },
          { code: '3.2.1', title: 'Dynamics', desc: "Newton's laws applied to motion" },
          { code: '3.2.2', title: 'Motion with Non-Uniform Acceleration', desc: 'Terminal velocity, drag forces' },
          { code: '3.2.3', title: 'Equilibrium', desc: 'Conditions for static and dynamic equilibrium' },
          { code: '3.2.4', title: 'Density & Pressure', desc: 'Fluid pressure and Archimedes principle' },
          { code: '3.3.1', title: 'Work & Conservation of Energy', desc: 'Work done and energy conservation' },
          { code: '3.3.2', title: 'Kinetic & Potential Energies', desc: 'KE, GPE and elastic PE calculations' },
          { code: '3.3.3', title: 'Power', desc: 'Rate of energy transfer and efficiency' },
          { code: '3.4.1', title: 'Springs', desc: "Hooke's law, spring constant, elastic limit" },
          { code: '3.4.2', title: 'Mechanical Properties of Matter', desc: 'Stress, strain, Young modulus' },
          { code: '3.5.1', title: "Newton's Laws of Motion", desc: 'First, second and third laws in depth' },
          { code: '3.5.2', title: 'Collisions', desc: 'Conservation of momentum, elastic/inelastic collisions' },
        ]
      },
      {
        code: 'M4', title: 'Electrons, Waves and Photons',
        topics: [
          { code: '4.1.1', title: 'Charge', desc: 'Elementary charge, charge carriers' },
          { code: '4.1.2', title: 'Mean Drift Velocity', desc: 'Current, charge carrier density, drift velocity' },
          { code: '4.2.1', title: 'Circuit Symbols', desc: 'Standard circuit component symbols' },
          { code: '4.2.2', title: 'E.M.F. & P.D.', desc: 'Electromotive force and potential difference' },
          { code: '4.2.3', title: 'Resistance', desc: "Ohm's law, I-V characteristics" },
          { code: '4.2.4', title: 'Resistivity', desc: 'Material resistivity and temperature effects' },
          { code: '4.2.5', title: 'Power', desc: 'Electrical power and energy dissipation' },
          { code: '4.3.1', title: 'Series & Parallel Circuits', desc: 'Circuit rules for series and parallel' },
          { code: '4.3.2', title: 'Internal Resistance', desc: 'EMF, terminal PD, and internal resistance' },
          { code: '4.3.3', title: 'Potential Dividers', desc: 'Voltage division and sensor circuits' },
          { code: '4.4.1', title: 'Wave Motion', desc: 'Transverse/longitudinal, wavelength, frequency, period' },
          { code: '4.4.2', title: 'Electromagnetic Waves', desc: 'EM spectrum, properties and uses' },
          { code: '4.4.3', title: 'Superposition', desc: 'Interference, path difference, diffraction' },
          { code: '4.4.4', title: 'Stationary Waves', desc: 'Nodes, antinodes, harmonics' },
          { code: '4.5.1', title: 'Photons', desc: 'Photon energy, E = hf' },
          { code: '4.5.2', title: 'The Photoelectric Effect', desc: 'Threshold frequency, work function, stopping voltage' },
          { code: '4.5.3', title: 'Wave–Particle Duality', desc: 'De Broglie wavelength, electron diffraction' },
        ]
      },
      {
        code: 'M5', title: 'Newtonian World and Astrophysics',
        topics: [
          { code: '5.1.1', title: 'Temperature', desc: 'Thermal equilibrium and temperature scales' },
          { code: '5.1.2', title: 'Solid, Liquid & Gas', desc: 'Kinetic model and internal energy' },
          { code: '5.1.3', title: 'Thermal Properties of Materials', desc: 'Specific heat capacity and latent heat' },
          { code: '5.1.4', title: 'Ideal Gases', desc: 'Gas laws, pV = NkT, kinetic theory' },
          { code: '5.2.1', title: 'Kinematics of Circular Motion', desc: 'Angular velocity, period, radian measure' },
          { code: '5.2.2', title: 'Centripetal Force', desc: 'Centripetal acceleration and force' },
          { code: '5.3.1', title: 'Simple Harmonic Oscillations', desc: 'SHM equations, displacement, velocity, acceleration' },
          { code: '5.3.2', title: 'Energy of a Simple Harmonic Oscillator', desc: 'KE/PE exchange in SHM' },
          { code: '5.3.3', title: 'Damping', desc: 'Free, damped, and forced oscillations; resonance' },
          { code: '5.4.1', title: 'Point & Spherical Masses', desc: 'Gravitational field lines and patterns' },
          { code: '5.4.2', title: "Newton's Law of Gravitation", desc: 'Inverse square law, field strength g' },
          { code: '5.4.3', title: 'Planetary Motion', desc: "Kepler's laws and orbital mechanics" },
          { code: '5.4.4', title: 'Gravitational Potential & Energy', desc: 'Gravitational potential, escape velocity' },
          { code: '5.5.1', title: 'Stars', desc: 'Stellar luminosity, HR diagram, stellar evolution' },
          { code: '5.5.2', title: 'Electromagnetic Radiation from Stars', desc: "Wien's displacement law, Stefan's law" },
          { code: '5.5.3', title: 'Cosmology', desc: "Doppler effect, Hubble's law, Big Bang theory" },
        ]
      },
      {
        code: 'M6', title: 'Particles and Medical Physics',
        topics: [
          { code: '6.1.1', title: 'Capacitors', desc: 'Capacitance, parallel plate capacitors' },
          { code: '6.1.2', title: 'Energy Stored in Capacitors', desc: 'E = ½CV², energy calculations' },
          { code: '6.1.3', title: 'Charging & Discharging Capacitors', desc: 'Time constant, exponential decay' },
          { code: '6.2.1', title: 'Point & Spherical Charges', desc: 'Electric field patterns' },
          { code: '6.2.2', title: "Coulomb's Law", desc: 'Force between point charges' },
          { code: '6.2.3', title: 'Uniform Electric Field', desc: 'Field strength E = V/d' },
          { code: '6.2.4', title: 'Electric Potential & Energy', desc: 'Electric potential, field-potential relationship' },
          { code: '6.3.1', title: 'Magnetic Fields', desc: 'Magnetic flux density, field patterns' },
          { code: '6.3.2', title: 'Motion of Charged Particles', desc: 'Force on moving charges, F = BQv' },
          { code: '6.3.3', title: 'Electromagnetism', desc: "Faraday's law, Lenz's law, electromagnetic induction" },
          { code: '6.4.1', title: 'The Nuclear Atom', desc: 'Nuclear radius, density, nuclear model' },
          { code: '6.4.2', title: 'Fundamental Particles', desc: 'Quarks, leptons, bosons, Standard Model' },
          { code: '6.4.3', title: 'Radioactivity', desc: 'Alpha, beta, gamma; decay equations, half-life' },
          { code: '6.4.4', title: 'Nuclear Fission & Fusion', desc: 'Binding energy, mass-energy equivalence' },
          { code: '6.5.1', title: 'Using X-rays', desc: 'X-ray production, attenuation, CT scanning' },
          { code: '6.5.2', title: 'Diagnostic Methods in Medicine', desc: 'PET scans, tracers, medical imaging' },
          { code: '6.5.3', title: 'Using Ultrasound', desc: 'Ultrasound imaging, acoustic impedance, A/B scans' },
        ]
      },
    ]
  },
  {
    id: 'ocr-geography',
    name: 'OCR Geography',
    icon: '🌍',
    sections: [
      {
        code: '1.1', title: 'Landscape Systems — Coastal Landscapes',
        topics: [
          { code: '1.1a', title: 'Coastal Landscapes as Systems', desc: 'Inputs, outputs, energy and sediment transfers' },
          { code: '1.1b', title: 'Development of Coastal Landforms', desc: 'Erosional and depositional landforms' },
          { code: '1.1c', title: 'Evolution of Coastal Landforms Over Time', desc: 'Climate change impacts on coastal landscapes' },
          { code: '1.1d', title: 'Human Activity & Coastal Change', desc: 'Human impact on coastal landscape systems' },
        ]
      },
      {
        code: '1.2', title: "Earth's Life Support Systems",
        topics: [
          { code: '1.2a', title: 'Importance of Water & Carbon', desc: 'Role of water and carbon to life on Earth' },
          { code: '1.2b', title: 'Water & Carbon Cycles in Contrasting Locations', desc: 'Tropical Rainforest vs. Arctic Tundra' },
          { code: '1.2c', title: 'Change Over Time in Water & Carbon Cycles', desc: 'Human and physical factors driving change' },
          { code: '1.2d', title: 'Water & Carbon Cycles — Global Management', desc: 'Link between cycles and global management strategies' },
        ]
      },
      {
        code: '2.1', title: 'Changing Spaces; Making Places',
        topics: [
          { code: '2.1a', title: 'The Faceted Nature of Place', desc: 'Demographics, socio-economics, and history' },
          { code: '2.1b', title: 'Understanding Place Through Perception', desc: 'Perception and emotional attachment to places' },
          { code: '2.1c', title: 'Economic Change & Social Inequality', desc: 'How economic change influences inequality in places' },
          { code: '2.1d', title: 'Role of Players in Economic Change', desc: 'Government, MNCs, and other players driving change' },
          { code: '2.1e', title: 'Placemaking & Rebranding', desc: 'How places are created through placemaking processes' },
        ]
      },
      {
        code: '2.2', title: 'Global Migration',
        topics: [
          { code: '2.2a', title: 'Contemporary Patterns of Global Migration', desc: 'Dynamic flows: spatial patterns, numbers, composition/direction' },
          { code: '2.2b', title: 'Migration & Development', desc: 'Relationship with socio-economic development, HDI, remittances' },
          { code: '2.2c', title: 'Global Impacts of Migration', desc: 'Stability, growth, development vs. inequalities, conflicts, injustices' },
          { code: '2.2d', title: 'Complexity of Migration in the 21st Century', desc: 'Economic globalisation, new source/host areas, young & female migrants' },
          { code: '2.2e', title: 'Global Shifts — South-South Corridors', desc: 'Rise of S-S corridors, refugees due to conflict/persecution' },
          { code: '2.2f', title: 'Policy & Corridors', desc: 'Immigration/emigration policies and bi-lateral flow corridors' },
          { code: '2.2g', title: 'EDC Case Study', desc: 'Emerging/Developing Country: immigration/emigration, interdependence, impacts' },
          { code: '2.2h', title: 'Power Relations in Migration', desc: 'How unequal power creates opportunities and challenges' },
          { code: '2.2i', title: 'AC Case Study', desc: 'Advanced Country: labour supply opportunities, border issues' },
          { code: '2.2j', title: 'LIDC Case Study', desc: 'Low-Income Developing Country: remittances vs. brain drain' },
        ]
      },
      {
        code: '3.2', title: 'Disease Dilemmas',
        topics: [
          { code: '3.2a', title: 'Global Patterns of Disease', desc: 'Global distribution and susceptibility patterns' },
          { code: '3.2b', title: 'Disease & Economic Development', desc: 'Link between disease prevalence and development level' },
          { code: '3.2c', title: 'Dealing with Communicable & Non-communicable Diseases', desc: 'Effectiveness of prevention and treatment strategies' },
          { code: '3.2d', title: 'Prediction, Mitigation & Eradication', desc: 'Potential for disease prediction and eradication' },
        ]
      },
      {
        code: '3.5', title: 'Hazardous Earth',
        topics: [
          { code: '3.5a', title: 'Continental Drift & Plate Tectonics', desc: 'Evidence and theory of plate tectonics' },
          { code: '3.5b', title: 'Volcanic Hazards', desc: 'Hazards generated by volcanic activity' },
          { code: '3.5c', title: 'Seismic Hazards (Earthquakes)', desc: 'Hazards generated by seismic activity' },
          { code: '3.5d', title: 'Living in Tectonically Active Locations', desc: 'Implications and management in active zones' },
        ]
      },
    ]
  },
];

// ─── State ───────────────────────────────────────────────
const STORAGE_KEY = 'spectracker_data_v2';
let state = {
  activeSubject: 'aqa-cs',
  ratings: {},    // { "aqa-cs::4.1.1": "red" | "yellow" | "green" }
  notes: {},      // { "aqa-cs::4.1.1": "some notes..." }
  openSections: {},  // { "aqa-cs::4.1": true }
  theme: 'dark',
  filter: 'all',
  search: '',
};

// ─── DOM References ──────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const els = {
  subjectTabs: $('#subject-tabs'),
  searchInput: $('#search-input'),
  filterPills: $('#filter-pills'),
  progressStats: $('#progress-stats'),
  progressBar: $('#progress-bar'),
  sectionsContainer: $('#sections-container'),
  themeToggle: $('#theme-toggle'),
  expandAll: $('#expand-all-btn'),
  collapseAll: $('#collapse-all-btn'),
  btnExportJSON: $('#btn-export-json'),
  btnExportCSV: $('#btn-export-csv'),
  btnImport: $('#btn-import'),
  importFile: $('#import-file'),
  btnPrint: $('#btn-print'),
  btnReset: $('#btn-reset'),
  modalOverlay: $('#modal-overlay'),
  modalCancel: $('#modal-cancel'),
  modalConfirm: $('#modal-confirm'),
  toast: $('#toast'),
  celebrationContainer: $('#celebration-container'),
};

// ─── Helpers ─────────────────────────────────────────────
function topicKey(subjectId, topicCode) {
  return `${subjectId}::${topicCode}`;
}

function sectionKey(subjectId, sectionCode) {
  return `${subjectId}::${sectionCode}`;
}

function getActiveSubject() {
  return SUBJECTS.find(s => s.id === state.activeSubject);
}

function getAllTopicsForSubject(subjectId) {
  const subj = SUBJECTS.find(s => s.id === subjectId);
  if (!subj) return [];
  const topics = [];
  for (const sec of subj.sections) {
    for (const t of sec.topics) {
      topics.push({ ...t, sectionCode: sec.code, sectionTitle: sec.title });
    }
  }
  return topics;
}

function getRating(subjectId, topicCode) {
  return state.ratings[topicKey(subjectId, topicCode)] || 'unrated';
}

function cycleRating(current) {
  const order = ['unrated', 'red', 'yellow', 'green'];
  const idx = order.indexOf(current);
  return order[(idx + 1) % order.length];
}

// ─── Persistence ─────────────────────────────────────────
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ratings: state.ratings,
      notes: state.notes,
      openSections: state.openSections,
      theme: state.theme,
      activeSubject: state.activeSubject,
    }));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state.ratings = saved.ratings || {};
      state.notes = saved.notes || {};
      state.openSections = saved.openSections || {};
      state.theme = saved.theme || 'dark';
      state.activeSubject = saved.activeSubject || 'aqa-cs';
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
}

// ─── Toast ───────────────────────────────────────────────
let toastTimer = null;
function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove('visible'), 2500);
}

// ─── Theme ───────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  els.themeToggle.textContent = state.theme === 'dark' ? '🌙' : '☀️';
}

// ─── Celebration Animations (Lottie) ─────────────────────
const LOTTIE_ANIMATIONS = [
  '3D coin flip.json',
  'Animation - 1712657092760.json',
  'Blue Heart.json',
  'Confetti 01.json',
  'Confetti 02.json',
  'Fireworks.json',
  'Pixel burst.json',
  'confetti.json',
  'explosion.json',
  'running pigeon.json',
];

let activeAnims = [];
let celebrationTimeouts = [];

function playCelebration() {
  const container = els.celebrationContainer;
  
  // Clear any pending starts from previous clicks
  celebrationTimeouts.forEach(clearTimeout);
  celebrationTimeouts = [];

  // Cleanup any currently running animations
  activeAnims.forEach(anim => anim.destroy());
  activeAnims = [];
  container.innerHTML = '';
  container.style.display = 'block';

  let completedCount = 0;

  // Grid logic to prevent overlap: 4 cols x 3 rows = 12 cells (need 10)
  const cols = 4;
  const rows = 3;
  let cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({ r, c });
    }
  }
  // Shuffle array and pick first 10
  cells.sort(() => Math.random() - 0.5);
  const selectedCells = cells.slice(0, LOTTIE_ANIMATIONS.length);

  LOTTIE_ANIMATIONS.forEach((animFile, index) => {
    // Random start time up to 1 seconds
    const delay = Math.random() * 1000;
    
    const timeoutId = setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'lottie-child';
      
      const cell = selectedCells[index];
      const basePctX = (cell.c + 0.5) * (100 / cols);
      const basePctY = (cell.r + 0.5) * (100 / rows);
      
      // Small random perturbation within the cell (+/- 5%)
      const offsetX = (Math.random() - 0.5) * 10;
      const offsetY = (Math.random() - 0.5) * 10;
      
      div.style.left = `${basePctX + offsetX}%`;
      div.style.top = `${basePctY + offsetY}%`;
      
      container.appendChild(div);

      const animConfig = {
        container: div,
        renderer: 'canvas',
        loop: false,
        autoplay: true
      };

      if (window.ANIMATION_DATA && window.ANIMATION_DATA[animFile]) {
        // Deep clone is CRUCIAL because lottie-web mutates the animationData 
        // object internally. Re-using the same reference causes massive lag.
        animConfig.animationData = structuredClone(window.ANIMATION_DATA[animFile]);
      } else {
        animConfig.path = encodeURI(animFile);
      }

      const anim = lottie.loadAnimation(animConfig);

      // Randomize playback speed slightly
      anim.setSpeed(1.5 + Math.random());

      anim.addEventListener('complete', () => {
        completedCount++;
        // Remove from activeAnims array
        activeAnims = activeAnims.filter(a => a !== anim);
        anim.destroy(); // Free hardware buffer and memory!
        div.remove(); // Remove instance from DOM
        if (completedCount === LOTTIE_ANIMATIONS.length) {
          container.style.display = 'none';
        }
      });

      activeAnims.push(anim);
    }, delay);

    celebrationTimeouts.push(timeoutId);
  });
}

// ─── Progress Computation ────────────────────────────────
function computeProgress(subjectId) {
  const topics = getAllTopicsForSubject(subjectId);
  const counts = { red: 0, yellow: 0, green: 0, unrated: 0, total: topics.length };
  for (const t of topics) {
    const r = getRating(subjectId, t.code);
    counts[r]++;
  }
  return counts;
}

function computeSectionProgress(subjectId, section) {
  const counts = { red: 0, yellow: 0, green: 0, unrated: 0, total: section.topics.length };
  for (const t of section.topics) {
    const r = getRating(subjectId, t.code);
    counts[r]++;
  }
  return counts;
}

// ─── Rendering ───────────────────────────────────────────

// Subject tabs
function renderSubjectTabs() {
  els.subjectTabs.innerHTML = '';
  for (const subj of SUBJECTS) {
    const btn = document.createElement('button');
    btn.className = `subject-tab${subj.id === state.activeSubject ? ' active' : ''}`;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', subj.id === state.activeSubject);
    btn.dataset.subject = subj.id;

    const allTopics = getAllTopicsForSubject(subj.id);
    btn.innerHTML = `${subj.icon} ${subj.name} <span class="tab-count">${allTopics.length}</span>`;

    btn.addEventListener('click', () => {
      state.activeSubject = subj.id;
      saveState();
      renderAll();
    });

    els.subjectTabs.appendChild(btn);
  }
}

// Overall progress
function renderProgress() {
  const subj = getActiveSubject();
  const p = computeProgress(subj.id);

  els.progressStats.innerHTML = `
    <div class="stat-chip green"><span class="dot"></span>${p.green} Confident</div>
    <div class="stat-chip yellow"><span class="dot"></span>${p.yellow} Needs Revision</div>
    <div class="stat-chip red"><span class="dot"></span>${p.red} Weak</div>
    <div class="stat-chip unrated"><span class="dot"></span>${p.unrated} Unrated</div>
  `;

  const greenPct = (p.green / p.total * 100) || 0;
  const yellowPct = (p.yellow / p.total * 100) || 0;
  const redPct = (p.red / p.total * 100) || 0;

  els.progressBar.innerHTML = `
    <div class="progress-segment green" style="width:${greenPct}%"></div>
    <div class="progress-segment yellow" style="width:${yellowPct}%"></div>
    <div class="progress-segment red" style="width:${redPct}%"></div>
  `;
}

// Sections + Topics
function renderSections() {
  const subj = getActiveSubject();
  els.sectionsContainer.innerHTML = '';

  for (const sec of subj.sections) {
    const secId = sectionKey(subj.id, sec.code);
    const isOpen = !!state.openSections[secId];
    const sp = computeSectionProgress(subj.id, sec);

    // Filter logic: check if any topic in this section matches
    const filteredTopics = sec.topics.filter(t => topicMatchesFilters(subj.id, t));
    if (filteredTopics.length === 0 && (state.search || state.filter !== 'all')) continue;

    const group = document.createElement('div');
    group.className = 'section-group';

    // Section header
    const greenPct = (sp.green / sp.total * 100) || 0;
    const yellowPct = (sp.yellow / sp.total * 100) || 0;
    const redPct = (sp.red / sp.total * 100) || 0;
    const ratedCount = sp.green + sp.yellow + sp.red;

    const header = document.createElement('div');
    header.className = `section-header${isOpen ? ' open' : ''}`;
    header.innerHTML = `
      <span class="section-chevron">▶</span>
      <span class="section-code">${sec.code}</span>
      <span class="section-title">${sec.title}</span>
      <div class="section-progress-mini">
        <div class="mini-bar">
          <div class="mini-segment green" style="width:${greenPct}%"></div>
          <div class="mini-segment yellow" style="width:${yellowPct}%"></div>
          <div class="mini-segment red" style="width:${redPct}%"></div>
        </div>
        <span class="mini-fraction">${ratedCount}/${sp.total}</span>
      </div>
    `;

    header.addEventListener('click', () => {
      state.openSections[secId] = !state.openSections[secId];
      saveState();
      // Toggle without full re-render for speed
      header.classList.toggle('open');
      body.classList.toggle('open');
    });

    group.appendChild(header);

    // Section body
    const body = document.createElement('div');
    body.className = `section-body${isOpen ? ' open' : ''}`;

    const inner = document.createElement('div');
    inner.className = 'section-body-inner';

    // Set-all buttons
    const actions = document.createElement('div');
    actions.className = 'section-actions';
    actions.innerHTML = `
      <span style="font-size:0.72rem;color:var(--text-muted);margin-right:4px;font-weight:600;">Set all:</span>
      <button class="set-all-btn red" data-color="red">🔴 Red</button>
      <button class="set-all-btn yellow" data-color="yellow">🟡 Yellow</button>
      <button class="set-all-btn green" data-color="green">🟢 Green</button>
    `;
    actions.querySelectorAll('.set-all-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const color = btn.dataset.color;
        for (const t of sec.topics) {
          state.ratings[topicKey(subj.id, t.code)] = color;
        }
        saveState();
        renderProgress();
        renderSections();
        showToast(`Set all in "${sec.title}" to ${color}`);
      });
    });
    inner.appendChild(actions);

    // Topic cards
    for (const t of sec.topics) {
      const matches = topicMatchesFilters(subj.id, t);
      const card = createTopicCard(subj.id, t, !matches);
      inner.appendChild(card);
    }

    body.appendChild(inner);
    group.appendChild(body);
    els.sectionsContainer.appendChild(group);
  }

  // Empty state
  if (els.sectionsContainer.children.length === 0) {
    els.sectionsContainer.innerHTML = `
      <div class="empty-state">
        <div class="emoji">🔍</div>
        <p>No topics match your search or filter.</p>
      </div>
    `;
  }
}

function topicMatchesFilters(subjectId, topic) {
  // Rating filter
  if (state.filter !== 'all') {
    const r = getRating(subjectId, topic.code);
    if (state.filter !== r) return false;
  }

  // Search filter
  if (state.search) {
    const q = state.search.toLowerCase();
    const haystack = `${topic.code} ${topic.title} ${topic.desc}`.toLowerCase();
    if (!haystack.includes(q)) return false;
  }

  return true;
}

function createTopicCard(subjectId, topic, hidden) {
  const card = document.createElement('div');
  card.className = `topic-card${hidden ? ' hidden' : ''}`;
  card.dataset.topicCode = topic.code;

  const rating = getRating(subjectId, topic.code);
  const noteText = state.notes[topicKey(subjectId, topic.code)] || '';
  const hasNote = noteText.trim().length > 0;

  card.innerHTML = `
    <button class="traffic-light ${rating}" aria-label="Toggle rating for ${topic.title}" title="Click to change rating"></button>
    <div class="topic-info">
      <div class="topic-code">${topic.code}</div>
      <div class="topic-title">${topic.title}</div>
      ${topic.desc ? `<div class="topic-desc">${topic.desc}</div>` : ''}
      <button class="notes-toggle">${hasNote ? '📝 Edit notes' : '📝 Add notes'}</button>
      <div class="topic-notes" style="display:none;">
        <textarea placeholder="Write your revision notes here...">${noteText}</textarea>
      </div>
    </div>
  `;

  // Traffic light click
  const light = card.querySelector('.traffic-light');
  light.addEventListener('click', (e) => {
    e.stopPropagation();
    const current = getRating(subjectId, topic.code);
    const next = cycleRating(current);
    state.ratings[topicKey(subjectId, topic.code)] = next === 'unrated' ? undefined : next;
    if (next === 'unrated') delete state.ratings[topicKey(subjectId, topic.code)];
    else state.ratings[topicKey(subjectId, topic.code)] = next;

    // Update the button class immediately (no full re-render)
    light.className = `traffic-light ${next}`;
    saveState();
    renderProgress();
    updateSectionProgressBars();
    checkCompletion();

    // Play fireworks on yellow or green
    if (next === 'yellow' || next === 'green') {
      playCelebration();
    }
  });

  // Notes toggle
  const notesToggle = card.querySelector('.notes-toggle');
  const notesContainer = card.querySelector('.topic-notes');
  const textarea = card.querySelector('textarea');

  notesToggle.addEventListener('click', () => {
    const isHidden = notesContainer.style.display === 'none';
    notesContainer.style.display = isHidden ? 'block' : 'none';
    if (isHidden) textarea.focus();
  });

  textarea.addEventListener('input', () => {
    const val = textarea.value.trim();
    if (val) {
      state.notes[topicKey(subjectId, topic.code)] = textarea.value;
    } else {
      delete state.notes[topicKey(subjectId, topic.code)];
    }
    notesToggle.textContent = val ? '📝 Edit notes' : '📝 Add notes';
    saveState();
  });

  return card;
}

// Update just the section mini progress bars without full re-render
function updateSectionProgressBars() {
  const subj = getActiveSubject();
  const groups = els.sectionsContainer.querySelectorAll('.section-group');
  let i = 0;
  for (const sec of subj.sections) {
    const sp = computeSectionProgress(subj.id, sec);
    const greenPct = (sp.green / sp.total * 100) || 0;
    const yellowPct = (sp.yellow / sp.total * 100) || 0;
    const redPct = (sp.red / sp.total * 100) || 0;
    const ratedCount = sp.green + sp.yellow + sp.red;

    const group = groups[i];
    if (group) {
      const miniSegs = group.querySelectorAll('.mini-segment');
      if (miniSegs[0]) miniSegs[0].style.width = greenPct + '%';
      if (miniSegs[1]) miniSegs[1].style.width = yellowPct + '%';
      if (miniSegs[2]) miniSegs[2].style.width = redPct + '%';
      const frac = group.querySelector('.mini-fraction');
      if (frac) frac.textContent = `${ratedCount}/${sp.total}`;
    }
    i++;
  }
}

// Check if all topics are green → confetti!
let hasLaunchedConfetti = {};
function checkCompletion() {
  const subj = getActiveSubject();
  const p = computeProgress(subj.id);
  if (p.green === p.total && !hasLaunchedConfetti[subj.id]) {
    hasLaunchedConfetti[subj.id] = true;
    playCelebration();
    showToast(`🎉 Amazing! You've mastered all ${subj.name} topics!`);
  } else if (p.green < p.total) {
    hasLaunchedConfetti[subj.id] = false;
  }
}

// ─── Full Render ─────────────────────────────────────────
function renderAll() {
  document.documentElement.setAttribute('data-subject', state.activeSubject);
  renderSubjectTabs();
  renderProgress();
  renderSections();
}

// ─── Export / Import ─────────────────────────────────────
function exportJSON() {
  const data = {
    version: 2,
    exportedAt: new Date().toISOString(),
    ratings: state.ratings,
    notes: state.notes,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  downloadBlob(blob, `spectracker-export-${dateSlug()}.json`);
  showToast('📦 Progress exported as JSON!');
}

function exportCSV() {
  const rows = [['Subject', 'Section', 'Code', 'Title', 'Description', 'Rating', 'Notes']];
  for (const subj of SUBJECTS) {
    for (const sec of subj.sections) {
      for (const t of sec.topics) {
        const r = getRating(subj.id, t.code);
        const n = state.notes[topicKey(subj.id, t.code)] || '';
        rows.push([
          subj.name,
          `${sec.code} ${sec.title}`,
          t.code,
          t.title,
          t.desc || '',
          r,
          n.replace(/"/g, '""'),
        ]);
      }
    }
  }
  const csvContent = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  downloadBlob(blob, `spectracker-export-${dateSlug()}.csv`);
  showToast('📄 Progress exported as CSV!');
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.ratings) state.ratings = { ...state.ratings, ...data.ratings };
      if (data.notes) state.notes = { ...state.notes, ...data.notes };
      saveState();
      renderAll();
      showToast('📥 Progress imported successfully!');
    } catch (err) {
      showToast('❌ Invalid file format');
    }
  };
  reader.readAsText(file);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function dateSlug() {
  return new Date().toISOString().slice(0, 10);
}

// ─── Reset ───────────────────────────────────────────────
function showResetModal() {
  els.modalOverlay.classList.add('visible');
}
function hideModal() {
  els.modalOverlay.classList.remove('visible');
}
function resetAll() {
  state.ratings = {};
  state.notes = {};
  state.openSections = {};
  saveState();
  renderAll();
  hideModal();
  showToast('🗑️ All progress has been reset');
}

// ─── Event Listeners ─────────────────────────────────────
function initEvents() {
  // Search
  els.searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    renderSections();
  });

  // Filter pills
  els.filterPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    $$('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.filter = pill.dataset.filter;
    renderSections();
  });

  // Theme
  els.themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveState();
  });

  // Expand / Collapse all
  els.expandAll.addEventListener('click', () => {
    const subj = getActiveSubject();
    for (const sec of subj.sections) {
      state.openSections[sectionKey(subj.id, sec.code)] = true;
    }
    saveState();
    renderSections();
  });

  els.collapseAll.addEventListener('click', () => {
    const subj = getActiveSubject();
    for (const sec of subj.sections) {
      state.openSections[sectionKey(subj.id, sec.code)] = false;
    }
    saveState();
    renderSections();
  });

  // Export
  els.btnExportJSON.addEventListener('click', exportJSON);
  els.btnExportCSV.addEventListener('click', exportCSV);

  // Import
  els.btnImport.addEventListener('click', () => els.importFile.click());
  els.importFile.addEventListener('change', (e) => {
    if (e.target.files[0]) {
      importJSON(e.target.files[0]);
      e.target.value = '';
    }
  });

  // Print
  els.btnPrint.addEventListener('click', () => {
    // Expand all sections before printing
    const subj = getActiveSubject();
    for (const sec of subj.sections) {
      state.openSections[sectionKey(subj.id, sec.code)] = true;
    }
    renderSections();
    setTimeout(() => window.print(), 300);
  });

  // Reset
  els.btnReset.addEventListener('click', showResetModal);
  els.modalCancel.addEventListener('click', hideModal);
  els.modalConfirm.addEventListener('click', resetAll);
  els.modalOverlay.addEventListener('click', (e) => {
    if (e.target === els.modalOverlay) hideModal();
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Escape to close modal
    if (e.key === 'Escape') {
      hideModal();
    }
    // Ctrl+F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
      e.preventDefault();
      els.searchInput.focus();
    }
  });
}

// ─── Init ────────────────────────────────────────────────
function init() {
  loadState();
  applyTheme();
  initEvents();
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
