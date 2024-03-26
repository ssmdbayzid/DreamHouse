import * as Yup from  "yup"

export  const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(20).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password don't match")
})


export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter email"),
    password: Yup.string().min(6).required("Please enter password")
})

export const propertySchema = Yup.object({
    property_name: Yup.string().required('Property name is required'),
    agent_name: Yup.string().required('Agent name is required'),
    property_type: Yup.string().required('Property type is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    postfix: Yup.string().required('Postfix is required'),
    bedrooms: Yup.number().required('Number of bedrooms is required').positive('Number of bedrooms must be positive'),
    kitchen: Yup.number().required('Number of kitchens is required').positive('Number of kitchens must be positive'),
    'ware_house': Yup.number().required('Number of warehouses is required').positive('Number of warehouses must be positive'),
    property_area: Yup.number().required('Area is required').positive('Area must be positive'),
    
    // city 
    
    city: Yup.string().required('City is required'),
    post_office: Yup.string().required('Post Office is required'),
    post_code: Yup.number().required('Post code is required'),
    police_station: Yup.string().required('Polcie Station is required'),
    country: Yup.string().required('Country is required'),
    features: Yup.array().of(Yup.string()).min(6, "Minimum 6 featured is required").required("Minimum 6 featured is required")
  });