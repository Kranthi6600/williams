import Footer from "../Footer";
import RequireAuth from "../Auth/index";
import dynamic from "next/dynamic";
import AdminHeader from "../Header/AdminHeader";
const CustomCursor = dynamic(
  () => {
    return import("../CustomCursor");
  },
  { ssr: false }
);
const AdminLayout = ({ headerVariant, children }) => {
  return (
    <div>
      <AdminHeader variant={headerVariant} />
      <CustomCursor />
      <main style={{ padding: "100px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default RequireAuth(AdminLayout);
