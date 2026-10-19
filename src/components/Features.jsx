import FeatureCard from "./FeatureCard";

function Features() {
    return (
        <main className="grid grid-cols-3 gap-8 px-20">
            <FeatureCard tag="Free" title="Open source" description="Read the code and use it in any project." />
            <FeatureCard tag="Easy" title="Simple to use" description="Get started quickly with our intuitive interface." />
            <FeatureCard tag="Powerful" title="Advanced features" description="Access a wide range of tools to enhance your workflow." />
        </main>
    )
}

export default Features;
