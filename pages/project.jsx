import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const Project = ({ isDark }) => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-start-1 col-span-full">
        <Image
          src="http://placekitten.com/2000/1000"
          width={2000}
          height={1000}
          alt="..."
        />
      </div>
      <div className="col-start-1 col-span-full grid grid-cols-12 gap-3">
        <h2 className="text-4xl col-start-1 col-span-full md:col-span-6 md:text-center">
          Title of Project
        </h2>
        <p className="text-xl col-start-1 col-span-full md:col-start-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          autem. Possimus in non veritatis, molestiae iure, at nulla sequi
          tempore repudiandae voluptates corporis reiciendis. Ipsum nostrum
          accusantium molestias labore autem.
        </p>
      </div>
      <div className="col-start-1 col-span-full">
        <Image
          src="http://placekitten.com/2000/1000"
          width={2000}
          height={1000}
          alt="..."
        />
      </div>
      <div className="col-start-1 col-span-full grid grid-cols-12 gap-3">
        <div className="col-start-1 col-span-full md:col-span-6">
          <Image
            src="http://placekitten.com/1000/2000"
            width={1000}
            height={2000}
            alt="..."
          />
        </div>
        <div className="col-start-1 col-span-full md:col-start-7 md:col-span-6">
          <Image
            src="http://placekitten.com/1000/2000"
            width={1000}
            height={2000}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
