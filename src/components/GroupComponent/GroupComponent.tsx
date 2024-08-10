import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./GroupComponent.css";

export type GroupComponentType = {
  className?: string;
  group?: string;
  liquidityLocks?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  group,
  propWidth,
  liquidityLocks,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`rectangle-container ${className}`}>
      
      <img
        className="group-icon"
        loading="lazy"
        alt=""
        src={group}
        style={groupIconStyle}
      />
      <div className="liquidity-locks">{liquidityLocks}</div>
    </div>
  );
};

export default GroupComponent;
