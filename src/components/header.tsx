import Image from "next/image";

export const Header = () => {
  return (
    <header className="my-4">
      <Image
        src={"https://avatars.githubusercontent.com/u/109963122?v=4"}
        width={80}
        height={80}
        quality={40}
        loading={'eager'}
        className="rounded-lg"
        alt="profileimage"
      />
      <div className="">
        <h1 className="text-4xl font-bold py-4 text-white">Yash Patel</h1>
        <h2 className=" text-lg text-left sm:text-justify text-gray-400">
          I&apos;m a Full Stack Engineer with experience in building
          <span className="text-white font-bold"> Web applications </span>{" "}
          end-to-end. I have a strong background in both{" "}
          <span className="text-white font-bold"> Frontend </span> and{" "}
          <span className="text-white font-bold"> Backend </span> development
          with <span className="text-white font-bold"> DevOps </span>, ensuring
          smooth and efficient deployments. I enjoy transforming ideas into
          Reality.
        </h2>
      </div>
    </header>
  );
};
