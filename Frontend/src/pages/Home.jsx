import React from "react";

const HeroSection = () => {
  const features = [
    {
      title: "CPQ",
      desc: "The fastest way to go from quote to signed contract",
    },
    {
     
      title: "Billing",
      desc: "Flexible plans and subscriptions built for scale",
    },
    {
    
      title: "Usage-based",
      desc: "From usage to revenue, fully automated in real-time",
    },
    {
    
      title: "Usage-based",
      desc: "From usage to revenue, fully automated in real-time",
    },
  ];

  return (
<section className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto py-16 font-[Gabarito] gap-8">
  {/* Background Image */}


  {/* Left Content */}
  <div className="flex-1 relative z-10">
    {/* Heading */}
    <div className="mb-12">
      <p className="text-sm text-gray-500 mb-8 mt-[40px]">Your engine for smarter billing and growth</p>
      <h1 className="text-4xl md:text-6xl text-gray-900 mb-6">
        <span className="text-[#666666]">The new standard for</span> <br />
        revenue management
      </h1>
      {/* Buttons */}
      <div className="flex gap-4 mt-[20px]">
        <button className="bg-black text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition">
          Try for free
        </button>
        <button className="bg-white border border-gray-300 text-black px-6 rounded-lg shadow hover:bg-gray-100 transition">
          Book a demo
        </button>
      </div>
    </div>

    {/* Features */}
    <div className="flex flex-col md:flex-row justify-start gap-6 mt-[100px]">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start text-start p-6 border rounded-lg hover:shadow-lg transition"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-500">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>



    <div className="absolute inset-0 -z-10 ml-[700px] mb-[200px]">
    <img
      className="w-[400px] h-full object-cover"
      src="https://cdn.prod.website-files.com/6812d02840d393aa2c663370/6847f9fe57cfb544f7d5818a_hero-home.svg"
      alt="Hero Background"
    />
  </div>
</section>

  );
};

export default HeroSection;
