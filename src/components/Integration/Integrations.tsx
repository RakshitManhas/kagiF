import { FunctionComponent } from "react";
import "./Integrations.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`integrations-container ${className}`}>
      <div className="integrations2">
        <div className="top-l2-integrations-wrapper">
          <h1 className="top-l2-integrations-container">
            <span>
              <span>Top</span>
            </span>
            <b className="l2-integrations">
              <span>{` `}</span>
              <span>L2 Integrations</span>
            </b>
          </h1>
        </div>
        <div className="frame-div">
          <img className="frame-child7" alt="" src="/icons/group-35266.svg" />
          <img className="frame-child11" alt="" src="/icons/group-35244-1.svg" />   
          <img className="image-17-icon1" alt="" src="/icons/image-17-1@2x.png" />
          <div className="ellipse-parent">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt=""
              src="/icons/image-17@2x.png"
            />
          </div>
          <div className="ellipse-group">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt=""
              src="/icons/image-19@2x.png"
            />
          </div>
          <div className="ellipse-container">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt=""
              src="/icons/image-16@2x.png"
            />
          </div>
          <div className="ellipse-parent1">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt=""
              src="/icons/image-20@2x.png"
            />
          </div>
          <img
            className="kagi-finance-icon"
            loading="lazy"
            alt=""
            src="/kagi-finance.svg"
          />
          <img className="vector-icon" alt="" src="/vector-123.svg" />
          <div className="frame-parent1">
            <img className="frame-child12" alt="" src="/icons/group-35266.svg" />
            <img className="image-20-icon1" alt="" src="/icons/image-20-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
