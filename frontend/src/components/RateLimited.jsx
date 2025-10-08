import React from "react";
import { ZapIcon } from "lucide-react";
const RateLimited = () => {
  return (
    <div className="mx-auto max-w-8xl p-4 rounded-full">
      <div className="flex items-center justify-center gap-4 p-12 mt-8 bg-neutral/50 border border-primary/20 rounded-lg">
        {/* Icon on the left */}
        <div className="bg-primary/20 p-4 rounded-full">
          <ZapIcon className="text-primary size-20" />
        </div>
        {/* Text on the right */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Rate Limited Reached</h2>
          <p className="mb-1">
            You have exceeded the number of allowed requests. Please try again
            later.
          </p>
          <p>Try again in a few seconds for the best experience.</p>
        </div>
      </div>
    </div>
  );

  //   zap icon on left
  //  heading "Rate Limited"
  //  paragraph "You have exceeded the number of allowed requests. Please try again later."
  //  paragraph "try again in a few seconds for the best experience."
};

export default RateLimited;
