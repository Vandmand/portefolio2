import { AddProject } from "@components/Admin/AddProject";
import { Auth } from "@components/Admin/Auth";
import Functional from "@components/Functional";
import { Tags } from "@components/Admin/Tags";
import { AddBlog } from "@/components/Admin/addBlog";

const Admin = () => {
  return (
    <Functional.MainWrapper>
      <Functional.Nav />
      <div className="grid bg-base-100-transparent tablet-p:grid-cols-2 gap-8 p-8 mt-20">
        <Auth />
        <Tags></Tags>
        <AddProject />
        <AddBlog />
      </div>
      <Functional.Footer />
    </Functional.MainWrapper>
  );
};

export default Admin;
