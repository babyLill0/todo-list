import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = PropsWithChildren<{}>;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;