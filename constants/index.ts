// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/destinations', key: 'destinations', label: 'Destinations' },
  { href: '/tours', key: 'tours', label: 'Tours & Packages' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/pricing', key: 'pricing', label: 'Pricing' },
  { href: '/about', key: 'about', label: 'About Us' },
  { href: '/contact', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// DESTINATIONS DATASET
export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  category: 'Mountain' | 'Forest' | 'Lake' | 'Desert';
  rating: number;
  reviewsCount: number;
  elevation: string;
  distance: string;
  pricePerNight: number;
  image: string;
  description: string;
  features: string[];
  bestSeason: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Advanced';
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'putuk-truno',
    title: 'Putuk Truno Camp',
    subtitle: 'Prigen, Pasuruan, Indonesia',
    category: 'Mountain',
    rating: 4.9,
    reviewsCount: 342,
    elevation: '2,040 m',
    distance: '3.5 hrs',
    pricePerNight: 120,
    image: '/img-1.png',
    description: 'Immerse yourself in lush pine forests and panoramic mountain ridges. Putuk Truno offers fresh mountain air, crystal clear natural springs, and designated camping zones with campfire pits.',
    features: ['Fresh Water Supply', 'Campfire Pits', 'Stargazing Platform', '24/7 Ranger Post'],
    bestSeason: 'May - October',
    difficulty: 'Moderate',
  },
  {
    id: 'aguas-calientes',
    title: 'Aguas Calientes Ridge',
    subtitle: 'Machu Picchu Valley, Peru',
    category: 'Mountain',
    rating: 4.8,
    reviewsCount: 518,
    elevation: '2,430 m',
    distance: '5.2 hrs',
    pricePerNight: 180,
    image: '/img-2.png',
    description: 'A breathtaking high-altitude campsite overlooking cloud forests and ancient Inca trails. Perfect for hikers preparing for early morning summit pushes.',
    features: ['High-Altitude Sleeping Pads', 'Thermal Springs Access', 'Guided Sunrise Trek', 'Solar Power Stations'],
    bestSeason: 'April - September',
    difficulty: 'Challenging',
  },
  {
    id: 'emerald-lake',
    title: 'Emerald Lake Cove',
    subtitle: 'Banff National Park, Canada',
    category: 'Lake',
    rating: 4.9,
    reviewsCount: 420,
    elevation: '1,880 m',
    distance: '2.1 hrs',
    pricePerNight: 150,
    image: '/img-3.jpg',
    description: 'Wake up to reflection views of turquoise glacial waters framed by towering snow-capped peaks. Features canoe rentals and pristine lakeside campsites.',
    features: ['Canoe & Kayak Docks', 'Wildlife Observation Decks', 'Heated Sanitation Cabins', 'Fish Hatchery Tour'],
    bestSeason: 'June - September',
    difficulty: 'Easy',
  },
  {
    id: 'yosemite-pines',
    title: 'Yosemite Pines Sanctuary',
    subtitle: 'Sierra Nevada, California, USA',
    category: 'Forest',
    rating: 4.7,
    reviewsCount: 289,
    elevation: '1,200 m',
    distance: '4.0 hrs',
    pricePerNight: 110,
    image: '/img-1.png',
    description: 'Nestled among giant sequoias and granite cliffs, Yosemite Pines is a serene retreat ideal for hammock camping, bouldering, and family trail walks.',
    features: ['Bear-Proof Storage', 'Bouldering Crags', 'Shaded Canopy Sites', 'Natural Swimming Holes'],
    bestSeason: 'May - November',
    difficulty: 'Moderate',
  },
  {
    id: 'mount-rainier',
    title: 'Glacier Ridge Summit',
    subtitle: 'Cascade Range, Washington, USA',
    category: 'Mountain',
    rating: 4.9,
    reviewsCount: 195,
    elevation: '3,100 m',
    distance: '6.8 hrs',
    pricePerNight: 220,
    image: '/img-2.png',
    description: 'Designed for serious alpine trekkers. Glacier Ridge features arctic-grade dome tents, crampon practice slopes, and panoramic views of volcanic craters.',
    features: ['Extreme Weather Shelters', 'Crampon & Ice Axe Station', 'Satellite SOS Relay', 'Alpine Dining Dome'],
    bestSeason: 'July - August',
    difficulty: 'Advanced',
  },
  {
    id: 'sahara-dunes',
    title: 'High Sahara Basecamp',
    subtitle: 'Merzouga Dunes, Morocco',
    category: 'Desert',
    rating: 4.6,
    reviewsCount: 178,
    elevation: '450 m',
    distance: '4.5 hrs',
    pricePerNight: 140,
    image: '/img-3.jpg',
    description: 'Experience magical desert nights beneath an unpolluted Milky Way galaxy. Features traditional Berber luxury tents, camel treks, and dune sandboarding.',
    features: ['Traditional Berber Tents', 'Camel Caravans', 'Sandboarding Equipment', 'Astronomy Telescopes'],
    bestSeason: 'October - April',
    difficulty: 'Easy',
  },
];

