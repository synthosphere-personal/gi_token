"use client";
import React, { useState } from 'react';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import TournamentBox from './tournament-box';
import TextAnimation from '../common/text-animation';
import tournament_data from '@/data/tournament-data';
import TokennomicsBox from './tokenomics-box';
import { ITokenomics } from '@/types/tokenomics-type';
import tokenomics_data from '@/data/tokenomics-data';

const TournamentArea = () => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = "0xb87b72c6701d629dc84b65bcb3336be5b58274e3";

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }

  return (
    <section className="tournament-area section-pt-120 section-pb-90">
      <div className="container">
          <div className="tournament__wrapper">
              <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-7 col-md-10">
                      <div className="section__title text-center mb-60">
                          <TextAnimation title='private sale' />
                          <h3 className="title">successfully ended</h3>
                      </div>
                  </div>
              </div>
              <div className="row justify-content-center gutter-25">
                <div className="col justify-content-center gutter-25">
                  {tokenomics_data.map((item: ITokenomics) => (
                    <div key={item.id} className="col-xl-8 col-lg-8 col-md-8 col-sm-9">
                        <TokennomicsBox items={item} />
                    </div>
                  ))}
                </div>
                <div className="col justify-content-center gutter-25">
                  <div className="section__title text-start mb-30">
                    <h3 className="title">
                      Token <br />Generation event (TGE)
                    </h3>
                  </div>
                  <div className="about__content-two">
                    <p>
                    <span className="step" style={{color: "#FFBE18", fontWeight: "bold", fontSize: "24px"}}>Token distribution will be done within 24 hours: 1st Phase - 50%<br /></span>
                    <span className="step" style={{fontWeight: "bold", fontSize: "20px"}}>Vesting Distribution:<br /> 1. October end - 25%<br /> 2. December end - 25%<br /></span>
                    <span className="step" style={{color: "#FFBE18", fontWeight: "bold", fontSize: "24px" }}>Token distribution will be both : <br />BSC and Polygon Network</span>
                    </p>
                  </div>
                  {/* <div className="about__funFact-wrap">
                    <div className="about__content-btns">
                      <form action="#" className="footer-newsletter-form">
                        <input type="text" placeholder="0xb87b72c6701d629dc84b65bcb3336be5b58274e3" disabled />
                        <button type="submit" onClick={handleCopy}>{copied ? <FaClipboardCheck /> : <FaClipboard />}</button>
                      </form>
                    </div>
                    <div className="about__content-btns">
                      <form action="#" className="footer-newsletter-form">
                        <input type="text" placeholder="Enter your token recieving address" />
                        <button type="submit"><i className="flaticon-paper-plane"></i></button>
                      </form>
                    </div>
                </div> */}
                </div>
              </div>
          </div>
      </div>
  </section>
  );
};

export default TournamentArea;
