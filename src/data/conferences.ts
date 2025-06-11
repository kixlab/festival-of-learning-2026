export interface Conference {
  id: string;
  name: string;
  description: string;
  website: string;
  dates: {
    paperSubmission: string;
    notification: string;
    cameraReady: string;
    conference: string;
  };
}

export const conferences: Conference[] = [
  {
    id: 'las',
    name: 'Learning at Scale 2026',
    description: 'A premier conference focusing on the latest developments in educational technology and its applications in teaching and learning.',
    website: '#',
    dates: {
      paperSubmission: 'January 15, 2026',
      notification: 'March 15, 2026',
      cameraReady: 'April 15, 2026',
      conference: 'June 29 - July 3, 2026'
    }
  },
  {
    id: 'aied',
    name: 'International Conference on Artificial Intelligence in Education 2026',
    description: 'A leading conference exploring the intersection of artificial intelligence and education.',
    website: '#',
    dates: {
      paperSubmission: 'January 20, 2026',
      notification: 'March 20, 2026',
      cameraReady: 'April 20, 2026',
      conference: 'June 29 - July 3, 2026'
    }
  },
  {
    id: 'edm',
    name: 'Educational Data Mining 2026',
    description: 'A major conference on data mining and analytics in educational settings.',
    website: '#',
    dates: {
      paperSubmission: 'January 25, 2026',
      notification: 'March 25, 2026',
      cameraReady: 'April 25, 2026',
      conference: 'June 29 - July 3, 2026'
    }
  }
]; 