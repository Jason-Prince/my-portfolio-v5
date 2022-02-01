import Image from "next/image";

const ProjectImage = ({ image }) => {
  const { name, src, width, height } = image;
  return (
    <Image
      className="rounded"
      src={src}
      width={width}
      height={height}
      alt={name}
    />
  );
};

export default ProjectImage;
