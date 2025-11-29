import { Suspense } from "react";
import SearchPageContent from "@/components/SearchPageContent";

export default function Page() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading search results...</div>}>
            <SearchPageContent />
        </Suspense>
    );
}
