import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import ProfileCard from '../ReactBits/ProfileCard/ProfileCard';
import alperenPng from "../assets/team/alperen_card.png";
import ahmetPng from "../assets/team/ahmet_card.png";
import mithatPng from "../assets/team/mithat_card.png";
import erayPng from "../assets/team/eray_card.png";
import adilhanPng from "../assets/team/adilhan_card.png";
import memeAssistantLogo from "../assets/logos/logobanner.svg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
  handle: string;
  github?: string;
  linkedin?: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Ahmet Kılavuz",
      role: "Full-Stack Developer",
      email: "kilavuz.ahmet@metu.edu.tr",
      handle: "ahmet",
      //image: "https://media.licdn.com/dms/image/v2/D4D03AQFG4Kh9zvPOIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691772000025?e=1761177600&v=beta&t=kiWtwfdPw-ojNOMakET81H4tMigS9oa10trK6RcuZDU",
      image: ahmetPng,
      github: "https://github.com/kilavuza",
      linkedin: "https://www.linkedin.com/in/ahmet-k%C4%B1lavuz-225320241/"
    },
    {
      id: 2,
      name: "Mithat Timurcan",
      role: "Mobile Developer",
      email: "mithat.timurcan@metu.edu.tr",
      handle: "mithat",
      //image: "https://media.licdn.com/dms/image/v2/D4D03AQFg36HNlwJ63g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708720968304?e=1761177600&v=beta&t=oNmFVE1PYFJNOFHlAsRRXvU9ehxhWhx35AdCkyQb_KY",
      image: mithatPng,
      github: "https://github.com/mcantimurcan",
      linkedin: "https://www.linkedin.com/in/mithat-can-timurcan/"
    },
    {
      id: 3,
      name: "Alperen Ovak",
      role: "AI/ML Engineer",
      email: "alperenovak@gmail.com",
      handle: "ovak",
      image: alperenPng ,
      github: "https://github.com/AlperenOvak",
      linkedin: "https://www.linkedin.com/in/alperen-ovak/"
    },
    {
      id: 4,
      name: "B. Eray Pasinlioğlu",
      role: "Backend Developer",
      email: "eray.pasinlioglu@metu.edu.tr",
      handle: "eray",
      //image: "https://media.licdn.com/dms/image/v2/D4E03AQEYpdoaF2VEyQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714480714521?e=1761177600&v=beta&t=5K2ERJ5EaWdP_JgmBv92iLNBFgwZ9dfEeA-xkdqlNrg",
      image: erayPng,
      github: "https://github.com/eraypasinlioglu",
      linkedin: "https://www.linkedin.com/in/eray-pasinlioglu/"
    },
    {
      id: 5,
      name: "Adilhan Çetin",
      role: "Data Engineer",
      email: "adilhan.cetin@metu.edu.tr",
      handle: "adilhan",
      //image: "https://media.licdn.com/dms/image/v2/D5603AQHubr5INR0wPA/profile-displayphoto-crop_800_800/B56ZlspIdOHAAI-/0/1758464356341?e=1761177600&v=beta&t=HBr2h0_iuYCR_7hpUxX6tf9c8sBP2uN5e2e0loho4GU",
      image: adilhanPng,
      github: "https://github.com/adilhancetin",
      linkedin: "https://www.linkedin.com/in/adilhan-cetin/"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are passionate computer engineering students from METU, working together to revolutionize how people discover and share memes.
          </p>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Hello!</span>{" "}
              We are final year Computer Engineering students at{" "}
              <span className="text-cyan-400 font-semibold">
                Middle East Technical University (METU)
              </span>
              . MemeFinder is our capstone project that combines our passion for AI, web development, and internet culture.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <ProfileCard
                className="scale-[0.60]"
                avatarUrl={member.image}
                miniAvatarUrl={member.image}
                iconUrl={memeAssistantLogo}
                name={member.name}
                title={member.role}
                handle={member.handle}
                status="Available"
                contactText="Contact"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  window.location.href = `mailto:${member.email}`;
                }}
              />

              {/* Social links under the card */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-200 group border border-gray-700"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-200 group border border-gray-700"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group border border-gray-700"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;