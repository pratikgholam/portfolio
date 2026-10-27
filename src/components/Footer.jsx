import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-name">{profile.name}</p>
        <p className="footer-tagline">{profile.boldClaim}</p>
      </div>
    </footer>
  );
}
