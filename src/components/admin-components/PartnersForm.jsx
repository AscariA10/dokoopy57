import { useEffect, useState } from "react";

import { FilesPicker } from "./formElement/FilesPicker";
import { InputSm } from "./formElement/InputSm";
export const PartnersForm = ({
   lgLiable,
   smLiable,
   isEdit,
   nameButton,
   submitClick = () => {},
   defaultInfo,
}) => {
   const [smInput, setSmInput] = useState("");
   const [lgInput, setLgInput] = useState("");
   const [selectedFile, setSelectedFile] = useState(() => null);
   useEffect(() => {
      if (defaultInfo) {
         setSmInput(defaultInfo.title);
         setLgInput(defaultInfo.description);
         setSelectedFile(defaultInfo.imageURL);
      }
   }, [defaultInfo]);
   const submitClickEvent = e => {
      e.preventDefault();
      if (smInput.length || lgInput.length || selectedFile) {
         submitClick({
            smInput,
            lgInput,
            selectedFile,
         });
      }
   };
   return (
      <div className="form-container">
         <form onSubmit={submitClickEvent} className="added-form">
            <div className="partner-file-blok">
               <FilesPicker
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                  defaultInfo={defaultInfo}
                  isEdit={isEdit}
               />
            </div>
            <div className="form-input-container">
               <InputSm value={smInput} setSmInput={setSmInput} label={smLiable} />

               <InputSm setSmInput={setLgInput} label={lgLiable} value={lgInput} isLink={true} />

               <div className="form-button-blok">
                  <button className="admin-button">{nameButton}</button>
               </div>
            </div>
         </form>
      </div>
   );
};