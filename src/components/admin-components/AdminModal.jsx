import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import iconx from "../../assets/images/iconx.svg";

export const AdminModal = ({ onClose, removeItem, success, elementType }) => {
   const navigate = useNavigate();
   useEffect(() => {
      if (success) {
         navigate(-1);
      }
   }, [success]);
   const handleCloseClick = () => {
      onClose();
   };
   const handlerRemove = () => {
      removeItem();
   };

   return (
      <div className="admin-modal">
         <div className="admin-modal-window">
            <div className="admin-modal-button-x">
               <button className="admin-button-close" onClick={handleCloseClick}>
                  <img src={iconx} className="iconx-img" alt="Закрити" />
               </button>
            </div>
            <div className="admin-modal-text">
               <h2>
                  Ви впевнені, що хочете
                  <br />
                  видалити {elementType}?
               </h2>

               <div className="admin-modal-button">
                  <button className="admin-modal-no" onClick={handleCloseClick}>
                     <h4>Ні</h4>
                  </button>
                  <button onClick={handlerRemove} className="admin-modal-yes">
                     <h4>Так</h4>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
