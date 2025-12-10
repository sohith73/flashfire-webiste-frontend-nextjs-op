import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";

export default function BookMyDemoCallPage() {
    // This route shows minimal content - just navbar and footer
    // The modal will open automatically via ClientLogicWrapper
    // No homepage content shown to avoid background clutter
    return (
        <>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
                {/* Minimal content - modal opens via ClientLogicWrapper */}
            </div>
            <Footer />
        </>
    );
}

