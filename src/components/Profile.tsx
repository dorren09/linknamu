import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-zinc-200 ring-1 ring-zinc-300 dark:bg-zinc-800 dark:ring-zinc-700">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-full w-full text-zinc-400 dark:text-zinc-600"
            aria-hidden="true"
          >
            <circle cx="12" cy="9" r="3.5" fill="currentColor" />
            <path
              d="M4.5 20c1.5-4 5-5.5 7.5-5.5s6 1.5 7.5 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
      <div>
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
