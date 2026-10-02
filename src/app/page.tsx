import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "Harrison",
  bio: "주식을 좋아하는 초보 투자자",
};

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950">
        <Profile {...profile} />
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.label} {...link} />
          ))}
        </div>
      </main>
    </div>
  );
}
