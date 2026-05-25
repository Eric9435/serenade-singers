import { site } from "@/data/site";

const requirements = [
  "No experience required",
  "Open to all voice types",
  "Must be willing to learn",
  "Must attend rehearsals regularly",
  "Respect teamwork and discipline",
];

const programs = [
  "Choir / A Cappella",
  "Vocal Training",
  "Piano Class",
  "Music Theory",
  "Online Webinar",
  "Performance Program",
];

export default function SignupPage() {
  return (
    <main>

      <section className="signup-pro-hero">

        <div className="signup-left">

          <p className="eyebrow">
            Join Serenade Singers
          </p>

          <h1>
            Begin Your
            <span> Musical Journey</span>
          </h1>

          <p>
            Serenade Singers welcomes passionate people who love music,
            harmony, teamwork, and creative growth. Beginners and experienced
            singers are both welcome.
          </p>

          <div className="signup-actions">

            <a
              className="btn-primary"
              href={site.signupForm}
              target="_blank"
            >
              Open Registration Form
            </a>

            <a
              className="btn-outline"
              href="/about"
            >
              Learn More
            </a>

          </div>

        </div>

        <div className="signup-right">

          <p className="signup-small-title">
            Registration Requirements
          </p>

          <div className="signup-requirements">

            {requirements.map((item) => (
              <div className="signup-requirement" key={item}>
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="signup-programs-section">

        <div className="signup-program-head">

          <p className="eyebrow">
            Available Programs
          </p>

          <h2>
            Choose Your Musical Interest
          </h2>

          <p>
            Members and students can participate in multiple programs
            depending on their interests and goals.
          </p>

        </div>

        <div className="signup-program-grid">

          {programs.map((item) => (
            <div className="signup-program-card" key={item}>

              <h3>
                {item}
              </h3>

              <p>
                Professional training, teamwork, performance opportunities,
                and musical development.
              </p>

            </div>
          ))}

        </div>

      </section>

      <section className="signup-bottom-cta">

        <div>

          <p className="eyebrow">
            Ready to Join?
          </p>

          <h2>
            Complete your registration through our official Google Form.
          </h2>

          <p>
            Fill in your information, upload your profile photo,
            and submit your registration application.
          </p>

        </div>

        <a
          className="btn-primary"
          href={site.signupForm}
          target="_blank"
        >
          Register Now
        </a>

      </section>

    </main>
  );
}
