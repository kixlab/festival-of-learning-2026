export interface VenueInfo {
  when: {
    title: string;
    date: string;
  };
  where: {
    title: string;
    venue: string;
    location: string;
    image: string;
  };
}

export const venueInfo: VenueInfo = {
  when: {
    title: "When",
    date: "June 29 - July 3, 2026"
  },
  where: {
    title: "Where",
    venue: "COEX",
    location: "Seoul, Korea",
    image: "/festival-of-learning-2026/images/venue/coex.jpg"
  }
}; 