import useState from "react";


function Hero() {
    const [stars, setStars] = useState(0);
    const [downloads, setDownloads] = useState(0);
    const [issues, setIssues] = useState(5);

    function handleStar() {
        setStars(stars + 1);
    }

    function handleDownload() {
        setDownloads(downloads + 1);
    }

    function handleReport() {
        setIssues(issues + 1);
    }

    function handleReset() {
        setStars(0);
        setDownloads(0);
        setIssues(5);
    }
    return (
        <>
            <header className="px-20 pt-8 text-center">
                <h2 className="text-7xl font-bold">Build pages faster.</h2>
                <p className="mt-5 text-2xl text-[#000000]">An open-source component kit for React.</p>
                <p className="mt-2 text-xl text-[#000000]">Made by Kharl Patrick R. Cedeño</p>
            </header>

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
        </>

    );
}

export default Hero;