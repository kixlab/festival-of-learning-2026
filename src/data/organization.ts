export interface GeneralChair {
  name: string;
  role: string;
  institution: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const generalChairs: GeneralChair[] = [
  {
    name: "Alice Oh",
    role: "General Co-Chair",
    institution: "KAIST",
    description: "General Chair of the Festival of Learning 2026",
    image: {
      src: "/images/team/alice_oh.jpg",
      alt: "Professor Alice Oh",
      width: 400,
      height: 400
    }
  },
  {
    name: "Juho Kim",
    role: "General Co-Chair",
    institution: "KAIST",
    description: "General Chair of the Festival of Learning 2026",
    image: {
      src: "/images/team/juho_kim.jpg",
      alt: "Professor Juho Kim",
      width: 400,
      height: 400
    }
  }
];

export const organizationInfo = {
  title: "Organization",
  description: "",
  sections: [
    {
      title: "General Chairs",
      members: [
        {
          name: "Prof. Juho Kim",
          role: "General Co-Chair",
          institution: "KAIST",
          description: "Professor Juho Kim is an expert in human-computer interaction and educational technology at KAIST.",
          image: {
            src: "/festival-of-learning-2026/images/team/juho_kim.jpg",
            alt: "Professor Juho Kim",
            width: 400,
            height: 400
          }
        },
        {
          name: "Prof. Alice Oh",
          role: "General Co-Chair",
          institution: "KAIST",
          description: "Professor Alice Oh is a leading researcher in educational technology and human-computer interaction at KAIST.",
          image: {
            src: "/festival-of-learning-2026/images/team/alice_oh.jpg",
            alt: "Professor Alice Oh",
            width: 400,
            height: 400
          }
        }
      ]
    },
    {
      title: "Student Assistants",
      members: [
        {
          name: "Eunyoung Ko",
          role: "Student Assistant",
          institution: "KAIST",
          image: {
            src: "/festival-of-learning-2026/images/team/eunyoung_ko.jpg",
            alt: "Eunyoung Ko",
            width: 400,
            height: 400
          }
        },
        {
          name: "Jieun Han",
          role: "Student Assistant",
          institution: "KAIST",
          image: {
            src: "/festival-of-learning-2026/images/team/jieun_han.jpg",
            alt: "Jieun Han",
            width: 400,
            height: 400
          }
        }
      ]
    }
  ]
}; 