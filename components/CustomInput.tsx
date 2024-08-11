import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'
import { z } from 'zod'


const formSchema = authFormSchema("sign-up")

type Props = {
    control : Control<z.infer<typeof formSchema>>
    name : FieldPath<z.infer<typeof formSchema>>,
    label : string,
    placeholder : string
}

const CustomInput = ({control, name, label, placeholder}: Props) => {
  return (
    <FormField
        key={name}
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>{label}</FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input
                            id={name}
                            placeholder={placeholder}
                            className='input-class'
                            type={ name === "password" ? "password" :  "text"}
                            aria-describedby={`${name}-form-item-description`}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage className='form-message mt-2'/>
                </div>
            </div>
        )}
    />
  )
}

export default CustomInput