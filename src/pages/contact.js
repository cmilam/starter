import React from 'react'
import { graphql } from 'gatsby';
import { formium } from '../lib/formium';
import { defaultComponents, FormiumForm } from '@formium/react';
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea as ChakraTextarea,
    Button as ChakraButton,
    Container
  } from "@chakra-ui/react"

function TextInput(props){
    const {id,label,description,...rest} = props
    return(
    <FormControl id={id}>
        <FormLabel>{label}</FormLabel>
        <Input {...rest}  />
        <FormHelperText>{description}</FormHelperText>
    </FormControl>

    )
}

function Textarea(props){
    const {id,label,description,...rest} = props
    return(
    <FormControl id={id}>
        <FormLabel>{label}</FormLabel>
        <ChakraTextarea {...rest}  />
        <FormHelperText>{description}</FormHelperText>
    </FormControl>

    )
}

function SubmitButton(props){
    return(
    <ChakraButton type='submit' colorScheme="blue" {...props}/>
    )
}

const myComponents={
    ...defaultComponents,
    TextInput,
    Textarea,
    SubmitButton
}

const AudioCoreForm =({data})=>{
    return(
        <Container>
        <FormiumForm
          data={data.formiumForm}
          components={myComponents}
          onSubmit={async (values) => {
            // Send form values to Formium
            await formium.submitForm('audiocore', values);
            alert('Success');
          }}
        />
        </Container>
    )
}

export const query = graphql`
  {
    formiumForm(slug: { eq: "audiocore" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;


export default AudioCoreForm