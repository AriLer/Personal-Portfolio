export const navItems = ['About', 'Projects', 'Testimonials', 'Contact']

export const aboutData = [
  {
    title: 'Education',
    subtitle: 'The Hebrew Reali School of Haifa',
    listTitle: '12 years + full Bagrut',
    list: [
      'software Engineering - 10 units',
      'Physics - 5 units',
      'Mathematics - 5 units',
      'Accelerated English - 5 units',
    ],
  },
  {
    title: 'Hobbies',
    subtitle: 'What I do in my spare time',
    list: ['Playing Guitar', 'Hiking', 'Reading', ''],
  },
  {
    title: 'Languages',
    subtitle: 'Level of speaking',
    // listTitle: '12 years + full Bagrut',
    list: ['Hebrew - fluently', 'English - fluently', 'Russian - fluently'],
  },
]

export const skillData = [
  { name: 'Javascript', url: 'js.png' },
  { name: 'React.js', url: 'react.png' },
  { name: 'Python', url: 'python.png' },
  { name: 'TensorFlow', url: 'tensorflow.png' },
  { name: 'Git', url: 'git.png' },
  { name: 'java', url: 'java.png' },
  { name: 'Node.js', url: 'nodejs.png' },
  { name: 'MongoDB', url: 'mongodb.png' },
]

export const projectsData = [
  {
    name: 'Netflix Collage',
    desc: 'A React Chrome extension that alows you to see your viewing history in a much more asteticly pleasing way using the Netflix API.',
    images: ['Netflix-collage/demo.png', 'Netflix-collage/stats.png'],
    tech: ['js', 'react', 'chrome'],
    links: [
      { text: 'GitHub', url: 'https://github.com/AriLer/Netflix-Collage' },
      {
        text: 'Chrome Web Store',
        url: 'https://chrome.google.com/webstore/detail/netflix-collage/dfghceinikklbaeooeghakngdepmhoeg',
      },
    ],
  },
  {
    name: 'Chess AI',
    desc: 'A chess engine in python using minimax. developed during the 12th class',
    images: ['Chess-ai/move.png', 'Chess-ai/home-screen.png'],
    tech: ['python', 'kivy'],
    links: [
      { text: 'GitHub', url: 'https://github.com/AriLer/chess-ai-project' },
    ],
  },
  {
    name: 'Pac-man',
    desc: 'A re-creation of the classic Pac-man in python. developed during the 11th class',
    images: ['Pac-man/pac-man.png'],
    tech: ['python', 'pygame'],
    links: [{ text: 'GitHub', url: 'https://github.com/AriLer/Pac-man' }],
  },
]

export const testimonialsData = [
  {
    author: {
      name: 'Mendy Rabinovich',
      title: 'Reali School director, Haifa Mayoral candidate',
    },
    content:
      'ארי הוא בוגר מצטיין של בית הספר ובמשך כל שנותיו הצטיין בלימודיו. לאורך שנותיו בבית הספר היה לתלמיד שאפתן במידה, מעורב בחיי בית הספר והתנהלותו הייתה למופת',
    imgSrc: 'mendy.jpeg',
  },
  {
    author: {
      name: 'Dave Green',
      title: 'CEO of Conceptis Puzzles',
    },
    content:
      'ארי הוא בחור נבון, מקורי, חד מחשבה ומכוון מטרה … המלצותיו היו ענייניות , התנהלותו נעימה, וידע שהיה חסר לו, ידע להשלים במהירות בכוחות עצמו',
    imgSrc: 'dave.jpeg',
  },
  {
    author: {
      name: 'Eliran Daniel',
      title: 'Physics teacher at Reali School',
    },
    content:
      'ניכר שרצונו ללמידה נובע מאופיו הסקרני ותאב הידע. ארי הינו תלמיד מצטיין בעל יכולות גבוהות במיוחד- הוא רציני, אחראי ומראה מסירות יוצאת דופן בכל תחום בו היא עוסק',
    imgSrc: 'eliran.jpeg',
  },
]
