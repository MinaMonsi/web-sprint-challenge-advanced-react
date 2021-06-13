// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initValue) => {
    const [values, setValues] = useState(initValue);

    const handleChanges = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
      };

      const clearForm = e => {
          e.preventDefault();
          setValues(initValue);
      }

      return [values, setValues, handleChanges, clearForm]
}