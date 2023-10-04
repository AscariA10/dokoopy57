import { useLocation } from "react-router-dom";
import { AdminMainHeader } from "../../components/admin-components/AdminMainHeader";
import defaultImage from "../../assets/images/admin-heroes-projects.png";
import { AdminMainInnerPart } from "../../components/admin-components/AdminMainInnerPart";
// import { useLoadingData } from "../../hook/useLoadingData";
// import { AdminApi } from "../../api/api";
// import { useEffect, useState } from "react";
// import { useAdminContext } from "../../components/provider-components/admin-provider";
// import { useAdminContext } from "../../components/provider-components/admin-provider";

const dataSlider = [
   {
      id: 1,
      name: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   {
      id: 2,
      name: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
   { id: 3, name: "Назва слайдеру", img: defaultImage, date: "21.07.2023", alt: "slider_photo" },
   {
      id: 4,
      name: "Назва слайдеру",
      img: defaultImage,
      date: "21.07.2023",
      alt: "slider_photo",
   },
];
export const AdminHero = () => {
   // const [sliders, setSliders] = useState();
   // const { token, loggedIn } = useAdminContext();
   // console.log(token);
   // const data= useLoadingData(AdminApi.getHerosAdmin);
   const { pathname } = useLocation();
   // useEffect(() => {
   //    if (loggedIn) {
   //       setSliders(data);
   //    }
   // }, []);


   // console.log(data);
   // console.log(sliders);

   
   return (
      <div className="admin-hero">
         <AdminMainHeader title={"Слайдер"} previousPage={pathname} />
         <AdminMainInnerPart name="Назва" photo="Фото" date="Дата" data={dataSlider} />
      </div>
   );
};
