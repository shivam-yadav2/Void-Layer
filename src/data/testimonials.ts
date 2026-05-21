export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Void Layer rebuilt our analytics platform from scratch in 9 weeks. It's the fastest, calmest engineering team we've ever worked with.",
    name: "Priya Raman",
    role: "VP Engineering",
    company: "Helix Health",
  },
  {
    quote:
      "They ship like a product team, not an agency. The motion design and architecture are both at a level we've never seen from a vendor.",
    name: "Marcus Vale",
    role: "CTO",
    company: "Northwind Labs",
  },
  {
    quote:
      "We hired them to fix one feature. A quarter later they own three of our most critical surfaces and our customers are happier.",
    name: "Anjali Mehta",
    role: "Head of Product",
    company: "Quanta Finance",
  },
  {
    quote:
      "Pricing was fair, scope was honest and the code was the cleanest we've ever shipped to prod. We extended their engagement twice.",
    name: "Dmitri Sokolov",
    role: "Founder",
    company: "Stride OS",
  },
];
