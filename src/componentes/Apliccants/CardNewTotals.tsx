import CardNumTotal from "./CardNumTotal";



export default function CardNewTotals() {
    return (
        <div className="flex flex-col">
            <div className="flex gap-x-8 mb-8">
                <div className="w-1/2">
                    <CardNumTotal/>
                </div>
                <div className="w-1/2">
                    <CardNumTotal/>
                </div>
            </div>
            <div className="flex gap-x-8">
                <div className="w-1/2">
                    <CardNumTotal/>
                </div>
                <div className="w-1/2">
                    <CardNumTotal/>
                </div>
            </div>
        </div>
    )
}

