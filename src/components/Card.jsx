import React from "react";

const Card = ({ user }) => {
  console.log(user);

  const { picture, gender, name, cell } = user;

  const getGender = (gender)=>{
    const result = gender.charAt(0).toUpperCase() + gender.slice(1 )
    return result
  }

  return (
    <div className="group w-96 bg-slate-700 text-white p-5 rounded-lg shadow-md flex justify-around items-center cursor-pointer hover:bg-white hover:scale-102 hover:text-slate-600 hover:drop-shadow-2xl duration-400 tracking-wide ">
      <section>
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-white group-hover:border-slate-600 duration-400"
          src={picture.large}
          alt="user"
        />
      </section>
      <section>
        <h3 className="text-xl mb-2 border-b-2 border-slate-500">
          {name.title}. {name.first} {name.last}
        </h3>
        <p className="py-1 text-sm">
          Gender: {getGender(gender)}
        </p>
        <p className="py-1 text-sm">Phone: {cell}</p>
      </section>
    </div>
  );
};

export default Card;
