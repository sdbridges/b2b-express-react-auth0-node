import React from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";

export const Test = () => (
  <PageLayout>
    <HeroBanner />
    <Auth0Features />
  </PageLayout>
);
