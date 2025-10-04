import { Link } from 'react-router';

export default function CreateButton() {
  return (
    <>
      <li>
        <Link to="/create-post" className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-zinc-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="text-xs">Create</span>
        </Link>
      </li>
    </>
  );
}
