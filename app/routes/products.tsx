import { FC } from "react";
import Card from "../components/Card";

const Index: FC = () => {
  const cards = [
    {
      icon: <div>Icon 1</div>,
      title: "Card 1",
      description: "Description 1",
      image: "/images/sample1.jpg",
    },
    {
      icon: <div>Icon 2</div>,
      title: "Card 2",
      description: "Description 2",
      image: "/images/sample2.jpg",
    },
    {
      icon: <div>Icon 3</div>,
      title: "Card 3",
      description: "Description 3",
      image: "/images/sample3.jpg",
    },
    {
      icon: <div>Icon 4</div>,
      title: "Card 4",
      description: "Description 4",
      image: "/images/sample4.jpg",
    },
    {
      icon: <div>Icon 5</div>,
      title: "Card 5",
      description: "Description 5",
      image: "/images/sample5.jpg",
    },
    {
      icon: <div>Icon 6</div>,
      title: "Card 6",
      description: "Description 6",
      image: "/images/sample6.jpg",
    },
    {
      icon: <div>Icon 7</div>,
      title: "Card 7",
      description: "Description 7",
      image: "/images/sample7.jpg",
    },
    {
      icon: <div>Icon 8</div>,
      title: "Card 8",
      description: "Description 8",
      image: "/images/sample8.jpg",
    },
    {
      icon: <div>Icon 9</div>,
      title: "Card 9",
      description: "Description 9",
      image: "/images/sample9.jpg",
    },
    {
      icon: <div>Icon 10</div>,
      title: "Card 10",
      description: "Description 10",
      image: "/images/sample10.jpg",
    },
    {
      icon: <div>Icon 11</div>,
      title: "Card 11",
      description: "Description 11",
      image: "/images/sample11.jpg",
    },
    {
      icon: <div>Icon 12</div>,
      title: "Card 12",
      description: "Description 12",
      image: "/images/sample12.jpg",
    },
    {
      icon: <div>Icon 13</div>,
      title: "Card 13",
      description: "Description 13",
      image: "/images/sample12.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white/90 mb-12 text-center">
          Products
        </h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
