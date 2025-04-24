// import React from "react";
// import Image from "next/image";
// // import { Droplet } from "lucide-react";
// import Button from "./Button";

// interface EmergencyCardProps {
//   title: string;
//   description: string;
//   image: string;
//   onDonate?: () => void;
// }

// const EmergencyCard: React.FC<EmergencyCardProps> = ({
//   title,
//   description,
//   image,
//   onDonate,
// }) => {
//   return (
//     <div className="bg-white rounded-xl overflow-hidden shadow-md max-w-sm w-full text-center mx-auto">
//       <div className="w-full h-64 relative overflow-hidden">
//       <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
//           <Image
//             src={image}
//             alt={title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-xl"
//           />
//         </div>
//       </div>

//       <div className="px-4 py-6">
//         <h2 className="text-2xl font-bold text-green-900 mb-2">{title}</h2>
//         <p className="text-gray-600 mb-6">{description}</p>
//         {/* <button
//           onClick={onDonate}
//           className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full inline-flex items-center gap-2 transition-all duration-200"
//         >
//           Donate <Droplet size={18} />
//         </button> */}
//         <Button label="Donate" customStyle={`bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-10 rounded-full inline-flex items-center gap-2 transition-all duration-200`} />
//       </div>
//     </div>
//   );
// };

// export default EmergencyCard;

import React from "react";
import Image from "next/image";
import { Droplet } from "lucide-react";
import Button from "./Button";

interface EmergencyCardProps {
  title: string;
  description: string;
  image: string;
  onDonate?: () => void;
}

const EmergencyCard: React.FC<EmergencyCardProps> = ({
  title,
  description,
  image,
  onDonate,
}) => {
  return (
    <div className="bg-white mx-4 my-4 rounded-xl overflow-hidden shadow-md max-w-sm w-full text-center group">
      <div className="w-full h-64 relative overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </div>

      <div className="px-4 py-6">
        <h2 className="text-2xl font-bold text-green-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        {/* <button
          onClick={onDonate}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full inline-flex items-center gap-2 transition-all duration-200"
        >
          Donate <Droplet size={18} />
        </button> */}
        <Button label={`Donate`} customStyle="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-10 rounded-full inline-flex items-center gap-2 transition-all duration-200" />
      </div>
    </div>
  );
};

export default EmergencyCard;
