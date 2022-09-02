export default function handler(req, res) {
  res.status(200).json([
    {
      key: 1,
      src: "/static/pack.jpg",
      title: "Big Cats",
      body: "Get to travel Africa and experience the rich animal heritage",
      alt: "africa",
      href: "/tours",
    },
    {
      id: 2,
      src: "/static/beach.jpg",
      title: "Beaches",
      body: "Explore new cultures and appreciate diversity",
      alt: "people",
      href: "/tours",
    },
    {
      id: 3,
      src: "/static/migration.jpg",
      title: "Wild Beasts",
      body: "We value our customers comfort creating a home away from home",
      alt: "people",
      href: "/tours",
    },
    {
      id: 4,
      src: "/static/mountain.jpg",
      title: "Mountain Climbing",
      body: "We are a value based company and we take pride in our services",
      alt: "people",
      href: "/tours",
    },
  ]);
}
