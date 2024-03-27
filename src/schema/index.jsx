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
    title: Yup.string().required('Title name is required'),
    agent_name: Yup.string().required('Agent name is required'),
    property_type: Yup.string().required('Property type is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    rent_duration: Yup.string().required('Rent duration is required'),
    bedrooms: Yup.number().required('Number of bedrooms is required').positive('Number of bedrooms must be positive'),
    kitchen: Yup.number().required('Number of kitchens is required').positive('Number of kitchens must be positive'),
    garage: Yup.number().required('Number of garage is required').positive('Number of garage must be positive'),
    description: Yup.string().min(100, "Description minimum 100 character ").required('Description is required'),
    property_area: Yup.number().required('Area is required').positive('Area must be positive'),
    
    // city 
    
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    post_office: Yup.string().required('Post Office is required'),
    post_code: Yup.number().required('Post code is required'),
    police_station: Yup.string().required('Polcie Station is required'),
    country: Yup.string().required('Country is required'),
    features: Yup.array().of(Yup.string()).min(6, "Minimum 6 featured is required").required("Minimum 6 featured is required"),    
  });


  export const reviewSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    rating: Yup.number().required('Rating is required'),
    review: Yup.string().required('Review is required')
  })

  export const bookingSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().min(5, 'Phone number must be at least 5 characters').required('Phone number is required'),
    date: Yup.date().required('Date is required')
  })