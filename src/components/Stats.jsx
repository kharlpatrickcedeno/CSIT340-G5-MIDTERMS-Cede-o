import { useState } from "react";

function Stats({stars, downloads, issues}) {
        const [starCount, setStars] = useState(stars ?? 0);
    const [downloadCount, setDownloads] = useState(downloads ?? 0);
    const [issueCount, setIssues] = useState(issues ?? 5);
    function handleStar() {
        setStars(starCount + 1);
    }

    function handleDownload() {
        setDownloads(downloadCount + 1);
    }

    function handleReport() {
        setIssues(issueCount + 1);
    }

    function handleReset() {
        setStars(0);
        setDownloads(0);
        setIssues(5);
    }
    return (
        <div className="flex justify-center gap-4 py-6">
            <button
                className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
                onClick={handleStar}
            >
                Star
            </button>
            <button
                className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
                onClick={handleDownload}
            >
                Download
            </button>
            <button
                className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
                onClick={handleReport}
            >
                Report issue
            </button>
            <button
                className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    )
}

export default Stats;
