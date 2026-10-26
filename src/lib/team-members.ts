export const teamMembers = [
  {
    slug: "ganchuluun-lkhagvajav",
    image: null,
  },
  {
    slug: "erdenebold-tsegmid",
    image: "/images/team-erdenebold.avif",
  },
  {
    slug: "lkhagvasuren-ganbold",
    image: "/images/team-lkhagvasuren.avif",
  },
  {
    slug: "bat-erdene-bayarsaikhan",
    image: "/images/team-bat-erdene.avif",
  },
  {
    slug: "myadagmaa-bat-erdene",
    image: null,
  },
  {
    slug: "oyunzul-baasandorj",
    image: null,
  },
  {
    slug: "tamir-batdelger",
    image: null,
  },
  {
    slug: "dugarmaa-enkhbat",
    image: "/images/team-dugarmaa.avif",
  },
  {
    slug: "khuslen-gantor",
    image: "/images/team-khuslen.avif",
  },
  {
    slug: "namuungoo-ganchuluun",
    image: "/images/team-namuungoo-enhanced.jpg",
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
    slug: "bayarmaa-nyamlhagva",
    image: "/images/team-bayarmaa.avif",
  },
] as const;

export type TeamMemberSlug = (typeof teamMembers)[number]["slug"];

export function isTeamMemberSlug(value: string): value is TeamMemberSlug {
  return teamMembers.some((member) => member.slug === value);
}
