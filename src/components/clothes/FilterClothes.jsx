import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useClothes } from "../../contexts/ClothesContextProvider";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useClothes();

  return (
    <FormControl style={{ marginLeft: "50%" }}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="all"
        onChange={(e) => fetchByParams("type", e.target.value)}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="men" control={<Radio />} label="Men" />
        <FormControlLabel value="women" control={<Radio />} label="Women" />
        <FormControlLabel value="kids" control={<Radio />} label="Kids" />
      </RadioGroup>
    </FormControl>
  );
}



// import * as React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import { useCourses } from "../../contesxts/CoursesContextProvider";

// export default function ControlledRadioButtonsGroup() {
//   const { fetchByParams } = useCourses();

//   return (
//     <FormControl style={{marginLeft: '1%', display: 'flex', }}>
//       <RadioGroup
//         aria-labelledby="demo-controlled-radio-buttons-group"
//         name="controlled-radio-buttons-group"
//         defaultValue="maxprice"
//         onChange={(e) => fetchByParams("price", e.target.value)}
//       >
//         <FormControlLabel value="maxprice" control={<Radio />} label="max Price" />
//         <FormControlLabel value="minPrice" control={<Radio />} label="min Price" />
//       </RadioGroup>
//     </FormControl>
//   );
// }
