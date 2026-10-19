
export default function Contribute(props) {

    return (
        <div className="mx-20 mb-8 flex items-center justify-between rounded-xl bg-[#800020] p-6 text-[#FFF9F2]">
            <div> <h3 className="text-2xl font-bold"> Want to contribute?</h3></div>
            <p className="mt-1 text-xl">Fix an open issue on <a className="font-bold underline" href="https://github.com/kharlpatrickcedeno/CSIT340-G5-MIDTERMS-Cede-o" target="_blank" onClick="handleContribute">GitHub</a></p>


            <div className="flex items-center gap-8">
                <p className="text-xl">Contributors:
                    <span className="font-bold"> {props.contributors}</span>
                </p>
                <p className="text-xl">Open issues: <span className="font-bold"> {Math.max(props.issues - props.contributors, 0)}</span></p>
                <button className="cursor-pointer rounded-lg border-2 border-[#FFF9F2] px-8 py-3 text-xl font-bold" onClick="handleClear">
                    Clear
                </button>
            </div>
        </div>
    );
}