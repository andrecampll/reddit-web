import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small" >
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({values, handleChange, isSubmitting}) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              placeholder="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />
            </Box>
            <Button
              type="submit"
              variantColor="teal"
              mt={4}
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Register;