// TOURS DATASET
export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Advanced';
  groupSize: string;
  price: number;
  rating: number;
  image: string;
  summary: string;
  inclusions: string[];
  itinerary: { day: number; title: string; description: string }[];
}

export const TOURS: TourPackage[] = [
  {
    id: 'truno-alpine-trek',
    title: '3-Day Truno Alpine Summit Hike',
    location: 'Putuk Truno, Pasuruan',
    duration: '3 Days / 2 Nights',
    difficulty: 'Moderate',
    groupSize: 'Max 10 People',
    price: 349,
    rating: 4.9,
    image: '/img-1.png',
    summary: 'A guided multi-day trek through dense pine forests, ridge crossings, and a breathtaking sunrise summit celebration.',
    inclusions: ['Certified Alpine Guide', 'All Camping Equipment', '6 Gourmet Camp Meals', 'Offline AR Map Access', 'Safety First-Aid Kit'],
    itinerary: [
      { day: 1, title: 'Basecamp Arrival & Gear Check', description: 'Gather at Prigen Basecamp, meet your guide, safety briefing, and light trek to Camp Site A.' },
      { day: 2, title: 'Ridge Ascent & Night Stargazing', description: 'Climb through upper pine zone, set up summit camp, and enjoy campfire stargazing session.' },
      { day: 3, title: 'Sunrise Summit & Descent', description: 'Early 4:00 AM push to Truno Peak for sunrise, breakfast at peak, and leisurely descent.' },
    ],
  },
  {
    id: 'machu-picchu-expedition',
    title: '5-Day Machu Picchu Cloud Ridge',
    location: 'Cusco to Aguas Calientes, Peru',
    duration: '5 Days / 4 Nights',
    difficulty: 'Challenging',
    groupSize: 'Max 8 People',
    price: 799,
    rating: 4.9,
    image: '/img-2.png',
    summary: 'Hike ancient stone pathways, navigate cloud forest passes, and arrive at the sun gate of Machu Picchu at dawn.',
    inclusions: ['Local Quechua Porters', 'Private Expedition Chef', 'Machu Picchu Entrance Tickets', 'Train Transfer Back to Cusco', 'Satellite Messenger'],
    itinerary: [
      { day: 1, title: 'Cusco to Sacred Valley', description: 'Acclimatization walk around Sacred Valley and camp near Wayllabamba.' },
      { day: 2, title: 'Dead Woman’s Pass (4,200m)', description: 'Ascend the highest pass of the trail with stunning views of Andes snowcaps.' },
      { day: 3, title: 'Cloud Forest & Ruins Exploration', description: 'Pass through mist-shrouded Inca ruins and camp at Phuyupatamarca.' },
      { day: 4, title: 'Sun Gate Arrival & Machu Picchu', description: 'Early morning hike to Inti Punku (Sun Gate) for panoramic Citadel views.' },
      { day: 5, title: 'Hot Springs & Return to Cusco', description: 'Relax in Aguas Calientes thermal baths and take Vistadome train back.' },
    ],
  },
  {
    id: 'emerald-kayak-camp',
    title: 'Weekend Emerald Lake Kayak & Camp',
    location: 'Banff National Park, Canada',
    duration: '2 Days / 1 Night',
    difficulty: 'Easy',
    groupSize: 'Max 12 People',
    price: 249,
    rating: 4.8,
    image: '/img-3.jpg',
    summary: 'Paddle glacial waters by day and sleep under starlit Canadian skies by night. Suitable for beginners and families.',
    inclusions: ['Premium Kayaks & Life Vests', 'Heated Lakefront Tents', 'Wilderness BBQ Dinner', 'Wildlife Photography Guide'],
    itinerary: [
      { day: 1, title: 'Paddling & Cove Exploration', description: 'Launch kayaks at Emerald Shore, paddle to secluded western cove, set camp.' },
      { day: 2, title: 'Morning Shoreline Hike & Farewell', description: 'Early morning paddle across mirror waters, lakeside brunch, return by 3 PM.' },
    ],
  },
  {
    id: 'arctic-survival-expedition',
    title: '7-Day Extreme Glacier & Survival Camp',
    location: 'Mount Rainier Alpine Zone',
    duration: '7 Days / 6 Nights',
    difficulty: 'Advanced',
    groupSize: 'Max 6 People',
    price: 1299,
    rating: 5.0,
    image: '/img-2.png',
    summary: 'Master winter mountaineering, ice axe self-arrest, snow trench construction, and glacier navigation with elite instructors.',
    inclusions: ['4-Season Geodesic Tents', 'Ice Axes & Crampons', 'Personal SOS Beacon Device', 'Certificate of Alpine Survival'],
    itinerary: [
      { day: 1, title: 'Mountaineering School & Snow Safety', description: 'Basecamp orientation, avalanche beacon search drills, snowpack analysis.' },
      { day: 2, title: 'Glacier Traversal & Crevasse Rescue', description: 'Roped team travel across glacier fields and emergency haul system practice.' },
      { day: 3, title: 'Igloo & Snow Cave Shelter Building', description: 'Construct survival shelters and spend the night inside handcrafted snow caves.' },
      { day: 4, title: 'High Altitude Summit Attempt', description: 'Alpine start at 2:00 AM for Rainier outer crater rim.' },
      { day: 5, title: 'Storm Survival Simulation', description: 'Simulated emergency scenario handling and satellite communication drills.' },
      { day: 6, title: 'Glacier Rappelling & Ice Climbing', description: 'Technical vertical ice wall climbing techniques.' },
      { day: 7, title: 'Graduation & Basecamp Celebration', description: 'Return to Paradise Inn, debriefing, and certificate awarding.' },
    ],
  },
];

