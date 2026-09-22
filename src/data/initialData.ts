import { ServiceItem, ProductItem, ProjectItem, CompanySettings, QuoteRequest } from '../types';

export const INITIAL_COMPANY_SETTINGS: CompanySettings = {
  companyName: 'PRESIDENTCORE PROJECTS (PTY) LTD',
  tagline: 'Your IT Partner',
  brandMessage: 'Solutions. Reliability. Excellence.',
  registrationNumber: 'Reg. (Pty) Ltd - South Africa',
  phone: '+27 (0) 11 832 9400',
  whatsapp: '+27 (0) 72 458 9120',
  email: 'info@presidentcore.co.za',
  quoteEmail: 'quotes@presidentcore.co.za',
  headquarters: 'Sandton Corporate Hub, Gauteng, South Africa',
  serviceCoverage: 'Nationwide coverage across all 9 provinces (Gauteng, Western Cape, KwaZulu-Natal, Mpumalanga, Limpopo, Free State, North West, Eastern Cape, Northern Cape)',
  businessHours: 'Monday – Friday: 08:00 – 17:00 (SAST)',
  emergencySupport: '24/7 Priority SLA & Emergency Breakdown Support Available'
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'industrial-solutions',
    title: 'INDUSTRIAL SOLUTIONS',
    shortTitle: 'Industrial',
    category: 'Industrial Solutions',
    iconName: 'Factory',
    description: 'Industrial support and solutions designed around operational requirements.',
    fullDescription: 'PresidentCore Projects delivers comprehensive industrial support engineered for harsh, high-output industrial environments. We specialize in plant operational support, industrial pneumatic & hydraulic servicing, electrical control panel installation, and plant automation components that minimize downtime and optimize output.',
    capabilities: [
      'Industrial plant support & operational optimization',
      'Pneumatic, hydraulic & mechanical components',
      'Industrial electrical reticulation & motor control panels',
      'Machinery spares, tooling & consumable procurement',
      'Plant safety containment & compliance audits'
    ],
    industries: ['Manufacturing', 'Food & Beverage Processing', 'Chemical & Petrochemical', 'Warehousing & Bulk Logistics'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'maintenance-services',
    title: 'MAINTENANCE SERVICES',
    shortTitle: 'Maintenance',
    category: 'Maintenance Services',
    iconName: 'Wrench',
    description: 'Reliable maintenance support helping businesses keep critical operations running.',
    fullDescription: 'Unscheduled downtime is costly. Our multidisciplinary maintenance teams provide structured preventative maintenance schedules, rapid emergency repairs, and full facility upkeep. From electro-mechanical plant servicing to facility HVAC and power backups, we keep your infrastructure working at peak efficiency.',
    capabilities: [
      'Scheduled preventative maintenance programs (SLA-backed)',
      'Rapid emergency breakdown response teams',
      'Electric motor rewinding & mechanical pump overhauls',
      'Commercial HVAC & environmental cooling systems',
      'UPS, generators & emergency power maintenance'
    ],
    industries: ['Commercial Properties', 'Industrial Facilities', 'Hospitals & Healthcare', 'Corporate Head Offices'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'construction-services',
    title: 'CONSTRUCTION SERVICES',
    shortTitle: 'Construction',
    category: 'Construction Services',
    iconName: 'Building2',
    description: 'Construction-related solutions and project support for commercial and industrial environments.',
    fullDescription: 'Providing end-to-end site preparation, structural engineering assistance, building refurbishment, and specialized industrial flooring. Our construction project managers coordinate with site supervisors to ensure strict safety compliance, budget adherence, and timely handover.',
    capabilities: [
      'Commercial & industrial facility refurbishment',
      'Structural steel erection & civil engineering works',
      'Heavy-duty industrial floor coatings & epoxy screeds',
      'Site earthmoving, grading & foundation assistance',
      'Safety scaffolding & access system provisioning'
    ],
    industries: ['Commercial Developments', 'Civil Infrastructure', 'Mining Camps', 'Retail Distribution Centers'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'it-solutions',
    title: 'IT SOLUTIONS',
    shortTitle: 'IT & Tech',
    category: 'IT Solutions',
    iconName: 'Monitor',
    description: 'Technology infrastructure, networking, security and IT equipment solutions.',
    fullDescription: 'As "Your IT Partner", PresidentCore Projects designs, procures, deploys, and maintains enterprise-grade IT infrastructure. From structured fiber cabling and server racks to workstations, printers, firewall appliances, and enterprise cloud connectivity, we empower business productivity.',
    capabilities: [
      'Enterprise structured cabling (Cat6/Cat6A & Multi-mode Fiber)',
      'Server room buildouts, rackmount servers & SAN storage',
      'Business PC, laptop & workstation fleet provisioning',
      'Managed network switches, enterprise Wi-Fi 6 & firewalls',
      'Managed IT support, data backup & disaster recovery'
    ],
    industries: ['Corporate Offices', 'Financial Institutions', 'Schools & Universities', 'Industrial Control Centers'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'heavy-machinery-support',
    title: 'HEAVY MACHINERY SUPPORT',
    shortTitle: 'Heavy Machinery',
    category: 'Heavy Machinery Support',
    iconName: 'Truck',
    description: 'Equipment and support solutions for demanding industrial and construction environments.',
    fullDescription: 'Equipped to assist earthmoving, civil construction, and mining operations with machinery sourcing, on-site mechanical troubleshooting, hydraulic cylinder rebuilds, and genuine wear-part supply. We source certified machinery and provide preventative inspections.',
    capabilities: [
      'Excavator, TLB, grader & loader operational support',
      'Hydraulic hose fabrication & cylinder repair',
      'Diesel engine diagnostics & driveline maintenance',
      'Undercarriage inspection, track repair & bucket teeth supply',
      'Plant machinery leasing & logistics across South Africa'
    ],
    industries: ['Mining & Quarrying', 'Civil Engineering', 'Agricultural Operations', 'Bulk Earthworks'],
    image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'supply-chain-solutions',
    title: 'SUPPLY CHAIN SOLUTIONS',
    shortTitle: 'Supply Chain',
    category: 'Supply Chain Solutions',
    iconName: 'Boxes',
    description: 'Equipment sourcing and supply solutions designed to simplify procurement.',
    fullDescription: 'Streamline your corporate and industrial purchasing through a single accredited vendor. PresidentCore Projects leverages established international and local manufacturer agreements to supply technical hardware, industrial tools, office electronics, and safety PPE on time and within budget.',
    capabilities: [
      'Consolidated single-vendor vendor procurement contracts',
      'Bulk hardware & electronic equipment sourcing',
      'Industrial tools, fasteners & technical consumables',
      'SABS-compliant PPE & occupational safety gear',
      'Reliable logistics & direct-to-site freight forwarding'
    ],
    industries: ['Procurement Managers', 'Contractors', 'Municipalities', 'Export & Commercial Enterprises'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  }
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  // COMPUTERS
  {
    id: 'prod-pc-01',
    name: 'PresidentCore High-Performance Business Tower',
    category: 'Computers',
    subcategory: 'Desktop Computers',
    industry: 'Corporate & Engineering',
    description: 'Commercial micro-tower desktop engineered for intensive business applications, multi-display setups, and continuous daily operations.',
    specs: ['Intel Core i7 14th Gen', '32GB DDR5 RAM', '1TB NVMe PCIe 4.0 SSD', 'Intel UHD / NVIDIA T1000 Option', 'Windows 11 Pro 64-bit'],
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true
  },
  {
    id: 'prod-pc-02',
    name: 'Enterprise All-in-One Executive Workstation 27"',
    category: 'Computers',
    subcategory: 'All-in-One Desktops',
    industry: 'Executive & Front Office',
    description: 'Sleek, cable-free 27-inch QHD IPS all-in-one desktop featuring pop-up privacy webcam and integrated audio for executive environments.',
    specs: ['27" QHD IPS Anti-Glare', 'Intel Core i5 / i7', '16GB DDR5 RAM', '512GB NVMe SSD', 'Dual Mic Array & IR Camera'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  },
  // LAPTOPS
  {
    id: 'prod-laptop-01',
    name: 'Ruggedized Industrial Field Laptop 15.6"',
    category: 'Laptops',
    subcategory: 'Rugged Field Laptops',
    industry: 'Mining, Industrial & Construction',
    description: 'MIL-STD-810H and IP65 dust/water-resistant laptop built for field engineers, mining sites, and demanding mobile operations.',
    specs: ['IP65 Water/Dust Certified', 'Drop & Shock Proof Chassis', '1000 nits Sunlight-Readable Screen', 'Hot-Swappable Dual Battery', 'Serial RS232 + Dual LAN'],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true
  },
  {
    id: 'prod-laptop-02',
    name: 'Enterprise Ultra-Book Pro 14"',
    category: 'Laptops',
    subcategory: 'Business Laptops',
    industry: 'Corporate & Mobile Workforce',
    description: 'Lightweight magnesium alloy chassis with all-day battery life, enterprise hardware security TPM 2.0, and fast charging.',
    specs: ['Intel Core Ultra 7', '16GB LPDDR5X', '1TB SSD', '14" 2.8K OLED Display', 'Thunderbolt 4 & Wi-Fi 7 Ready'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  },
  // PRINTERS
  {
    id: 'prod-print-01',
    name: 'Heavy-Duty Workgroup Multifunction Laser Copier',
    category: 'Printers',
    subcategory: 'A3/A4 Multi-function',
    industry: 'Office & Document Centers',
    description: 'High-speed departmental multifunction printer offering secure pull-printing, double-sided scanning, and high-yield toner economy.',
    specs: ['45 pages per minute (A4)', 'A3 & A4 Tray Capacities up to 3,200 sheets', 'Single-Pass Duplex Scanner', 'PIN Code & Card Reader Security', 'Low Cost-Per-Page Consumables'],
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true
  },
  {
    id: 'prod-print-02',
    name: 'Industrial Thermal Barcode & Dispatch Label Printer',
    category: 'Printers',
    subcategory: 'Industrial Label Printers',
    industry: 'Warehousing & Logistics',
    description: 'Cast-aluminum frame thermal transfer barcode printer built for 24/7 continuous warehouse shipping label generation.',
    specs: ['Direct Thermal & Thermal Transfer', '300 DPI Resolution', '14 ips Print Speed', 'Gigabit Ethernet & USB Host', 'Heavy Duty Steel Enclosure'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  },
  // NETWORKING
  {
    id: 'prod-net-01',
    name: '48-Port Layer-3 Managed Gigabit PoE+ Switch',
    category: 'Networking',
    subcategory: 'Enterprise Switches',
    industry: 'Data Centers & IT Infrastructure',
    description: 'Enterprise rackmount switch with 740W PoE budget, 4x 10G SFP+ uplink ports, advanced QoS, and Layer 3 routing for IP phones and APs.',
    specs: ['48x 10/100/1000Base-T PoE+ Ports', '4x 10G SFP+ Uplink Slots', '740W Total PoE Power Budget', 'Layer 3 Routing (Static/OSPF)', 'Redundant Power Supply Option'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true
  },
  {
    id: 'prod-net-02',
    name: 'Wi-Fi 6 Enterprise Dual-Band Ceiling Access Point',
    category: 'Networking',
    subcategory: 'Wireless APs',
    industry: 'Campuses, Warehouses & Commercial Buildings',
    description: 'High-density Wi-Fi 6 access point supporting over 500 concurrent client devices with OFDMA, MU-MIMO, and centralized cloud controller management.',
    specs: ['Up to 5.4 Gbps Aggregate Throughput', 'PoE+ 802.3at Powered', 'Seamless Fast Roaming (802.11r/k/v)', 'WPA3 Enterprise Encryption', 'Weatherproof Indoor/Covered Outdoor Option'],
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  },
  // CCTV & SECURITY
  {
    id: 'prod-cctv-01',
    name: '4K Ultra HD AI Smart Perimeter Bullet Camera',
    category: 'CCTV',
    subcategory: 'Smart CCTV Cameras',
    industry: 'Commercial & Industrial Security',
    description: 'Infrared night vision up to 80m with on-board AI human and vehicle perimeter detection, reducing false alarms across large property bounds.',
    specs: ['4K (3840 x 2160) Resolution', 'Smart Deep-Learning Analytics', 'IP67 & IK10 Vandal-Proof Rating', 'Motorized 2.8-12mm Varifocal Lens', 'Built-in Mic & Two-Way Audio'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true
  },
  {
    id: 'prod-cctv-02',
    name: '32-Channel 4K AI Network Video Recorder (NVR)',
    category: 'CCTV',
    subcategory: 'Video Recorders',
    industry: 'Mining, Logistics & Corporate Campuses',
    description: 'Carrier-grade surveillance recording appliance with dual 4K HDMI outputs, RAID 0/1/5/10 disk redundancy, and live mobile remote viewing.',
    specs: ['Supports up to 32 IP Cameras', '8x SATA HDDs up to 16TB Each', 'RAID 0, 1, 5, 6, 10 Supported', 'Smart Face & License Plate Recognition', 'Dual Gigabit Network Cards'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  },
  // STORAGE & SERVERS
  {
    id: 'prod-server-01',
    name: 'Enterprise 2U Dual-Socket Rackmount Server',
    category: 'Servers',
    subcategory: 'Enterprise Servers',
    industry: 'Data Centers & Private Clouds',
    description: 'Mission-critical enterprise server designed for hyper-converged virtualization, ERP systems, and high-throughput database workloads.',
    specs: ['Dual Intel Xeon Silver / Gold Scalable', 'Up to 512GB ECC DDR5 RAM', '12x 3.5" Hot-Swap SAS/SATA Bays', 'Hardware RAID Controller with Cache', 'Dual 1100W Titanium Redundant PSUs'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true
  },
  {
    id: 'prod-storage-01',
    name: 'Rackmount High-Density 8-Bay NAS Storage Array',
    category: 'Storage',
    subcategory: 'Network Storage',
    industry: 'Financial, IT & Architectural Firms',
    description: 'Centralized network storage solution with snapshot backup protection, 10GbE connectivity, and hardware encryption.',
    specs: ['8x Hot-Swappable 3.5"/2.5" Drive Bays', 'Dual 10GbE SFP+ & Dual 2.5GbE RJ45', 'Btrfs File System with Instant Snapshots', 'AES-NI 256-bit Volume Encryption', 'Active Cloud & Offsite Sync'],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  },
  // IT ACCESSORIES
  {
    id: 'prod-acc-01',
    name: '42U Industrial Perforated Server Cabinet Enclosure',
    category: 'IT Accessories',
    subcategory: 'Racks & Cabinets',
    industry: 'Server Rooms & IT Hubs',
    description: 'Heavy gauge cold-rolled steel server cabinet with 80% perforated ventilation doors, integrated cable management channels, and digital lock.',
    specs: ['Standard 19" 42U Height (2000mm x 800mm x 1000mm)', '1500kg Static Loading Capacity', 'High Flow Perforated Front/Rear Mesh', 'Includes Heavy-Duty PDU & Fan Units', 'Leveling Feet and Heavy-Duty Castors'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  },
  {
    id: 'prod-acc-02',
    name: 'Online Double-Conversion 3000VA / 3kVA Rackmount UPS',
    category: 'IT Accessories',
    subcategory: 'Power Protection',
    industry: 'Critical Infrastructure & Medical',
    description: 'Zero transfer time pure sine wave UPS designed to shield servers, telecom switches, and medical sensors from South African power surges and load shedding.',
    specs: ['3000VA / 2700W Output Capacity', 'Zero Transfer Time (Online Double-Conversion)', 'Automatic Voltage Regulation (AVR)', 'Emergency Power Off (EPO) Port', 'SNMP Management Card Compatible'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true
  },
  // OFFICE & SECURITY EQUIPMENT
  {
    id: 'prod-sec-01',
    name: 'Biometric Facial Recognition & Card Access Terminal',
    category: 'Security Equipment',
    subcategory: 'Access Control',
    industry: 'Commercial Buildings & Factory Turnstiles',
    description: 'Touchless AI facial recognition scanner with anti-spoofing dual cameras, RFID card reader, and integration into payroll time & attendance.',
    specs: ['Under 0.2s Recognition Speed', '50,000 Face & 100,000 Card Capacity', 'TCP/IP, Wiegand & RS485 Interface', 'Tamper-Proof Alarm Sensor', 'Full Time & Attendance Software Included'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    featured: true,
    inStock: true
  },
  {
    id: 'prod-off-01',
    name: 'Interactive 75" 4K UHD Smart Collaboration Display',
    category: 'Office Equipment',
    subcategory: 'Boardroom Displays',
    industry: 'Executive Boardrooms & Training Centers',
    description: 'All-in-one interactive touch whiteboard with 40-point multi-touch, built-in 4K AI tracking camera, 8-element microphone array, and wireless screen sharing.',
    specs: ['75" 4K UHD Anti-Glare Optical Bonding', '40-Point Touch Precision Stylus', 'Built-in 48MP Smart Framing Camera', 'Dual OS (Android 13 + Windows Slot-in PC)', 'Wireless Cast from Any Laptop or Phone'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    featured: false,
    inStock: true
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Gauteng Regional Logistics Hub IT & Security Overhaul',
    category: 'IT Infrastructure & Security',
    summary: 'Turnkey deployment of structured multi-tier networking, 128-camera 4K AI surveillance, and automated biometric turnstiles.',
    fullDescription: 'PresidentCore Projects was commissioned by a leading South African distribution group to design and execute a comprehensive infrastructure rollout across their 45,000 m² distribution hub in Johannesburg. The project required seamless installation while the 24/7 logistics hub remained fully operational.',
    location: 'Germiston, Gauteng, South Africa',
    clientSector: 'Logistics & Supply Chain',
    year: '2025',
    deliverables: [
      'Over 18 kilometers of Cat6A cabling and 10G fiber backbone',
      '128x 4K AI Bullet and PTZ surveillance cameras with perimeter analytics',
      'Four 42U server cabinets equipped with dual redundant UPS backup systems',
      'Biometric fingerprint and facial recognition access control across 16 site gates',
      'Zero downtime during migration handover'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'proj-02',
    title: 'Mpumalanga Coal Processing Facility Electrical & Plant Maintenance',
    category: 'Industrial & Maintenance',
    summary: 'Scheduled mechanical overhaul, motor control center refurbishment, and hydraulic pump servicing.',
    fullDescription: 'Our industrial division was contracted to conduct emergency and scheduled maintenance on heavy washing and conveyor feed systems. Our team executed complete motor rewinds, conveyor bearing replacements, and pneumatic valve calibrations within a compressed scheduled plant shutdown window.',
    location: 'eMalahleni (Witbank), Mpumalanga',
    clientSector: 'Mining & Heavy Industry',
    year: '2025',
    deliverables: [
      'Overhaul of 14 high-voltage slurry pumps and electric drive motors',
      'Refurbishment of plant Motor Control Centers (MCCs) with modern circuit protection',
      'Installation of automated conveyor belt alignment sensors',
      'Comprehensive safety sign-off conforming to MHSA regulations'
    ],
    image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'proj-03',
    title: 'Cape Town Commercial Business Campus Data Center & Wi-Fi 6',
    category: 'IT Infrastructure',
    summary: 'Enterprise network modernization across 4 office buildings including high-density Wi-Fi 6 and server virtualization.',
    fullDescription: 'Modernization of legacy network equipment across a multi-tenant commercial park. Delivered high-availability Cisco/HPE switching infrastructure, dual-carrier failover internet gateways, and campus-wide seamless roaming Wi-Fi 6 supporting 2,000+ daily employees.',
    location: 'Century City, Western Cape',
    clientSector: 'Commercial Real Estate & Tech Services',
    year: '2024',
    deliverables: [
      'Campus-wide deployment of 84 Wi-Fi 6 enterprise access points',
      'Dual 10G redundant fiber ring connecting four campus blocks',
      'Migration of 18 physical workloads into a 3-node enterprise virtualization cluster',
      'Ongoing 24/7 SLA remote monitoring and managed IT support'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'proj-04',
    title: 'Durban Harbour Industrial Park Civil Works & Equipment Supply',
    category: 'Construction & Equipment Supply',
    summary: 'Concrete yard remediation, heavy machinery logistics, and high-mast solar floodlight installation.',
    fullDescription: 'Providing heavy earthmoving plant machinery, grading support, and heavy-duty 40MPa reinforced concrete pavement installation for heavy container transport corridors adjacent to the Port of Durban.',
    location: 'Bayhead, Durban, KwaZulu-Natal',
    clientSector: 'Maritime & Port Services',
    year: '2024',
    deliverables: [
      '12,000 m² heavy-duty reinforced concrete pavement construction',
      'Sourcing and on-site mechanical servicing of front-end loaders and 30-ton excavators',
      'Installation of 8x 30m high-mast security lighting towers with hybrid battery backup',
      'Completed two weeks ahead of schedule'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
  }
];

export const INITIAL_QUOTES: QuoteRequest[] = [
  {
    id: 'quote-001',
    referenceNumber: 'PC-2026-8941',
    fullName: 'Johannes van der Merwe',
    companyName: 'Apex Industrial Logistics Ltd',
    email: 'johannes@apexlogistics.co.za',
    phone: '+27 82 555 1290',
    serviceCategory: 'IT Solutions',
    productName: '48-Port Managed PoE Switch & Cat6A Rollout',
    quantity: '8 Units + 400 Drops',
    projectDetails: 'Need complete warehouse IT cabling upgrade and new PoE switches for our newly expanded facility in Midrand.',
    preferredContact: 'Email',
    createdAt: '2026-09-18T10:30:00Z',
    status: 'in_review',
    notes: 'Site inspection scheduled for Thursday morning.'
  },
  {
    id: 'quote-002',
    referenceNumber: 'PC-2026-8942',
    fullName: 'Thabo Mokoena',
    companyName: 'Vanguard Civil Contractors',
    email: 'thabo@vanguardcivil.co.za',
    phone: '+27 71 884 9012',
    serviceCategory: 'Heavy Machinery Support',
    productName: 'Excavator & TLB Maintenance Package',
    quantity: 'Fleet of 6 Machines',
    projectDetails: 'Require on-site diagnostic servicing, hydraulic hose replacements and routine 1000-hour service for 4 excavators and 2 TLBs in Rustenburg.',
    preferredContact: 'WhatsApp',
    createdAt: '2026-09-19T14:15:00Z',
    status: 'quoted',
    notes: 'Quote #QT-4091 sent via WhatsApp and Email. Awaiting sign-off.'
  },
  {
    id: 'quote-003',
    referenceNumber: 'PC-2026-8943',
    fullName: 'Sarah Jenkins',
    companyName: 'KZN Cold Storage Facilities',
    email: 's.jenkins@kzncold.co.za',
    phone: '+27 83 290 7731',
    serviceCategory: 'CCTV & Security',
    productName: '4K AI Thermal & Bullet Perimeter Camera Kit',
    quantity: '24 Cameras + 32-Ch NVR',
    projectDetails: 'Upgrading cold storage perimeter security to prevent stock tampering and monitoring temperature gauges remotely.',
    preferredContact: 'Phone',
    createdAt: '2026-09-21T08:45:00Z',
    status: 'new',
    notes: 'Urgent turnaround requested.'
  }
];
