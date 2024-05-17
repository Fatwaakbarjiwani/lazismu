import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Target({ targetAmount, amountCampaign }) {
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    // Logika untuk mengupdate progress
    if (amountCampaign >= targetAmount) {
      setIsFull(true);
    }
  }, [amountCampaign, targetAmount]);
  const progressWidthStyle = {
    width: `${(amountCampaign / targetAmount) * 100}%`,
  };
  return (
    <div className="w-full rounded-full bg-NEUTRAL04">
      <div
        style={progressWidthStyle}
        className={`${
          isFull ? "bg-orange-500" : "bg-orange-300"
        } xl:h-5 md:h-4 h-1 rounded-full`}
      ></div>
    </div>
  );
}
Target.propTypes = {
  targetAmount: PropTypes.number.isRequired,
  amountCampaign: PropTypes.number.isRequired,
};
