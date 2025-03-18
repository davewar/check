import React from "react";

const Card = ({ item }) => {
  const { id, area, client, description } = item;

  return (
    <div key={id} className="card1">
      <div className="comment">
        {/* <p >"{description}"</p> */}
        <div className="description">
          {description?.map((item) => {
            return <p key={item.id}>{item.text}</p>;
          })}
        </div>
      </div>

      {/* <div className="client">
        <p className="text-bold center ">{client}</p>
        <p className="text-bold center ">{area}</p>
      </div>
      

       */}
    </div>
  );
};

export default Card;