// SERVICES LIST
export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'offline-maps',
    title: '3D AR Offline Maps',
    icon: '/map.svg',
    badge: 'Patented Tech',
    shortDesc: 'Navigate trails in full 3D augmented reality without cellular reception or Wi-Fi.',
    fullDesc: 'Our custom offline rendering engine pre-loads high-precision LiDAR elevation data, trail waypoints, contour lines, and water sources directly to your mobile device.',
    benefits: ['Zero battery drain vector tiles', 'Live GPS location lock without cellular signal', '3D topography terrain rendering', 'Turn-by-turn audio prompts on trail'],
  },
  {
    id: 'certified-guides',
    title: 'Certified Outdoor Guides',
    icon: '/user.svg',
    badge: 'Vetted Experts',
    shortDesc: 'Book licensed wilderness guides, mountain leaders, and first-aid certified experts.',
    fullDesc: 'Every Hilink guide undergoes background checks, Wilderness First Responder (WFR) certification, and local trail mastery evaluations to ensure safety and rich cultural storytelling.',
    benefits: ['100% background-checked guides', 'Bilingual and multilingual support', 'Tailored pace matching your fitness level', 'Emergency evacuation protocols'],
  },
  {
    id: 'gear-rental',
    title: 'Smart Gear Rental Network',
    icon: '/tech.svg',
    badge: 'Eco-Delivered',
    shortDesc: 'Top-tier ultralight tents, sleeping bags, and stoves delivered straight to your basecamp.',
    fullDesc: 'Eliminate heavy baggage traveling. Rent sanitized, top-rated brands (MSR, Big Agnes, Arc’teryx) picked up at trailheads or shipped directly to your departure hub.',
    benefits: ['Inspected and sanitized after every trip', 'Ultralight weight gear options', 'No costly equipment purchases required', 'Free return dropoff points'],
  },
  {
    id: 'satellite-sos',
    title: '24/7 Satellite SOS Beacon',
    icon: '/location.svg',
    badge: 'Life Saving',
    shortDesc: 'Instant emergency SOS satellite dispatch connected directly to global search & rescue.',
    fullDesc: 'Integrated satellite telemetry sends real-time coordinates, medical status, and emergency signals directly to local mountain rescue teams within minutes of trigger.',
    benefits: ['One-button emergency activation', 'Live trail tracking for family members', 'Global coverage across 190+ countries', 'Direct coordination with air rescue'],
  },
  {
    id: 'expedition-planner',
    title: 'AI Adventure Planner',
    icon: '/calendar.svg',
    badge: 'Smart Engine',
    shortDesc: 'Intelligent itinerary generation based on live weather patterns and your personal fitness.',
    fullDesc: 'Input your available days, difficulty preferences, and group size. Hilink AI calculates optimal campsites, water stops, meal plans, and daylight windows.',
    benefits: ['Live micro-climate weather warnings', 'Calculated packing list suggestions', 'Elevation gain/loss energy estimations', 'Group itinerary sharing'],
  },
  {
    id: 'community-hub',
    title: 'Global Climbers Community',
    icon: '/camp.svg',
    badge: '120k+ Members',
    shortDesc: 'Connect with fellow hikers, share verified trail logs, and organize group expeditions.',
    fullDesc: 'Join an active global community of outdoor enthusiasts. Access crowd-sourced trail conditions, real-time water availability updates, and campsite photos.',
    benefits: ['Real-time trail hazard reports', 'Community gear swap & trade', 'Photo & video story sharing', 'Badge rewards for landmark achievements'],
  },
];

