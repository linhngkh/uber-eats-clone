import Image from "next/image";
import Link from "next/link";

const business = [
  {
    img: "/business.png",
    title: " Feed your employees",
    link: "Create a business account",
  },
  {
    img: "/restaurant.png",
    title: "Your restaurant, delivered",
    link: "Add your restaurant",
  },
  {
    img: "/delivery.png",
    title: "Deliver with Uber Eats",
    link: "Sign up to deliver",
  },
];

export default function BusinessCard() {
  return (
    <main className="bg-white md:py-20 py-10">
      <div className="px-10 flex flex-col">
        <div className="md:flex justify-between ">
          {business.map((option, id) => (
            <div className="mb-10" key={id}>
              <Link href="/">
                <Image
                  src={option.img}
                  width={400}
                  height={400}
                  alt="image"
                  loading="lazy"
                />
                <h1 className="text-xl font-bold font-montserrat mt-3">
                  {option.title}
                </h1>
                <p className="text-sm underline">{option.link}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
