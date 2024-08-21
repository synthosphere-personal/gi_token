import React from "react";
import Image from "next/image";
import { ITokenomics } from "@/types/tokenomics-type";
import { title } from "process";

const TokennomicsBox = ({ items }: { items: ITokenomics }) => {
  return (
    <div className={`tournament__box-wrap ${items.active ? "active" : ""}`}>
      <div className="tournament__box-countdown">
        <div className="coming-time" data-countdown="2023/5/16">
          {/* <CountdownTimer expiryTimestamp={new Date(item.coming_time)} /> */}
        </div>
      </div>
      <div className="tournament__box-caption">
        <span className="sub">{items.token_subtitle}</span>
        <h4 className="title">{items.token_title}</h4>
      </div>
      <div className="tournament__box-prize">
        <span className="sub_des">{items.token_description}<h2 className="des">10000000(GI 100%)</h2></span>
      </div>
      <ul className="tournament__box-list list-wrap">
        {items.list_items.map((l) => (
          <li key={l.id}>
            <div className="tournament__box-list-item">
              <div className="tournament__player-thumb">
                <Image src={l.images} alt="img" />
              </div>
              <h6 className="tournament__player-name">{l.dis}</h6>
              <span className="tournament__player-price">
                {l.percentage} 
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokennomicsBox;
