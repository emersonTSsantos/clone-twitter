import Link from "next/link";

type  Props = {
    label: string;
    count: number;
}

export const TrendingItem = ({ label, count }: Props) => {
    return (
        <Link
            href={`/search?q=${encodeURIComponent(label)}`}
            className="group/item"
        >
            <div className="group-hover/item:underline font-bold">{label}</div>
            <div className="text-sm text-gray-400">{count} posts</div>
        </Link>
    )
}

export const TrendingItemSkeleton = () => {
    return (
        <div className="flex flex-col gap-1 animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-700 rounded w-1/4"></div>
        </div>
    )
}
