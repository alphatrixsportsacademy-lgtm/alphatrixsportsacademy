/** Central site configuration and content. */

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export const CONTACT = {
  address: ["Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025"],
  phone: "+91 75060 53321",
  phoneHref: "tel:+91 75060 53321",
  email: "alphatrixsportsacademy@gmail.com",
  emailHref: "mailto:alphatrixsportsacademy@gmail.com",
  hours: [
    { days: "Monday – Friday", time: "9:00 – 22:00" },
    { days: "Saturday – Sunday", time: "8:00 – 21:00" },
  ],
  social: {
    instagram: "https://www.instagram.com/alphatrix_sports_academy/",
    youtube: "https://www.youtube.com/@ALPHATRIXSPORTSACADEMY",
    linkedin: "https://in.linkedin.com/company/Alphatrix",
  },
} as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export const FOOTER_SERVICES = [
  { label: "For Children", href: "/programs/children" },
  { label: "For Schools", href: "/programs/schools" },
  {
    label: "For Residential Complexes",
    href: "/programs/residential",
  },
  {
    label: "ACA — Alphatrix Coach Academy",
    href: "/programs/coaches",
  },
  { label: "Virtual Training", href: "/programs/virtual" },
  { label: "For Corporates", href: "/programs/corporates" },
] as const;

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  tag: "Parent" | "Educator" | "School Principal";
  video?: string;
  highlights?: string[];
}

export const TESTIMONIALS: Testimonial[] = [
{
  quote:
    "A parent and daughter share their experience with Alphatrix, highlighting their journey, the positive environment, and the memorable moments they have experienced together.",
  name: "Sandeep Deshmukh",
  role: "Parent",
  tag: "Parent",
  video: "/feedback1.mp4",
  highlights: [
    "Engaging sports sessions",
    "Better confidence & discipline",
    "Enjoys every session",
  ],
},
  {
  quote:
    "A parent shares her journey with Alphatrix, speaking about her experience, our supportive team, and the positive difference our programs have made.",
  name: "Urmila Kasbekar",
  role: "Parent",
  tag: "Parent",
  video: "/feedback2.mp4",
  highlights: [
    "Fun and engaging activities",
    "Energetic coaching sessions",
    "Meaningful physical development",
  ],
},
  {
    quote:
      "Alphatrix has shown me that fitness has no age limit. The sessions are fun, energetic, and motivating, and I truly enjoy every moment of staying active and healthy!",
    name: "Bachi kakarya",
    role: "Senior Fitness Trainee",
    tag: "Senior Trainee",
  },
  
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "What curriculum will be used in the school?",
    answer:
      "We will use the Alphatrix curriculum, which aligns with the National Education Policy and recommends four national curriculum frameworks — the National Curriculum Framework for School Education (NCFSE), the National Curriculum Framework for Early Childhood Care and Education (NCFECCE), and the National Curriculum Framework for Teacher Education (NCFTE).",
  },
  {
    question: "Can any board of school apply for the Alphatrix program?",
    answer:
      "Yes. Alphatrix works with schools across boards and will also support and guide you through the affiliation process.",
  },
  {
    question: "Will Alphatrix set up sports infrastructure in the school?",
    answer:
      "Yes. Alphatrix facilitates the setup and infrastructure required for seamless program implementation in your school.",
  },
  {
    question: "What is the cost of the management service?",
    answer:
      "Our pricing model is based on a percentage of the total fees, customised according to the school's student count and fee structure. We invite you to consult with our experts for detailed information and personalised insights.",
  },
  {
    question: "How will Alphatrix engage with schools?",
    answer:
      "We offer tailored programs that align with the school's curricula, educational and nutrition workshops, sports masterclasses, plus coaching and equipment support — trained coaches and resources to organise sports events, competitions and physical education classes.",
  },
  {
    question: "What are the benefits of Alphatrix' end-to-end solutions?",
    answer:
      "For school owners who are looking for complete support in sports administration and day-to-day operations, Managed Services by Alphatrix is an ideal solution — healthier, fitter students with improved school ranking.",
  },
  {
    question: "Will sports kits be provided to the children?",
    answer: "Yes, sports kits are provided to the children as part of the program.",
  },
  {
    question: "What do the end-to-end solutions by Alphatrix include?",
    answer:
      "From lesson plans and the Fitopedia activity bank to report cards, participation in sports tournaments, sports days and events, and coach training programs.",
  },
  {
    question: "When are the classes held?",
    answer: "Classes are held according to the school schedule.",
  },
  {
    question: "What age groups do the programs serve?",
    answer:
      "Alphatrix offers progressive courses for children from 2 to 16+ years — from the Junior Kleinetor Course (2–6 years) and the Rising Kleinetor Sports Program (6–12 years) to the Teen Kleinetor Course and Long-Term Athlete Development programs.",
  },
];
