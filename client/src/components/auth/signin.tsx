import { useEffect } from "react";
import { Box, Input, Button, Text, Flex } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { loginAsUser, signUpAsUser } from "dataHandler";
import { IUser } from "types";

type Inputs = {
  // username: string;
  email: string;
  password: string;
};

function Auth() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const loginMutation = useMutation((user: IUser) => loginAsUser(user));
  const signupMutation = useMutation((user: IUser) => signUpAsUser(user));

  const onSubmit = (data: Inputs, isFrom: string): void => {
    console.log("data : ", data);
    if (isFrom === "login") {
      loginMutation.mutate(data);
    } else {
      signupMutation.mutate(data);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      window.location.replace("/");
    }
  }, [isSubmitSuccessful]);

  // TODO: convert this to a single form so it can accomodate to username field
  return (
    <Box width="xs" marginLeft="auto" marginRight="auto" mt={8}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <Text>Username : </Text>
      <Input
        defaultValue=""
        type="name"
        placeholder="Vignesh Hariharan"
        title="name"
        {...register("username", { required: true })}
        isRequired
      /> */}

      {/* register your input into the hook by invoking the "register" function */}
      <Text>Email : </Text>
      <Input
        defaultValue=""
        type="email"
        placeholder="vigneshfdev@gmail.com"
        title="Email"
        {...register("email", { required: true })}
        isRequired
      />

      <Text mt={4}>Password : </Text>

      {/* include validation with required or other standard HTML validation rules */}
      <Input
        type="password"
        {...register("password", { required: true })}
        isRequired
        placeholder="********"
      />
      {/* errors will return when field validation fails  */}
      {errors.email || (errors.password && <span>This field is required</span>)}

      <Box mt={6}>
        <Button
          title="login"
          appearance="button"
          alignItems="center"
          onClick={handleSubmit((data, event) => {
            onSubmit(data, "login");
          })}
          mr="auto"
          w="100%"
        >
          LOGIN
        </Button>

        <Text style={{ textAlign: "center" }} mt={2}>
          or
        </Text>

        <Button
          title="Sign up"
          appearance="button"
          onClick={handleSubmit((data, event) => {
            onSubmit(data, "signup");
          })}
          w="100%"
          mt={2}
          variant="outline"
        >
          SIGN UP
        </Button>
      </Box>
    </Box>
  );
}

export default Auth;
