const CATAGORIES = [
  { name: "Humans", catslug: "humans" },
  { name: "Animals", catslug: "animals" },
  { name: "Tech Rants", catslug: "tech-rants" },
];

const POSTS = [
  // existing posts...
  {
    title: "Tailwind CSS: More Like a Headwind!",
    slug: "tailwind-headwind",
    content:
      "Tailwind CSS, oh how you've complicated my life! What's with the never-ending class names and the constant flipping between documentation? Utility-first? More like confusion-first!",
    category: "tech-rants",
  },
  {
    title: "SASS or SASSy Mess?",
    slug: "sass-mess",
    content:
      "SASS seemed like a dream with variables and mixins. Now, it's just layers upon layers of nested nightmares. I'm spending more time debugging than coding!",
    category: "tech-rants",
  },
  {
    title: "Responsive Design: A Responsive Headache",
    slug: "responsive-headache",
    content:
      "Responsive design? More like irresponsive! One minute, everything looks great, the next, it's a jumbled mess. And don't get me started on media queries!",
    category: "tech-rants",
  },
  {
    title: "Browser Compatibility: The Eternal Torment",
    slug: "browser-torment",
    content:
      "Browser compatibility is a cruel joke. You align everything perfectly in one browser, and it's a disaster in another. It's like playing whack-a-mole with CSS!",
    category: "tech-rants",
  },
  {
    title: "Where did I bury my stick?",
    slug: "stick-post",
    content:
      "this is a blog post from a dog. How did that happen. Dogs can&apos;t type",
    category: "animals",
  },
];
export function getPosts() {
  return POSTS;
}

export function getPostsBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategories() {
  return CATAGORIES;
}

export function getPostByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
