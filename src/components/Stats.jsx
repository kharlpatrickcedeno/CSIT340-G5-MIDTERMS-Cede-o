import { useState } from "react";
import StatCard from "./StatCard";

function Stats({ stars, downloads, issues }) {
    const [starCount] = useState(stars ?? 0);
    const [downloadCount] = useState(downloads ?? 0);
    const [issueCount] = useState(issues ?? 5);

    return (
        <div  className="flex justify-center gap-6 pb-8">
            <StatCard value={starCount} label="Stars" />
            <StatCard value={downloadCount} label="Downloads" />
            <StatCard value={issueCount} label="Issues" />
        </div>
    )
}

export default Stats;
