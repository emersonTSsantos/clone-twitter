import { TrendingItem, TrendingItemSkeleton } from "./trending-item"

export const TrendingArea = () => {
    return (
        <div className="bg-gray-800 rounded-3xl ">
            <h2 className="text-xl p-6">O que está acontecendo?</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <TrendingItem label="#Teste 1" count={123} />
                <TrendingItem label="#Teste 2" count={456} />
                <TrendingItem label="#Teste 3" count={789} />
                <TrendingItemSkeleton />
                <TrendingItemSkeleton />
            </div>
        </div>
    )
}