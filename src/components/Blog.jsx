/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

export const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "/src/assets/blog1-removebg-preview.png",
      link:'/model1',
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: "./../../src/assets/blog2-removebg-preview.png",
      link:'/model2',
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "../../src/assets/blog3-removebg-preview(1).png",
      link:'/model3',
    },
  ];

  return (
    <section className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-blue-500 font-semibold mb-4">
        Experience a Demo Today
        </h2>
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <p className="text-base text-white mb-8 md:w-3/4 mx-auto">
        // eslint-disable-next-line react/no-unescaped-entities
        Discover the future of real estate with Heaven Estate's AR and 3D solutions. Schedule your personalized demo today to see how our technology enhances property exploration. Contact us now to experience AR and 3D in action.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto bg-black relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt="Imagem do blog"
              className="hover:scale-95  bg-black transition-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-black shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
            <a
                  href={blog.link}
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                >
              <div className="flex items-center  text-white justify-center bg-black">
                
                  Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4A4AE6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                
              </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
