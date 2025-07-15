src/pages/Home.js
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Plan B for Men</h1>
        <p className="text-lg mb-6">
          Divorce contingency services for men who need emotional, logistical,
          and lifestyle support.
        </p>
        <Card className="mb-6">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Short-term live-in companionship</li>
              <li>Legal and emotional support during divorce</li>
              <li>Counseling, therapy, and recovery planning</li>
              <li>Retreats and lifestyle reset coaching</li>
            </ul>
          </CardContent>
        </Card>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
}
