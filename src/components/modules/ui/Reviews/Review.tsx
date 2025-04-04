import Image from "next/image";
import starsvg from "@/images/pages/panneaux-solaires/Reviews/star.svg";
import googlesvg from "@/images/pages/panneaux-solaires/Reviews/google.svg";
import "@/styles/Review.css";
import { RandomAvatar } from "react-random-avatars";
interface ReviewProps {
  name: string;
  time: string;
  comment: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export default function Review({
  name,
  time,
  comment,
  avatar,
  rating,
}: ReviewProps) {
  return (
    <div
      tabIndex={-1}
      aria-label={`Review by ${name}`}
      className="review-container "
    >
      <div className="review-card">
        <div>
          <div className="review-header">
            <div className="review-avatar">
              {avatar ? (
                <Image
                  src={avatar}
                  className="avatar-img"
                  alt={name}
                  width={40}
                  height={40}
                />
              ) : (
                <RandomAvatar name={name} size={40} />
              )}
            </div>
            <div className="review-info">
              <p className="review-name">{name}</p>
              <p className="review-time">{time}</p>
            </div>
          </div>
          <div className="review-text">
            <p data-review-comment="true">{comment}</p>
          </div>
        </div>
        <div className="review-footer">
          <div className="review-stars">
            {[...Array(rating)].map((_, i) => (
              <Image key={i} src={starsvg} width={30} height={30} alt="star" />
            ))}
          </div>
          <Image src={googlesvg} width={30} height={30} alt="google" />
        </div>
      </div>
    </div>
  );
}
