import Link from "next/link";

export default function MemberResume({ userName, memberName, src }: { userName: string, memberName: string; src: string }) {
    return (
        <div className="flex flex-col items-center">
            <Link href={`https://github.com/${userName}`}>
                <a className="w-48 transform hover:scale-105">
                    <img className="rounded-full" src={src}/>
                </a>
            </Link>
            <Link href={`https://github.com/${userName}`}>
                <a className="mt-2 text-xl hover:text-blue-500 hover:underline">
                    <h3>{memberName}</h3>
                </a>
            </Link>

        </div>
    );

}