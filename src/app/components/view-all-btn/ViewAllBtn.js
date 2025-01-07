"use client";

import { Button } from "@headlessui/react";

export default function ViewAll() {
  return (
    <>
      <Button className="view-all-btn">
        View All{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </>
  );
}
