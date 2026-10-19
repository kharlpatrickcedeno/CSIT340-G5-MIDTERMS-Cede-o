
function StatCard({value, label}) {
    return (
        <div className="bg-[#FFF9F2] p-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-gray-600">{label}</p>
        </div>
    )
}

export default StatCard;

