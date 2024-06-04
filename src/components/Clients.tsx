import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Clients() {
  const recommendations = [
    {
      name: "Clarisse Clemente",
      position: "Senior Project Manager - Therefore Interactive",
      recommendation: "I am pleased to recommend Mark for any BackEnd Developer position. I had the opportunity to work alongside him during our time at MindArc, and it was truly an excellent experience." +
        "Mark is a hardworking and dedicated developer who consistently produces high-quality work. He has a great ability to solve complex problems and is persistent in achieving the best results. He never shies away from big projects or tasks, and always goes above and beyond what is expected of him." +
        "His work ethic is admirable, and his skills as a developer are exceptional. I would not hesitate to work with Mark again, and any company would be fortunate to have him as a member of their team. His expertise and positive attitude would be an asset to any project or team." +
        "I highly recommend Mark for any BackEnd Developer position, and I am confident that he would make a valuable addition to any organization",
      image: 'https://media.licdn.com/dms/image/D5603AQFtCMMjCwrxzg/profile-displayphoto-shrink_100_100/0/1669427855878?e=1722470400&v=beta&t=zAQL0Y6a7a0QWotag6wvV83YxA1v-a_OM0kgnkgPZ_4'
    },
    {
      name: "Eric Lim",
      position: "Head of Development at VEEVUS",
      recommendation: "Mark is a joy to work with. He's proactive, self motivated, and keeps his skills and knowledge up to date. He also writes elegant code and has a very strong problem solving skills. I am certain that Mark will be a valuable asset to any company",
      image: 'https://media.licdn.com/dms/image/D5603AQHe2c-hjC9u5Q/profile-displayphoto-shrink_100_100/0/1703010045241?e=1722470400&v=beta&t=DEq3ax67kaNiLhuXT9LfspGZmD4IXBQWXZD7iQyCnTw'
    },
    {
      name: "Catherine Joy Tarzona Magalus",
      position: "Project Manager at Mindarc",
      recommendation: "I am having fun working with Mark. He is approachable as he is open to answer some of my questions when needed and he can explain them well the way I understand them. When it comes to quality of work, he is keen to make sure that it is completely fixed and making sure that it will prevent some issues may occur in future. Also making sure that the code structure he did should be properly implemented. 4",
      image: 'https://media.licdn.com/dms/image/C5103AQGoHxktD5inPg/profile-displayphoto-shrink_100_100/0/1531716238123?e=1722470400&v=beta&t=JDYxpyT1mN1sL8VYg9uPDrfmMGCUhTKF0RHa5FAHkx0'
    },
    {
      name: "John Condrad Lumacad",
      position: "Lead Developer at Google",
      recommendation: "Mark is both very bright and quite motivated. I am confident that he will devote himself to a position with your organization. He is a quick learner and has shown the ability communicate and collaborate with the team. I would highly recommend Mark to be part of your team.",
      image: 'https://media.licdn.com/dms/image/C5103AQHO0lZOYN5-rw/profile-displayphoto-shrink_100_100/0/1560410191845?e=1722470400&v=beta&t=0uBku1GMs7F7O4HD8qK-ywD01bSVz7AKWy6YRQt7wR4'
    },
    {
      name: "Jeferson Mari",
      position: "Lead Frontend Engineer at Sprout Solutions",
      recommendation: "Mark is a Talented Web Developer who has great skills in Back-end Web Development. As one of the main strongholds in Synapps Corp., He works really hard with determination, grace and alacrity for the company to keep forward even at its early stage. When it comes to professionalism, His focus keeps everything moving smoothly, he makes sure all the deadlines are met, and makes sure that whatever project he is working on meets the highest standards. It's a pleasure and an honor to recommend Mark to anyone who wants to hire him.",
      image: 'https://media.licdn.com/dms/image/C4E03AQFRt211u5x8cQ/profile-displayphoto-shrink_100_100/0/1517512229761?e=1722470400&v=beta&t=07Dzo5XiWPE9EOZS7rlDbmnJYIWsgDzrEf_7Ww4fRIo'
    },
    {
      name: 'Jeremy Layson',
      position: 'Fullstack Engineer at B1G1',
      recommendation: "'Unicorn programmer' is the only adjective that I can use to summarize Mark Cornelio. He's a rare breed amongst programmer. Dedicated, hardworking, clever and smart are some of the ways to describe Mark as a programmer. But other than that, he's also cool to work with, helpful, very open to suggestion and most of all, he enjoys sharing his ideas and contributing to a solution. If you're building a great team, Mark Cornelio is a great pick.",
      image: 'https://media.licdn.com/dms/image/D5603AQH0n98klbIueA/profile-displayphoto-shrink_100_100/0/1682091682701?e=1722470400&v=beta&t=zBUTpiqau38Fk1gZUwijyq5_eCVjmh7sZoU6z9GbXmE'
    },
    {
      name: 'Jireh June Nimes',
      position: 'Technical Lead at Cebu Pacific Air',
      recommendation: 'Mark is a well dedicated programmer. He is always have the desire to share his knowledge to others and willing to help others if they asked to. He is also a cheerful co-employee. Collaborative and a team player in terms of handling projects. He is a type of programmer that you want to work with.',
      image: 'https://media.licdn.com/dms/image/D5603AQEWl7ijP68F3Q/profile-displayphoto-shrink_100_100/0/1715571099223?e=1722470400&v=beta&t=8M-TsUlVatBEEFiDimXIKhoQU2YCNuLYkjej8VZtDxQ'
    }
  ];

  return (
    <section className="py-16 lg:mb-20">
      <div>
        <p className="font-normal text-gray-400 text-xl text-center lg:text-left mb-5">Recommended By: </p>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-lg flex flex-col items-center">
              <img
                src={rec.image}
                alt={rec.name}
                className="mb-4 w-24 h-24 object-cover rounded-full"
                style={{width: "100px", height: "100px"}}
              />
              <h3 className="font-semibold text-lg text-center">{rec.name}</h3>
              <p className="text-sm text-gray-500 text-center">{rec.position}</p>
              <p
                className="mt-2 text-gray-700 text-justify"
                dangerouslySetInnerHTML={{__html: rec.recommendation}}
              ></p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}