// PRICING PLANS
export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number; // yearly price per month
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free-adventurer',
    name: 'Explorer Free',
    tagline: 'Perfect for weekend casual hikers and park walkers.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Standard 2D Offline Maps (3 downloads)',
      'Basic Trail Search & Filters',
      'Community Photo & Review Access',
      'Standard Weather Forecasts',
    ],
    ctaText: 'Get Started Free',
  },
  {
    id: 'pro-hiker',
    name: 'Pro Hiker',
    tagline: 'For active outdoor enthusiasts exploring off-grid wilderness.',
    monthlyPrice: 19,
    annualPrice: 14,
    popular: true,
    features: [
      'Unlimited 3D AR Offline Maps',
      'Turn-by-Turn Audio Trail Navigation',
      'Real-Time Weather & Hazard Alerts',
      'Satellite Family Live Tracking',
      '15% Discount on Gear Rentals',
      'Unlimited Trail Downloads',
    ],
    ctaText: 'Start 14-Day Free Trial',
  },
  {
    id: 'expedition-elite',
    name: 'Expedition Elite',
    tagline: 'For mountaineers, tour leaders, and extreme wilderness adventurers.',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Everything in Pro Hiker',
      '24/7 Satellite SOS Rescue Guarantee',
      '1-on-1 Certified Guide Consultation',
      '25% Discount on Gear Rentals & Tours',
      'Priority Basecamp Reservation Perks',
      'Personalized AI Trip Planning',
    ],
    ctaText: 'Upgrade to Elite',
  },
];

// TEAM MEMBERS
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Alexandre Dubois',
    role: 'Co-Founder & Chief Alpine Officer',
    bio: 'Summit climber with 15+ years experience conquering Alpine peaks across 4 continents.',
    image: '/person-1.png',
  },
  {
    name: 'Sophia Patel',
    role: 'Co-Founder & VP of Geospatial Tech',
    bio: 'Former NASA GIS engineer passionate about bringing LiDAR topography to offline mobile apps.',
    image: '/person-2.png',
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Wilderness Safety & Rescue',
    bio: 'Certified Wilderness First Responder and veteran mountain rescue operator.',
    image: '/person-3.png',
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Eco-Tourism & Sustainability',
    bio: 'Environmental advocate dedicated to leave-no-trace wilderness stewardship.',
    image: '/person-4.png',
  },
];

