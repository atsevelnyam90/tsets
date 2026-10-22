export const teamMembers = [
  {
    slug: "lkhagvasuren-ganbold",
    image: "/images/team-lkhagvasuren.avif",
  },
  {
    slug: "bat-erdene-bayarsaikhan",
    image: "/images/team-bat-erdene.avif",
  },
  {
    slug: "erdenebold-tsegmid",
    image: "/images/team-erdenebold.avif",
  },
  {
    slug: "myadagmaa-bat-erdene",
    image: "/images/team-avatar-badamsuren.avif",
  },
  {
    slug: "ariunsanaa-oyun-erdene",
    image: "/images/team-ariunsanaa.avif",
  },
  {
    slug: "narangerel-amarsaikhan",
    image: "/images/team-narangerel.avif",
  },
  {
    slug: "dugarmaa-enkhbat",
    image: "/images/team-dugarmaa.avif",
  },
  {
    slug: "bayarmaa-nyamlhagva",
    image: "/images/team-bayarmaa.avif",
  },
  {
    slug: "khuslen-gantor",
    image: "/images/team-khuslen.avif",
  },
] as const;

export type TeamMemberSlug = (typeof teamMembers)[number]["slug"];

export function isTeamMemberSlug(value: string): value is TeamMemberSlug {
  return teamMembers.some((member) => member.slug === value);
}
