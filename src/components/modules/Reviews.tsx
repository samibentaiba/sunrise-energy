import Review from "./ui/Reviews/Review";
import mockdata from "@/data/Reviews.json";
import Resume from "./ui/Reviews/Resume";
import { ReactElement } from "react";

export default function Reviews():ReactElement {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Resume takes up full width on mobile, first cell on larger screens */}
        <div className="md:col-span-1">
          <Resume />
        </div>

        {/* Reviews fill the rest of the grid */}
        {mockdata.map((review) => (
          <div key={review.reviewId}>
            <Review name={review.reviewer.displayName} time={review.createTime} comment={review.comment} rating={review.starRating as 1 | 2 | 3 | 4 | 5} />
          </div>
        ))}
      </div>
    </div>
  );
}
