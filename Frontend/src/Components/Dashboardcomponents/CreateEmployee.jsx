import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Select,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const CreateEmployee = () => {
  const [value, setValue] = useState("1");
  const toast = useToast();
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [designtion, setDesignation] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [img, setImg] = useState("");
  const navigate=useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() == "" || email.trim() == "") {
      toast({
        title: "enter all the details.",
        description: "We've created your account for you.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      console.log(value);
      navigate("/Employee");
    }

  };

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"94.5vh"}
        gap={"30px"}
      >
        <Box width={"600px"}>
          <Text mb={"20px"} fontSize={"35px"} fontWeight={"700"}>
            CreateEmployee
          </Text>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Name</Text>
            <Input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              borderColor={"black.700"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Email</Text>
            <Input
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              borderColor={"black.700"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Mobile</Text>
            <Input
              type="text"
              placeholder="Enter your Mobile number"
              onChange={(e) => setMobileNo(e.target.value)}
              borderColor={"black.700"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Designation</Text>
            <Select
              placeholder="Select option"
              borderColor={"black.700"}
              onChange={(e) => {if (e.target.value == "option1") setDesignation("HR");
              if (e.target.value == "option2") setDesignation("Manager");
              if (e.target.value == "option3") setDesignation("Sales");}}
            >
              <option value="option1">HR</option>
              <option value="option2">Manager</option>
              <option value="option3">Sales</option>
            </Select>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Gender</Text>
            <RadioGroup onChange={setValue} value={value}
            
            >
              <Stack direction="row">
                <Radio value="1">Male</Radio>
                <Radio value="2">Female</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Course</Text>
            <Stack spacing={5} direction="row">
              <Checkbox colorScheme="green">MCA</Checkbox>
              <Checkbox colorScheme="green">BCA</Checkbox>
              <Checkbox colorScheme="green">BSC</Checkbox>
            </Stack>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Img Upload</Text>
            <input type="file" border={"none"} display={"flex"} />
          </Box>
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            colorScheme="green"
            justifySelf={"left"}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CreateEmployee;