// FAQS DATASET
export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Maps' | 'Safety' | 'Billing';
}

export const FAQS: FAQItem[] = [
  {
    question: 'How do offline maps work without cellular reception?',
    answer: 'Before heading into the wild, Hilink downloads high-density vector elevation maps and satellite imagery directly to your phone storage. Your device’s internal GPS chip communicates with satellite constellations (GPS, GLONASS, Galileo) independently of cellular networks.',
    category: 'Maps',
  },
  {
    question: 'Can I rent camping gear directly through Hilink?',
    answer: 'Yes! Browse our Smart Gear Rental section, select your campsite arrival date, and choose from curated ultralight kits. Your gear is delivered sanitized and inspected directly to designated trailhead pickup lockers or basecamp posts.',
    category: 'General',
  },
  {
    question: 'How does the 24/7 Satellite SOS feature function?',
    answer: 'When triggered on Pro or Elite plans, the app transmits your emergency beacon via satellite mesh network directly to Hilink Emergency Command, automatically routing your exact coordinates and medical profile to local emergency services.',
    category: 'Safety',
  },
  {
    question: 'Can I cancel or switch my membership plan at any time?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time with one click in your account settings. Unused days are prorated or refunded per policy.',
    category: 'Billing',
  },
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      { name: 'About Hilink', href: '/about' },
      { name: 'Destinations', href: '/destinations' },
      { name: 'Tours & Packages', href: '/tours' },
      { name: 'Services', href: '/services' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Our Community',
    links: [
      { name: 'Climbing Expedition', href: '/tours' },
      { name: 'Hiking Hilink', href: '/destinations' },
      { name: 'Hilink Trail Guides', href: '/services' },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};

// TESTIMONIALS DATASET
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  avatar: string;
  text: string;
  trail: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Vance",
    location: "Colorado, USA",
    rating: 5,
    avatar: "/person-1.png",
    text: "Hilink’s offline 3D LiDAR maps saved our trip during a sudden fog on Mount Rainier. The turn-by-turn audio guided us straight back to our basecamp tent safely!",
    trail: "Glacier Ridge Summit Trek",
  },
  {
    name: "Sophia Chen",
    location: "Vancouver, Canada",
    rating: 5,
    avatar: "/person-2.png",
    text: "Booking a certified guide through Hilink for our Emerald Lake kayak expedition was seamless. The gear rental was delivered right to our launch point!",
    trail: "Emerald Lake Kayak & Camp",
  },
  {
    name: "Elena Rostova",
    location: "Chamonix, France",
    rating: 5,
    avatar: "/person-3.png",
    text: "The satellite emergency SOS telemetry gives my family complete peace of mind whenever I set off on solo multi-day alpine ridge hikes. Highly recommended!",
    trail: "Putuk Truno Alpine Pass",
  },
];

// BLOG & JOURNAL POSTS DATASET
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "offline-map-guide",
    title: "How to Navigate Remote Wilderness Without Cellular Signal",
    category: "Navigation Tips",
    date: "Aug 10, 2026",
    readTime: "5 min read",
    image: "/img-1.png",
    snippet: "Master offline 3D topographic maps, GPS satellite locking, and battery optimization for long wilderness expeditions.",
  },
  {
    id: "leave-no-trace-ethics",
    title: "The 7 Principles of Leave No Trace Camping in 2026",
    category: "Eco-Tourism",
    date: "Aug 05, 2026",
    readTime: "4 min read",
    image: "/img-2.png",
    snippet: "Protect fragile alpine ecosystems, manage campfire safety, and preserve natural wildlife habitats for future generations.",
  },
  {
    id: "ultralight-gear-checklist",
    title: "Essential Ultralight Camping Gear Checklist for Alpine Peaks",
    category: "Gear Reviews",
    date: "Jul 28, 2026",
    readTime: "6 min read",
    image: "/img-3.jpg",
    snippet: "Pack lighter without sacrificing thermal safety. Our expert guide breaks down four-season tents, sleeping systems, and water purifiers.",
  },
];
