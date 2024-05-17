import React from 'react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      category: "Web Development",
      title: "Jim Morisson Says when the musics over turn off the light",
      date: "23 Dec",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      category: "Branding",
      title: "How to be appreciated for your hard work as a developer",
      date: "23 Dec",
      image: "/blog3.jpg",
    },
    {
      id: 3,
      category: "Social Media",
      title: "How designers and developers can collaborate better",
      date: "23 Dec",
      image: "/blog1.jpg", 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h4 className="text-orange-600 font-medium text-2xl pb-3">From My Blog</h4>
        <h1 className="text-5xl font-semibold pb-8 leading-snug">
          Our Recent Updates, Blog, Tips, <br /> Tricks & More
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-orange-600 font-medium text-sm">{post.category}</span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">{post.date}</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold">{post.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
