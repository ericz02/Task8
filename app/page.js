import TopContent from "../components/TopContent";
import SocialLinks from "../components/SocialLinks";
import NonSocialLinks from "../components/NonSocialLinks";

export default async function Home() {
  return (
    <main>
      <TopContent />
      <NonSocialLinks />
      <SocialLinks />
    </main>
  );
}
