import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Thompson",
    image: "/john.jpg",
    rating: 5,
    comment: "This tool helped me refine my resume in minutes! I landed my dream job!"
  },
  {
    name: "James Carter",
    image: "/david.jpg",
    rating: 4,
    comment: "Great AI insights! My resume has never looked better."
  },
  {
    name: "Emily Wong",
    image: "/sarah.png",
    rating: 5,
    comment: "The keyword optimization feature really made a difference!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-900">What Our Users Say</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-sm p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4">
              <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                width={50} 
                height={50} 
                className="rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
            </div>
            <div className="mt-2 text-yellow-500 text-xl">
              {"⭐".repeat(testimonial.rating)}
            </div>
            <p className="mt-3 text-gray-900 font-medium">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
