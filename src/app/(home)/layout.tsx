"use client";

import { HomeLayout } from "@modules/home-layout";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <HomeLayout>{children}</HomeLayout>
);

export default Layout;
