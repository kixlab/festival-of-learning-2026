export interface VenueInfo {
  when: {
    title: string;
    date: string;
  };
  where: {
    title: string;
    venue: string;
    location: string;
  };
}

export const venueInfo: VenueInfo = {
  when: {
    title: "When",
    date: "June 29 - July 3, 2026"
  },
  where: {
    title: "Where",
    venue:"COEX",
    location: "Seoul, Korea"
  }
}; 