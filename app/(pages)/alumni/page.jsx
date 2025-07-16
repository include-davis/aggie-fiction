import AlumniPageContent from "../_components/AlumniPageContent/AlumniPageContent.jsx"

const alumniList = [
  {
    first_name:"Jack",
    last_name:"Hyslop",
    role1:"Founder, 2020–2022",
    role2:"",
    role3:"",
    description:(
    <>
      Jack started the club with his friends Maeve and Isabella in Winter Quarter 2020.
      He remained as primary leader until his graduation in Spring Quarter 2022.
      <br />
      <br />
      Since graduating, he has stayed creatively engaged.
      Recently, he has become a drummer in a band with his friends.
      He has taken sewing classes at a local city college and joined Radical Sewing Club (@radicalsewingclub) as a volunteer assisting folks
      with using a sewing machine to mend and alter their clothes.
      He rescued a kitten named Boots about two years ago.
      </>
    ),
    imageUrl:"/AlumniPage/jack.png",
    instaHandle:"@radicalsewingclub",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },
   {
    first_name:"Leila",
    last_name:"Sanchez",
    role1:"President, 2020–2023",
    description:(
    <>
      After graduation in 2023, Leila Sanchez now works at the Social Security Administration 
      while working on her writing career in Urban Fantasy and Horror. 
      She self published the short story, The Challenge at the Carmichael Mansion in late 2023, 
      and is currently on other writing projects, while breaking down tropes and providing her own 
      analysis on shows and movies on her TikTok and Instagram, @Leilasstorycorner.
      </>
    ),
    imageUrl:"/AlumniPage/Leila.jpg",
    instaHandle:"@Leilasstorycorner",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },
   {
    first_name:"Annie",
    last_name:"Tran",
    role1:"Vice President, 2022–2023",
    role2:"President, 2023-2024",
    role3:"",
    description:(
    <>
    Annie Tran joined the club in fall of 2020—during lockdown—serving as president in her final year at davis. 
    Now having returned home, she is working in quality assurance and, in her leisure time, writing a fantasy novel.
      </>
    ),
    imageUrl:"/AlumniPage/Annie.jpg",
    instaHandle:"@instagram",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },
   {
    first_name:"Jakob",
    last_name:"Stanton",
    role1:"Vice President, 2023–2024",
    description:(
    <>
      Jakob Stanton was the secondary leader of Aggie Fiction from 2023-2024. 
      He graduated 2024 with a bachelor&apos;s degree in History and a minor in sociology. 
      He researched and wrote an honors thesis about aeronautical culture in Germany from 1872-1929 titled We Dead Fliers. 
      He is currently pursuing a masters in Screenwriting at Chapman University in Orange CA where he is trying to solve the 
      puzzle that is screenwriting with two sweet black cats named Bucket and Boba.
      </>
    ),
    imageUrl:"/AlumniPage/Jakob.png",
    instaHandle:"@instagram",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },
   {
    first_name:"Erika",
    last_name:"DiMaano",
    role1:"Publicity Chair, 2022–2024",
    role2:"",
    role3:"",
    description:(
    <>
      Erika DiMaano is an interaction designer who&apos;s been working on various interactive digital projects and design work. 
      She&apos;s recently been branching out to web development and learning new skills to bring her work further.
      </>
    ),
    imageUrl:"/AlumniPage/Erika.png",
    instaHandle:"@instagram",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },

]

async function getCards() {
  console.log("start get cards");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/alumni-cards?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    console.log('data', data);
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    const parsedData = data.body.map((card) => {
      const splitName = card.name.split(" ");
      return {
        imageUrl: card.image[0].src,
        imageAlt: card.image_alt_text,
        first_name: splitName[0],
        last_name: splitName[1],
        role1: card.position_1,
        role2: card.position_2 ? card.position_2 : null,
        role3: card.position_3 ? card.position_3 : null,
        description: card.description,
        instaHandle: card.instagram_username,
        instaLink: `https://www.instagram.com/${card.instagram_username}`,
        linkedinHandle: card.linkedin_username,
        linkedinLink: card.linkedin_url,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch alumni-cards: ${e.message}`);
    return alumniList;
  }
}

export default async function Alumni() {
  const cards = await getCards();

  return <AlumniPageContent cards={cards}/>
}