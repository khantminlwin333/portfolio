import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import {PrivacyPolicy} from "@/components/portfolio/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={100}>
          {/* Global toast and notification handlers */}
          <Toaster />
          <Sonner />

          {/* Router */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Hidden route - only accessible via button click */}
              <Route path="/mtp-policies" element={<PrivacyPolicy />} />
              
              {/* CATCH-ALL ROUTE - MUST BE LAST */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;