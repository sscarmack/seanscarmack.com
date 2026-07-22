import type { QuoteLine } from "../types";
import { importedJobs } from "./importedJobs";

export const products: string[] = [
  "Wedding Photo",
  "Wedding Video",
  "Engagement",
  "Photo Booth",
  "Services",
  "Real Estate",
  "Senior Photos",
  "Senior Portrait",
  "Family Portrait",
  "Gear",
  "Giveaway",
  "Class Reunion",
];

export const sampleJobs = importedJobs;

export const defaultQuoteLines: QuoteLine[] = [
  { id: "photography", service: "Photography", rate: 325, quantity: 4 },
  { id: "videography", service: "Videography", rate: 275, quantity: 0 },
  { id: "ceremony", service: "Ceremony", rate: 250, quantity: 0 },
  { id: "first-dance", service: "First Dance", rate: 150, quantity: 0 },
  { id: "speeches", service: "Speeches", rate: 100, quantity: 0 },
  { id: "guest-book", service: "Guest Book", rate: 150, quantity: 0 },
  { id: "drone", service: "Drone Footage", rate: 150, quantity: 0 },
  { id: "engagement", service: "Engagement", rate: 150, quantity: 0 },
  { id: "second-shooter", service: "Second Shooter", rate: 60, quantity: 0 },
  { id: "delivery-time", service: "Delivery Time", rate: 250, quantity: 0 },
  { id: "backup", service: "Backup", rate: 500, quantity: 0 },
];

export const venues = [
  { name: "Amazing Grace Barn", miles: 6.2 },
  { name: "Avalon Lakes", miles: 15.1 },
  { name: "Big Oak Meadows", miles: 9.1 },
  { name: "Buhl Mansion", miles: 3.3 },
  { name: "Buhl Park Casino", miles: 3.8 },
  { name: "Buhl Park Rose Garden", miles: 4.3 },
  { name: "Erie", miles: 76.1 },
  { name: "Hells Hollow", miles: 33.6 },
  { name: "Iron Mill Farmstead", miles: 12.9 },
  { name: "Kidds Mill Covered Bridge", miles: 12.4 },
  { name: "Knock'n Boots", miles: 8.6 },
  { name: "Lanterman's Mill", miles: 22.4 },
];
