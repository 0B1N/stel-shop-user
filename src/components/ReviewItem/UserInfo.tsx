import Rate from "components/Card/Rate";
import Image from "next/image";
import styled from "styled-components";
import { emailMasking } from "utils/text";

type UserInfoProps = {
  className?: string;
  profile?: string;
  email: string;
  rate: number;
  date: string;
};

function UserInfo({ className, profile, email, rate, date }: UserInfoProps) {
  return (
    <div className={className}>
      <div className="userInfo--profile">
        <Image
          src={profile ?? "/profile_mockup_image.webp"}
          alt="profile"
          width={36}
          height={37}
        />
      </div>

      <div className="userInfo__content">
        <p className="userInfo__content--email">{emailMasking(email)}</p>

        <Rate className="userInfo__content--rate" rate={rate} size={14} />
      </div>

      <div className="userInfo__content--date">{date}</div>
    </div>
  );
}

export default styled(UserInfo)`
  display: flex;
  margin-bottom: 16px;

  .userInfo--profile {
    font-size: 0;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 12px;
  }

  .userInfo__content {
    &--email {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  .userInfo__content--date {
    margin-left: auto;
  }
`;
