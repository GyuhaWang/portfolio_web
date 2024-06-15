
import { contactData } from "@/data/contactData";

import Image from "next/image";
import { ReactElement, useEffect } from "react";

type Inputs = {
  reason:string,
  name: string,
  content: string,
  
};
const Contact = () => {


// const ContactFormSelect = ({name, control, menuItems}:{name:string, control:Control<Inputs,any> ,menuItems:string[]}) => {
// return <Controller
// name="reason"
// defaultValue={menuItems[menuItems.length-1]}
// control={control}
// render={({ field }) => (
//   <Select css={css`background-color:white`} fullWidth {...field} defaultValue="etc">
//     {menuItems.map((item,index)=>  <MenuItem key={index} value={item}>{item}</MenuItem>)}
//   </Select>
// )}
// />
// }
// const ContactForm = ({onSubmit, control}: {onSubmit: () => void, control:Control<Inputs,any> }) => {
//   return (
//     <form onSubmit={onSubmit} css={css`
//       display: flex;
//       flex-direction: column;
//       width: 100%;
//       justify-content: space-between;
//       align-items: start;
//       border: 2px solid white;
//       border-radius: 8px;
//       margin: 2rem;
//       padding: 2rem;
//       gap: 2rem;
  
//     `}>
//       <div css={css`
//       display:flex;
//       flex-direction:column;
//       width:100%;
//       gap:0.5rem;
//       `}> <label css={css`color: white;`}>문의 종류</label>
//       <ContactFormSelect name="reason" control={control} menuItems={['채용','포트폴리오 피드백','기타']}/>
//       <label css={css`color: white;`}>이름</label>
//       <Controller
//         name="name"
//         control={control}
//         defaultValue=""
//         render={({ field }) => (
//           <TextField  css={css`background-color:white; border-radius:8px`}{...field} fullWidth label="이름 또는 회사명을 입력해주세요" margin="normal" variant="filled" color="success" />
//         )}
//       />

//       <label css={css`color: white;`}>문의 내용</label>
//       <Controller
//         name="content"
//         defaultValue=""
//         control={control}
//         render={({ field }) => (
//           <TextField css={css`background-color:white; border-radius:8px`}{...field} fullWidth multiline rows={6} label="문의 내용을 입력해주세요" variant="filled" color="success" />
//         )}
//       />
// </div>
     
//       <Button css={css`
//       background-color:white;
//       color: black; 
//       font-weight:bold
//       `} fullWidth variant="contained" color="primary" onClick={onSubmit}>
//         send mail
//       </Button>
//     </form>
//   );
// }
const ContactInfo = () => {
  return (
    <div className="contactInfoBox">
      {contactData.map((data, index) => (
        <div key={index} >
      
          <span > <Image src={data.icon} height={20} width={20} alt={data.icon} /> {data.title}</span>
          
          <a href={data.content} target="_blank" >
            <h3>{data.content}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
   
    return <div className="contactSectionLayout"> 

    <h1 className="header" >contact </h1>
    <div className="contactInfoLayout" >
    <ContactInfo/>
    
    </div>
    </div>
}

export default Contact;