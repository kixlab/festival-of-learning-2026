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
          name: "Juho Kim",
          role: "General Co-Chair",
          institution: "KAIST",
          description: "Professor Juho Kim is an expert in human-computer interaction and educational technology at KAIST.",
          image: {
            src: "images/team/juho_kim.jpg",
            alt: "Professor Juho Kim",
            width: 400,
            height: 400
          }
        },
        {
          name: "Alice Oh",
          role: "General Co-Chair",
          institution: "KAIST",
          description: "Professor Alice Oh is a leading researcher in educational technology and human-computer interaction at KAIST.",
          image: {
            src: "images/team/alice_oh.jpg",
            alt: "Professor Alice Oh",
            width: 400,
            height: 400
          }
        }
      ]
    }, {
      title: 'Steering Committee',
      members: [
        {
          name: "Rene Kizilcec",
          role: "SC Chair",
          institution: "",
          image: {
            src: "images/team/rene_kizilcec.jpg",
            alt: "Rene Kizilcec",
            width: 400,
            height: 400
          }
        },
        {
          name: "Tiffany Barnes",
          role: "Representative for EDM",
          institution: "",
          image: {
            src: "images/team/tiffany_barnes.jpg",
            alt: "Tiffany Barnes",
            width: 400,
            height: 400
          }
        },
        {
          name: "Xavier Ochoa",
          role: "Representative for L@S",
          institution: "",
          image: {
            src: "images/team/xavier_ochoa.jpg",
            alt: "Xavier Ochoa",
            width: 400,
            height: 400
          }
        },
        {
          name: "Seiji Isotani",
          role: "Representative for AIED",
          institution: "",
          image: {
            src: "images/team/seiji_isotani.png",
            alt: "Seiji Isotani",
            width: 400,
            height: 400
          }
        },
        {
          name: "Dimitra Tsovaltzi",
          role: "Representative for ISLS",
          institution: "",
          image: {
            src: "images/team/dmitra_tsovaltzi.jpg",
            alt: "Dimitra Tsovaltzi",
            width: 400,
            height: 400
          }
        },
        {
          name: "Blazenka Divjak",
          role: "Representative for LAK",
          institution: "",
          image: {
            src: "images/team/blazenka_divjak.jpg",
            alt: "Blazenka Divjak",
            width: 400,
            height: 400
          }
        },
        {
          name: "Yan Timanovsky",
          role: "Representative for ACM",
          institution: "",
          image: {
            src: "images/team/yan_timanovsky.jpg",
            alt: "Yan Timanovsky",
            width: 400,
            height: 400
          }
        },      ]
    },
    {
      title: "Student Assistants",
      members: [
        {
          name: "Eunyoung Ko",
          role: "Student Assistant",
          institution: "KAIST",
          image: {
            src: "images/team/eunyoung_ko.jpg",
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
            src: "images/team/jieun_han.jpg",
            alt: "Jieun Han",
            width: 400,
            height: 400
          }
        }
      ]
    }
  ]
}; 