import { useEffect, useState } from "react";
import axios from "axios";
import fileText from "../../../assets/icon/filetext.svg";
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { FilesPicker } from "../../../components/admin-components/formElement/FilesPicker";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoadingData } from "../../../hook/useLoadingData";
import { AdminApi } from "../../../api/api";



export const EditReporting = () => {
   const { state } = useLocation();
   
   const [error, setError] = useState(null);
   const [selectedFile, setSelectedFile] = useState(null);
   
   const {data, eventLoading} = useLoadingData(AdminApi.updateReports, true);
   const navigate = useNavigate();

   useEffect(() => {
      data?.code === 201 ? navigate("/admin/reporting") : null;
   }, [navigate, data?.code]);

   const handleFileSelect = file => {
      setSelectedFile(file);
   };

   const handleFormSubmit = () => {
      const formData = new FormData();
      formData.append("reportURL", selectedFile);

      axios.post("reports/admin", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(response => {
          if (response.status === 201) {
            console.log("Звіт був успішно доданий:", response.data);
            
          } else {
            console.error("Помилка додавання звіту. Отримано неправильний статус відповіді:", response.status);
           
          }
        })
        .catch(error => {
          console.error("Помилка додавання звіту:", error);
          
        });
   };

   return (
      <section className="page-container page-container-reporting">
         <PageHeader title={"Редагувати звітність"} />
         <div className="edit-reporting-form-wrap">
            <FilesPicker
               selectedFile={selectedFile}
               setSelectedFile={handleFileSelect}
               filesType=".pdf"
               title="Файл"
               errors={error}
               setError={setError}
            />

            <div className="edit-reporting-btn">
               <button className="admin-button" onClick={handleFormSubmit}>
                  Внести зміни
               </button>
            </div>
         </div>
      </section>
   );
};
