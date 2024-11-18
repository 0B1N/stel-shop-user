import Header from "components/header";
import HomeBanner from "components/HomeBanner";
import HeartIcon from "components/Icon/HeartIcon";
import Image from "next/image";

export default function RootLayout() {
  return (
    <div>
      <Header />

      <HomeBanner />
    </div>
  );
}
